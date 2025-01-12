'use client'
import Image from 'next/image';
import React from 'react';
import mainImage from '@/assets/sohel-port.png'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
const AbBanner = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
    return (
        <div className='text-center lg:w-3/5 mt-10  mx-auto relative  '>
            <motion.div
                initial={{ scale: 1, opacity: 0, y: 200 }}
                animate={inView ? { scale: 1, opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, ease: 'easeIn' }}
                className="  rounded-xl overflow-hidden  flex-1"
            >
                <Image src={mainImage} className='mx-auto w-full lg:w-2/5  ' alt='Rabiul Sohel' />
            </motion.div>
            <div ref={ref} className='relative lg:absolute lg:-bottom-14 text-center  justify-center w-full'>
                <motion.div
                    initial={{ scale: 0.5, opacity: 0,  }}
                    animate={inView ? { scale: 1, opacity: 1,  } : {}}
                    transition={{ duration: 0.8, ease: 'easeIn' }}
                    className="  rounded-xl overflow-hidden  flex-1"
                >
                    <h2 className=' text-4xl lg:text-6xl uppercase font-semibold text-center   '>Rabiul Sohel</h2>
                </motion.div>
                <h1 className='text-gold'>Web Developer(MERN)</h1>
            </div>
        </div>
    ); z
};

export default AbBanner;