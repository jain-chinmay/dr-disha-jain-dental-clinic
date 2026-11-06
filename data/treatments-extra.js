// Added after confirmation that Dr. Jain offers these. Same schema as treatments.js.
module.exports = [
{
  slug: "kids-dentistry", name: "Kids' dentistry", group: "kids", icon: "kid",
  short: "Gentle check-ups and care that help children feel at ease.",
  summary: "Children's teeth need regular care and a calm first impression of the dentist. We take time with young patients, explain things simply and focus on prevention.",
  what: ["Baby teeth matter. They hold space for adult teeth, help children chew and speak, and decay in them can cause pain and infection. Early, regular visits catch problems while they are small.", "A good first experience also builds trust, so children grow up comfortable with dental care rather than afraid of it."],
  who: ["A child's first dental visit, ideally around the first birthday or when the first tooth appears", "Dark spots or holes in baby teeth", "Complaints of toothache or sensitivity", "Thumb-sucking or other habits affecting the teeth", "Regular six-monthly check-ups"],
  steps: ["A gentle introduction and a chat with the child and parent", "A careful check of teeth, gums and bite", "Cleaning, and fluoride or sealants where suitable", "Treatment of any cavities, explained in child-friendly words", "Home-care advice for the parents, including brushing and diet"],
  benefits: [["Prevention first", "Fluoride and sealants help protect teeth from decay."], ["Calm approach", "Time is taken so children feel safe."], ["Protects adult teeth", "Healthy baby teeth guide the permanent ones."], ["Parent guidance", "Simple advice on brushing, snacks and habits."]],
  aftercare: ["Supervise brushing twice a day until about age 8", "Use a pea-sized amount of fluoride toothpaste as advised", "Limit sugary snacks and drinks between meals", "Avoid bottle feeding at night after teeth appear", "Keep regular check-up visits"],
  cost: ["The child's age and cooperation", "Whether only a check-up or treatment is needed", "Number of teeth treated", "Preventive treatments such as sealants"],
  faqs: [["When should my child first see a dentist?", "Around the first birthday, or when the first teeth come in. Early visits are usually short and about getting comfortable."], ["Do baby teeth really need fillings?", "Yes, if they are decayed. Untreated decay can cause pain, infection and affect the adult teeth coming through."], ["My child is scared. What should I do?", "Tell us beforehand. We go slowly, explain each step and never rush. A relaxed parent also helps."], ["Is fluoride safe for children?", "In the right amount, yes. We will advise the correct toothpaste amount for your child's age."]],
  related: ["dental-fillings", "scaling-and-polishing", "tooth-extraction"]
},
{
  slug: "braces", name: "Braces", group: "ortho", icon: "braces",
  short: "Straighten crooked or crowded teeth for a healthier bite and smile.",
  summary: "Braces gently move teeth into better positions over time. They help with crowding, gaps and bite problems, and make teeth easier to clean.",
  what: ["Braces use brackets and wires that apply light, steady pressure to move teeth gradually. Metal braces are the most common; tooth-coloured ceramic braces are a less visible option.", "Treatment length varies from person to person, often one to two years. Dr. Jain will examine you, explain what is possible and the likely timeline before you decide."],
  who: ["Crowded or overlapping teeth", "Gaps between teeth", "Teeth that stick out or a bite that does not meet properly", "Teenagers and adults who want straighter teeth", "Difficulty cleaning because of crooked teeth"],
  steps: ["Examination, X-rays and photographs", "Discussion of options, timeline and cost", "Treating any decay or gum problems first", "Fitting the braces", "Regular adjustment visits, usually every few weeks", "Removing the braces and fitting a retainer"],
  benefits: [["Straighter teeth", "A more even smile."], ["Better bite", "Teeth meet more comfortably."], ["Easier cleaning", "Straighter teeth are easier to brush and floss."], ["Suits teens and adults", "Options for different ages and needs."]],
  aftercare: ["Brush after every meal and clean around the brackets", "Avoid hard, sticky and chewy food", "Attend every adjustment visit", "Wear your retainer as advised after treatment", "Call us if a wire or bracket comes loose"],
  cost: ["Type of braces chosen", "Complexity and length of treatment", "Whether extractions or other treatment are needed first", "Retainers and follow-up"],
  faqs: [["How long will I need braces?", "It depends on your teeth. Many people wear braces for one to two years. We will give an estimate after the examination."], ["Do braces hurt?", "Teeth can feel sore for a few days after fitting and after adjustments. Soft food and simple pain relief help."], ["Can adults get braces?", "Yes. Adults can be treated as long as teeth and gums are healthy."], ["What happens after braces?", "A retainer holds your teeth in their new position. Wearing it as advised is important."]],
  related: ["clear-aligners", "scaling-and-polishing", "smile-design"]
},
{
  slug: "clear-aligners", name: "Clear aligners", group: "ortho", icon: "tray",
  short: "Nearly invisible, removable trays that gradually straighten teeth.",
  summary: "Clear aligners straighten teeth with a series of removable, transparent trays. They suit many adults who want a discreet alternative to braces.",
  what: ["Each aligner is made to fit your teeth and is changed every couple of weeks, moving the teeth a little at a time. You wear them most of the day and take them out to eat and clean your teeth.", "Aligners work well for mild to moderate crowding and gaps, but not every case. Dr. Jain will tell you honestly whether aligners or braces will give a better result."],
  who: ["Mild to moderate crowding or spacing", "Adults who want a discreet option", "People who want to remove the appliance to eat and clean", "Relapse after earlier orthodontic treatment"],
  steps: ["Examination, X-rays and photographs or scans", "Treatment plan, timeline and cost explained", "Aligners made to fit your teeth", "Fitting and instructions on wearing and care", "Reviews every few weeks as you move to new trays", "A retainer to keep the result"],
  benefits: [["Discreet", "Transparent and hard to notice."], ["Removable", "Eat normally and brush and floss as usual."], ["Comfortable", "Smooth trays with no wires or brackets."], ["Planned in stages", "You can see the steps of the treatment plan."]],
  aftercare: ["Wear aligners for the number of hours advised each day", "Remove them to eat and drink anything except water", "Clean the aligners and brush your teeth before putting them back", "Keep them in the case, not wrapped in a tissue", "Wear your retainer after treatment"],
  cost: ["Complexity and length of treatment", "Number of aligner trays", "Refinements needed", "Retainers"],
  faqs: [["Are aligners better than braces?", "Neither is better for everyone. Aligners are more discreet and removable; braces can handle more complex cases. We will advise what suits you."], ["How many hours a day must I wear them?", "Usually most of the day, around 20 to 22 hours. The results depend on wearing them consistently."], ["Will they be painful?", "You may feel pressure for a few days with each new tray, which is normal."], ["How long does treatment take?", "It depends on your teeth. Many cases take several months to a year or more."]],
  related: ["braces", "teeth-whitening", "smile-design"]
}
];
