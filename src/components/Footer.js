
import "./FooterStyles.css";
import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{
                            color: "white",
                            marginRight: "1.5rem"
                        }} />
                        <div>
                            <p> Village Bagron, Dist-Sagar</p>
                            <p> Madhya Pradesh</p>
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{
                            color: "white",
                            marginRight: "1.5rem"
                        }} />
                        <p>9753465418</p>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{
                            color: "white",
                            marginRight: "1.5rem"
                        }} />
                        <a href = "mailto: akhilsinghthakur17@gmail.com">akhilsinghthakur17@gmail.com</a>
                        {/* <a href="">akhilsinghthakur17@gmail.com</a> */}
                    </div>

                </div>
                <div className="right">
                    <h4>About the Company</h4>
                    <p>This is me Akhil Ghoshi. A final Year
                        Student persuing Btech in Electronics and Communication Engineering.
                        I enjoy discussing new projects and design challenges.
                    </p>
                    <div className="social">
                        <a href="https://www.linkedin.com/in/akhil-thakur17/" target="_blank">
                            <FaLinkedin size={30} style={{
                                color: "white",
                                marginRight: "1rem"
                            }} /></a>
                        <a href="https://www.facebook.com/akhil.thakur.3551/" target="_blank">
                            <FaFacebook size={30} style={{
                                color: "white",
                                marginRight: "1rem"
                            }} />
                        </a>
                        <a href="https://www.instagram.com/akhil_thakur_17/" target="_blank">
                            <FaInstagram size={30} style={{
                                color: "white",
                                marginRight: "1rem"
                            }} />
                        </a>
                        <a href="https://twitter.com/AkhilGhoshi" target="_blank">
                            <FaTwitter size={30} style={{
                                color: "white",
                                marginRight: "1rem"
                            }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer