import AbBanner from '@/Components/About/AbBanner/AbBanner';
import AboutMe from '@/Components/About/AboutMe/AboutMe';
import Education from '@/Components/About/Education/Education';
import Experience from '@/Components/About/Experience/Experience';
import Contact from '@/Components/Home/Contacts/Contact';
import { Inter } from 'next/font/google';
import React from 'react';
const inter = Inter({subsets: ['latin']})

const AboutPage = () => {
    return (
        <div className= {`min-h-screen ${inter.className}`}>
            <AbBanner/>
            <AboutMe/>
            <Education/>
            <Experience/>
            <Contact/>
        </div>
    );
};

export default AboutPage;