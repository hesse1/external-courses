function searchSameNumber(array) {
  let arr = [];
  for (let i = 0; i < array.length; ++i) {
      let value = array[i];
      if (arr.indexOf(value) !== -1) {
          return true;
      }
      arr.push(value);
  }
  return false;
};

module.exports = searchSameNumber;