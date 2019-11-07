
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
    }

    whichSphere() {
        let latitude = this.latitude;
        if (latitude > 0) {
            console.log('from if');
            this.hemisphere = 'Northern Hemisphere';}
        else{this.hemisphere = 'Southern Hemisphere';};
        console.log(this.hemisphere);
    }
    
}

export { City, Community };