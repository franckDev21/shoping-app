import React, { FC } from 'react'
import Card from '../../Melecules/Card/Card'
import ProductCard from '../../Melecules/ProductCard/ProductCard'
import { oneProduct } from '../../Utils/data'

type SpecialProductType = {
  className ?: string
}

const SpecialProduct:FC<SpecialProductType> = ({ className='' }) => {

  return (
    <Card className={`${className}`} classTitle='' name='Special Products' line>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        <ProductCard reduction product={oneProduct} />  
      </div>
    </Card>
  )
}

export default SpecialProduct