// First task
// const body = document.querySelector('body')
// const textArea = document.querySelector('textarea')
// const someDiv = document.querySelector('.main-div')
// const someText = textArea.addEventListener('input', (e) => {
// 	someDiv.innerHTML = e.target.value;
// })
// console.log(someText)

// document.addEventListener('keydown', (e) => {
// 	if(e.code === 'KeyS' && (e.ctrlKey || e.metaKey)) {
// 		e.preventDefault();
// 		someDiv.classList.toggle('active')
// 		textArea.classList.toggle('active')
// 	}
// 	if(e.code === 'KeyE' && (e.ctrlKey || e.metaKey)) {
// 		e.preventDefault();
// 		someDiv.classList.toggle('active')
// 		textArea.classList.toggle('active')
// 	}
// })

// Second task

// const title = document.querySelector('.table-title');
// const column = document.querySelectorAll('.table-colum');
// const tag = document.querySelectorAll('th');
// const arrayFromTh = [];
// tag.forEach(item => {
// 	arrayFromTh.push(item.innerHTML)
// })

// title.addEventListener('click', (e) => {;
// 	const someName = e.target.innerText;
// 	const neededIndex = arrayFromTh.findIndex( index => index === someName);
// 	sortFunc(neededIndex);
// });

// function sortFunc(indexColum) {
// 	const someArray = [];
// 	for(let index = 0; index < column.length; index++) {
// 		otherIndex = column.length-1;
// 		const someValue = column[index].children[indexColum].innerText;
// 		someArray.push(someValue);
// 		someArray.sort()
// 	}

// 	for(let index = 0; index < column.length; index++) {
// 		column[index].children[indexColum].innerText = someArray[index];
// 	}
// }

