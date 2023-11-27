import Header from './Header';
import heart from '../assets/heart.png';
import heroImage from '../assets/hero_image.png';
import heroImageBack from '../assets/hero_image_back.png';
import calories from '../assets/calories.png';

import {motion} from 'framer-motion';

const Hero = () => {

  const transition = {type: 'spring', duration: 3}
  const mobile = window.innerWidth <= 768 ? true: false;


  return (
    <main className='hero'>
      {/* Blur Div */}
      <div className="blur hero-blur"></div>
      {/* Creating the left side of the hero component */}
      <div className="left-hero">
        <Header />

        {/* The best ad component with animation */}
        <div className="the-best-ad">

        {/* Adding Animation To The Hero Component */}
          <motion.div
          initial = {{left: mobile ? "178px" : "238px"}}
          whileInView = {{left: '8px'}}
          transition = {{...transition, type: 'tween'}}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

      {/* Hero Heading */}
      <div className="hero-text">
        <div>
          <span className='stroke-text'>Shape </span>
          <span>Your</span>
        </div>
        <div>
          <span>Ideal Body</span>
        </div>

        <div className='description'>
          <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
        </div>
      </div>

      {/* Figures stats */}
      <div className="figures">
        <div>
          <span>+140</span>
          <span>Expert Coaches</span>
        </div>
        <div>
          <span>+978</span>
          <span>Members Joined</span>
        </div>
        <div>
          <span>+50</span>
          <span>Fitness Program</span>
        </div>
      </div>

      {/* Hero Buttons */}
      <div className="hero-btns">
        <button className='btn filled'>Get Started</button>
        <button className='btn transparent'>Learn More</button>
      </div>
      </div>


      <div className="right-hero">
        <button className="btn">Join Now</button>

        <motion.div initial={{right: '-1rem'}} whileInView={{right: '4rem'}} transition={transition} className="heart-rate">
          <img src={heart} alt="Heart image" />
          <span>Heart Rate </span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img src={heroImage} className='hero-image' alt="Hero Image" />
        <motion.img initial={{right: '11rem'}} whileInView={{right: '20rem'}} transition={transition} src={heroImageBack} className='hero-image-back' alt="Hero Image Back" />

        {/* Calories Component */}
        <motion.div initial={{right: '37rem'}} whileInView={{right: '28rem'}} transition={transition} className="calories">
          <img src={calories} alt="Calories Image" />
          <div className="info">
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default Hero