// functional component
import React from "react";
import Navbar from "../components/Navbar.js";
import HeroImg from "../components/HeroImg.js";
import Footer from "../components/Footer.js";


const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Footer/>
      
    </div>
  )
}
export default Home