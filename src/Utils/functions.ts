export const extraiText = (text: string, maxLength: number = 26) => {
  let newContent = [];
  for (let i = 0; i < text.length; i++) {
    if (i <= maxLength) {
      newContent.push(text[i]);
    }
  }
  return {
    content: newContent.join(""),
    isOverflow: text.length > maxLength,
  };
};

export const formatCurrency = (number: number,currency: string = 'USD') => {
 return (new Intl.NumberFormat("de-DE", {style: "currency", currency}).format(number)).replace('$','');
}
