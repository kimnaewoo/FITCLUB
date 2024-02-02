import React from 'react';
import './hero.css';
import Header from '../Header/Header';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <br />
        {/* the best ad */}
        <div className="the-best-ad">
          <div></div>
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
            <span>+140</span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
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
        <div className="heart-rate">
          <img src={heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>

        {/* hero images */}
        <img src={hero_image} alt="hero_image" className="hero-image" />
        <img src={hero_image_back} alt="hero_image_back" className="hero-image-back" />
        {/* calories */}
        <div className="calories">
          <img src={calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
