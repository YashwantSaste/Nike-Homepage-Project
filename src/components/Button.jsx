import React from 'react'
import { AiOutlineRightCircle } from "react-icons/ai";

const Button = ({label,fullWidth}) => {
  return (
    <div className={`bg-coral-red border-coral-red border-2 rounded-full text-white font-montserrat
    text-lg flex gap-4 items-center py-3 transition-all duration-300
    px-6 hover:cursor-pointer ${fullWidth && "w-full"}
    hover:scale-110`}>
        <p>{label}</p>
        <AiOutlineRightCircle fill='#ffffff' size={25}/>
    </div>
  )
}

export default Button