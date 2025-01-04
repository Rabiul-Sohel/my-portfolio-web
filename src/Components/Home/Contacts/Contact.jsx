'use client'
import React from 'react';
import SectionTitle from '../../Shared/SectionTitle';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight, FaLaptopCode, FaUserClock, FaUserTie, FaWordpress } from "react-icons/fa6";
import { HiMail } from "react-icons/hi";

const Contact = () => {
    const  [ref1, inView1] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })
    const  [ref2, inView2] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })
    const  [ref3, inView3] = useInView({
        threshold: 0.1,
        triggerOnce: true
    })
    return (
        <div className='py-12 lg:py-16 overflow-hidden'>
            <SectionTitle title={'Contact'} subTitle={'Are You Looking For Your Business Online Presence? I am here. 🙂'} />
            <div  className='flex flex-col lg:flex-row  mx-5 gap-8 mt-12'>
                <motion.div
                    ref={ref1}
                    initial={{ opacity: 0, x: -100 }}
                    animate={inView1 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, }}
                    className="p-6 bg-[#052336]  rounded-xl overflow-hidden  flex-1"
                >


                    <div className='text-center space-y-1'>
                        <FaUserTie className='text-5xl text-gold mx-auto' />
                        <h3 className='text-2xl font-semibold   '>Rabiul Sohel</h3>
                        <h4 className='font-light'>Web Developer(MERN)</h4>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref2}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView2 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, }}
                    className="p-6 bg-[#052336]  rounded-xl overflow-hidden space-y-4 flex-1"
                >
                    <div className='text-center'>
                        <FaUserClock className='mx-auto text-5xl  text-gold' />
                        <h3 className='text-2xl font-semibold '>Freelance</h3>
                        <h4 className='font-light'>Available Right Now</h4>
                    </div>
                </motion.div>
                <motion.div
                    ref={ref3}
                    initial={{ opacity: 0, x: 100 }}
                    animate={inView3 ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, }}
                    className='p-6 flex-1 overflow-hidden bg-[#052336]  rounded-xl  space-y-4'
                >
                    <div className='text-center'>
                        <HiMail className='text-5xl text-gold mx-auto' />
                        <h3 className='text-2xl font-semibold  '>Email</h3>
                        <h4 className='font-light'>rabiulalamsohel@gmail.com</h4>
                    </div>

                </motion.div>
            </div>
        </div>
    );
};

export default Contact;