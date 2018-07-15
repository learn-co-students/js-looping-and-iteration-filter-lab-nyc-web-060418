// Code your solution in this file

// function findMatching(drivers, name){
//   matches = []
//   for (const driver of drivers){
//     if (driver.toLowerCase() === name.toLowerCase()) {
//       matches.push(driver)
//     }
//   }
//   return matches
// }
function findMatching(drivers, name){
  return drivers.filter(function(driver){
    if (driver.toLowerCase() === name.toLowerCase())
      return driver;
  })
}

function fuzzyMatch(drivers, string){
  return drivers.filter(function(driver){
    if (driver.slice(0,2) === string)
      return driver;
  })
}

function matchName(drivers, name) {
  return drivers.filter(function(driver){
    if (driver.name === name)
      return driver;
  })
}
