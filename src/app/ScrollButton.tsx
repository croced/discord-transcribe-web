'use client'

import React, { useEffect } from 'react';
import Image from 'next/image';

const ScrollButton: React.FC = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleScroll = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    }

    return (
        <Image 
            src="/assets/icons/scroll-button.svg" 
            alt="Scroll down" 
            width={50} 
            height={50} 
            onClick={handleScroll}
            className='hover:cursor-pointer opacity-50 hover:opacity-100 transition-opacity duration-500 ease-in-out'
            aria-hidden 
        />
    )

}

export default ScrollButton;