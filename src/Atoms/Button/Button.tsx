import React, { FC, ReactNode } from 'react'
import style from './style.module.scss'

type ButtonType = {
  children : ReactNode,
  className ?: string,
  onClick ?: (e: any) => void
  onHover ?: (e: any) => void
  onLeave ?: (e: any) => void
}

const Button: FC<ButtonType> = ({ children, className = '', onClick, onHover, onLeave }) => {
  return (
    <button 
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`clean-btn bg-gradiant text-white py-3 px-6  ${style.button} ${className} `}>
      {children}
    </button>
  )
}

export default Button