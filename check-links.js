// Checks every internal href/src in the generated pages. Run: node check-links.js
const fs = require("fs"), p = require("path");
const skip = [".git", "assets", "data", "docs", "node_modules"];
const walk = d => fs.readdirSync(d, { withFileTypes: true }).flatMap(e =>
  e.isDirectory() ? (skip.includes(e.name) ? [] : walk(p.join(d, e.name))) : e.name === "index.html" ? [p.join(d, e.name)] : []);
const files = walk(".");
let bad = 0, n = 0;
for (const f of files) {
  const h = fs.readFileSync(f, "utf8"), dir = p.dirname(f);
  for (const m of h.matchAll(/(?:href|src)="([^"#?]+)[^"]*"/g)) {
    const u = m[1];
    if (/^(https?:|tel:|mailto:|\/\/)/.test(u)) continue;
    n++;
    let t = p.join(dir, u);
    if (fs.existsSync(t) && fs.statSync(t).isDirectory()) t = p.join(t, "index.html");
    if (!fs.existsSync(t)) { bad++; console.log("BROKEN", f, u); }
  }
}
console.log(files.length + " pages, " + n + " links, " + bad + " broken");
