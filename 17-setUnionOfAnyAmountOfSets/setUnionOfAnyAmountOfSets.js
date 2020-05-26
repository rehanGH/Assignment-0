function setUnionOfAnyAmountOfSets(...args) {
  let mySet = new Set()
  // Insert code here;
  for (var i = 0; i < args.length; i++) {
    for (let elem of args[i]) {
      mySet.add(elem);
    }
  }
  return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
