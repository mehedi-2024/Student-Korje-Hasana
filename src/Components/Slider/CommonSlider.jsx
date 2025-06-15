import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CommonSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [direction, setDirection] = useState('right');
    const sliderRef = useRef(null);

    // Sample images - replace with your own
    const slides = [
        { url: 'https://images.unsplash.com/photo-1743883986262-7b46a76c0261?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D', title: 'Mountain' },
        { url: 'https://images.unsplash.com/photo-1749215763709-c057dbb60cf3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D', title: 'Forest' },
        { url: 'https://plus.unsplash.com/premium_photo-1749760305646-60673cae2c46?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8', title: 'Cliff' },
    ];

    // Auto-play functionality
    useEffect(() => {
        if (isHovered) return; // Pause autoplay when hovered

        const interval = setInterval(() => {
            // if (direction === 'right') {
            //     goToNext();
            // } else {
            //     goToPrevious();
            // }
            goToNext()
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [currentIndex, isHovered, direction]);

    const goToPrevious = () => {
        setDirection('left');
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        setDirection('right');
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setDirection(slideIndex > currentIndex ? 'right' : 'left');
        setCurrentIndex(slideIndex);
    };

    // Animation styles based on direction
    const getSlideStyle = (index) => {
        const baseStyle = "absolute inset-0 h-full w-full bg-cover bg-center md:rounded transition-all duration-500 ease-in-out";

        if (index === currentIndex) {
            return `${baseStyle} translate-x-0 opacity-100`;
        }

        if (direction === 'right') {
            if (index === (currentIndex - 1 + slides.length) % slides.length) {
                return `${baseStyle} -translate-x-full opacity-0`;
            } else {
                return `${baseStyle} translate-x-full opacity-0`;
            }
        } else {
            if (index === (currentIndex + 1) % slides.length) {
                return `${baseStyle} translate-x-full opacity-0`;
            } else {
                return `${baseStyle} -translate-x-full opacity-0`;
            }
        }
    };

    return (
        <div
            className="max-w-7xl mx-auto relative overflow-hidden h-96 sm:h-[500px]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={sliderRef}
        >
            {/* Slides container */}
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={getSlideStyle(index)}
                        style={{ backgroundImage: `url(${slide.url})` }}
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/70 transition-all"
            >
                ❮
            </button>
            <button
                onClick={goToNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all"
            >
                ❯
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                {slides.map((_, slideIndex) => (
                    <button
                        key={slideIndex}
                        onClick={() => goToSlide(slideIndex)}
                        className={`mx-1 w-3 h-1 rounded-full transition-all duration-300 ${currentIndex === slideIndex ? 'bg-white w-6' : 'bg-gray-400 hover:bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${slideIndex + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}


export default CommonSlider