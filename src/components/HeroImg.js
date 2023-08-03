
import "./HeroImgStyles.css" ;
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import ChangingData from "../components/ChangingData.js";

const HeroImg = () => {
    // const Tech_Stack=[
    //   "React Developer.",
    //   "Active Learner",
    //   "Tech Enthusiast",
    //   "CSS",
    //   "javaScript",
    //   "HTML",
    // ];

    // let n=Tech_Stack.length;
    // let i=0;
    // function func() {
    //   <h1>{ Tech_Stack.setInterval(inc ,1000) }</h1>
     
    //   return;
    // }
    // function inc(){
    //   i=(i+1)%n;
    // }
  return (
    <div className="hero" >
      <div className="mask">
      <img className="into-img"
      src={IntroImg} alt="IntroImg"/>
      </div>
      <div className="content">
        <p>HI, I'M A AKHIL GHOSHI.</p>
        <h1  >
          REACT DEVELOPER.
          <ChangingData/>
        </h1>
        <div >
        <Link to="/project" className="btn">projects</Link>
        <Link to="/contact" className="btn-light">Contact</Link>
        </div>
     
      </div>
     
    </div>
  )
}
export default HeroImg