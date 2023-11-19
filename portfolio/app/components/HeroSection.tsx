"use client"
import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
 
const HeroSection = () => {
  return (
    <section className='lg:py-16'>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start"> 
            
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
                    <button
                    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-500 to-orange-800 hover:bg-orange-200 text-white"
                    >
                    Hire Me
                    </button>
                    <button
                    className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-orange-500 to-orange-800 hover:bg-orange-200 text-white"
                    >
                        Download CV
                    </button>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="col-span-4 place-self-center mt-4 lg:mt-0"
            >      
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                    <img
                        src={"/hero-img/3.jfif"}
                        alt="Picture of the author"
                        className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                        width={300}
                        height={300}
                    />
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection