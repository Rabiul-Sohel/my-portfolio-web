'use client'
import React, { useEffect, useState } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    useEffect(()=>{
        const toggleVisibilty =()=>{
            if(window.scrollY > 100){
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisibilty)
        return ()=> window.removeEventListener('scroll', toggleVisibilty)
    },[])

    const scrollToTop =()=>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            }) 
    }

    return (
        <div>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-2 right-5 bg-lightBlue p-2 rounded-lg shadow-xl hover:bg-blue transition duration-300 "
                >
                    
                   <IoIosArrowUp className='text-2xl' /> 
                </button>
            )}
        </div>
    );
};

export default ScrollToTop;