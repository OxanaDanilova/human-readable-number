module.exports = function toReadable (number) {
  const newArr = String(number).split('');
  let result;
  const firstArr = ['','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const secondArr = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const thirdArr = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  if (newArr.length === 1) {
      if (+newArr[0]===0) {
          result = 'zero';
      } else {
        result = firstArr[number];

      }
    
  }
  if (newArr.length === 2 && +newArr[0]!==1) {
      result = secondArr[newArr[0]-1];
      if (+newArr[1]!==0) {
        result +=' '+firstArr[newArr[1]];
    };
} 
  if (newArr.length === 2 && +newArr[0]===1) {
      if (+newArr[1]===0) {
          result = 'ten';
      } else {
        result = thirdArr[newArr[1]-1];

      };
    
}

  if (newArr.length === 3 && +newArr[1]!==1 && +newArr[0]!==0) {
    result = firstArr[newArr[0]]+' '+'hundred'+' '+secondArr[newArr[1]-1];
    if (+newArr[2]!==0) {
        result +=' '+firstArr[newArr[2]];
    }
}
if (newArr.length === 3 && +newArr[1]===1) {
    result = firstArr[newArr[0]]+' '+'hundred'
    if (+newArr[2]===0){
    result += ' ten';
    } else {
        result += ' '+thirdArr[newArr[2]-1];
     };
        
    }

    if (newArr.length === 3 && +newArr[1]===0) {
        result = firstArr[newArr[0]]+' '+'hundred';
        if (+newArr[2]!==0) {
            result += ' '+firstArr[newArr[2]];
        }
    }
  return result;
}
