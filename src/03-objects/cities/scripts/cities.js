class City {
    constructor(key, name, latitude, longitude, population) {
        this.key = key;
        this.name = name;
        this.latitude = latitude;
        this.longitude = longitude;
        this.population = population;
        this.hemisphere = "";
        this.type = "";
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
            return this.hemisphere = 'Northern hemisphere';}
        else{return this.hemisphere = 'Southern hemisphere';};
    }
}


class Community {
    constructor() {
        this.cities = [];
        this.byName = {};
        this.keyCount = 1;
    }
    createCity(lastKey, name, latitude, longitude, population) {
        this.keyCount = lastKey;
        const newCity = new City(this.keyCount, name, latitude, longitude, population);
        this.hemisphere = newCity.whichSphere();
        this.type = newCity.howBig();
        this.cities.push(newCity);
        this.byName[name] = newCity;
        this.message = `${name} has been added.`;
        return newCity;
    }
    loadCitiesServer (serverData) {
        serverData.map(city => {
            this.createCity(city.key, city.name, city.latitude, city.longitude, city.population);
        });
        this.message =  `Cities below have been loaded from the server.`
        return this.cities;
    }
    checkCityExists (latitude, longitude) {
        let checkExist = false;
        if (this.cities.length >= 1) {
            this.cities.forEach(city => {
                if (city.latitude === latitude && city.longitude === longitude) {
                    checkExist = true;
                };
            });
        };
        return checkExist;
    }
    deleteCity(name) {
        delete this.byName[name];
        this.message = `${name} has been deteled from your list.`
		this.cities.forEach((key,index) => {
            if (key.name === name) {
                this.cities.splice(index, 1);
            }
        });
    }
    populationControl (cityObj, change, amount) {

        if (change === 'moveOut') {
            this.message = 'City population has been updated.';
            return cityObj.movedOut(amount)
        }
        this.message = 'City population has been updated.';
        return cityObj.movedIn(amount);
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
