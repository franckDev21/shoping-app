import React, { FC } from 'react'
import './style.scss'

interface HamburgerMenuProps{
  className ?: string;
  parentIsHover ?: boolean;
  isPrincipalMenu ?: boolean;
  onClick ?: (e: any) => void
}

const HamburgerMenu: FC<HamburgerMenuProps> = ({ className='', parentIsHover = false, isPrincipalMenu = false, onClick }) => {
  return (
    <div onClick={onClick} className={`${className} cursor-pointer menu ${parentIsHover ? 'anim':''} ${isPrincipalMenu ? 'menu--principal':''}`}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default HamburgerMenu