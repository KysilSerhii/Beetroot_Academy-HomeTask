const BASE_NAME = ('https://api.openweathermap.org/data/2.5/weather?appid=f426cde00640410f00d47b68312521da')

const blockWithWeather = document.querySelector('.block');
const inputLatitude = document.querySelector('#Latitude');
const inputLongitude = document.querySelector('#Longitude');
const getWeatherValueButton = document.querySelector('.get-weather')
const cords = document.querySelector('.cords')

let inputLatitudeValue = null;
let inputLongitudeValue = null;
let positionValue = null;
// ===============  Geo ===================
const successCallback = (position) => {
	inputLatitudeValue = position.coords.latitude;
	inputLongitudeValue = position.coords.longitude;
	const createElementPosition = document.createElement('div')
	createElementPosition.innerHTML = `<p class="cords-value">Your cord is latitude ${inputLatitudeValue} longitude ${inputLongitudeValue}, if you want change cords 
	write below</p>`

	cords.appendChild(createElementPosition)
};

const errorCallback = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

//========================== 

inputLatitude.addEventListener('change', (e) => {
	inputLatitudeValue = parseFloat(e.target.value)
	console.log(e.target.value)
})

inputLongitude.addEventListener('change', (e) => {
	inputLongitudeValue = parseFloat(e.target.value)
	console.log(e.target.value)
})

const newElementForCookies = (item) => {
	const newObj = {
		temperature: item.main.temp,
		seaLevel: item.main.sea_level,
		windSpeed: item.wind.speed,
		cloud: item.clouds.all,
	}
	console.log(newObj)

	const jsonValue = JSON.stringify(newObj);
	const inFifteenMinutes = new Date(new Date().getTime() + 120 * 60 * 1000);
	Cookies.set('weather', jsonValue, {
		expires: inFifteenMinutes
	});
}
const createWeatherForUser = (item) => {
	const createNewElement = document.createElement('div');
	createNewElement.innerHTML = `
	<p class="some-element">Temperature in your town: ${item.cloud}</p>
	<p class="some-element">Sea level: ${item.seaLevel}</p>
	<p class="some-element">Wind Speed: ${item.windSpeed}</p>
	<p class="some-element">Clouds: ${item.temperature}</p>
	`

	blockWithWeather.appendChild(createNewElement);
}

const getValueByAxios = async () => {
	const resp = await axios.get(`${BASE_NAME}&lat=${inputLatitudeValue}&lon=${inputLongitudeValue}&units=metric`);
	const respData = resp.data
	newElementForCookies(respData);
}

getWeatherValueButton.addEventListener('click', () => {
	if(!Cookies.get('weather')) {
		getValueByAxios()
		const cookiesValue = Cookies.get('weather')
		const parseCookiesValue = JSON.parse(cookiesValue);
		createWeatherForUser(parseCookiesValue)
	} else {
		const cookiesValue = Cookies.get('weather')
		const parseCookiesValue = JSON.parse(cookiesValue);
		createWeatherForUser(parseCookiesValue)
	}
})

