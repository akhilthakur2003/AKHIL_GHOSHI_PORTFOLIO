

import "./HeroImg2Styles.css";
import React, { Component } from "react";
// recieving the props in function based components
// as an object and using it in our child component

// function HeroImg2(pro) {
//         return (
//           <div className="hero-img">
//              <div className="heading">
//               <h1>{pro.heading} </h1>
//               <p>{pro.text} </p>
//              </div>
//           </div>
//         );
// }
// export default HeroImg2


// using the class based components 
// and using the this pointer to get the props 
class HeroImg2 extends Component {
    render()
    {
        return (
          <div className="hero-img">
             <div className="heading">
              <h1>{this.props.heading} </h1>
              <p>{this.props.text} </p>
             </div>
          </div>
        );
    }
}
export default HeroImg2






// LEARNT ABOUT THE PROPS AND I KNOW HOW TO USE THEM 
// now we will create the props of the heading and the
// text to pass it to different components and use them 