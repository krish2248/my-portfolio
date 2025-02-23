/**
 * @copyright 2025 krishsoni
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import PropTypes from 'prop-types';


const ProjectCard = ({
  title,
  tags,
  projectLink,
  classes
}) => {
  return (
    <div className={"relative p-4 rounded-2xl bg-sky-200 hover:bg-sky-300 active:bg-sky-200 ring-1 ring-inset ring-sky-200 transition-colors " + classes}>

      <div className="flex items-center justify-between gap-4">

        <div>
          <h3 className="title-1 mb-3">
            {title}
          </h3>

          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                key={key}
                className="h-8 text-sm text-sky-100 bg-sky-800 grid items-center px-3 rounded-lg"
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-800 text-sky-100 shrink-0">
          <span
            className="material-symbols-rounded"
            aria-hidden="true"
          >
            arrow_outward
          </span>
        </div>

      </div>

      <a
        href={projectLink}
        target='_blank'
        className="absolute inset-0"
      ></a>

    </div>
  )
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  projectLink: PropTypes.string,
  classes: PropTypes.string
}

export default ProjectCard