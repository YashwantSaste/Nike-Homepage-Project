import React from 'react'
import Button from './Button'

const Subscribe = () => {
  return (
    <div id='contact-u' 
    className='max-container flex justify-between items-center max-lg:flex-col gap-10'>
      <h1 className='text-center text-4xl leading-[68px] font-palanquin'>
        Sign Up for {" "}
        <span className='text-coral-red font-semibold'>Updates</span> 
        {" "}
        & Newsletter
      </h1>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border
      sm:border-slate-gray rounded-full'>
        <input
          type='text'
          placeholder='subscribe@nike.com'
          className='input'
        />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button label={"Sign Up"} fullWidth/>
        </div>
      </div>
    </div>
  )
}

export default Subscribe