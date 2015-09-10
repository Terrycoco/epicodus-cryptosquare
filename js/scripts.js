var encrypt = function (inputStr) {
  inputStr = inputStr.replace(" ", "");
  var lenStr = inputStr.length;
  if (lenStr === 0) {
    return false;
  }
  else if (lenStr <= 2) {
    return inputStr;
  }


  var groups = Math.ceil(Math.sqrt(lenStr));
  var result = "";

  //do this twice
  for (var g = 0; g < groups; g++) {
    //do this twice too
    for (var i = 0 + g; i < lenStr; i = i + groups ) {
      result += inputStr[i];
    }
    result += " ";
  }
  return result.trim();
};
