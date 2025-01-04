import React from 'react';
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'
import { FaLaptopCode } from 'react-icons/fa';

const SingleExperience = ({time, marketPlace, description}) => {
    const {ref, inView} = useInView({
        threshold: 0.1,
        triggerOnce: true
    })
    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: 'easeIn' }}
            className='bg-deepBlue p-8 flex flex-col lg:flex-row gap-6 rounded-xl '>
            <div>
                <FaLaptopCode className='text-gold text-6xl  mx-auto lg:mx-0 ' />
            </div>
            <div className='space-y-1'>
                <h3 className='text-sm font-semibold '> {time} </h3>
                <h4 className='text-xl'> {marketPlace} </h4>
                <p className='font-light text-sm'> {description} </p>
            </div>
        </motion.div>
    );
};

export default SingleExperience;