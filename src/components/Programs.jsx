import {programsData} from '../data/programsData';
import rightArrow from '../assets/rightArrow.png'

const Programs = () => {
  return (
    <section className="programs" id="programs">
      {/* programs header */}
      <div className="programs-header">
        <span className="stroke-text">Explore our</span>
        <span>programs</span>
        <span className="stroke-text">to shape you</span>
      </div>

      {/* Programs Data Array */}
      <div className="programs-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={rightArrow} alt="right arrow" />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Programs