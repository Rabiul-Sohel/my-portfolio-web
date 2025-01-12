// 'use client'
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (

        <div className='min-h-[70vh] flex justify-center items-center text-center'>
            <div className='space-y-3'>
                <h3>404: This page not found</h3>
                <Link className=' block px-4 duration-300 hover:bg-[#ff7000] py-3 rounded-md bg-gold mt--10' href='/'>Go Home</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;