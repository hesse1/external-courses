function searchStrInStr(str, checkStr){
  if(str.includes(checkStr)) {
    return true;
  }
  return false;
}

module.exports = searchStrInStr;