import React from 'react';
import './hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';
import NumberCounter from 'number-counter';

import { motion } from 'framer-motion';
const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <br />
        {/* the best ad */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? '178px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>
        <br />
        {/* hero-heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>in here we will help you to shape and build your edeal body and live up your life to fullest</span>
          </div>
        </div>
        <br />
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay={'4'} preFix="+"></NumberCounter>
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay={'4'} preFix="+"></NumberCounter>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay={'3'} preFix="+"></NumberCounter>
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        <br />
        <br />
        {/* hero buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={{ transition, type: 'just' }}
          className="heart-rate"
        >
          <img src={heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="hero_image" className="hero-image" />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_image_back}
          alt="hero_image_back"
          className="hero-image-back"
        />
        {/* calories */}
        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
          className="calories"
        >
          <img src={calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
