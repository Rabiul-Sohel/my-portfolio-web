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

const Testimonials = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
    return (
        <div className='py-12 lg:py-32 overflow-hidden'>
            <SectionTitle title={'Testimonials'} subTitle={'What my Clients are saying'} />

            <div ref={ref} className='flex flex-col lg:flex-row mx-2  gap-8 mt-12 lg:mt-24'>
                <motion.div
                    initial={{ opacity: 0, x: -200 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, }}
                    className="p-6 bg-[#052336]  rounded-xl overflow-hidden  flex-1"
                >
                    <div className='space-y-4'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dicta, ducimus animi temporibus similique quas optio ratione dignissimos officiis? Repudiandae!</p>
                        <div className=''>
                            <Image className='rounded-full w-16 h-16 ' src={reactImage} alt='React Image' />
                            <h3 className='text-lg font-bold text-gold lowercase '>Kyle David</h3>
                            <h4>Designer</h4>
                        </div>
                    </div>

                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 200 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1, }}
                    className="p-6 bg-[#052336]  rounded-xl overflow-hidden space-y-4 flex-1"
                >
                     <div className='space-y-4'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dicta, ducimus animi temporibus similique quas optio ratione dignissimos officiis? Repudiandae!</p>
                        <div className=''>
                            <Image className='rounded-full w-16 h-16 ' src={reactImage} alt='React Image' />
                            <h3 className='text-lg font-bold text-gold lowercase '>Kyle David</h3>
                            <h4>Designer</h4>
                        </div>
                    </div>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, }}
                    className='p-6 flex-1 overflow-hidden bg-[#052336]  rounded-xl  space-y-4'

                >
                    <div className='space-y-4'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dicta, ducimus animi temporibus similique quas optio ratione dignissimos officiis? Repudiandae!</p>
                        <div className=''>
                            <Image className='rounded-full w-16 h-16 ' src={reactImage} alt='React Image' />
                            <h3 className='text-lg font-bold text-gold lowercase '>Kyle David</h3>
                            <h4>Designer</h4>
                        </div>
                    </div>


                </motion.div>



            </div>
        </div>
    );
};

export default Testimonials;