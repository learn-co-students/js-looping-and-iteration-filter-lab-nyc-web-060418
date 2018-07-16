// Code your solution in this file
function findMatching(drivers, inputName) {
  return drivers.filter(function (name) {return name.toUpperCase() === inputName.toUpperCase()});
}

function fuzzyMatch(drivers, inputNameBeginning) {
  return drivers.filter(function (name) {return name.startsWith(inputNameBeginning)});
}

function matchName(drivers, inputName) {
  return drivers.filter(function (object) {return object.name === inputName});
}
