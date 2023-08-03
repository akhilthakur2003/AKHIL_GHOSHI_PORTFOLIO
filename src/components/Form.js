
import "./FormStyle.css";
import {  useRef, useState } from "react";
import React from 'react';
import emailjs from "emailjs-com";
const Form = () => {
    
    const [done, setDone] = useState(false);
    const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lqkezyk",
        "template_vtma0be",
        formRef.current,
        "UJYfDVArfZlEGpc9j"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

    return (
        <div className="form">
            <form action="form" className="form-container" ref={formRef}  onSubmit={handleSubmit}>
                <div className="data">
                    <label htmlFor="">Name</label>
                    <input type="text" className="input-text" placeholder="enter your name" name="Username"></input>
                </div>
                <div className="data">
                    <label htmlFor="">Email</label>
                    <input type="email" className="input-text" placeholder="enter your email" name="UserEmail"></input>

                </div>
                <div className="data">
                    <label htmlFor="">Phone Number</label>
                    <input type="phone" className="input-text" placeholder="enter your Mobile-No." name="message" ></input>

                </div>
                <button className="btn btn1"> Submit</button>
                {done && "Thank you..."}

            </form>
        </div>
    )
}
export default Form