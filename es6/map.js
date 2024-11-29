const numbers = [4,5,2,8,10];

const doubled = [];
for (const num of numbers){
    const double = num * 2;
    doubled.push(double)
}

console.log(doubled);  

const output2 = numbers.map(n=> n*2);
console.log(output2);

const fiveAdded = numbers.map(n=> n+5);
console.log(fiveAdded);

const friends = ['Hanks', 'Cruise', 'Brady', 'Solaiman'];
const flengths = friends.map(friend=> friend.length);
const ffirst = friends.map(friend=> friend[0]);
console.log(ffirst);
console.log(flengths);