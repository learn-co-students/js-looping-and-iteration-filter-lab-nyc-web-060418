// Code your solution in this file
function findMatching(drivers, string){
    const matchedDrivers = drivers.filter(function (driver) {return driver.toLowerCase() === string.toLowerCase();});
    return matchedDrivers;
};

function fuzzyMatch(drivers, string){
    const matchedString = drivers.filter(function (driver) {return driver[0] === string[0]; })
    return matchedString;
};

function matchName(drivers, string){
    return drivers.filter(function (driver) {return driver["name"] === string;})
};