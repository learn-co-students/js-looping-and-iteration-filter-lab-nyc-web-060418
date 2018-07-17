// Code your solution in this file

function findMatching(drivers, name) {
  return drivers.filter(function (driver) {return driver.toLowerCase() === name.toLowerCase()});
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function (driver) {return driver[0].toLowerCase() === name[0].toLowerCase()});

}

function matchName(dataStructure, nname) {
  return dataStructure.filter(function (data) {return data.name.toLowerCase() === nname.toLowerCase()});
}
