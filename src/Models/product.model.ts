export default interface Product {
  id : number,
  name : string,
  images : string[],
  description : string,
  price : number,
  reductionPrice ?: number|null,
  countStart : number
} 