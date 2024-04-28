import React from 'react'
import LeftCard from './CardsComponents/LeftCard'


function Cards() {
  return (
    <div data-scroll data-scroll-sticky   className=' w-full h-screen px-10 flex gap-5 bg-zinc-100 items-center '>
        <div className=' cardcontainer  w-1/2 h-[50vh]'>
            <LeftCard />
        </div>

        <div className=' cardcontainer flex gap-5 w-1/2 h-[50vh]'>
            <div className='w-1/2 h-full relative rounded-3xl bg-zinc-800 flex items-center justify-center'>
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' className='h-20' />
                <button className='absolute bottom-10 left-10 tracking-tighter leading-none border-2 px-2 py-2 rounded-full'>RATING 5.0 ON CLUTCH</button>
            </div>
            <div className='w-1/2 f-full relative rounded-3xl bg-zinc-800 flex justify-center items-center'>
                <img src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' className='h-24' />
                <button className='absolute bottom-10 left-3 border-2 rounded-full px-2 py-2 tracking-tighter leading-none'>BUSINESS BOOTCAMP ALUMI</button>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
