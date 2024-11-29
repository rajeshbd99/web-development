const products = [
    {id: 1, name: 'laptop', price: 1000, count: 10},
    {id: 2, name: 'desktop', price: 1500, count: 20},
    {id: 3, name: 'mobile', price: 500, count: 50},
    {id: 4, name: 'tablet', price: 300, count: 30},
]

class Product {
     constructor (name){
        this.name = name;
     }
}

const product1 = new Product('laptop');
console.log(product1);

class Teacher {
    constructor(subject, name){
        this. subject = subject;
        this.name = name;
    }
}

const teacher1 = new Teacher('Physich ', 'Tapan');
console.log(teacher1);