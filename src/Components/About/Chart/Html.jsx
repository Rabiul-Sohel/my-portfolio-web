'use client'
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, } from "framer-motion"



const Html = ({language, skill}) => {
    
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
    return (
        <div className='flex flex-col gap-5 '>
            {
                

                <div className='bg-background w-full rounded-sm relative overflow-hidden    ' >
                    <motion.div
                        
                        className=''
                        initial={{ opacity: 0, left:0, scaleX: '0%' }}
                        animate={ inView ? { opacity: 1, left:0, scaleX: '100%' } : {}  }
                        transition={{ duration: 0.5, ease: 'linear' }}
                        style={{transformOrigin: 'left'}}
                    >


                        <div ref={ref} style={{width: `${skill}`}}  className={` bg-gold flex justify-between top-0 h-full left-0 py-3 text-black px-3 rounded-sm  `}>
                            <div>{language} </div>
                            <div> {skill} </div>
                        </div>


                    </motion.div>
                </div>
               


            }
        </div>
    );
};

export default Html;