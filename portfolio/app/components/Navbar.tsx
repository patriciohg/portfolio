"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from "next/image";
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/20/solid'
import MenuOverlay from './MenuOverlay'

import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";

const navLinks=[
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
<nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <div className='flex'>
            <Link href="https://github.com/patriciohg" target="__blank">
                <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/patricio-hinojosa-uv/" target="__blank">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default Navbar