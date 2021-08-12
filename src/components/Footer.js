import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logos/header_logo.png';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='footer-link-items'>
                    <Link to="/" className='footer-logo'>
                        <img className="navLogo" src={logo} alt="logo" />
                    </Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <a href="https://www.instagram.com/explore/locations/549256002/united-states/poulsbo-washington/bushel-barrel-ciderhouse/">Instagram</a>
                    <a href="https://www.facebook.com/bushelandbarrelciderhouse/">Facebook</a>
                    <a href="https://youtu.be/tRMPv6y-pj8">Youtube</a>
                    <a href="https://www.yelp.com/biz/bushel-and-barrel-ciderhouse-poulsbo">Yelp</a>
                </div>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/'>Who Are We</Link>
                    <a href="https://www.facebook.com/bushelandbarrelciderhouse/reviews/?ref=page_internal">Reviews</a>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <p>
                        201 NW Beaver Ridge Lane
                        Poulsbo, WA 98370<br/>
                        <a href="tel:+3606219004">(360) 621-9004</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;