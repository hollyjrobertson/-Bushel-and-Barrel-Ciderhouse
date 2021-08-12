import React from 'react';
import './CarouselMenu.css';
import foodVideo from '../assets/videos/Food.mp4';
import eventVideo from '../assets/videos/Events.mp4';

function CarouselMenu() {
    return (
        <div className='carouselMenu'>
            <h2>Menu & Events</h2>
            <div className="carouselMenuRow">
                <div className="carouselMenuColumn">
                    <h2>Food & Drinks</h2>
                    <div className="video-responsive">
                        <video
                            src={foodVideo}
                            controls="controls"
                            autoPlay={true}
                            muted={true}
                            loop={true}
                        /> 
                    </div>
                </div>
                <div className="carouselMenuColumn">
                    <h2>Upcoming Events</h2>
                    <div className="video-responsive">
                        <video
                            src={eventVideo}
                            controls="controls"
                            autoPlay={true}
                            muted={true}
                            loop={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselMenu;
