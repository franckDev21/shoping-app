import React, { FC } from 'react'

type MyImageType  = {
  url : string,
  alt ?: string,
  className ?: string,
  width ?: number,
  height ?: number,
  onClick ?: (e: any) => void,
}

const MyImage: FC<MyImageType> = ({ url, alt = 'image', className = '', width=200, height=200, onClick}) => {
  return (
    <img onClick={onClick} width={width} height={height} className={`rounded-full ${className}`} src={url} alt={alt} />
  )
}

export default MyImage