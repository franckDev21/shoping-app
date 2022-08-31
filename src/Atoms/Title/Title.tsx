import React, { FC, ReactNode } from 'react'

type TitleType = {
  children : ReactNode,
  className ?: string
}

const Title: FC<TitleType> = ({ children, className }) => {
  return (
    <h1 className={` text-gray-800 font-semibold text-3xl ${className}`}>
      {children}
    </h1>
  )
}

export default Title