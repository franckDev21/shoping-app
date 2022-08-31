import React, { FC, ReactNode } from 'react'

type TextType = {
  children ?: ReactNode,
  className ?: string,
  onClick ?: (e: any) => void,
}

const Text:FC<TextType> = ({ children, className='', onClick }) => {
  return (
    <div onClick={onClick} className={`${className}`}>{children}</div>
  )
}

export default Text