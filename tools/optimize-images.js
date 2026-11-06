// Converts assets/src/*.jpg to WebP (full size + 480px wide) in assets/.
// Needs sharp: install it somewhere outside the repo and run with NODE_PATH pointing at its node_modules.
//   NODE_PATH=/path/to/node_modules node tools/optimize-images.js
const fs = require("fs"), path = require("path");
const sharp = require("sharp");
const src = path.join(__dirname, "..", "assets", "src"), out = path.join(__dirname, "..", "assets");
(async () => {
  for (const f of fs.readdirSync(src).filter(f => /\.jpe?g$/i.test(f))) {
    const base = f.replace(/\.jpe?g$/i, "");
    const img = sharp(path.join(src, f));
    const meta = await img.metadata();
    await img.clone().webp({ quality: 78, effort: 6 }).toFile(path.join(out, base + ".webp"));
    await img.clone().resize({ width: 480 }).webp({ quality: 76, effort: 6 }).toFile(path.join(out, base + "-480.webp"));
    const kb = n => Math.round(fs.statSync(path.join(out, n)).size / 1024);
    console.log(`${base}: ${meta.width}x${meta.height}  jpg ${Math.round(fs.statSync(path.join(src, f)).size / 1024)} KB -> webp ${kb(base + ".webp")} KB, 480w ${kb(base + "-480.webp")} KB`);
  }
})();
