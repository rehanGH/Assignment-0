function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  return Math.min.apply(Math, nums) + Math.max.apply(Math, nums);
}
// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
