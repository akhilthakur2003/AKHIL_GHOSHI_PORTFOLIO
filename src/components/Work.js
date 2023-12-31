

import React from "react";
import "./WorkCardStyle.css";
// import pro1 from "../assets/project1.png";
// import { NavLink } from 'react-router-dom'
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">
            Recent Projects
        </h1>
        <div className="project-container">
          {WorkCardData.map((val, ind) =>{
            return(
                <WorkCard
                key={ind}
                img_src={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                src={val.src}
                />
            )
          })}
        </div>
    </div>
  )
};
export default Work;