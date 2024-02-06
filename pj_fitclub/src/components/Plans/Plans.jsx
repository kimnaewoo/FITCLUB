import React from 'react';
import './plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';
const Plans = () => {
  return (
    <div className="plans-container">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
      <div className="programs-header" style={{ gap: '2rem' }}>
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNY</span>
        <span className="stroke-text">NOW WITHUS</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price} 원</span>
            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature" key={i}>
                  <img src={whiteTick} alt="whiteTick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>상세정보 확인하기 -></span>
            </div>
            <button className="btn">결제하기</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
