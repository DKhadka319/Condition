function BoggleSolver(strArr) {
  const [string, words] = strArr
  const matrix = string.split(", ").map(row => row.split(""))

  const cloneArray = (array) => array.map(row => [...row])

  const search = (array, remaining, x, y) => {
    if (!remaining.length) return true
    const newArray = cloneArray(array)
    newArray[x][y] = 0

    const newRemaining = remaining.slice(1)
    const target = remaining[0]
    for (let i = x - 1; i <= x + 1; i++) {
      for (let j = y - 1; j <= y + 1; j++) {
        if (!newArray[i]) continue
        if (newArray[i][j] === target && search(newArray, newRemaining, i, j)) return true
      }
    }
  }

  const wordSearch = (word) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] === word[0] && search(matrix, word.slice(1), i, j)) return true
      }
    }
  }
  const fails = []
  for (let word of words.split(",")) {
    if (!wordSearch(word)) {
      fails.push(word)
    }
  }
  return fails.length ? fails.join(",") : true
}
   
// keep this function call here 
console.log(BoggleSolver(readline()));
