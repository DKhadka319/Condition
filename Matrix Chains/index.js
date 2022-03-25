function MatrixChains(arr) {
  let sum = 0
  while (arr.length > 2) {

    let minValue = Infinity
    let minIndex
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < minValue && (i < arr.length - 2 || i > 1)) {
        minValue = arr[i]
        minIndex = i
      }
    }
    if (minIndex < arr.length - 2) {
      sum += arr[minIndex] * arr[minIndex + 1] * arr[minIndex + 2]
      arr.splice(minIndex + 1, 1)
    } else {
      sum += arr[minIndex - 2] * arr[minIndex - 1] * arr[minIndex]
      arr.splice(minIndex - 1, 1)
    }

  }
  return sum
}

// keep this function call here 
console.log(MatrixChains(readline()));
