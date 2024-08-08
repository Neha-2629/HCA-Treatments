import React from 'react';
import logo from '../images/hca-logo.png';
 import { FaFacebookF, FaInstagram, FaTwitter, FaBloggerB } from "react-icons/fa";

const Footer = () => {
  return(
    <footer className='footer'>
      <div className='footer-container'>
        <div className='container'>
          <div className='hca'>
            <img className="" src={logo} alt="hca-logo" title="hca-logo" />
            <div className='address'> 
              <p>HCA Houston Healthcare </p>
              <p>3737 Buffalo Speedway</p>
              <p>Suite 1400</p>
              <p>Houston, TX 77098</p>
            </div>
            
          </div>

          <div className='about-us-section'>
            <ul>
              <li>About Us</li>
              <li><a href="#">About HCA Houston</a></li>
              <li><a href="#">Phone Directory</a></li>
              <li><a href="#">Maps & Directions</a></li>
              <li><a href="#">Media Center</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
      
          <div className='follow'>
            <p>Follow Us</p>
            <div className='social-media'>
              <span><FaBloggerB size={25} /></span>
              <span><FaFacebookF size={25} /></span>
              <span><FaInstagram size={25} /></span>
              <span><FaTwitter size={25} /></span>
            </div>
          </div>
         </div>

        <div className='footer-container-2'>
          <div className='container-2'>
            <div className='copyright'>
              <p>Copyright 1999-2021 <a href="#">C-HCA, Inc.</a>; All rights reserved.</p>
            </div>
            <div className='footer-links'>
              <div className='top-links'>
                <a href="#">Notice of Privacy Practices </a>
                <a href="#">Terms & Conditions </a>
                <a href="#">Notice at Collection </a>
                <a href="#">Privacy Policy </a>
                <a href="#">Do Not Sell My Personal Information </a>
              </div>
              <div className='bottom-links'>
                <a href="#">Social Media Policy </a>
                <a href="#">Acceptable Use Policy </a>
                <a href="#">HCA Nondiscrimination Notice </a>
                <a href="#">Accessibility </a>
                <a href="#">Responsible Disclosure</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
