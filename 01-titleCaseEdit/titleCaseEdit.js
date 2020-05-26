function titleCaseEdit(title) {
  // Insert code here;
  return title.toLowerCase().split(" ").map((s) => s.charAt(0).toUpperCase() + s.slice(1)).join(" ");
}
// Do not edit this line;
module.exports = titleCaseEdit;
