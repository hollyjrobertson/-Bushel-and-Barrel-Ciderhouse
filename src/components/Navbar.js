import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import logo from '../assets/images/logos/header_logo.png';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    window.addEventListener('resize', showButton);
        
    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                        <img className="navLogo" src={logo} alt="logo" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Menu
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Events
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/visit-us' className='nav-links' onClick={closeMobileMenu}>
                                Visit Us
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>VISIT US</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar;
