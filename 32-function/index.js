// Easy
// ============================== #1 ========================
// function someFunc() {
// 	console.log();
// }
// const someFunc = () => {

// }
// const func = function someFunc() {

// }
// ============================== #2 ========================
// function someFunc(a, b, c, d) {
	
// }
// console.log(someFunc.length);
// ============================== #3 ========================
// function someFunc (number, otherNumber) {
// 	if( number < otherNumber) {
// 		alert(-1);
// 	} else if (number > otherNumber) {
// 		alert(1)
// 	} else {
// 		0
// 	}
// }
// ============================== #4 ========================
// function someFunc(num) {
// 	for(let result = 1; num > 1; num--) {
// 		console.log(`вхід в фор`)
// 		result = result * num;
// 		console.log(result);	
// 	}
// }
// ============================== #5 ========================
// function someFunc(num, secondNum, otherNum) {
// 	const answer = (num * 100) + (secondNum * 10) + (otherNum); 
// 	console.log(answer)
// }
// ============================== #6 ========================
// function someFunc(height, weight) {
// 	let area = 0;
// 	if (!!weight === !NaN) {
// 		area = height * weight;
// 		// console.log(area)
// 	} else {
// 		area = height * height;
// 		// console.log(area)
// 	}
// 	console.log(area)
// 	return area;
// }
// someFunc(5);

//medium
// ============================== #1 ========================
// function perfectNumber(num) {
// 	let sum = 0;
// 	let reminder;
// 	for (index = 1; index < num - 1 ; index++) {
// 		reminder = num % index;
// 		if(reminder === 0) {
// 			sum += index;
// 		}
// 	}
// 	if(num === sum) {
// 		alert(`${num} - досконале число`);
// 	} else {
// 		alert('Це не досконале число');
// 	}
// }

// ============================== #2 ========================
// function perfectNumber(num, otherNum) {
// 	for (let index = num; index <= otherNum -1; index++) {
// 		let sum = 0;
// 		let reminder;
// 		for (index = 1; index < num - 1 ; index++) {
// 			reminder = num % index;
// 			if(reminder === 0) {
// 				sum += index;
// 			}
// 		}
// 		if(num === sum) {
// 			alert(`${num} - досконале число`);
// 		} else {
// 			console.log(`${num} це не досконале число`)
// 		}
// 		num += 1;
// 	}
// }

