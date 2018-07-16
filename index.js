// Code your solution in this file

function findMatching(arr, name) {
  return arr.filter(function (e) {
    return e.toLowerCase() === name.toLowerCase();
  })
};

function fuzzyMatch(arr, letters) {
  return arr.filter(function (e) {
    return e.toLowerCase().startsWith(letters.toLowerCase());
  })
};

function matchName(obj, name) {
  return obj.filter(function (e) {
    return e.name.toLowerCase() === name.toLowerCase();
  })
}
