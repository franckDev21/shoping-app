import Product from "../Models/product.model";
import Product1 from '../image/cache/catalog/product/37-272x272.jpg'
import Product2 from '../image/cache/catalog/product/38-272x272.jpg'
import Category from "../Models/category.model";
import { DropdownItem } from "../types/allType";

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


export const currencies: DropdownItem[] = [
  {  // default value
    identifiant : '$',
    value : 'Currency',
    isDefaultValue : true
  },
  {
    identifiant : '€',
    value : 'Euro',
    isDefaultValue : false
  },
  {
    identifiant : '$',
    value : 'US Dollar',
    isDefaultValue : false
  },
  {
    identifiant : 'F',
    value : 'FCFA',
    isDefaultValue : false
  }
]

export const langs: DropdownItem[] = [
  {   // default value
    identifiant : <img className="flag-lang" alt="english" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" />,
    value : 'Language',
    isDefaultValue : true
  },
  {
    identifiant : <img className="flag-lang" alt="english" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png" />,
    value : 'English',
    isDefaultValue : true
  },
  {
    identifiant : <img className="flag-lang" alt="French" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Flag_of_France_%28lighter_variant%29.svg/250px-Flag_of_France_%28lighter_variant%29.svg.png" />,
    value : 'French',
    isDefaultValue : false
  }
]

// https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/langfr-225px-Flag_of_the_United_Kingdom_%283-5%29.svg.png