import React, { FC, ReactNode } from 'react'

type MyIconType = {
  children ?: ReactNode,
  className ?: string,
  onClick ?: (e: any) => void,
  width ?: number,
  height ?: number
}

const MyIcon: FC<MyIconType> = ({ children, className, onClick , width, height}) => {
  return (
    <span style={{ height, width}} onClick={onClick} className={`inline-flex justify-center items-center w-10 h-10 transition-all cursor-pointer hover:text-red-500 text-gray-600 bg-gray-100 rounded-full ${className || ''}`}>
      {children}
    </span>
  )
}

export default MyIcon