import React from 'react'
import './footer.css'
import footerlogo from '../../assets/logo.svg'
import facebook from '../../assets/facebook.svg'
import instagram from '../../assets/instagram.svg'
import tiktok from '../../assets/tiktok.svg'
import youtube from '../../assets/youtube.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-bar">
            <div className="bar-text1">
                <h1>Let's discuss making your interior like a dream place!</h1>
            </div>
            <div className="bar-text2">
                <p>Contact us below to work together to build your amazing interior</p>
                <button>Contact Us</button>
            </div>
        </div>
        <div className="footer-below">
            <div className="footer-logo">
                <img src={footerlogo} alt='' />
                <h1>One of the best furniture agency.</h1>
            </div>
            <div className="footer-contact">
                <p>Enter  your email to get the laterst news</p>
                <input type= 'text' placeholder= 'Email Address' />

            <div className="footer-social">
                <div className="social-text">
                    <p>Follow us On</p>
                </div>
                <div className="social">
                    <img src={facebook} alt='' />
                    <img src={instagram} alt='' />
                    <img src={tiktok} alt='' />
                    <img src={youtube} alt='' />
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer