// easy
// ========================== #1 ==========================
const newShopItem = (nameProduct, amount, bought, price = 1) => ({
	nameProduct,
	amount,
	bought,
	price,
	
	get totalSum () {
		return this.amount * this.price;
	},
})
const shoppingList = [
	newShopItem('apple', 7, true, 13),
	newShopItem('banana', 4, false, 23),
	newShopItem('pear', 2, true, 29),
	newShopItem('orange', 18, false, 15),
	newShopItem('lemon', 11, true, 10),
];

// // ========================== #1.1 ==========================
// const sortList = shoppingList.sort((startItem, secondItem) => startItem.bought - secondItem.bought);
// // console.log(shoppingList);
// // // ========================== #1.2 ==========================
// function someFunc(someValue) {
// 	shoppingList.forEach(item => item.nameProduct === someValue ? item.bought = true : console.log(false));
// }
// someFunc('orange')
// console.log(shoppingList)
// Norma
// ========================== #1 ==========================
// function someFunc(someValue) {
// 	const findSomeName = shoppingList.findIndex((item) => item.nameProduct === someValue);
// 	delete shoppingList[findSomeName];
// 	shoppingList.splice(findSomeName, 1); // незнав який варіант краще то залишив два
// }
// someFunc('orange');
// console.log(shoppingList)
// ========================== #2 ==========================
// function someFunc(newProd) {
// 	const findValue = shoppingList.find(item => {
// 		if(item.nameProduct === newProd ) {
// 			item.amount += 1;
// 			return item
// 		} 
// 	})
// 	if( findValue === undefined) {
// 		shoppingList.push(newShopItem(newProd, 7, true, 13))
// 	}

	
// }
// someFunc('grape')
// Hard
// ========================== #1 ==========================
// let someOtherSum = 0;
// const allTotalSum = shoppingList.forEach(item => someOtherSum += item.totalSum );
// ========================== #2 ==========================
// let someOtherSum = 0;
// const allTotalSum = shoppingList.forEach(item => item.bought === false ? someOtherSum += item.totalSum : console.log('Thats product bought'));
// console.log(someOtherSum)
// ========================== #3 ==========================
// const sortList = shoppingList.sort((startItem, secondItem) => startItem.totalSum - secondItem.totalSum);
// const sortReversList = shoppingList.sort((startItem, secondItem) => secondItem.totalSum - startItem.totalSum);
// console.log(sortReversList)