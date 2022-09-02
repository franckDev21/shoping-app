import Product from "../Models/product.model";
import Category from "../Models/category.model";
import { DropdownItem } from "../types/allType";

import cat1 from '../image/cat1.png'
import montre1 from '../image/montre1.jpg'
import montre2 from '../image/montre2.jpg'
import jupe1 from '../image/jupe1.jpg'
import jupe2 from '../image/jupe2.jpg'
import frigo1 from '../image/frigo1.jpg'
import frigo2 from '../image/frigo2.jpg'
import cat2 from '../image/cat2.png'
import cat3 from '../image/cat3.png'
import cat4 from '../image/cat4.png'
import cat5 from '../image/cat5.png'

export const products: Product[] = [
  {
    id : 1,
    name : 'Nullam molestie accumsan justo',
    price : 123.20,
    description: 'desc',
    images : [montre1,montre2],
    countStart : 2
  },
  {
    id : 1,
    name : 'Cras dapibus purus malesuada iaculis imperdiet',
    price : 122.00,
    description: 'desc',
    images : [jupe1,jupe2],
    countStart : 1
  },
  {
    id : 1,
    name : 'lacinia nisl sed nibh vulputate',
    price : 143.05,
    description: 'desc',
    images : [frigo1,frigo2],
    countStart : 4
  }
]


export const categories: Category[] = [
  {
    id : 1,
    name : 'Women',
    image : cat1
  },
  {
    id : 2,
    name : 'Desktops',
    image : cat2
  },
  {
    id : 3,
    name : 'Laptops & Notebooks',
    image : cat3
  },
  {
    id : 4,
    name : 'Components',
    image : cat4
  },
  {
    id : 5,
    name : 'Tables',
    image : cat5
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