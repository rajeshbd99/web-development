const difference = (x, y) => x-y;
const multiply = (first, second, third) => first * second * third;

const getAge = (person) => person.age;
const student = {name : 'John', age: 25};
const age = getAge(student);
console.log(age);

const getThird = Numbers => Numbers[2];
const third = getThird([1, 2, 3, 4, 5]);
console.log(third);

const doubleIt = x => x * 2;

//no parameter

const getPi = () => Math.PI;
console.log(getPi());

//large arrow function

const sum = (a, b) => {
    const result = a + b;
    return result;
}