const BASE_URL = 'http://www.omdbapi.com/?apikey=5259a020';
// console.log(axios)

const button = document.querySelector('.button');
const blockCheckBox = document.querySelector('.block-check');
const mainList = document.querySelector('.mail-list');
const inputValue = document.querySelector('.name-movie')
const input = document.querySelectorAll('.input')
const newObj = {
	someName: 'new',
	type: 'movie',
};

let inputFilmName = inputValue.addEventListener('change', (e) => newObj.someName = e.target.value);
let radioValue = input.forEach(item => {
	item.addEventListener('click', () => {
		if(item.checked) {
			const	newValue = item.value;
			newObj.type = newValue
			console.log(newValue)
			}
	})
});

const addFilm = (item) => {
	const createItem = document.createElement('li');
	createItem.innerHTML = `
	<h3 class="main-title">${item.Title}</h3>
	<p class="main-year">${item.Year}</p>
	<img class="main-poster" src="${item.Poster}" alt="">
	`;
	
	mainList.appendChild(createItem)
}

const getValueByAxios = async () => {
	const first = newObj.someName
	const second = newObj.type
	const responsive = await axios.get(`${BASE_URL}&s=${first}&type=${second}`);
	responsive.data.Search.forEach(addFilm);
}


button.addEventListener('click', () => {
	if(mainList.children !== true) {
		mainList.innerHTML = ''
	}
	getValueByAxios()

});
