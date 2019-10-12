function reduce(array, callback, initialValue) {
  let previousValue, value;

  if (!initialValue) {
    previousValue = array[0];
    value = 1;
  } else {
    previousValue = initialValue;
    value = 0;
  }

  if (!array && !initialValue) {
    return ('TypeError')
  }

  for (let i = value; i < array.length; i++) {
    previousValue = callback(previousValue, array[i], i, array)
  }

  return previousValue;
}

module.exports = reduce;