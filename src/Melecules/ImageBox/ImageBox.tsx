import React, { FC } from 'react'
import MyImage from '../../Atoms/MyImage/MyImage'
import Text from '../../Atoms/Text/Text'
import style from './style.module.scss'

type ImageBoxType = {
  url : string,
  className ?: string,
  classImg ?: string,
  classHoverElement ?: string,
  onClick ?: (e: any) => void,
}

const ImageBox:FC<ImageBoxType> = ({ url, className='', classImg='', classHoverElement = '',onClick = (e) => {}}) => {
  return (
    <div className={`${style.ImageBox} overflow-hidden flex flex-col justify-center items-center relative ${className}`}>
      <MyImage onClick={(e) => onClick(e)} className={`${classImg} mb-1 cursor-pointer border border-red-500 border-dashed border-opacity-0 hover:border-opacity-100`} url={url} />

      <Text className='text-lg font-bold text-gray-600'>Smartphones</Text>
      <Text onClick={(e) => onClick(e)} className={`${classHoverElement} text-lg w-full absolute left-0 right-0 bottom-0 bg-white z-20 text-red-400 underline cursor-pointer`}>Wiew more</Text>
    </div>
  )
}

export default ImageBox