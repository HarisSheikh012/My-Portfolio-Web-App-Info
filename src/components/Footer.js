import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <footer>
    <div className='container grid grid-three-column'>
      <div className='footer-about'>
        <h3>Haris Sheikh</h3>
        <p style={{color:"white"}}>Welcome to my portfolio site, hope you will like it.</p>
      </div>
      <div className='footer-social'>
        <h3>Follow Us</h3>
        <div className='footer-social-icons'>
          <div><a href="https://www.youtube.com/" rel="noreferrer" target="_blank"><FaYoutube className='icons'/></a></div>
          <div><a href="https://www.instagram.com/" rel="noreferrer" target="_blank"><FaInstagram className='icons'/></a></div>
          <div><a href="https://www.facebook.com/" rel="noreferrer" target="_blank"><FaFacebook className='icons'/></a></div>
        </div>
      </div>
      <div className='contact'>
        <h3>Contact No</h3>
        <p style={{color:"white"}}>+923166861729</p>
      </div>
    </div>
    </footer>
  )
}
export default Footer;
