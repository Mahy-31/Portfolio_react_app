import React from 'react';
import ContactBg from '../assets/contactbg.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact" style={{backgroundImage:`url(${ContactBg})`}}>
        <div className="infos">
            <h1>Contact me</h1>
            <form id="contact-form" method="POST">
                <label htmlFor="name">FULL NAME:</label>
                <input name="name" placeholder="Enter your full name" type="text" required/>
                <label htmlFor="email">MAIL ID:</label>
                <input name="email" placeholder="Enter your mail id" type="email" required/>
                <label htmlFor="number">MOBILE NUMBER:</label>
                <input name="number" placeholder="Enter your mobile number" type="number"/>
                <label htmlFor="message">Message:</label>
                <textarea rows="6" placeholder="Enter message..." name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
