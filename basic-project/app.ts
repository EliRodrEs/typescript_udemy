function add(n1:number, n2: number) {
  return n1 + n2
}

function printResult(num: number) {
  console.log('Result: ' + num)
}

printResult(add(5, 12))

let combinedValues: (a: number, b: number) => number

combinedValues = add
// combinedValues = printResult
// combinedValues = 5

console.log(combinedValues(8, 8))