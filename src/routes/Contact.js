import React from "react";

import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import HeroImg2 from "../components/HeroImg2.js";
import Form from "../components/Form.js";


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="CONTACT PAGE" text="Feel Free to Contact me" />
      <Form/>
      <Footer/>

    </div>
  )
}
export default Contact