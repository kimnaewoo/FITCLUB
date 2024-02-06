import React from 'react';
import './reasons.css';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>확실한 방법</span>
        <div>
          <span className="stroke-text">우리를&nbsp;</span>
          <span> 선택해야 하는 이유</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>140명 이상의 전문 코치들</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>전보다 달라진 스마트하고 빠르게 훈련하기</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>신규 회원을 위한 무료 소프트 프로그램</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>고객기준에 신뢰할 수 있는 파트너</span>
          </div>
        </div>
        <span style={{ color: 'var(--gray)', fontWeight: 'bold' }}>협찬 스폰서</span>
        <div className="partners">
          <img src={nb} alt="newbalacne" />
          <img src={adidas} alt="adidas" />
          <img src={nike} alt="nike" />
        </div>
      </div>
    </div>
  );
};
export default Reasons;
