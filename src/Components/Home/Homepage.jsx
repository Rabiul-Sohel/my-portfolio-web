import React from 'react';
import Navbar from '../Shared/Navbar';
import Banner from './Banner/Banner';
import ScrollToTop from '../Shared/ScrollToTop';
import MyWork from './MyWork/MyWork';
import Portfolio from './Portfolio/Portfolio';
import Testimonials from './Testimonials/Testimonials';
import Contact from './Contacts/Contact';
import Footer from '../Shared/Footer';

const Homepage = () => {
    return (
        <div className='min-h-screen'>
            
           
            <Banner/>
            <MyWork/>
            <Portfolio/>
            <Testimonials/>
            <Contact/>
            
            
        </div>
    );
};

export default Homepage;