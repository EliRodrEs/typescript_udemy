// const person: {
//   name: string
//   age: number
// } = {
//   name: 'Gale',
//   age: 34
// }

// const person: {
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

const person = {
  name: 'Gale',
  age: 34,
  hobbies: ['Sports', 'Shooting'],
  role: Role.ADMIN
}

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

function combine(input1: number | string, input2: number | string) {
  let result
  if (typeof input1 === 'number' && typeof input2 === 'number') {
    result = input1 + input2
  } else {
    result = input1.toString() + input2.toString()
  }
  return result
}

const combinedAges = combine(30, 26)
console.log(combinedAges)

const combinedNames = combine('Gale', 'Carter')
console.log(combinedNames)