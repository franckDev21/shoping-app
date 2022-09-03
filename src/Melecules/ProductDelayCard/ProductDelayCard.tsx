import React, { FC, Fragment } from 'react'
import Text from '../../Atoms/Text/Text'
import Title from '../../Atoms/Title/Title'
import Product from '../../Models/product.model'
import { formatCurrency, generateStar } from '../../Utils/functions'

type ProductDelayCardType = {
  className ?: string,
  product : Product,
}

const ProductDelayCard:FC<ProductDelayCardType> = ({ className='', product }) => {

  // const calculReduction = (reduction: number) => {
  //   return (product.price - reduction)
  // }

  return (
    <div className={`${className} sm:flex items-start rounded-md justify-start bg-gray-100`}>
      <div className='relative mr-3 sm:w-[160px]'>
        {/* <span>{calculReduction(product.reductionPrice || 0)}</span> */}
        <span className="absolute z-20 rounded px-2 text-xs py-0.5 bg-gray-800 text-white top-2.5 right-2">15%</span>
        <img width={157} src={product.images[1]} alt="produit" />
      </div>
      <div className='pt-3 sm:w-[calc(100%-160px)] pr-4 pl-3 sm:pl-0'>
        <Title className='text-xl'>{product.name}</Title>
        <Text>
          {generateStar(product.countStart).map((star, i) => (
            <Fragment key={i}>{star}</Fragment>
          ))}
        </Text>
        <Text className="flex items-center text-lg mt-1">
          <span className="font-semibold mr-2">{formatCurrency(product.price)}</span>{" "}
          <span className="line-through text-sm text-gray-400">$122.00</span>
        </Text>
        <Text className='text-sm text-gray-400 mt-2 mb-3 border-b pb-3 border-gray-300'>
          Interdum et malesuada fames ac ante ipsum primis in
        </Text>
        <div className='sm:pr-4'>
          <div className='flex pb-3 items-center '>
            <div className="flex text-gray-500 text-sm justify-center items-center flex-col w-1/4 sm:mr-2">
              <span className="text-gray-800 font-semibold w-[3rem] h-[3rem] text-xl sm:text-sm sm:h-8 sm:w-8 xl:w-10 xl:h-10 inline-flex justify-center items-center rounded-full bg-white ">83</span>
              <span>Days</span>
            </div>
            <div className="flex text-gray-500 text-sm justify-center items-center flex-col w-1/4 sm:mr-2">
              <span className="text-gray-800 font-semibold w-[3rem] h-[3rem] text-xl sm:text-sm sm:h-8 sm:w-8 xl:w-10 xl:h-10 inline-flex justify-center items-center rounded-full bg-white ">5</span>
              <span>Hrs</span>
            </div>
            <div className="flex text-gray-500 text-sm justify-center items-center flex-col w-1/4 sm:mr-2">
              <span className="text-gray-800 font-semibold w-[3rem] h-[3rem] text-xl sm:text-sm sm:h-8 sm:w-8 xl:w-10 xl:h-10 inline-flex justify-center items-center rounded-full bg-white ">31</span>
              <span>Mins</span>
            </div>
            <div className="flex text-gray-500 text-sm justify-center items-center flex-col w-1/4 sm:mr-2">
              <span className="text-gray-800 font-semibold w-[3rem] h-[3rem] text-xl sm:text-sm sm:h-8 sm:w-8 xl:w-10 xl:h-10 inline-flex justify-center items-center rounded-full bg-white ">5</span>
              <span>secs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDelayCard