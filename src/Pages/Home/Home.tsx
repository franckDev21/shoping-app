import React, { ChangeEvent, FC } from 'react'
import Button from '../../Atoms/Button/Button'
import InputFile from '../../Atoms/InputFile/InputFile'
import MyIcon from '../../Atoms/MyIcon/MyIcon'
import MyImage from '../../Atoms/MyImage/MyImage'
import Title from '../../Atoms/Title/Title'
import ImageBox from '../../Melecules/ImageBox/ImageBox'
import InputGroup from '../../Melecules/InputGroup/InputGroup'
import ProductItem from '../../Melecules/ProductItem/ProductItem'

import Phone from '../../image/cache/catalog/category/1-190x190.png'
import Card from '../../Melecules/Card/Card'
import HotCategory from '../../Organismes/HotCategory/HotCategory'
import AuthLayout from '../../Templates/AuthLayout/AuthLayout'
import { products } from '../../Utils/data'

type HomeType = {}

const Home:FC<HomeType> = () => {
  const handleOnchangeEvent = (e: ChangeEvent<HTMLInputElement> ) => {
    console.log(e.target.value)
  }

  const handleOnClick = (e: ChangeEvent<HTMLButtonElement> ) => {
    console.log(e.target,'click')
  }

  return (
    <AuthLayout>
      <div className='text-center min-h-screen bg-slate-100 flex flex-col items-center justify-center'>

        <div className="text-center text-4xl font-bold text-violet-700">Shoping App</div>
        <InputFile
          placeholder='Entrer votre nom'
          onChange={handleOnchangeEvent}
          className='w-1/2 my-4 bg-white text-gray-600'
        />

        <Title className='text-center'>Title</Title>

        <Button onClick={handleOnClick} className='py-10'>Mon bouton</Button>

        <MyIcon className='bg-white shadow-md'>
          <svg className='w-6 h-6' viewBox="0 0 129 129" id="heart">
            <path fill='currentColor' d="m121.6,40.1c-3.3-16.6-15.1-27.3-30.3-27.3-8.5,0-17.7,3.5-26.7,10.1-9.1-6.8-18.3-10.3-26.9-10.3-15.2,0-27.1,10.8-30.3,27.6-4.8,24.9 10.6,58 55.7,76 0.5,0.2 1,0.3 1.5,0.3 0.5,0 1-0.1 1.5-0.3 45-18.4 60.3-51.4 55.5-76.1zm-57,67.9c-39.6-16.4-53.3-45-49.2-66.3 2.4-12.7 11.2-21 22.3-21 7.5,0 15.9,3.6 24.3,10.5 1.5,1.2 3.6,1.2 5.1,0 8.4-6.7 16.7-10.2 24.2-10.2 11.1,0 19.8,8.1 22.3,20.7 4.1,21.1-9.5,49.6-49,66.3z"></path>
          </svg>
        </MyIcon>

        <MyImage className='bg-white shadow-md' url={Phone} alt='smartphone' />

        <ProductItem
          product={products[0]}
          className='my-4 shadow-md'
        />

        <InputGroup
          label='Entrer votre nom'
          className='w-full' 
          error='Veuillez entrez un nom valide'
          placeholder='Username ...'
          classBox='mt-4 mx-auto w-1/4 bg-white px-4 py-4'
        />

        <InputGroup 
          label='Email'
          className='w-full'
          placeholder='Adresse email ...'
          classBox='mt-4 mx-auto w-1/4 bg-white px-4 py-4'
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value)
          }}
        />

        <ImageBox 
          className='my-4' 
          classImg='shadow-md'
          classHoverElement='bg-slate-100'
          url={Phone} />

        <Card
          name='Card Name'
          className='w-[80%] my-5'
          line
          header={
            <span>Header</span>
          }
        />

        <HotCategory className='my-5' />

      </div>
    </AuthLayout>
  ) 
}

export default Home