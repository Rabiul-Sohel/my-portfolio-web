import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaInstagramSquare , FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='bg-deepBlue flex flex-col lg:flex-row gap-5 items-center justify-between py-8 mt-10 px-10'>
            <div className=' text-deepBlue flex gap-2'>
                <Link className='bg-white  p-4 shadow-blue rounded-full hover:bg-gold transition duration-300  hover:text-white' href="https://github.com/Rabiul-Sohel">
                    <FaGithub />
                </Link>
                <a className='bg-white shadow-blue p-4 rounded-full hover:bg-gold transition duration-300 hover:text-white' href="https://x.com/RabiulSohel1">
                    <FaTwitter />
                </a>
                <a className='bg-white shadow-blue p-4 rounded-full hover:bg-gold transition duration-300 hover:text-white' href="https://www.linkedin.com/in/rabiul-alam-sohel-7b7725251/">
                    <FaLinkedinIn />
                </a>
                
                <a className='bg-white shadow-blue p-4 rounded-full hover:bg-gold transition duration-300 hover:text-white' href="https://www.youtube.com/@rabiulsohel159/videos">
                    <FaYoutube />
                </a>
                <a className='bg-white shadow-blue p-4 rounded-full hover:bg-gold transition duration-300 hover:text-white' href="https://www.instagram.com/rabiulsohel1/">
                <AiFillInstagram />
                </a>
            </div>
            <div className='font-light text-center lg:text-right text-sm'>
                © All Rights Reserved 2022-2025 | Rabiul Sohel
            </div>
        </div>
    );
};

export default Footer;