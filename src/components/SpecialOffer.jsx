import React from 'react'
import offer from "../assets/images/offer.svg"
import Button from './Button'
const SpecialOffer = () => {
  return (
    <div className='flex justify-center items-center max-xl:flex-col-reverse gap-20 max-container'>

        <div className='flex flex-1'>
            <img 
                src={offer}
                width={773}
                height={687}
                className='object-contain w-full'
            />
        </div>
        <div className='flex flex-1 flex-col gap-6'>
            <h1 className='font-palanquin text-4xl max-sm:text-[72px] max-sm:leading-[82]'> 
                <span className='text-coral-red font-montserrat font-medium'>Special</span>
                {" "}
                Offer
            </h1>
            <p className='font-montserrat text-slate-gray text-lg leading-8  w-[90%]'>
                Embark on a shopping journey that redefines your experience with unbeatable deals.
                From premium selections to incredibly savings, we offer unparalled value that sets up apart
            </p>
            <p className='font-montserrat text-slate-gray text-lg leading-8 w-[90%] mt-4'>
                Navigate a realm of possibilites designed to fulfill your unique desires , surpassing
                the lofiest expectations. Your journey with us is nothing
                short of exceptional
            </p>
            <div className='flex gap-4 mt-4'>
                <Button label={"Shop Now"}/>
                <div className=' bg-slate-300 border-coral-red border-2 rounded-full text-white font-montserrat
                    text-lg flex gap-4 items-center py-3 px-6 hover:cursor-pointer 
                    transition-all duration-300 hover:scale-110'>
                    Learn More
                </div>
            </div>
        </div>

    </div>
  )
}

export default SpecialOffer