import reasonsImage1 from '../assets/image1.png';
import reasonsImage2 from '../assets/image2.png';
import reasonsImage3 from '../assets/image3.png';
import reasonsImage4 from '../assets/image4.png';
import nb from '../assets/nb.png';
import adidas from '../assets/adidas.png';
import nike from '../assets/nike.png';
import tick from '../assets/tick.png';

const Reasons = () => {
  return (
    <section className="reasons" id='whyUs'>
      {/* Left reasons */}
      <div className="left-reason">
        <img src={reasonsImage1} alt="reasons image" />
        <img src={reasonsImage2} alt="reasons image" />
        <img src={reasonsImage3} alt="reasons image" />
        <img src={reasonsImage4} alt="reasons image" />
      </div>

      {/* Right reasons */}
      <div className="right-reason">
        <span>some reasons</span>
        <div>
          <span className='stroke-text'>why</span>
          <span> choose us?</span>
        </div>

        <div className='details'>
          <div><img src={tick} alt=""></img><span>OVER 140+ EXPERT COACHS</span></div>
          <div><img src={tick} alt="" /><span>TRAIN SMARTER AND FASTER THAN BEFORE</span></div>
          <div><img src={tick} alt="" /><span>1 FREE PROGRAM FOR NEW MEMBER</span></div>
          <div><img src={tick} alt="" /><span>RELIABLE PARTNERS</span></div>
        </div>

        <span className='our-partner'>OUR PARTNERS</span>

        {/* Patners Images */}
        <div className="partners-holder">
          <img src={nb} alt="Partners Images" />
          <img src={adidas} alt="Partners Images" />
          <img src={nike} alt="Partners Images" />
        </div>
      </div>
    </section>
  )
}

export default Reasons;