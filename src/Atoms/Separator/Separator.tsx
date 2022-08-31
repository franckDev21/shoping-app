import React, { FC, ReactNode } from 'react'

interface SeparatorProps{
  className?: string;
  children?: ReactNode;
}

const Separator: FC<SeparatorProps> = ({ className, children }) => {
  return (
    <span className={`translate-y-0.5 inline-block h-3.5 w-[1.4px] bg-gray-400 mx-6 ${className ?? className}`}>
      {children}
    </span>
  )
}

export default Separator