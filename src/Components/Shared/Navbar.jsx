'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';





import React from 'react';

const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname);
    const navItems = [
        {
            text: 'Home',
            path: '/'
        },
        {
            text: "About Me",
            path: '/about'
        },
        {
            text: 'Courses',
            path: '/courses'
        },
       
        {
            text: 'Blog',
            path: '/blog'
        },
        {
            text: 'Say Hello',
            path: '/contact'
        },
    ]
    // className={`text-white hover:bg-blue px-5 py-3 rounded-md transition duration-300 border-b-4  border-transparent hover:border-gold hover:shadow-xl`}

    const navMenu = navItems.map(item => (
        <li key={item.path}>

            <Link className={`${pathname === item.path ? 'border border-gold'  : 'border-transparent'} ${item.path === '/contact' && 'bg-lightBlue shadow-xl'} text-white hover:bg-blue px-5 py-3 rounded-full transition duration-300 border-b-4   hover:border-gold hover:shadow-xl`} href={item.path}>  {item.text} </Link>
        </li>
    ))


    return (
        <div className=''>
            <div className="navbar flex justify-between py-10 container mx-auto ">
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 bg-blue p-1 rounded-md"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-deepBlue rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {navMenu}
                        </ul>
                    </div>
                    <div className='flex items-baseline'>
                        <Link href='/' className='text-3xl font-bold'>rabiul<span className='text-lightBlue'>Sohel</span></Link>
                        <div className='w-2 h-2 rounded-full bg-gold'></div>
                    </div>
                </div>

                <div className="">
                    <div className=" hidden lg:flex">
                        <ul className=" flex px-1 gap-5">
                            {navMenu}
                        </ul>
                    </div>
                    {/* <Link href='/contact' className=" bg-lightBlue shadow-xl rounded-full border-b-4 border-gold text-white px-6 hover:shadow-xl  py-3  hover:bg-background transition duration-300 ">Say Hello</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;