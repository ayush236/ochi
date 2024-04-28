import { motion } from 'framer-motion';
import React from 'react'
import { HiArrowLongUp } from "react-icons/hi2";


function LandingPage() {



  return (
    <div data-scroll data-scrool-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className='textstructure mt-40 px-20'>
        {["We Create", "Eye Opening", "Presentation"].map((item,index)=>{
                    return<div className='masker '>
                        <div className='w-fit flex py-1 items-end overflow-hidden'>
                            {index === 1 && (
                            <motion.div 

                            initial={{width:0}}
                            animate={{width:"7vw"}}
                            transition={{ease:[0.76, 0, 0.24, 1], duration:1.2 }}
                            
                            
                             className='mr-4 w-[7vw] rounded-md h-[4.7vw]  relative bg-green-500'></motion.div>
                        )}
                    <h1 key={index} className='uppercase text-7xl leading-[5vw] tracking-tighter font-["Founders_Grotesk"] font-medium'>
                        {item}</h1>

                        </div>
                </div>
                })}
            
    

        </div>
        <div className='border-t-[1px] border-zinc-700 mt-32 flex justify-between px-20 py-8'>
            {["For Public and Private Companies","From the first pitch to IPO"].map((item,index)=>(
                <p className='text-md font-lighter leading-none tracking-tighter  '>{item}</p>
            ))}
            <div className='start flex gap-1'>
                <div className='border-[1px] rounded-full border-zinc-500  px-3 py-2 uppercase  tracking-tighter font-semibold text-sm'>Start the project</div>
                <div className=' w-10 h-10 icon border-[1px] border-zinc-500 rounded-full flex justify-center items-center '>
                    <span className='rotate-[45deg]'>
                    <HiArrowLongUp />
                    </span>
                    </div>

            </div>

        </div>

      
    </div>
  )
}

export default LandingPage
