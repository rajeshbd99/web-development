const numbers = [4,5,2,8,10];
const players = [75, 80, 95, 100, 120];

const selected =  players.filter(player => player > 90);
console.log(selected);

const friends = ['Hanks', 'Cruise', 'Brady', 'Solaiman'];
const fSelected = friends.filter(friend => friend.length > 5);
console.log(fSelected);