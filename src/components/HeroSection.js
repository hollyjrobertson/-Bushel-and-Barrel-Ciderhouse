import React from 'react';
import { Button } from './Button';
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <h1>GOOD MEMORIES AWAIT</h1>
            <p>Come see us!</p>
            <div className="hero-btns">
                <a href="/visit-us">
                    <Button
                        className='btns'
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                    >
                        VISIT US
                    </Button>
                </a>
                <a href="https://youtu.be/tRMPv6y-pj8" target="_blank" rel="noreferrer">
                    <Button
                        className='btns'
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                    >
                        TAKE A LOOK<i className='far fa-play-circle' />
                    </Button>
                </a>
            </div>
        </div>
    );
}

export default HeroSection
