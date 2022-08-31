import React, { FC } from 'react'

interface SeparatorProps{
  className?: string
}

const Separator: FC<SeparatorProps> = ({ className }) => {
  return (
    <span className={`translate-y-0.5 inline-block h-3.5 w-[1.4px] bg-gray-400 mx-6 ${className ?? className}`}></span>
  )
}

export default Separator