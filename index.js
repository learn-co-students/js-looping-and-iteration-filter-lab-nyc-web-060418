// Code your solution in this file
function findMatching(drivers, string) {

const match = drivers.filter(function (driver) {return driver.toLowerCase() === string.toLowerCase();});

return match;
}


function fuzzyMatch(drivers, string){
    const match = drivers.filter (function (driver) { return driver[0] === string[0];});

  return match;
}
// drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function matchName(drivers, string) {
  return drivers.filter (function (driver) { return driver.name === string;});
}
