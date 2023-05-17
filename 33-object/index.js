//easy
const car = {
	manufacturer: 'Bayerische Motoren Werke AG ',
	model: 'BMW X3',
	yearOfManufacture: '2018',
	speed: 160,
	fuelTankVolume: '80 L',
	averageFuelConsumption: 18,
	drivers: '',
}
// ============== #1 ==============
// const loopCar = () => { 
// 	for(let key in car) {
// 	console.log(`${key} = ${car[key]}`)
// 	}
// } 
//loopCar();
// ============== #2 ==============
// car.drivers = 'Alex';
// console.log(car)
// ============== #3 ==============
// const {drivers} = car;
// const askName = prompt(`What is yor name?`)
// if (drivers === askName) {
// 	alert(`Hi ${askName}`);
// } else {
// 	alert(`Who you are?`)
// }
// ============== #4 ==============
// const {averageFuelConsumption} = car
// const {speed: carSpeed} = car;
// function someFunc (way, ownSpeed) {
// 	let time
// 	if (!!ownSpeed === !!NaN) {
// 		time = (way / carSpeed);
// 		const otherTime = Math.floor(time / 4);
// 		time = (time + otherTime).toFixed(2);
// 		console.log(time)
// 	} else {
// 		time = (way / ownSpeed);
// 		const otherTime = Math.floor(time / 4);
// 		time = (time + otherTime).toFixed(2);
// 		console.log(time)
// 	}

// 	const fuel = (way / 100) * averageFuelConsumption;
// 	return console.log(`You need ${time} hour, and cost fuel ${fuel}`)
// }
// someFunc(600);

//normal
// const time = {
// 	hour: 12,
// 	minute: 34,
// 	seconds: 40,
// }
// ============== #1 ==============
// let {hour, minute, seconds} = time;
// alert(`${hour}:${minute}:${seconds}`);
// ============== #2 ==============
// hour = +prompt('Write some hour');
// ============== #3 ==============
// minute = +prompt('Write some minute');
// ============== #4 ==============
// seconds = +prompt('Write some seconds');
// ============== #5 ==============
// someHour = +prompt('Write some hour');
// someMinute = +prompt('Write some minute');
// someSeconds = +prompt('Write some seconds');
// seconds = seconds + someSeconds;
// minute = minute + someMinute;
// hour = hour + someHour;
// while(seconds > 59) {
// 	minute ++;
// 	seconds = seconds - 60;
// }
// while(minute > 59){
// 	hour ++;
// 	minute = minute - 60;
// }
// while(hour >= 24) {
// 	hour = 0
// }
//  alert(`${hour}:${minute}:${seconds}`);
//  console.log(time);

//hard
// const someObj = {
// 	divided: 10,
// 	divider: 5,
// }
// const otherObj = {
// someDivided: 16,
// someDivider: 5,
// }
// const {divided, divider} = someObj;
// const {someDivided, someDivider} = otherObj;
// // ============== #1 ==============
// const addition = ((divided * someDivider) + (divider * someDivided)) / (divider * someDivider);
// // ============== #2 ==============
// const subtraction = ((divided * someDivider) - (divider * someDivided)) / (divider * someDivider);
// // ============== #3 ==============
// const multiplication = (divided * someDivided) / (divider * someDivider);
// // ============== #4 ==============
// const division = (divided * someDivider) / (divider * someDivided);
// // ============== #5 ==============
// let jointDivided;
// let jointDivider;
// for(let index = Math.floor((divided + divider) / 2); index > 0; index --) {
// 	if (divided % index === 0 || divider % index === 0) {
// 		console.log(index);
// 		jointDivided = divided / index;
// 		jointDivider = divider / index;
// 		break
// 	} else {
// 		console.log('We havent need number');
// 	}
// };
