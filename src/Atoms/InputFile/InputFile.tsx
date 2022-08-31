import React, { ChangeEvent, FC } from 'react'
import style from './style.module.scss'

type InputFileType = {
  type ?: string,
  placeholder ?: string,
  className ?: string,
  onChange ?: (e: ChangeEvent<any>) => void
}

const InputFile: FC<InputFileType> = ({ type = 'text' , placeholder, className = '', onChange}) => {
  
  return (
    <input 
      onChange={onChange}
      className={`bg-gray-100 px-4 py-3 clean-btn inline-block ${style.input || ''} ${className}`} 
      type={type} placeholder={placeholder} 
    />
  )
}

export default InputFile