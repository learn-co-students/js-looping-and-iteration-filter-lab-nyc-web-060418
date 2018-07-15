// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter(function (driverName) {
    return driverName.toLowerCase() == name.toLowerCase()
  });
}

function fuzzyMatch(drivers, startLetters) {

  return drivers.filter(function (newDrivers) {
    return newDrivers[0] + newDrivers[1] == startLetters
  });
}

function matchName(drivers, nameMatch) {
  return drivers.filter(function (newDrivers) {
    return newDrivers.name == nameMatch 
  })
}
