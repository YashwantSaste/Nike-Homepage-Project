import React from 'react'
import Button from './Button';
import shoe8 from "../assets/images/shoe8.svg"
const SuperQuality = () => {
  return (
    <div id='about-us'
    className='flex items-center justify-center max-lg:flex-col gap-10 w-full'>
    <div className='flex flex-1 flex-col'>
      <h1 className='font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82]'>
        We Provide you {" "}
        <span className='text-coral-red inline-block font-montserrat font-medium mt-3'>Super Quality</span>
        {" "}
        Shoes
      </h1>
      <p className='lg:max-w-lg info-text my-4 '>
        Ensuring premium comfort and style, our meticulously crafted footwear is designed
        to evaluate your Experience, providing you with unmatched quality, innovation and
        a touch of elegance
      </p>
      <p className='mt-4 lg:max-w-lg info-text mb-8'>
        Our dedication to detail and excellence ensures your satisfaction 
      </p>
      <div className='flex justify-start'>
      <Button label={"View Details"}/>
      </div>
    </div>
    <div className='flex flex-1 justify-center items-center'>
      <img
        src={shoe8}
        width={570}
        height={570}
      />
    </div>
    </div>
  )
}

export default SuperQuality