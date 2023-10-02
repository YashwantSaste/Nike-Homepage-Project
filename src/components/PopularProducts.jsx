import React from 'react'
import { products } from '../constants'
import { star } from '../assets/icons'
const PopularProducts = () => {
  return (
    <div id='sections' className='max-container max-sm:mt-12'>
    <div className='flex flex-col justify-start gap-5'>
    <h2 className='text-4xl font-palanquin font-bold'>
    Our {" "}
      <span className='text-coral-red'>
      Popular {" "}
      </span> 
      Products
    </h2>
    <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
      Experience top notch quality and style with our sought-after selections
      Discover a world of comfort, design and value
    </p>
    <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
      {
        products.map((product)=>{
          return(
            <div key={product.name} className='flex flex-1 flex-col w-full max-sm:w-full'>
              <img
                src={product.imgURL}
                width={"280px"}
                height={"280px"}
                />
                <div className='mt-8 flex justify-start gap-2.5'>
                  <img
                    src={star} alt='ratings'
                    width={24} height={24}
                    />
                    <img
                    src={star} alt='ratings'
                    width={24} height={24}
                    />
                    <img
                    src={star} alt='ratings'
                    width={24} height={24}
                    />
                    <img
                    src={star} alt='ratings'
                    width={24} height={24}
                    />
                    <p className=' font-montserrat text-xl leading-normal text-slate-gray'>4</p>
                </div>
                <p className='mt-2 text-2xl font-palanquin font-semibold leading-normal'>{product.name}</p>
                <p className='font-montserrat text-coral-red mt-2 font-semibold'>{product.price}</p>
            </div>
          )
        })
      }
    </div>
    </div>
    </div>
  )
}

export default PopularProducts