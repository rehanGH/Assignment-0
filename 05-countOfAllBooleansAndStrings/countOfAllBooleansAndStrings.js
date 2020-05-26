function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  var count = 0;

  arr.forEach((number) => {
    if(typeof number == 'boolean' || typeof number == 'string'){
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
