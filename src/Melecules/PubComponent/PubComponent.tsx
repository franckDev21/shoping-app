import React, { FC } from 'react'
import PubCard from '../PubCard/PubCard'
import Pub1 from '../../image/row1.jpg'
import Pub2 from '../../image/row2.jpg'
import Pub3 from '../../image/row3.jpg'

type PubComponentType = {
  className ?: string
}

const PubComponent: FC<PubComponentType> = ({ className='' }) => {
  return (
    <div className={`${className} grid grid-cols-3 gap-8`}>
      <PubCard url={Pub1} />
      <PubCard url={Pub2} />
      <PubCard url={Pub3} />
    </div>
  )
}

export default PubComponent