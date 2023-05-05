const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Adam', 'Bert', 'Cyril', 'Damon', 'Elvis', 'Felix', 'Gary', 'Henry', 'Ivan', 'Jamie'];
const femaleNames = ['Ana', 'Beth', 'Ciri', 'Dervila', 'Eva', 'Fauna', 'Gemma', 'Hannah', 'Iga', 'Jasmine'];
const lastNames = [
  'Antonov',
  'Bridgerton',
  'Czarny',
  'Drake',
  'Endurance',
  'Filipczak',
  'Gaunt',
  'Harper',
  'Indigo',
  'James',
];

const randChoice = function (arr) {
  const randomEl = Math.floor(Math.random() * arr.length);

  return randomEl;
};

const people = [];

for (let i = 0; i < 20; i++) {
  const person = {};
  person.id = i + 1;
  const gender = genders[randChoice(genders)];
  person.gender = gender;
  if (gender === 'M') person.name = maleNames[randChoice(maleNames)];
  if (gender === 'F') person.name = femaleNames[randChoice(femaleNames)];
  person.lastName = lastNames[randChoice(lastNames)];
  person.age = Math.floor(Math.random() * (78 - 18 + 1) + 18);
  person.email = `${person.name.toLocaleLowerCase()}.${person.lastName.toLocaleLowerCase()}@gmail.com`;
  person.phone = `+44 7${Math.floor(Math.random() * 100 + 100)} ${Math.floor(Math.random() * 100 + 100)} ${Math.floor(
    Math.random() * 100 + 100
  )}`;
  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile('people.json', data, err => {
  if (err) throw err;
  console.log(people, 'File has been successfully generated!');
});

people.json;
