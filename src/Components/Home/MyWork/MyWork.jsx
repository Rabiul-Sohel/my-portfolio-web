'use client'
import React from 'react';
import { SiAdobe, SiAdobephotoshop } from "react-icons/si";
import { FaArrowRight, FaLaptopCode, FaWordpress } from "react-icons/fa6";
import { IoLogoFigma } from "react-icons/io5";
import { motion } from 'framer-motion';
import { MotionAnimate } from 'react-motion-animate'
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../../Shared/SectionTitle';


const MyWork = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
    
    return (
        <div className=' py-12 md:py-36 overflow-hidden'>
            <SectionTitle title={'What I Do'} subTitle='My Services' />
            <div ref={ref} className='flex flex-col lg:flex-row mx-2 gap-8 mt-12 lg:mt-24'>
                <motion.div
                    
                    initial={{ opacity: 0, x: -200 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, }}
                    className="p-8 bg-[#052336]  rounded-xl overflow-hidden space-y-8 flex-1"
                >
                    <div className='space-y-3'>
                        <IoLogoFigma className='text-gold text-6xl' />
                        <h3 className='text-2xl uppercase '>Design Skills</h3>
                        <p className='font-light'>Proficient in Figma design, creating sleek user interfaces and intuitive user experiences with a strong eye for aesthetics and usability.</p>
                    </div>
                    <button className='flex mt-8 items-center gap-2'>
                        <span>Say Hello</span>  <FaArrowRight className='text-gold' />
                    </button>

                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 200 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, }}
                    className="p-8 bg-[#052336]  rounded-xl overflow-hidden space-y-8 flex-1"
                >
                    <div className='space-y-3'>
                        <FaLaptopCode className='text-gold text-6xl' />
                        <h3 className='text-xl lg:text-2xl uppercase '>Front-end Developer</h3>
                        <p className='font-light'>I am a front-end web developer based in cumilla, Bangladesh. I can create unique but aesthetic Web Application with my creative mind and experiences. </p>
                    </div>
                    <button className='flex mt-8 items-center gap-2'>
                        <span>Say Hello</span>  <FaArrowRight className='text-gold' />
                    </button>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, }}
                    className='p-8 flex-1 overflow-hidden bg-[#052336]  rounded-xl  space-y-8'

                >
                    <div className='space-y-3'>
                        <FaWordpress className='text-gold text-6xl' />
                        <h3 className='text-xl lg:text-2xl uppercase '>WordPress Developer</h3>
                        <p className='font-light'>Passionate WordPress Developer with a track record of creating over 630+ websites. I find joy in crafting user-friendly, customizable sites.</p>
                    </div>
                    <button className='flex mt-8 items-center gap-2'>
                        <span>Say Hello</span>  <FaArrowRight className='text-gold' />
                    </button>

                </motion.div>



            </div>
        </div>
    );
};

export default MyWork;