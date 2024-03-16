// Instructor Page component
import './InsPage.css'
import React from "react";
import insimg from "../Images/InsImg.jpg"
import { useNavigate } from 'react-router-dom';

const Inspage = () => {
  const navi = useNavigate();
  const handlenavi = () => {
       navi('/Ins')
  };
  return (
    <div className="Ins-body">
      <img className="Insimg" src={insimg} alt="Instructor" />
      <div className="text-container">
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <h3 className='head-ins'>Become An Instructor</h3>
        <p>
        "A good teacher is like a candle - it consumes itself <br></br>to light the way for others." –Mustafa Kemal Atatürk.
        </p>
      </div>
      <button onClick={handlenavi}>Click Here To Apply</button>
    </div>
  );
};

export default Inspage;
