import React, {useState} from 'react';
import ContactBg from '../assets/contactbg.jpg';
import '../styles/Contact.css';
import axios from 'axios';

function Contact() {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [number,setNumber] = useState( )
  const [message,setMessage] = useState('')

  async function submit(e){
    e.preventDefault();

    try {
      await axios.post("https://localhost:3000/",{
        name,email,number,message
      })
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <div className="contact" style={{backgroundImage:`url(${ContactBg})`}}>
        <div className="infos">
            <h1>Contact me</h1>
            <form id="contact-form" action="POST">
                <label htmlFor="name">FULL NAME:</label>
                <input name="name" onChange={(e) => {setName(e.target.value)}} placeholder="Enter your full name" type="text" required/>
                <label htmlFor="email">MAIL ID:</label>
                <input name="email" onChange={(e) => {setEmail(e.target.value)}} placeholder="Enter your mail id" type="email" required/>
                <label htmlFor="number">MOBILE NUMBER:</label>
                <input name="number" onChange={(e) => {setNumber(e.target.value)}} placeholder="Enter your mobile number" type="number"/>
                <label htmlFor="message">Message:</label>
                <textarea rows="6" onChange={(e) => {setMessage(e.target.value)}} placeholder="Enter message..." name="message" required></textarea>
                <button type="submit" value="submit" onClick={submit}>Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
