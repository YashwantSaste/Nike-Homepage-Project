import React from 'react'

const ShoeCard = ({imageUrl, bigShoeImage, changeBigShoeImage}) => {
    const clickHandler=()=>{
        if(bigShoeImage!==imageUrl.thumbnail){
            changeBigShoeImage(imageUrl.thumbnail)
        }
    }
  return (
    <div className={`border-2 rounded-xl 
    ${bigShoeImage===imageUrl ? "border-coral-red":"border-transparent"}
    cursor-pointer max-sm:flex-1`}
    onClick={clickHandler}>
     <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imageUrl}
          alt='shoe colletion'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  )
}

export default ShoeCard