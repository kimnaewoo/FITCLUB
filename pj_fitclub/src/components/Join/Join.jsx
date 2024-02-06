import './join.css';
import React, { useRef } from 'react';

const Join = () => {
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form className="email-container">
          <input type="email" name="user_email" placeholder="이메일을 입력하세요" />
          <button className="btn btn-j">Continue</button>
        </form>
      </div>
    </div>
  );
};
export default Join;
