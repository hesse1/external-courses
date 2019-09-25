function searchSameNumber(array) {
  var arr = [];
  for (var i = 0; i < array.length; ++i) {
      var value = array[i];
      if (arr.indexOf(value) !== -1) {
          return true;
      }
      arr.push(value);
  }
  return false;
}

module.exports = searchSameNumber;