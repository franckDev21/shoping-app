import React, { FC, ReactNode } from 'react'
import style from './style.module.scss'

type ButtonType = {
  children : ReactNode,
  className ?: string,
  onClick ?: (e: any) => void,
  onHover ?: (e: any) => void,
  onLeave ?: (e: any) => void,
  bg ?: boolean
}

const Button: FC<ButtonType> = ({ children, className = '', onClick, onHover, onLeave, bg=true }) => {
  return (
    <button 
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`clean-btn ${bg ? 'bg-gradiant':''} text-white  ${style.button} ${className} `}>
      {children}
    </button>
  )
}

export default Button