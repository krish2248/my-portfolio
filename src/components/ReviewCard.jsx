/**
 * @copyright 2025 krishsoni
 * @license Apache-2.0
 */


import PropTypes from 'prop-types';


const ratings = new Array(5);
ratings.fill({
  icon: 'star',
  style: { fontVariationSettings: '"FILL" 1' }
});


const ReviewCard = ({
  content,
  name,
  company
}) => {
  return (
    <div className="bg-sky-200 p-5 rounded-xl min-w-[360px] flex flex-col lg:min-w-[450px]">

    
      <p className="text-black mb-10">
        {content}
      </p>

      <div className="flex items-center gap-2 mt-auto">
        <figure className="img-box rounded-lg">
         
        </figure>

        <div>
          <p>{name}</p>

          <p className="text-xl text-black tracking-wider">
            {company}
          </p>
        </div>
      </div>

    </div>
  )
}

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired
}


export default ReviewCard