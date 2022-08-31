import React, { FC, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MyIcon from '../../Atoms/MyIcon/MyIcon';
import Text from '../../Atoms/Text/Text';
import Card from '../../Melecules/Card/Card';
import ImageBox from '../../Melecules/ImageBox/ImageBox';
import Category from '../../Models/category.model';
import { categories } from '../../Utils/data';

type HotCategoryType = {
  className ?: string
}

const HotCategory:FC<HotCategoryType> = ({ className='' }) => {

  const [hotCategories,setHotCategories] = useState<Category[]>([]);

  const navigate = useNavigate()

  // get 5 first hot categories product before component load
  useEffect(() => {
    // call api for get hot categories
      // success => updated state
      // error => show <Error> component + refresh btn in header Card
    // fake data
    setHotCategories(categories)
  },[])

  return (
    <Card 
      name='Hot Categories'
      line
      className={`${className}`}
      header={
        <Text>
          <MyIcon className='mr-2 hover:bg-red-500 hover:text-white transition ease-in-out duration-300' width={27} height={27} />
          <MyIcon className='hover:bg-red-500 hover:text-white transition ease-in-out duration-300' width={27} height={27} />
        </Text>
      }
    >
      <div className="grid grid-cols-5 gap-6">
        {hotCategories.map(category => (
          <ImageBox 
            key={category.id}
            url={category.image}
            onClick={e => {
              navigate(`/category/${category.id}/show`)
            }}
          />
        ))}
      </div>
    </Card>
  )
}

export default HotCategory