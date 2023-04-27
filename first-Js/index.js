const firstName = 'Sasha';
const secondName = 'Alex';
const thirdName = 'Jon';
const otherName = 'Elena';

// const firstName = Lina;
// const secondName = Olex;

/**
const thirdName = Ran;
const otherName = Olena;
const otherName = Miha;
 */

const askName = prompt('what is your name');
const sayHi = alert(`Hello ${askName}`);

const year = prompt('What is your year of birth?');
const thisYear = 2023;
const calculated = thisYear - year;
const age = alert(`Your age is ${calculated}`);

const side = prompt('specify the length of the side of the square');
const perimeter = (side*4);
const answer = alert(`the periment of the square is equal ${perimeter}`);

const radius = prompt('enter the radius of the circle');
const area = Math.PI*(radius*2);
const answerArea = alert(`Area of ​​a circle ${area}`);

const distance = prompt('Write the distance between the two cities in km');
const time = prompt('Write the time in hour, you want to get to another city');
const speed = (distance/time) ;
const needSpeed = alert(`you need to move with speed ${speed} To be on time`);

const dolors = prompt('what dollar amount you want to exchange');
const eur = 1.1
const calc = (dolors/eur) ;
const getEuro = alert(`you will get ${calc.toFixed(2)} euro`);