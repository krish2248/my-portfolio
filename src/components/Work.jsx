/**
 * @copyright 2025 krishsoni
 * @license Apache-2.0
 */


/**
 * Components
 */
import ProjectCard from "./ProjectCard";


const works = [
  {
    
    title: 'Dice-App',
    tags: ['Lost your dice? No worries we\'ve got you covered! 🎲', 'API'],
    projectLink: ''
  },
  {

    title: 'Movie Library',
    tags: ['A platform for Cinephiles to review/organise their favorites', 'HTML-CSS-JavaScript'],
    projectLink: ''
  },
  {
   
    title: 'Expense/Progress Tracker',
    tags: ['Personalized expense/progress tracker with cloud storage', 'HTML-CSS-JavaScript'],
    projectLink: ''
  },
  {

    title: 'Calorie-BMI Calculator',
    tags: ['Web-design', 'HTML-CSS-JavaScript'],
    projectLink: ''
  },
  {
    title: 'Snake-Game',
    tags: ['Class snakes game', 'HTML-CSS-JavaScript'],
    projectLink: ''
  },
  {
    title: 'Book Library',
    tags: ['A platform for readers to review/organize their Favorites.', 'HTML-CSS-JavaScript'],
    projectLink: ''
  },
];


const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">

        <h2 className="headline-2 mb-8 reveal-up">
          My Work
        </h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Work