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
