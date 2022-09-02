import React, { FC, Fragment } from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { JsxElement } from 'typescript'
import MyImage from '../../Atoms/MyImage/MyImage'
import Text from '../../Atoms/Text/Text'
import Product from '../../Models/product.model'
import StarIcon from '../StarIcon/StarIcon'

type ProductCardType = {
  className ?: string,
  product : Product
}

const ProductCard:FC<ProductCardType> = ({ className='', product }) => {
  const navigate = useNavigate()

  const goToPage = (url : string):void =>{
    navigate(url)
  }

  const generateStar = (count: number): any[] => {
    let tabStar = []
    for(let i = 0; i < count; i++){
      tabStar.push(<StarIcon active />)
    }
    for(let i = 0; i < (5-count); i++){
      tabStar.push(<StarIcon />)
    }
    return tabStar
  }

  return (
    <div className={`flex-none text-center bg-gray-100 rounded-md py-4 ${className}`}>
      <div className='cursor-pointer'>
        {/* <MyImage width={240} height={240} url={images[0]} /> */}
        <MyImage width={240} height={240} url={product.images[1]} />
      </div>
      <Text>
        {generateStar(product.countStart).map((star,i) => <Fragment key={i}>{star}</Fragment>)}
      </Text>
      <Text onClick={(e) => goToPage(`/product/${product.id}/show`)} className='cursor-pointer transition hover:text-red-400'>{product.name}</Text>
      <Text className='mt-2 font-extrabold text-gray-800'>${product.price}</Text>
    </div>
  )
}

export default ProductCard