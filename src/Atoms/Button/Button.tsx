import React, { FC, ReactNode } from 'react'
import style from './style.module.scss'

type ButtonType = {
  children : ReactNode,
  className ?: string,
  rounded ?: number,
  onClick ?: (e: any) => void
}

const Button: FC<ButtonType> = ({ children, className = '', rounded = 1.2, onClick }) => {
  return (
    <button 
      onClick={onClick}
      style={{ borderRadius: `${rounded}rem` }}
      className={`clean-btn bg-gradiant text-white ${className} ${style.button}`}>
      {children}
    </button>
  )
}

export default Button