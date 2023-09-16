"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from '../NavLink/NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import MenuOverlay from '../MenuOverlay/MenuOverlay'


const navLink=[
    {
        href: '#about',
        title: 'About'
    },
    {
        href: '#skills',
        title: 'Skills'
    },
    {
        href: '#projects',
        title: 'Projects'
    }
]

function Navbar() {
    const [navbarOpen, setNavbarOpen] = useState(false)
    
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90 '>
        <div className='flex flex-wrap items-center justify-between mx-auto'>
            <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold'> 
                LOGO 
            </Link>
            <div className="mobile-menu block md:hidden">
                {
                navbarOpen ? (
                        <button onClick={()=> setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <Bars3Icon className='h-5 w-5'/>
                        </button>
                    ):
                    (
                        <button onClick={()=> setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                            <XMarkIcon className='h-5 w-5'/>
                        </button>
                    )
                }
            </div>
            <div className='menu hidden md:block md:w-auto ' id="navbar">
                <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0'>
                    {navLink.map((link, index) => (
                        <NavLink key={index} href={link.href} title={link.title} />
                    ))}
                            
                </ul>
            </div>
        </div> 
        {navbarOpen? <MenuOverlay links ={navLink}/>: null}
    </nav>
  )
}

export default Navbar