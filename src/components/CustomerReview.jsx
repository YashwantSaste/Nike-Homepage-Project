import React from 'react'
import { reviews } from '../constants'
import { star } from '../assets/icons'
const CustomerReview = () => {
  return (
    <div className='max-container'>
        <h1 className='text-4xl font-palanquin text-center font-bold'>
          What Our {" "}
          <span className='text-coral-red leading-normal'>Customers {" "}</span> 
          Say?
        </h1>
        <p className=' m-auto mt-4 max-w-lg text-center'>
          Hear Genuine stories from our satisfied customers about their exceptional experience with us
        </p>
        <div className='mt-24 flex justify-evenly flex-1 items-center max-lg:flex-col gap-14'>
            {
              reviews.map((review,index)=>{
                return(
                  <div key={index}
                  className='flex justify-center items-center flex-col gap-3'>
                  <img
                    src={review.imgURL}
                    className='rounded-full object-cover w-[120px] h-[120px]'
                  />
                  <p className='mt-6 max-w-sm text-center info-text'>{review.feedback}</p>
                  <div className='mt-3 flex justify-center items-center gap-2.5'>
                  <img
                    src={star}
                    alt='ratings'
                    width={24}
                    height={24}
                    className='object-contain m-0'
                  />
                  <p className='text-xl font-montserrat text-slate-gray'>
                  {review.rating}</p>
                  </div>
                  <h3 className='font-bold text-xl font-montserrat'>{review.customerName}</h3>
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default CustomerReview