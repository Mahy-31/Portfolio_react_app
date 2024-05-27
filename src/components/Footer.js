import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import GithubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import '../styles/Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <Link to="https://www.instagram.com/mahhyy_31/"><InstagramIcon /></Link>
            <Link to="https://www.linkedin.com/in/mahalakshmi-r-60178520a/"><LinkedinIcon /></Link>
            <Link to="https://github.com/Mahy-31"><GithubIcon /></Link>
            <Link to="/contact"><MailIcon /></Link>

        </div>
    </div>
  )
}

export default Footer
