/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let res = str.toLowerCase().replace(/[\s\W]/g, '');
  let middleValue = Math.floor(res.length / 2);
  for(let i=0; i<=middleValue; i++){
    if(res[i] != res[res.length - 1 - i]){
      return false;
    }
      // console.log(res.length - 1 - i);
  }
  return true;
  // return middleValue;
}

module.exports = isPalindrome;
