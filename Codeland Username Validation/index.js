function CodelandUsernameValidation(str) { 
    var len = str.length
    if (len >= 4 && len <= 25) {
      if (str.match(/^[a-zA-Z]([a-zA-Z]|[0-9]|(_))*([a-zA-Z]|[0-9])$/g)) {
        return true;
      }
    }
    return false;
  }
     
  // keep this function call here 
  console.log(CodelandUsernameValidation(readline()));