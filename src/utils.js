export const upper = (word) => {
    const wordLower = word.toLowerCase();
    const wordUpper = word.toUpperCase();
    const firstWord = wordUpper.slice(0, 1);
    const rest = wordLower.slice(1, 3);
  
    const palavra = firstWord + rest;
  
    return palavra;
  };
  

  