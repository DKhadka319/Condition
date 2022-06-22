function WildcardCharacters(str) {
    let finalFlag = false;
    let splitString = str.split(" ");
    let firstWord = splitString[0];
    let secondWord = splitString[1].match(/(\w)(?=\1)\1+|(\w)(?!\2)/g);
    for (let j = 0; j < firstWord.length; j++) {
        if (firstWord.charAt(j) == '*') {
            let checkChar = firstWord.charAt(j + 1) == "{" ? true : false;
            if (checkChar) {
                let getCountNumber = firstWord.charAt(j + 2);
                let smilerChar = secondWord[j].length;
                if (getCountNumber == smilerChar) {
                    finalFlag = true;
                } else {
                    finalFlag = false;
                    break
                }
            } else {
                let smilerChar = secondWord[j].length;
                if (smilerChar == 3) {
                    finalFlag = true;
                } else {
                    finalFlag = false;
                    break
                }
            }


        } else if (firstWord.charAt(j) == '+') {
            let smilerChar = secondWord[j].length;
            if (smilerChar == 1) {
                finalFlag = true;
            } else {
                finalFlag = false;
                break
            }
        }
    }


    return finalFlag;
}

   
// keep this function call here 
console.log(WildcardCharacters(readline()));
