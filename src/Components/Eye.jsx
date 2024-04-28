import React, { useEffect, useState } from 'react'

function Eye() {

  const[rotate, setrotate]=useState(0)


  useEffect(()=>{



    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX;
      let mouseY =e.clientY;

      let deltaX = (mouseX-window.innerWidth/2);
      let deltaY = (mouseY-window.innerHeight/2);

      let angle = Math.atan2(deltaY, deltaX)*(180/Math.PI);
      setrotate(angle-180)
      
    })
  })




  return (
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.6" className=' relative w-full h-full bg-zinc-100 bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
         <div  className='absolute flex gap-10 justify-between top-1/2 left-1/2    -translate-x-[50%] -translate-y-[50%]'>
          <div data-scroll data-section data-scroll-speed="-.3" className= 'w-[15vw] h-[15vw] flex items-center justify-center  bg-zinc-100 rounded-full '>
            
            <div className=' relative  w-2/3 h-2/3  bg-zinc-900 rounded-full'>

              <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full  '>
              <div className='bg-zinc-100 h-[2vw] w-[2vw] rounded-full'></div>
              </div>
            </div>
          </div>
          <div data-scroll data-section data-scroll-speed="-.3" className= 'w-[15vw] h-[15vw] flex items-center justify-center  bg-zinc-100 rounded-full '>


            <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full '>

            <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full  '>
              <div className='bg-zinc-100 h-[2vw] w-[2vw] rounded-full'></div>
              </div>
            </div>
          </div>
          </div> 
        </div>
      
    </div>
  )
}

export default Eye
