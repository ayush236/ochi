import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Featured() {

  const[isHovering,setHovering] = useState(false)
  const[isHover,setHover]=useState(false)
  
  return (
    <div className='w-full py-20'>
      <div className='w-full px-10 border-b-[1px] border-zince-700 pb-20'>
        <h1 className='text-6xl tracking-tight'>Featured Projects</h1>
      </div>
      <div className='px-20'>
      <div className='cards w-full flex gap-10 mt-14 '>
          <div onMouseEnter={()=>setHovering(true)} onMouseLeave={()=>setHovering(false)} className='cardcontainer relative  w-1/2 h-[70vh] '>
            
            <div className='card w-full h-full rounded-xl bg-zinc-500 overflow-hidden'>
              <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" />
            </div>
          </div>
          <div onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}} className='cardcontainer relative w-1/2 h-[70vh]  '>
          <h1 className='uppercase absolute flex overflow-hidden text-[#CDEA68] text-8xl font-semibold right-full translate-x-1/2 -translate-y-1/2 top-1/2 '> 
          {"VISE".split('').map((item,index)=><motion.span

          initial={{y:"100%"}}
          animate={isHover ? {y:"0"}: {y:"100%"}}
          transition={{ease:[0, 0.55, 0.45, 1], delay: index*.06}}


          className='inline-block'>{item}</motion.span>)}
          </h1>
          <h1 className='uppercase  absolute flex overflow-hidden text-[#CDEA68] text-8xl font-semibold left-0 -translate-x-1/2 -translate-y-1/2 top-1/2 '> 
            {"FYDE".split('').map((item,index)=><motion.span
             initial={{y:"100%"}} 
             animate= {isHovering ? {y:"0"} : {y:"100%"}}
             transition={{ease:[0, 0.55, 0.45, 1], delay: index*.06}}
             className='inline-block  '>{item}</motion.span>)}
            </h1>
          <div className='card w-full h-full rounded-xl bg-zinc-500 overflow-hidden '>
          <img className='w-full h-full bg-cover ' src="https://ochi.design/wp-content/uploads/2022/09/VISE1-1340x740.jpg" />
          </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Featured
