import React, { FC } from 'react'
import './style.scss'

interface HamburgerMenuProps{
  className ?: string;
  parentIsHover : boolean;
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ className='', parentIsHover = false }) => {
  return (
    <div className={`${className} menu ${parentIsHover ? 'anim':''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default HamburgerMenu