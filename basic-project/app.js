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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {}));
var person3 = {
    name: 'Gale',
    age: 34,
    hobbies: ['Sports', 'Shooting'],
    role: Role.ADMIN
};
for (var _i = 0, _a = person3.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);
var combinedNames = combine('Gale', 'Carter', 'as-text');
console.log(combinedNames);
