function findMatching(array, string) {
  return array.filter(function(str){
    return str.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(array, string){
  return array.filter(function(str){
    return str.startsWith(string);
  });
}

function matchName(array, string) {
  return array.filter(function(object){
    return object.name === string
  });
}
