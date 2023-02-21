// const person: {
//   name: string
//   age: number
// } = {
//   name: 'Gale',
//   age: 34
// }

const person = {
  name: 'Gale',
  age: 34,
  hobbies: ['Sports', 'Shooting']
}

let favouriteActivities: any[]
favouriteActivities: ['Sports', 1]
console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}