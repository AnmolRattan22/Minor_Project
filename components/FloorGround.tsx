import React from 'react'

function FloorGround() {
  return (
    <div  className='h-screen w-screen bg-gray-700 flex flex-col '>
        
        <div className='absolute bottom-20 right-40  h-60 w-70 bg-[#00ff00] flex justify-center items-center'>LT2
            <div className='absolute w-2 h-10 bg-black top-2 left-0'></div>
            <div className='absolute w-2 h-10 bg-black top-2 right-0'></div>
        </div>

        <div className='absolute bottom-20 left-150 h-60 w-70 bg-[#00ff00]  flex justify-center items-center'>DLC
            <div className='absolute w-2 h-10 bg-black top-2 left-0'></div>
            <div className='absolute w-2 h-10 bg-black top-2 right-0'></div>    
        </div>

       <div className='absolute top-20 left-40    h-30 w-40 bg-[#00ff00] flex justify-center items-center'>CR3
            <div className='absolute w-2 h-10 bg-black top-2 left-0'></div>
            <div className='absolute w-2 h-10 bg-black top-2 right-0'></div>
        </div>
        <div className='absolute top-20 left-85    h-30 w-40 bg-[#00ff00] flex justify-center items-center'>CR4
            <div className='absolute w-2 h-10 bg-black top-2 left-0'></div>
            <div className='absolute w-2 h-10 bg-black top-2 right-0'></div>
        </div>
        <div className='absolute top-60 left-0    h-50 w-40 bg-[#00ff00] flex justify-center items-center'>Admission Cell
            <div className='absolute w-2 h-10 bg-black top-2 left-0'></div>
            <div className='absolute w-2 h-10 bg-black top-2 right-0'></div>
        </div>
        <div className='absolute bottom-20 left-30    h-60 w-80 bg-[#00ff00] flex justify-center items-center'>cl7 ,8
            <div className='absolute w-10 h-2 bg-black top-2 left-50'></div>
            <div className='absolute w-10 h-2 bg-black top-2 right-35'></div>
            <div className='absolute h-50 w-1 bg-black bottom-0 right-30'></div>
            <div className='absolute h-50 w-1 bg-black bottom-0 right-55'></div>
        </div>


    </div>
  )
}

export default FloorGround