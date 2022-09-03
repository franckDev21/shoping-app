import React, { FC } from 'react'
import Card from '../../Melecules/Card/Card'

type CategoriesProductType = {
  className ?: string
}

const CategoriesProduct: FC<CategoriesProductType> = ({ className='' }) => {
  return (
    <Card className={`${className} text-[1.7rem]`} classTitle='' name='Categories Products' line>

    </Card>
  )
}

export default CategoriesProduct