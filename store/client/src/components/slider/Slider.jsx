// Core
import React, { useState, useMemo } from 'react';
// Styles
import './Slider.scss';
// Images
import { EastOutlined, WestOutlined } from '@mui/icons-material';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const photos = useMemo(() =>
        [
            '/images/pexel-photos/pexels-photo-1.jpeg',
            '/images/pexel-photos/pexels-photo-2.webp',
            '/images/pexel-photos/pexels-photo-3.webp'
        ], [])

    const prevSlide = () => setCurrentSlide(currentSlide === 0 ? 2 : prev => prev - 1);
    const nextSlide = () => setCurrentSlide(currentSlide === 2 ? 0 : prev => prev + 1);

    return (
        <div className='slider'>
            <div 
                className="container"
                style={{transform: `translateX(-${currentSlide * 100}vw)`}}
            >
                { 
                    photos.map(photo => 
                        <img 
                            key={photo} 
                            src={photo} 
                            alt={photo} 
                        />) 
                }
            </div>
            <div className="icons">
                <div 
                    className="icon"
                    onClick={prevSlide}
                >
                    <WestOutlined />   
                </div>
                <div 
                    className="icon"
                    onClick={nextSlide}
                >
                    <EastOutlined />
                </div>
            </div>
        </div>
    )
}

export default Slider;
