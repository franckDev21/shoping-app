import React, { FC } from 'react'
import Card from '../../Melecules/Card/Card'
import ProductDelayCard from '../../Melecules/ProductDelayCard/ProductDelayCard';
import { oneProduct } from '../../Utils/data';

type DealOfTheDayCardType = {
  className ?: string
}

const DealOfTheDayCard:FC<DealOfTheDayCardType> = ({ className='' }) => {
  
  return (
    <Card className={`${className}`} classTitle='text-[1.68rem]' name='Deal Of The Day' line>
      <div className="grid grid-cols-2 gap-8">
        <ProductDelayCard product={oneProduct} />
      </div>
    </Card>
  )
}

export default DealOfTheDayCard