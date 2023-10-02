import React, { useState } from 'react'
import Button from './Button'
import { statistics, shoes } from '../constants';
import bigshoe1  from "../assets/images/big-shoe1.png";
import ShoeCard from './ShoeCard';
const HeroSection = () => {
  const [bigShoeImage, setBigShoeImage]=useState(bigshoe1)
  return (
    
    <div id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen max-container'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer Collections
        </p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82]'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
              The New Arrivals
          </span>
          <br/>
          <span className='text-coral-red inline-block font-montserrat font-medium mt-3'>
            Nike {" "}
          </span>
          {" "}
          Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life
        </p>
        <Button label={'Shop Now'}/>
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
        {
          statistics.map((stat,index)=>{
            return(
              <div key={index}>
                <p className='font-palanquin text-4xl font-bold'>{stat.value}</p>
                <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
              </div>
            )
          })
        }
      </div>
    </div>
    <div className='flex items-center justify-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero
     bg-cover bg-center'>
      <img src={bigshoe1}
        alt='shoe-collection'
        width={619}
        height={500}
        className=' object-contain relative z-10'
      />
      <div className='flex sm:gap-6 gap-4 absolute top-[13%] max-xl:hidden'>
          {
            shoes.map((shoe,index)=>{
              return(
                <div key={index}>
                  <ShoeCard
                    imageUrl={shoe.thumbnail}
                    changeBigShoeImage={(shoeItem)=>{setBigShoeImage(shoeItem)}}
                    bigShoeImage={bigShoeImage}
                  />
                  
                </div>
              )
            })
          }
        </div>
      </div>
        
    </div>
    
  )
}

export default HeroSection