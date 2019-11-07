
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
    // create a method “howBig” that will return one of the following:
    // City – a population > 100,000
    // Large town – a large town has a population of 20,000 to 100,000
    // Town – a town has a population of 1,000 to 20,000
    // Village – larger than a hamlet but smaller than a town
    // Hamlet – population 1 - 100
    


}

class Community {
    
}

export { City, Community };