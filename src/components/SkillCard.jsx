/**
 * @copyright 2025 krishsoni
 * @license Apache-2.0
 */


/**
 * Node modules
 */
import PropTypes from "prop-types";


const SkillCard = ({
  label,
  desc,
  classes
}) => {
  return (
    <div className={'flex items-center gap-3 ring-2 ring-inset ring-sky-100 rounded-2xl p-3 hover:bg-sky-200 transition-colors group ' + classes}>
      <div className="bg-sky-100 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-sky-200 transition-colors">
        {/* Placeholder for image */}
      </div>

      <div>
        <h3>{label}</h3>

        <p className="text-black text-bold">
          {desc}
        </p>
      </div>
    </div>
  )
}

SkillCard.propTypes = {

  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string
}

export default SkillCard