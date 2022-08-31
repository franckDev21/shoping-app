import Product from "../Models/product.model";
import Product1 from '../image/cache/catalog/product/37-272x272.jpg'
import Product2 from '../image/cache/catalog/product/38-272x272.jpg'
import Category from "../Models/category.model";

export const products: Product[] = [
  {
    id : 1,
    name : 'I Watch apple',
    price : 1235,
    description: 'desc',
    images : [Product1,Product2],
    countStart : 4
  }
]


export const categories: Category[] = [
  {
    id : 1,
    name : 'category name 1',
    image : Product1
  },
  {
    id : 2,
    name : 'category name 2',
    image : Product1
  },
  {
    id : 3,
    name : 'category name 3',
    image : Product1
  },
  {
    id : 4,
    name : 'category name 4',
    image : Product1
  },
  {
    id : 5,
    name : 'category name 5',
    image : Product1
  },
]