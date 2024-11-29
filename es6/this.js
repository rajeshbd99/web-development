class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    walk(){
        console.log(`${this.name} is walking`);
    }
}

const person1 = new Person("Tapan", 25);
console.log(person1);
person1.walk();
