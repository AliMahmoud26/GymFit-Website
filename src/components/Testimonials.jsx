import { useState } from 'react';
import {testimonialsData} from '../data/testimonialsData';
import rightArrow from '../assets/rightArrow.png';
import leftArrow from '../assets/leftArrow.png';
import {motion} from 'framer-motion';

const Testimonials = () => {

  const transition = {type: 'spring', duration: 3};

  const [selected, setSelected] = useState(0);

  const testimonialsLength = testimonialsData.length;

  return (
    <section className='testimonials' id='testimonials'>
      {/* Content of the left testimonials */}
      <div className="left-testimonials">
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>Say about us</span>
        <motion.span key={selected} initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: 100}} transition={transition}>
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span>{testimonialsData[selected].name}</span> {" "}
          - {testimonialsData[selected].status}
        </span>
      </div>

      {/* Content of the right testimonials */}
      <div className="right-testimonials">
        {/* Empty Divs */}
        <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{...transition, duration: 2}} className='first-div'></motion.div>
        <motion.div initial={{opacity: 0, x: 100}} whileInView={{opacity: 1, x: 0}} transition={{...transition, duration: 2}} className='second-div'></motion.div>

        <motion.img key={selected} initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -100}} transition={transition} src={testimonialsData[selected].image} alt="Testimonial Image" />

        <div className="arrows">
          <img 
          onClick={() => {
            selected === 0 ? 
            setSelected(testimonialsLength - 1) : setSelected((prev) => prev - 1);
          }}
          src={leftArrow} 
          alt="Left Arrow" />
          <img 
          onClick={() => {
            selected === testimonialsLength - 1 ?
            setSelected(0) :
            setSelected((prev) => prev + 1);
          }}
          src={rightArrow} 
          alt="Right Arrow" />
        </div>
      </div>
    </section>
  )
}

export default Testimonials