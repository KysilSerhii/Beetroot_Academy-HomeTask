// const playList = [
// 	{
// 	 author: "LED ZEPPELIN",
// 	 song:"STAIRWAY TO HEAVEN"
// 	},
// 	{
// 	 author: "QUEEN",
// 	 song:"BOHEMIAN RHAPSODY"
// 	},
// 	{
// 	 author: "LYNYRD SKYNYRD",
// 	 song:"FREE BIRD"
// 	},
// 	{
// 	 author: "DEEP PURPLE",
// 	 song:"SMOKE ON THE WATER"
// 	},
// 	{
// 	 author: "JIMI HENDRIX",
// 	 song:"ALL ALONG THE WATCHTOWER"
// 	},
// 	{
// 	 author: "AC/DC",
// 	 song:"BACK IN BLACK"
// 	},
// 	{
// 	 author: "QUEEN",
// 	 song:"WE WILL ROCK YOU"
// 	},
// 	{
// 	 author: "METALLICA",
// 	 song:"ENTER SANDMAN"
// 	}
// 	];

// 	const chooseOurList = document.querySelector('.someList');

// 	if(chooseOurList) {
// 		playList.forEach(item => {
// 			const createListItem = document.createElement('li');
// 			createListItem.innerText = `author ${item.author} and his song ${item.song}`;

// 			chooseOurList.appendChild(createListItem);
// 		})
// 	}

// Task 2
// const openButton = document.querySelector('.open-button');
// const closedButton = document.querySelector('.closed-button');
// const modalWindow = document.querySelector('.modal-window');
// const someTitle = document.querySelector('some-text');

// if(modalWindow) {
// 	const createTitle = document.createElement('h1');
// 	createTitle.innerText = 'Modal Window'

// 	modalWindow.appendChild(createTitle)
// };

// openButton.addEventListener('click', () => modalWindow.style.display = 'block')
// // openButton.addEventListener('click', (e) => console.log(e))
// closedButton.addEventListener('click', () => modalWindow.style.display = 'none')

// Task 3
// First version
// const someButton = document.querySelector('[type="button"]');

// console.log(someButton)
// const someLight = document.querySelector('.block');
// console.log(someLight.children)

// const button = document.getElementsByTagName('button');
// console.log(button)
// const light = document.getElementsByClassName('light');
// console.log(light)
// let toggleButton = button[0];
// let lightIndex = 0;

// toggleButton.addEventListener('click', () => {
// 	light[lightIndex].classList.remove('active');
// 	lightIndex = (lightIndex + 1) % light.length;
// 	light[lightIndex].classList.add('active');
// })

