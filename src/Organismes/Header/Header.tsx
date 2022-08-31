import React, { FC } from 'react'

type HeaderType = {
  className ?: string
}

const Header: FC<HeaderType> = ({ className='' }) => {
  return (
    <header className={`${className}`}>
      Header
    </header>
  )
}

export default Header