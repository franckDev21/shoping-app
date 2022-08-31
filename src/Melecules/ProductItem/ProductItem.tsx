import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import MyImage from '../../Atoms/MyImage/MyImage'
import Text from '../../Atoms/Text/Text'
import Product from '../../Models/product.model'

type ProductItemType = {
  className ?: string,
  product : Product
}

const ProductItem:FC<ProductItemType> = ({ className='', product }) => {
  const navigate = useNavigate()

  const goToPage = (url : string):void =>{
    navigate(url)
  }

  return (
    <div className={`p-4 text-center bg-gray-100 rounded-md ${className}`}>
      <div className='cursor-pointer'>
        {/* <MyImage width={240} height={240} url={images[0]} /> */}
        <MyImage width={240} height={240} url={product.images[1]} />
      </div>
      <Text>
        {[1,2,3,4,5].map(star => (
          <span key={star} className='w-2.5 h-2.5 bg-yellow-300 mx-1 inline-block'></span>
        ))}
      </Text>
      <Text onClick={(e) => goToPage(`/product/${product.id}/show`)} className='cursor-pointer transition hover:text-red-400'>{product.name}</Text>
      <Text className='mt-2 font-extrabold text-gray-800'>${product.price}</Text>
    </div>
  )
}

export default ProductItem