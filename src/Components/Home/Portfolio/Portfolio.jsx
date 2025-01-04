'use client'
import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaLaptopCode, FaWordpress } from "react-icons/fa6";
import Image from 'next/image';
import reactImage from '@/assets/bistro-boss.png'
import nextImage from '@/assets/car-doctor.png'
import htmlImage from '@/assets/batikrom.png'


const Portfolio = () => {
    const  [ref, inView]  = useInView({
        threshold: 0.3,
        triggerOnce: true
    })
    const  [ref1, inView1]  = useInView({
        threshold: 0.3,
        triggerOnce: true
    })
    const  [ref2, inView2]  = useInView({
        threshold: 0.3,
        triggerOnce: true
    })
    return (
        <div className='py-8 lg:py-14 overflow-hidden'>
            <SectionTitle title={'Portfolio'} subTitle={'My Cases'} />
            <div  className='flex flex-col lg:flex-row mx-5 gap-8 mt-12 lg:mt-24'>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -200 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, }}
                    className="p-6 bg-[#052336]  rounded-xl overflow-hidden space-y-4 flex-1"
                >
                    <div className='space-y-2'>
                        <Image className='rounded-lg' src={reactImage} alt='React Image' />
                        <h3 className='text-lg font-bold text-gold uppercase '>React Js</h3>
                        <h4>Responsive Web Application using  React Js</h4>
                    </div>
                    <a  href='https://bistro-boss-97bb5.web.app/' className='flex mt-8 items-center gap-2 cursor-pointer'>
                        <span>See Project</span>  <FaArrowRight className='text-gold' />
                    </a>

                </motion.div>
                <motion.div
                    ref={ref1}
                    initial={{ opacity: 0, y: 200 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, }}
                    className="p-6 bg-[#052336]  rounded-xl overflow-hidden space-y-4 flex-1"
                >
                    <div className='space-y-2'>
                        <Image className='rounded-lg' src={nextImage} alt='Next Image' />
                        <h3 className='text-lg font-bold text-gold uppercase '>Next Js</h3>
                        <h4 > Figma to NextJs Development </h4>
                    </div>
                    <a href='https://car-doctor-pro-xi.vercel.app/' className='flex mt-8 items-center gap-2 cursor-pointer'>
                        <span>See Project</span>  <FaArrowRight className='text-gold' />
                    </a>

                </motion.div>

                <motion.div
                    ref={ref2}
                    initial={{ opacity: 0, x: 200 }}
                    animate={inView2 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, }}
                    className='p-6 flex-1 overflow-hidden bg-[#052336]  rounded-xl  space-y-4'

                >
                    <div className='space-y-2'>
                        <Image className='rounded-lg' src={htmlImage} alt='html Image' />
                        <h3 className='text-lg font-bold text-gold uppercase '>html</h3>

                        <h4>Figma to html Development</h4>
                    </div>
                    <a href='https://betikrom-pathshala.netlify.app/' className='flex mt-8 items-center gap-2 cursor-pointer'>
                        <span>See Project</span>  <FaArrowRight className='text-gold' />
                    </a>

                </motion.div>



            </div>
        </div>
    );
};

export default Portfolio;