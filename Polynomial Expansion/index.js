Solutions for Polynomial Expansion
JAVASCRIPT
VIEW CHALLENGE
0
function PolynomialExpansion(str) {
  let result = {};
  let finalResult = []
  let [eq1, eq2] = str.split(')(')
  eq1 = eq1.replace('(', '')
  eq2 = eq2.replace(')', '')
  let regex = /[+-]?\d\w?\^?([+-]?\d+)?/g
  let letregex = /[a-z]/g
  let letter = str.match(letregex)[0]
  let eq1Arr = eq1.match(regex)
  let eq2Arr = eq2.match(regex)
  for (let i = 0; i < eq1Arr.length; i++) {
    let [num, x] = eq1Arr[i].split(`${letter}`)
    if (x === undefined) x = 0;
    else if (!x) x = 1
    else x = x.replace('^', '')
    for (let j = 0; j < eq2Arr.length; j++) {
      let [num2, x2] = eq2Arr[j].split(`${letter}`)
      if (x2 === undefined) x2 = 0;
      else if (!x2) x2 = 1
      else x2 = x2.replace('^', '')
      let answerNum = +num * +num2
      let answerX = +x + +x2
      if (!result[answerX]) result[answerX] = answerNum
      else result[answerX] += answerNum
    }
  }
  Object.keys(result).sort(function (a, b) { return b - a }).forEach((key, index) => {
    let xValue = key
    let number = result[key]
    if(xValue!==0 && number === 1) number = ''
    if (index > 0 && number >= 0) finalResult.push('+')
    if (xValue === '0') finalResult.push(number)
    else if (xValue === '1') finalResult.push(`${number}${letter}`)
    else finalResult.push(`${number}${letter}^${xValue}`)
  })

  return finalResult.join('');

}

// keep this function call here 
console.log(PolynomialExpansion(readline()));
