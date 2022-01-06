class Weather{
	constructor(city){
		this.city = city;
        this.key = '01ebd330f4c305c2e2b02717a77ccf9b';
	}

	async getWeather(){
		const responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.key}`)
		const responceData = await responce.json()
		return responceData
		//
		console.log(responce)
	}

	changeCity(city){
		this.city = city;
	}
}