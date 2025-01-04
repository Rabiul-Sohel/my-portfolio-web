'use client'
import React from 'react';
import { motion, } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    })
   
    return (
        <div className='mt-16 lg:mt-40 overflow-hidden mx-5'>
            <div>
                <motion.div
                   
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >

                    <h3 className='text-gold uppercase font-semibold text-4xl'>About Me</h3>
                </motion.div>
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className=' font-light text-base lg:text-lg py-4'> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt animi unde debitis tenetur odit omnis numquam et ea? Repellat, mollitia! Explicabo dignissimos error suscipit, <span className='bg-lightGold text-black'>quae ipsam molestias non magnam </span> quas, sed id neque illum ipsa animi provident veniam odio. Molestiae dicta recusandae ullam corporis itaque! Adipisci fuga dolorum odit ea nam <span className='bg-lightGold text-black'>ipsa aliquam quod nemo qui! Aspernatur asperiores dolore</span>, vel laborum laudantium earum atque dolores hic quo voluptate alias voluptatibus dolorem fuga praesentium natus excepturi unde quas maxime accusantium nisi blanditiis impedit neque! Deleniti nostrum consectetur, voluptate, facilis laborum obcaecati voluptatem ut beatae id illum dolor cumque qui, ipsum atque! </p>
                </motion.div>
            </div>
            <div>

            </div>
        </div>
    );
};

export default AboutMe;