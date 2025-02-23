/**
 * @copyright 2025 Krish-Soni
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: "Projects done",
    number: 5,
  },
  {
    label: "Experience",
    number: 1,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-sky-200 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-black mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Experiences
          </p>

          <p className="text-black">
          During my internship at INFOLABZ IT SERVICES PVT. LTD., I gained hands-on experience in &quot;mobile app development&quot; with a focus on &quot;Dart programming&quot; and the &quot;Flutter framework&quot;, also worked on &quot;JSON&quot; along with API fetching. 

 

          </p>

          <p className="text-black">
          <br/>This opportunity allowed me to: 

          </p>

          <p className="text-black"> <br/>- Master Dart &quot;object-oriented principles&quot;, enabling me to write clean, efficient, and maintainable code. 
          <br/>- Leverage Flutter tools to develop visually appealing and high-performing cross-platform apps for &quot;iOS and Android&quot;. 
          <br/>- Successfully complete real-world assignments, including a &quot;movie app landing page&quot; and a &quot;news app&quot;.</p>
          <br/>

          <div className="flex flex-wrap items-center gap-4 md:gap-7 mt-6">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl text-black">
                    {number}
                  </span>

                </div>

                <p className="text-bold text-black">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
