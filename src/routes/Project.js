import React from "react";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroImg2 from "../components/HeroImg2.js";
import PricingCards from "../components/PricingCards.js"
import Work from "../components/Work.js";


const Project = () => {
  return (
    <div >
      <Navbar/>
      <HeroImg2 heading="PROJECTS." text="some of my most recent work" />
      <Work/>
      {/* <PricingCards/> */}
      <Footer/>

    </div>
  )
}
export default Project