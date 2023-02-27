// let person1: {
//   name: string
//   age: number
// } = {
//   name: 'Gale',
//   age: 34
// }

// let person2: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string] // THis marks the type as tuple
// } = {
//   name: 'Gale',
//   age: 34,
//   hobbies: ['Sports', 'Shooting'],
//   role: [2, 'huntress']
// }


// let favouriteActivities: any[]
// favouriteActivities: ['Sports', 1]
// console.log(person.name)

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role { ADMIN = 5, READ_ONLY = 100, AUTHOR = 'AUTHOR' }

let person3 = {
  name: 'Gale',
  age: 34,
  hobbies: ['Sports', 'Shooting'],
  role: Role.ADMIN
}

for (const hobby of person3.hobbies) {
  console.log(hobby.toUpperCase())
}


type Combinable = number | string
type ConversionDescriptor = 'as-number' | 'as-text'

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionDescriptor) {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }
  if (resultConversion === 'as-number'){
    return +result
  } else {
    return result.toString()  
  }
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

const combinedStringAges = combine('30', '26', 'as-number')
console.log(combinedStringAges)

const combinedNames = combine('Gale', 'Carter', 'as-text')
console.log(combinedNames)