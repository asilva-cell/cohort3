
class City {
    constructor(name, latitude, longitude, population) {
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
    }
    
    show () {
        let showStr = `name:${this.name}, latitude:${this.latitude}, longitude:${this.longitude}, population:${this.population}`;
        return showStr;
    }
    movedIn(peopleIn) {
        this.population += peopleIn;
    }
    movedOut(peopleOut) {
        this.population -= peopleOut;  
    }
    howBig (){
        let population = this.population;
        switch(true) {
            case population>100000:
                this.type = 'City';
                break;
            case population>20000:
                this.type = 'Large town';
                break;
            case population>1000:
                this.type = 'Town';
                break;
            case population>100:
                this.type = 'Village';
                break;
            case population >=1:
                this.type = 'Hamlet';
                break;
          }
        return this.type;
    }
    whichSphere() {
        let latitude = this.latitude;
        if (latitude > 0) {
            this.hemisphere = 'Northern Hemisphere';}
        else{this.hemisphere = 'Southern Hemisphere';};
    }
}


class Community {
    constructor() {
        this.cities = [];
        this.byName = {};
    }

    createCity(name,latitude, longitude, population) {
		const newCity = new City(name,latitude, longitude, population);
        this.cities.push(newCity);
        this.byName[name] = newCity;
		this.message = `${name} has been created.`;
    }
    checkCityExists(cityToCheck) {
		for (let cityObj in this.byName) {
			if (cityObj === cityToCheck) {
				return true;
			}
		}
		return false;
    }
    deleteCity(name) {
        delete this.byName[name];
	}
    getPopulation() {
		let totalPopulation = this.cities.reduce(
			(accumulator, city) => accumulator + city.population,0);
        return totalPopulation;
	}


	getMostNorthern() {
		this.cities.sort(
			(city1, city2) => city2.latitude - city1.latitude
        );
		return this.cities[0];
	}

	getMostSouthern() {
		this.cities.sort(
			(city1, city2) => city2.latitude - city1.latitude
		);
		let lastItem = this.cities.length - 1;
		return this.cities[lastItem];
	}
}


export { City, Community };