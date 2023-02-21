// const person: {
//   name: string
//   age: number
// } = {
//   name: 'Gale',
//   age: 34
// }
var person = {
    name: 'Gale',
    age: 34,
    hobbies: ['Sports', 'Shooting']
};
var favouriteActivities;
favouriteActivities: ['Sports', 1];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
