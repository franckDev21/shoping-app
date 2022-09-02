import React, { FC } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

type StarIconType = {
  className ?: string,
  active ?: boolean
}

const StarIcon:FC<StarIconType> = ({ className, active=false }) => {
  return (
    <span className={`${className && className}`}>
      {active ? (<AiFillStar className='inline-block text-[#ffc600]' />):(<AiOutlineStar className='inline-block text-[#ffc600]' />)}
    </span>
  )
}

export default StarIcon