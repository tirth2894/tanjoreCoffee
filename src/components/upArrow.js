import React from 'react'
import { FaArrowUp } from "react-icons/fa";


function UpArrow() {
  return (
    <a href="#home">
      <div className='fixed bottom-3 right-2 w-10 border-2 border-black h-10 mr-2 flex justify-center items-center rounded-full bg-[#a06451]'>
        <FaArrowUp className='h-6 w-6 text-white' />
      </div>
    </a>

  )
}

export default UpArrow
