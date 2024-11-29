const products = [
    {id: 1, name: 'laptop', price: 1000, count: 10},
    {id: 2, name: 'desktop', price: 1500, count: 20},
    {id: 3, name: 'mobile', price: 500, count: 50},
    {id: 4, name: 'tablet', price: 300, count: 30},
]

//map
const names = products.map(product => product.name);
console.log(names);
const prices = products.map(p=>p.price);
console.log(prices);

//forEach
products.forEach(product => console.log(product.name));

//filter

const expensive = products.filter(product => product.price>900);
console.log(expensive);

//find
const affordable = products.find(product => product.price<900);
console.log(affordable);

//reduce
const total = products.reduce((previous, product)=> previous+product.price, 0);
console.log(total);


