"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Navbar from '../Navbar/Navbar';
 
const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left"> 
            
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-800'>                     
                    Hello I&apos;m {" "}     
                    </span>
                    <br />
                    <TypeAnimation
                        sequence={['Patricio', 2000, 'A Full Stack Developer', 2000, 'A Data Scientist Entusiast', 2000, 'A Freelancer', 2000]}
                        wrapper='span'

                    />

                    
                </h1>
        
                <p className="text-[#ADB7BE]">
                    Computer Science Engineer. Currently, I am a full stack developer. I have worked with programming languages such as Python, C#, Javascript, and Java, and have developed web applications using frameworks like React and Node. I also have experience in freelance work, having led a development project for the university over a period of one year.
                </p>    
                <div>
                    <button className='px-6 py-3 w-full rounded-full mr-4 bg-gradient-to-br from-orange-400 via-orange-600 to-orange-800 text-white'>
                        Hire me
                    </button>
                    <button className='px-6 py-3 w-full rounded-full mr-4 bg-gradient-to-br from-orange-400 via-orange-600 to-orange-800 text-white mt-3'>
                        <span className='block'>Download CV </span>
                    </button>


                </div>
            </div>      
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <img
                        src={"/hero-img/3.jfif"}
                        alt="Picture of the author"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection