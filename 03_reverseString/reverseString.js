const reverseString = function(stringToReverse) {
  // for(let i = stringToReverse.lenght; i > 0; i--) {
  //   newString += stringToReverse.at(i);
  //   console.log(i);
  // }
  let stringArray = stringToReverse.split("");
  let arrayReversed = stringArray.reverse();
  let newString = arrayReversed.join("");

  return newString;
};

// Do not edit below this line
module.exports = reverseString;
