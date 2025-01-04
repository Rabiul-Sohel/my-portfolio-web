'use client'
import Image from 'next/image';
import React from 'react';
import handShakeImg from '@/assets/handshake.jpg'
import { FaEnvelope, FaLocationDot, FaLocationPin } from 'react-icons/fa6';
import { FaUser, FaUserAlt } from 'react-icons/fa';
import {motion} from 'framer-motion'
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';


const MessageForm = () => {
     const handleEmail = e =>{
        e.preventDefault()
        const form = e.target;
        const firstName = form.firstName.value
        const lastName = form.lastName.value
        const name = firstName + ' ' + lastName
        const email = form.email.value
        const message = form.message.value 
        const data = {name, email, message}
        // const formData = new FormData()
        // formData.append('name', name)
        // formData.append('email', email)
        // formData.append('message', message)
        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                data,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,

            )
            .then((result)=>{
                console.log('Email sent successfully', result.text);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
            },
            (error) =>{
                console.log('Error sending email', error.text);
            }
        )
        
        
     }

    return (
        <motion.div
            initial = {{opacity: 0, y: 300}}
            animate = {{opacity: 1, y: 0}}
            transition={{duration: 0.7, ease: 'linear'}}
          className='flex gap-10 my-24  font-light'>
            <div className=' w-1/3 space-y-6'  >
                <Image className='h-72 rounded-xl'  alt='handshake Image' src={handShakeImg} />
                <div className='space-y-1 py-4  '>
                    <h1 className='text-3xl font-semibold'>Rabiul Sohel</h1>
                    <h3 className='text-xl font-semibold'>Web Developer(MERN)</h3>
                    <p> Are You Looking For Your Business Online Presence? I am here.🙂 </p>
                </div>
                <div className='space-y-8 my-6'>
                    <div className='flex gap-3 '>
                        <FaLocationDot className='text-3xl text-gold'/>
                        <div>
                            <h2 className='text-2xl font-semibold'>Address</h2>
                            <p>Barura, Cumilla-3560</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <FaUser className='text-3xl text-gold'/>
                        <div>
                            <h2 className='text-2xl font-semibold'>Freelance</h2>
                            <p>Available Right Now</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <FaEnvelope className='text-3xl text-gold'/>
                        <div>
                            <h2 className='text-2xl font-semibold'>Email</h2>
                            <p>rabiulsohel24@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-2/3 '>
                <form onSubmit={handleEmail} className='grid grid-cols-2 gap-6' >
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="">First Name*</label>
                        <input name='firstName' className='p-2 rounded-lg bg-deepBlue border' required placeholder='John' type="text" />
                    </div>
                    <div className='flex flex-col gap-4'>
                        <label htmlFor="">Last Name*</label>
                        <input name='lastName' className='p-2 rounded-lg bg-deepBlue border' required placeholder='Doe' type="text" />
                    </div>
                    <div className='flex flex-col col-span-2 gap-4'>
                        <label htmlFor="">Email Address*</label>
                        <input name='email' className='p-2 rounded-lg bg-deepBlue border' required placeholder='example@mail.com' type="email" />
                        <span className='text-xs font-light'> Your email is safe with me, I do not spam</span>
                    </div>
                    <div className='flex flex-col gap-4 col-span-2'>
                        <label htmlFor="">Message*</label>
                        <textarea name='message' className='p-2 rounded-lg bg-deepBlue border' required placeholder='Write your message...' type="text" />
                    </div>
                    <input className='col-span-2 bg-gold font-bold transition cursor-pointer hover:bg-[#ff8010] p-2 rounded-lg ' type="submit" />

                </form>
                
            </div>
        </motion.div>
    );
};

export default MessageForm;