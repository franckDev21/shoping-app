import StarIcon from "../Melecules/StarIcon/StarIcon";

export const extraiText = (text: string, maxLength: number = 30) => {
  let newContent = [];
  for (let i = 0; i < text.length; i++) {
    if (i+1 <= (maxLength - 3)) {
      newContent.push(text[i]);
    }
  }

  if(text.length >= (maxLength - 3)){
    return newContent.join("")+'...'
  }
  return text
};

export const formatCurrency = (number: number,currency: string = 'USD') => {
 return '$'+(new Intl.NumberFormat("de-DE", {style: "currency", currency}).format(number)).replace('$','');
}


export const generateStar = (count: number): any[] => {
  let tabStar = [];
  for (let i = 0; i < count; i++) {
    tabStar.push(<StarIcon active />);
  }
  for (let i = 0; i < 5 - count; i++) {
    tabStar.push(<StarIcon />);
  }
  return tabStar;
};
