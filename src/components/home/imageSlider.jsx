import React, { useState, useEffect, useRef } from 'react';
import './style.css';

function HomeImageSlider({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const [startPosition, setStartPosition] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, [currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); 

        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleTouchStart = (e) => {
        setIsSwiping(true);
        setStartPosition(e.touches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (!isSwiping) return;
        const currentPosition = e.touches[0].clientX;
        setCurrentTranslate(currentPosition - startPosition);
    };

    const handleTouchEnd = () => {
        setIsSwiping(false);
        if (currentTranslate < -50) {
            nextSlide();
        } else if (currentTranslate > 50) {
            prevSlide();
        }
        setCurrentTranslate(0);
    };

    return (
        <div className="slideshow-container" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div 
            ref={sliderRef} 
            className="slides-wrapper" 
            style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: isSwiping ? 'none' : 'transform 0.5s ease-in-out' }}
        >
            {images.map((image, index) => (
                <div key={index} className="slide">
                    {/* Use picture element to show different images based on screen size */}
                    <picture>
                        <source media="(max-width: 768px)" srcSet={image.mobile} />
                        <source media="(min-width: 769px)" srcSet={image.desktop} />
                        <img src={image.desktop} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
                    </picture>
                </div>
            ))}
        </div>

        <a className="prev" onClick={prevSlide}>&#10094;</a>
        <a className="next" onClick={nextSlide}>&#10095;</a>

        <div style={{ textAlign: 'center' }} className='dotPlacement'>
            {images.map((_, index) => (
                <span
                    key={index}
                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                    onClick={() => setCurrentIndex(index)}
                ></span>
            ))}
        </div>
    </div>
    );
}

export default HomeImageSlider;
