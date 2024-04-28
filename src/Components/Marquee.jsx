
import { motion } from 'framer-motion'
import React from 'react'


function Marquee() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed=".08" className='w-full h-[65vh] py-10 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text  uppercase border-t-2 border-b-2 border-zinc-300 flex  tracking-tighter  overflow-hidden whitespace-nowrap'>
            <motion.h1 
            
            initial={{x: "0"}} 
            animate={{x: "-100%"}}  
            transition={{ repeat: Infinity, ease: "linear", duration: 10}} 
             className='text-[20vw] leading-none font-["Founders_Grotesk"] font-bold -mb-[3vw] pt-10 pr-20'>
                we are ochi</motion.h1>
            <motion.h1
            
            initial={{x: "0"}} 
            animate={{x: "-100%"}} 
            transition={{ repeat: Infinity, ease: "linear", duration: 10}}
             className='text-[20vw] leading-none font-["Founders_Grotesk"] font-bold mb-[2vw] pt-10 pr-20 '>
                we are ochi</motion.h1>
        </div>
      
    </div>
  )
}

export default Marquee
