import React, { FC } from 'react'
import Button from '../../Atoms/Button/Button'
import InputFile from '../../Atoms/InputFile/InputFile'

type NewsletterType = {
  className ?: string,
  title ?: string,
}

const Newsletter:FC<NewsletterType> = ({ className='', title='Sign Up For Newsletter' }) => {
  return (
    <div className={`${className} pt-4 mt:pt-0`}>
      <h1 className='md:mb-4 text-gray-700 mb-1 w-full text-2xl font-semibold pb-3'>{title}</h1>
      <div className='flex w-full overflow-hidden rounded-md'>
        <InputFile placeholder='Your email address' className='w-[80%] py-2.5' />
        <Button className='uppercase lg:w-[20%] text-sm px-4'>subscribe</Button>
      </div>
    </div>
  )
}

export default Newsletter