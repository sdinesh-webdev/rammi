import React, { useState, useEffect } from 'react';
import '../index.css';

const Slider = () => {
    const images = [
        'https://as1.ftcdn.net/v2/jpg/02/52/38/80/1000_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg',
        'https://as1.ftcdn.net/v2/jpg/03/25/35/08/1000_F_325350805_D8PVU73qs1dj5TdWgm9IpuAjJ7sgHacK.jpg',
        'https://as2.ftcdn.net/v2/jpg/08/13/07/77/1000_F_813077758_cpAAXldKcyrsXdvXh6n3AchjEUagw53C.jpg'
    ];
    const titles = [
        "Savor the Flavors",
        "A Culinary Journey",
        "Taste the Tradition"
    ];
    const paragraphs = [
        "Experience the finest ingredients and exquisite flavors in every dish. Join us for a dining experience like no other.",
        "Embark on a culinary journey with our chef's special creations. Each dish tells a story of passion and creativity.",
        "Discover the rich traditions of our cuisine, crafted with love and served with pride. Taste the heritage in every bite."
    ];
   
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                setIsAnimating(false);
            }, 500); // Duration of the animation
        }, 2500); // Change image every 3.5 seconds to include animation time

        return () => clearInterval(interval);
    }, [images.length]);

    const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            setIsAnimating(false);
        }, 500);
    };

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIsAnimating(false);
        }, 500);
    };

    return (
        <div className="slider relative w-full h-screen overflow-hidden">
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className={`w-full h-full object-cover transition-transform duration-500 ease-in-out ${isAnimating ? 'slide-in' : ''}`}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-start bg-black bg-opacity-50 text-white text-center p-8 transition-opacity duration-500 ease-in-out">
                <h1 className="text-7xl font-bold mb-4">{titles[currentIndex]}</h1>
                <p className="text-lg items-start max-w-lg font-bold">
                    {paragraphs[currentIndex]}
                </p>
            </div>
        </div>
    );
};

export default Slider;