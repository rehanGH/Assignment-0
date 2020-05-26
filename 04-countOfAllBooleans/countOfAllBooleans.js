function countOfAllBooleans(arr) {
  // Insert code here;
  var count = 0;

  arr.forEach((number) => {
    if (typeof number == "boolean") {
      count++;
    }
  });
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;
