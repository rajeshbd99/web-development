

const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'Lisbon';
placesList.appendChild(li);


const main = document.getElementById('main-content');
const newSection = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Favorite Songs';
main.appendChild(h1);
const ul = document.createElement('ul')
const li1 = document.createElement('li');
li1.innerText = 'Song 1';
ul.appendChild(li1);
const li2 = document.createElement('li');
li2.innerText = 'Song 2';
ul.appendChild(li2);
const li3 = document.createElement('li');
li3.innerText = 'Song 3';
ul.appendChild(li3);
newSection.appendChild(ul);
main.appendChild(newSection);

const sections = document.querySelectorAll('section');
for (const section of sections){
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '15px';
    section.style.padding = '10px';
    section.style.backgroundColor = 'lightsteelblue';
}