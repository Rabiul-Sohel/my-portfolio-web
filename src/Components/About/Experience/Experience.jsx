'use client'
import SectionTitle from '@/Components/Shared/SectionTitle';
import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import SingleExperience from './SingleExperience';

const Experience = () => {
  
    const experiences = [
        {
            time: '0000 - Present',
            marketPlace: 'www.fiverr.com',
            description: 'I am Rabiul Sohel, I am a pixel-perfect web developer. I am experienced and an expert in the web development section and working since 2014. Full and fresh hand code is my power. Client satisfaction is my first priority. Work with me and be happy with the result.'
        },
        {
            time: '0000 - Present',
            marketPlace: 'www.fiverr.com',
            description: 'I am Rabiul Sohel, I am a pixel-perfect web developer. I am experienced and an expert in the web development section and working since 2014. Full and fresh hand code is my power. Client satisfaction is my first priority. Work with me and be happy with the result.'
        },
        {
            time: '0000 - Present',
            marketPlace: 'www.fiverr.com',
            description: 'I am Rabiul Sohel, I am a pixel-perfect web developer. I am experienced and an expert in the web development section and working since 2014. Full and fresh hand code is my power. Client satisfaction is my first priority. Work with me and be happy with the result.'
        }
    ]
    return (
        <div className='mt-20'>
            <SectionTitle title={'Experience'} subTitle={'What I have done'} />
            <div className=' space-y-8 py-8 mx-5'>
                {
                    experiences.map((service, idx) => (
                       <SingleExperience marketPlace={service.marketPlace} description={service.description} time={service.time} key={idx} /> 
                    ))
                }
            </div>
        </div>
    );
};

export default Experience;