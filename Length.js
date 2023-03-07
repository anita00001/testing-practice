const stringLength = (str) => {
  if(str.length < 1){
    throw new Error("Empty String is not allowed!")
  } else if(str.length > 10) {
      throw new Error("String Length cannot be greater than 10")
  } else {
      return str.length;
  }
}

module.exports = stringLength;