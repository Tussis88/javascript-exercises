const repeatString = function(stringInput, timesRepeat) {
  let finalString = "";
  if (timesRepeat < 0) return "ERROR";
  for (let i = 0; i < timesRepeat; i++) {
    finalString += stringInput;
  }
  return finalString;
};

// Do not edit below this line
module.exports = repeatString;
