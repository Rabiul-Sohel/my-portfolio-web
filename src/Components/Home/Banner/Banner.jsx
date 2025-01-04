'use client'
import React, { useEffect, useState } from 'react';
import photo from '@/assets/sohel-port.png'
import Image from 'next/image';
import { inView, motion } from "framer-motion";
import CountUp from 'react-countup';
import Counter from '../../Shared/Counter';
import { useInView } from 'react-intersection-observer';

const Banner = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true

    })

    return (
        <div className='relative pb-8 '>
            <div className='flex flex-col-reverse lg:flex-row gap-4 items-center min-h-screen py-6 md:py-16 '>
                <div className='flex-1 space-y-2 md:space-y-5 mx-3'>
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className=""
                    >
                        <h2 className='text-xl md:text-2xl font-semibold uppercase'>Hello, I am</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className=""
                    >
                        <h2 className='uppercase  text-3xl md:text-7xl font-bold
            '>Rabiul Sohel</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="  text-white rounded-md"
                    >
                        <h1 className='text-2xl md:text-3xl font-semibold text-gold '>I am Web Developer</h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 200 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="  text-white rounded-md"
                    >
                        <p className='text-sm md:text-base'>Its my great opportunity to say you 'HELLO'. I am a front-end web developer based in cumilla, Bangladesh. I can create unique but aesthetic Web Application with my creative mind and experiences. Basically, I am MERN developer. I love to talk related to work and sharing thoughts.  </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 150 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="  text-white rounded-md"
                    >

                    </motion.div>

                </div>
                <div className='flex-1 relative'>
                    <Image className='w-[90%]' alt='sohel photo' src={photo} />


                </div>
            </div>

            <div className='block lg:flex w-4/5 bottom-0  -right-10 lg:left-0 lg:bottom-32  justify-between items-center relative lg:absolute  '>
                <div>
                    <button className='bg-lightBlue shadow-xl px-8 py-3  animate-bounce-slow mt-4 rounded-full hover:bg-background transition duration-300'>Contact</button>
                </div>

                <div className='relative  mt-10 lg:mt-16'>
                    <div className=' left-0 lg:-left-96 bottom-0 lg:-bottom-10  lg:absolute    md:flex flex-col items-center border-2 animate-bounce-slow px-12 md:px-24 py-2  rounded-full bg-background border-gold'>
                        <h3 ref={ref} className='text-sm md:text-3xl font-bold'>
                            {
                                inView ? <CountUp end={5} /> : 0
                            }
                            +</h3>
                        <p className='text-xs md:text-base'>Years of <br /> Experience</p>
                    </div>
                    <div className=' relative lg:absolute mt-5 bottom-0 lg:-bottom-28  left-0 lg:-left-16 md:flex flex-col items-center border-2 animate-bounce-reverse px-12 md:px-24 py-2  rounded-full bg-background border-gold'>
                        <div ref={ref} className=' text-sm md:text-3xl font-bold flex'>
                            {
                                inView ? <CountUp end={25} /> : 0
                            }

                            +
                        </div>
                        <p className='text-xs lg:text-base'>Completed <br /> Projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;