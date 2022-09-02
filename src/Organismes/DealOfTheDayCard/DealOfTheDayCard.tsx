import React, { FC } from 'react'
import Card from '../../Melecules/Card/Card'

type DealOfTheDayCardType = {
  className ?: string
}

const DealOfTheDayCard:FC<DealOfTheDayCardType> = ({ className='' }) => {
  return (
    <Card className={`${className}`} classTitle='text-[1.68rem]' name='Deal Of The Day' line>

    </Card>
  )
}

export default DealOfTheDayCard