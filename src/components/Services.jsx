import React from 'react'
import { services } from '../constants'
const Services = () => {
  return (
    <div className='flex justify-center gap-9 flex-wrap max-container'>
      {
        services.map((service,index)=>{
          return(
            <div className='flex flex-1 flex-col sm:w-[350px] sm:min-w-[350px] rounded-[20px] shadow-3xl
            px-8 py-12' key={index}>
              <div className=' bg-red-600 rounded-full w-fit p-2'>
                <img src={service.imgURL}/>
              </div>
              <p className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
                {service.label}
              </p>
              <p className='text-slate-gray text-lg mt-5'>
                {service.subtext}
              </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Services