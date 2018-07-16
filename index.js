// Code your solution in this file
function findMatching(array, string) {
  const newArray = array.filter(function(str) {return str.toLowerCase() === string.toLowerCase()});
  return newArray;
}
function fuzzyMatch(array, string) {
  const newArray = array.filter(function(str) {return str.startsWith(string)});
  return newArray;
}
function matchName(array, string) {
  const newArray = array.filter(function(obj) {return obj.name === string});
  return newArray;
}
