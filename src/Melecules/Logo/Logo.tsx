import React, { FC } from 'react'
import LogoImg from '../../image/logo.png';

type LogoType = {
  width ?: number,
  height ?: number,
  className ?: string,
  classBox ?: string,
}

const Logo:FC<LogoType> = ({ width=100, height=100, className='', classBox='' }) => {
  return (
    <div className={`${classBox}`}>
      <img className={`${className}`} width={width} height={height} src={LogoImg} alt="logo" />
    </div>
  )
}

export default Logo