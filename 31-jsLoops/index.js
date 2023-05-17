// easy 
//  ========================== #1 ================================
// const userAge = prompt('Write your age');
// if (userAge < 0) {
// 	console.log('incorrect answer')
// } else if (userAge <= 11) {
// 	console.log('You are child')
// } else if (userAge > 11, userAge < 18) {
// 	console.log('You are Teenager')
// } else if (userAge >=18, userAge <= 59) {
// 	console.log('You are adults')
// } else if (userAge >= 60) {
// 	console.log('You are pensioner')
// } 

// ========================== #2 ================================
// const number =prompt('Wrine number 1-9');
// switch(number) {
// 	case '0': alert(')');
// 	break;
// 	case '1': alert('!');
// 	break;
// 	case '2': alert('@');
// 	break;
// 	case '3': alert('#');
// 	break;
// 	case '4': alert('$');
// 	break;
// 	case '5': alert('%');
// 	break;
// 	case '6': alert('^');
// 	break;
// 	case '7': alert('&');
// 	break;
// 	case '8': alert('*');
// 	break;
// 	case '9': alert('(');
// 	break;
// }

// ========================== #3 ================================
// const startNumber = +prompt('write start number');
// const endNumber = +prompt('write start number');
// let sum = startNumber;
// for (let index = startNumber + 1; index <=endNumber; index++) {
// 	sum = sum + index;
// 	console.log(sum);
// }
// ========================== #4 ================================
// const startNumber = +prompt('write start number');
// const endNumber = +prompt('write start number');
// for (let index = endNumber; index > 0; index--) {
// 	if (startNumber % index == 0 &&  endNumber % index == 0) {
// 		alert(`The greatest common denominator ${index}`);
// 	} else {
// 		console.log('The number does not match ');
// 	}
// }
// ========================== #5 ================================
// const Number = +prompt('write start number');
// for (let index = 1; index < Number; index++) {
// 		if (Number % index == 0) {
// 			alert(`divider ${index}`);
// 		} else {
// 			console.log('The number does not match ');
// 		}
// 	}

// medium
//  ========================== #1 ================================
// const number = prompt('write 5 is significant number');
// if (number[0] === number[4] && number[1] === number[3]) {
// 	alert(`this is palindrome`)
// } else {
// 	alert('its not palindrome')
// }
//  ========================== #2 ================================
// const money = +prompt('how much money you are willing to spend');
// if (money >= 200 && money < 300) {
// 	const interest = (money / 100) * 3;
// 	const sum = money - interest;
// 	alert(`the amount to be paid will be ${sum}`)
// } else if (money >= 300 && money < 500) {
// 	const interest = (money / 100) * 5;
// 	const sum = money - interest;
// 	alert(`the amount to be paid will be ${sum}`)
// } else if (money >= 500) {
// 	const interest = (money / 100) * 5;
// 	const sum = money - interest;
// 	alert(`the amount to be paid will be ${sum}`)
// } else {
// 	alert(`${money}`)
// }
//  ========================== #3 ================================
// const negative =[];
// const positive =[];
// const zero =[];
// for (index = 0; index < 10; index++) {
// 	const number = +prompt('how much money you are willing to spend');
// 	if (number < 0) {
// 		negative.push(number);
// 	} else if (number > 0) {
// 		positive.push(number);
// 	} else if (number === 0){
// 		zero.push(number);
// 	}
// }
// console.log(`positive numbers ${negative.length-1}`);
// console.log(`negative numbers ${positive.length-1}`);
// console.log(`zero numbers ${zero.length-1}`);
//  ========================== #4 ================================
// const day = confirm('do you want to saw next day?');
// const week = ['San', 'Mon','Tue', 'Wed','Thu', 'Fri','Sat' ]
// while (day === true) {
// 	week.forEach(item => alert(item)) 
// }

// Hard
//  ========================== #1 ================================
// const userNumber = +prompt("user number");


// let userStatus = null;
// let startNumber = 0;
// let endNumber = 100;

// do {
//   const newValue = (endNumber + startNumber) / 2;
//   userStatus = prompt(`enter status for this number ${newValue}`);

//   if (!userStatus) {
//     userStatus === "yes";
//   }

//   if (userStatus === "yes") {
//     alert(`Your number is ${Math.ceil(newValue)}`);
//   } else if (userStatus === "more") {
//     startNumber = newValue;
//   } else if (userStatus === "less") {
//     endNumber = newValue;
//   }
// } while (userStatus !== "yes" && userNumber)


// console.log(userNumber);
//  ========================== #2 ================================
// for (index = 2; index < 10; index++) {
// 	for (number = 1; number < 11; number++) {
// 		const answer = index * number;
// 		console.log(answer);
// 	}
// }

