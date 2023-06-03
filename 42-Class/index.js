// class Radius {
// 	constructor(radius) {
// 		this.radius = radius;
// 	}

// 	get circleRadius () {
// 		return this.radius
// 	}

// 	set newRadius (someRadius) {
// 		return  this._radius = someRadius;
		
// 	}

// 	get diameter () {
// 		const someDiametr = this.radius * 2;
// 		return someDiametr
// 	}
// 	lenthCircle () {
// 		return 2 * Math.PI * this.radius
// 	}
	
// 	areaCircle () {
// 		return Math.PI * (this.radius ** 2)
// 	}
// }

// const someOtherRadius = new Radius(30);
// someOtherRadius.newRadius = 70;


// class Marker {
// 	constructor(color, AmountOfInk, ) {
// 		this.color = color;
// 		this.AmountOfInk = AmountOfInk;
// 	}

// 	writeText() {
// 		const markerColor = document.querySelector('#color')
// 		const needValue = markerColor.addEventListener('blur', (e) => {
// 			this.color = e.target.value;
// 			const textArea = document.querySelector('.colorTheme')
// 			return textArea.style.color = this.color
// 		})


// 		const amount = document.querySelector('#AmountOfInk')
// 		const colorText = amount.addEventListener('blur', (e) => {
// 			const percent = 200;
// 			const needPercent = percent / e.target.value
// 			this.AmountOfInk = needPercent
// 			const textArea = document.querySelector('.colorTheme')
			
// 			return textArea.setAttribute('maxlength', this.AmountOfInk);
		
// 		})
// 	}
// }

// const blackMarker = new Marker('red', 40);
// blackMarker.writeText()