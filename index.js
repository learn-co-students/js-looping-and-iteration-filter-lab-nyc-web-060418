// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(array, partialName) {
  let nameLength = partialName.length;
  return array.filter(function (driverName) {
    return driverName.slice(0, nameLength) === partialName;
  });
}

function matchName(array, name) {
  return array.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}