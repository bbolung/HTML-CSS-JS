const person = {
    name: {
        firstName: "Gildong",
        lastName: "Hong"
    },
    likes:["apple", "samsung"],
    printHello: function() {
        return 'hello';
    }
};

console.log(person["name"]);
console.log(person["name"]["firstName"]);
console.log(person["likes"]);
console.log(person["likes"][0]);
console.log(person["printHello"]);
console.log(person["printHello"]());

console.log(person.name.firstName);
console.log(person.printHello());

person.age = 20;    //추가

console.log(person["age"]);

delete person.age;  //삭제

console.log(person["age"]);