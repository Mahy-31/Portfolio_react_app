import React from "react";
import {Link} from 'react-router-dom';
import '../styles/Home.css';
import BannerImage from '../assets/homebg.jpg';
function Home() {
  return (
    <div className="home" style={{backgroundImage:`url(${BannerImage})`}}>
      <div className="headerContainer">
        <p>Hello there! This is</p>
        <h1>Mahalakshmi. R</h1>
        <p>A passionate Software developer</p>
        <Link to="https://drive.google.com/drive/folders/1-mStN70nXR_dAcvCbMGeAJHdiV8o2paP">
        <button>RESUME</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
