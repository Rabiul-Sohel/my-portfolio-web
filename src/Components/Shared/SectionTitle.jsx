'use client'
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subTitle }) => {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true
    })
    return (
        <div  className='overflow-hidden space-y-1 text-center '>
            
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ?  { opacity: 1, y: 0 } : {} }
                transition={{ duration: 0.7, }}
                className='text-center overflow-hidden h-[20%]'>
                <h2 className='text-3xl md:text-6xl font-semibold uppercase'> {title} </h2>
                

            </motion.div>
            <h5 ref={ref} className='text-gold font-light text-xl md:text-2xl '> {subTitle} </h5>
        </div>
    );
};

export default SectionTitle;