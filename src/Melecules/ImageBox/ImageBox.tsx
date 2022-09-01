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
  name ?: string
}

const ImageBox:FC<ImageBoxType> = ({ url, className='', classImg='', classHoverElement = '',onClick = (e) => {}, name=''}) => {
  return (
    <div className={`${style.ImageBox} overflow-hidden flex flex-col justify-center items-center relative ${className}`}>
      <MyImage onClick={(e) => onClick(e)} className={`${classImg} mb-1 cursor-pointer border border-red-500 border-dashed border-opacity-0 hover:border-opacity-100`} url={url} />

      <Text className='text-lg font-semibold text-gray-500'>{name ? name : 'Smartphones'}</Text>
      <Text onClick={(e) => onClick(e)} className={`${classHoverElement} text-lg w-full absolute left-0 text-center  bottom-0 z-20 text-red-400 underline cursor-pointer`}>Wiew more</Text>
    </div>
  )
}

export default ImageBox