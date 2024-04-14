const palindromes = function (sentence) {
  // MY SOLUTION
  // array = Array.from(sentence.replace(/[ ,.!]/g, "").toLowerCase());
  // for (let i = 0; i < array.length / 2; i++) {
  //   if (array.at(i) !== array.at(-(i + 1))) return false;
  // }
  // return true;
  
  //THE BETTER ONE
  const sanitizedString = sentence.replace(/[ ,.!]/g, "").toLowerCase();
  const reversedString = sanitizedString.split("").reverse().join("");
  return sanitizedString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
