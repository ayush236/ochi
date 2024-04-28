import React from 'react'

function About() {
  return (
    <div data-scroll  data-scroll-speed="-.2"   className='w-full py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl  text-black'>
        <h1 className='font-[Neue_Montreal] text-[4vw] leading-[4.5vw] tracking-tight px-4'>
            Ochi is a strategic partner for fast-grow­ing tech businesses that need
         to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great 
         peo­ple.
         </h1>
         <div className='border-t-[1px] border-[#afc06c] w-full mt-20 pt-6 flex'>
            <div className='w-1/2  ml-6'>
                <h1 className='text-5xl font-semibold'>Our approach:</h1>
                <button className='px-9 py-4 bg-zinc-900 rounded-full uppercase text-white font-bold mt-6 flex justify-center items-center gap-5'> Read me
                <div className='bg-white rounded-full h-2 w-2'></div>
                </button>
            </div>
            <div className='w-1/2 h-[35vw] mr-10 rounded-3xl bg-[#959985] '>
            <img className='h-[35vw] rounded-3xl '    src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"/>
            </div>

         </div>
      
    </div>
  )
}

export default About
