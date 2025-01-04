'use client'
import React from 'react';
import { FaBook, FaBookOpen, FaBookOpenReader } from 'react-icons/fa6';
import { motion } from 'framer-motion'
import Html from '../Chart/Html';
import { useInView } from 'react-intersection-observer';

const skill = [
    {
        language: 'HTML & CSS',
        amount: '95%'
    },
    {
        language: 'JavaScript',
        amount: '90%'
    },
    {
        language: 'Figma',
        amount: '85%'
    },

    {
        language: 'Next JS',
        amount: '70%'
    },
    {
        language: 'React JS',
        amount: '80%'
    },

]
const Education = () => {
    const [ref1, inView1] = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
    const [ref2, inView2] = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
    return (
        <div className='flex flex-col lg:flex-row mx-5 gap-8 mt-12'>

            <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 100 }}
                animate={inView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: 'easeIn' }} className='bg-deepBlue flex-1 p-6 rounded-xl '>
                <h3 className='text-gold text-4xl font-semibold'>Education</h3>
                <div className='mt-4 space-y-6'>
                    <div className='flex flex-col gap-1'>
                        <FaBookOpen className='text-4xl text-gold' />
                        <h5>2013-2014</h5>
                        <h3 className='text-2xl font-semibold'>M.A. In Bangla</h3>
                    </div>
                    <div className='space-y-2'>
                        <FaBook className='text-4xl text-gold ' />
                        <h5>2009-2013</h5>
                        <h3 className='text-2xl font-semibold'>B.A.(Hons) In Bangla</h3>
                    </div>
                </div>
            </motion.div>
            <motion.div
                    ref={ref2}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeIn' }}
                    className='bg-deepBlue flex-1 p-6 rounded-xl '>
                    <h3 className='text-gold text-4xl font-semibold uppercase mb-6'>Skills</h3>
                    <div className='space-y-5'>
                        {
                            skill.map((item, idx) => (
                                <Html key={idx} language={item.language} skill={item.amount} />
                            ))
                        }
                    </div>
                </motion.div>
            
        </div>
    );
};

export default Education;