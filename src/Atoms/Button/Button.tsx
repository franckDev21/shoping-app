import React, { FC, ReactNode } from 'react'
import style from './style.module.scss'

type ButtonType = {
  children : ReactNode,
  className ?: string,
  onClick ?: (e: any) => void
}

const Button: FC<ButtonType> = ({ children, className = '', onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`clean-btn bg-gradiant text-white  ${style.button} ${className} `}>
      {children}
    </button>
  )
}

export default Button