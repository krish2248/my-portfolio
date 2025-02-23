/**
 * @copyright 2025 krishsoni
 * @license Apache-2.0
 */


/**
 * Components
 */
import SkillCard from "./SkillCard";


const skillItem = [
  {
    label: 'HTML5',
    desc: 'User Interface'
  },
  {
    label: 'CSS3',
    desc: 'Designing'
  },
  {
    label: 'JavaScript',
    desc: 'Interaction'
  },
  {
    label: 'React.js',
    desc: 'Framework'
  },
  {
    label: 'TailwindCSS',
    desc: 'Framework'
  },
  {
    label: 'C',
    desc: 'Programming Language'
  },
  {
    label: 'Astro.js',
    desc: 'Framework'
  },
  {
    label: 'GitHub',
    desc: 'Tool'
  },{
    label: 'Notion',
    desc: 'Tool'
  }

];


const Skill = () => {
  return (
    <section className="section">
      <div className="container">

        <h2 className="headline-2 reveal-up">
          Essential Tools & Technologies
        </h2>

        <p className="text-black mt-3 mb-8 max-w-[60ch] reveal-up">
        I use to build exceptional, high-performing websites & applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {
            skillItem.map(({ imgSrc, label, desc }, key) => (
              <SkillCard
                key={key}
                imgSrc={imgSrc}
                label={label}
                desc={desc}
                classes="reveal-up"
              />
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Skill