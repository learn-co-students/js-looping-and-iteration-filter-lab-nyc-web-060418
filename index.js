// Code your solution in this file
function findMatching(driver_array, string) {

  return driver_array.filter(function (str) { return str.toLowerCase() === string.toLowerCase();});

}

function fuzzyMatch(driver_array, string) {

    return driver_array.filter(function (str) { return str.toLowerCase()[0] === string.toLowerCase()[0];});

}

function matchName(driver_array, string) {

  return driver_array.filter(function(obj) {
    return obj.name === string});

}
