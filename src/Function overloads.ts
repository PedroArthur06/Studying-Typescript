function getLenght(val: string | any[]){
  if (typeof val === 'string') {
    const numberIfWords = val.split(' ').length;
    return numberIfWords;
  }
  return val.length;
}

const numberOfWords = getLenght('Hello world');
const numberOfItems = getLenght([1, 2, 3, 4, 5]);