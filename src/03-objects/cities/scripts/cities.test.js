import {City, Community} from './cities';

// CLASS CITY TESTING. (-) longitude W, (-) latitude S
let key = 1;
test('check show', () => {
    
    let newCity = new City (key, 'Calgary', 51.0447, -114.0719, 1267344);
    const showStr = newCity.show();
    expect(showStr).toBe('name:Calgary, latitude:51.0447, longitude:-114.0719, population:1267344');
 });
test('check movedIn and movedOut', () => {
    let newCity = new City (key,'Calgary', 51.0447, -114.0719, 1267344);
    expect(newCity.population).toBe(1267344);
    newCity.movedIn(1000000);
    expect(newCity.population).toBe(2267344);
    newCity.movedOut(1000000);
    expect(newCity.population).toBe(1267344);
 });
 test('check how big a city is', () => {
    let newCity = new City (key, 'Red Deer', 52.2690, -113.8116, 100418);
    let largeTown = new City (key++,'Medicine Hat', 50.0421, -110.7197, 63260);
    let town = new City (key++, 'Strathmore', 51.0378, -113.4004, 13528);
    let village = new City (key++, 'Flagstaff County', 52.6531, -111.8823, 639);
    let hamlet = new City (key++,'Tilt Cove', 49.88499646, -55.622830842, 6);

    expect(newCity.howBig()).toBe('City');
    expect(largeTown.howBig()).toBe('Large town');
    expect(town.howBig()).toBe('Town');
    expect(village.howBig()).toBe('Village');
    expect(hamlet.howBig()).toBe('Hamlet');
 });
test('check whichSphere', () => {
    let northernCity = new City (key++, 'Calgary', 51.0447, -114.0719, 1267344);
    northernCity.whichSphere();
    expect(northernCity.hemisphere).toBe('Northern Hemisphere');

    let southernCity = new City (key++, 'Sydney', -33.870453, 151.208755 , 4741874);
    southernCity.whichSphere();
    expect(southernCity.hemisphere).toBe('Southern Hemisphere');
 });

 //  CLASS COMMUNITY - CONTROLLER.
 test('check createCity, if it exists', () => {
    let cityController = new Community();
    expect(cityController.cities.length).toBe(0);
    expect(cityController.checkCityExists('Red Deer')).toBe(false);

    cityController.createCity(key++, 'Red Deer', 52.2690, -113.8116, 100418);
    expect(cityController.cities.length).toBe(1);
    expect(cityController.checkCityExists('Red Deer')).toBe(true);
});
test('check getPopulation, ', () => {
    let cityController = new Community();
    cityController.createCity(key++, 'Red Deer', 52.2690, -113.8116, 100418);
    cityController.createCity(key++, 'Red Deer', 52.2690, -113.8116, 100418);
    cityController.createCity(key++, 'Red Deer', 52.2690, -113.8116, 100418);
    cityController.createCity(key++, 'Medicine Hat', 50.0421, -110.7197, 63260);
    cityController.createCity(key++, 'Yellowknife', 62.453972, -114.371788, 19569);
    expect(cityController.getPopulation()).toBe(384083);

    cityController.createCity(key++, 'Flagstaff County', 52.6531, -111.8823, 639);
    cityController.createCity(key++, 'Tilt Cove', 49.88499646, -55.622830842, 6);

    expect(cityController.getPopulation()).toBe(384728);

    cityController.createCity(key++, 'Sydney', -33.870453, 151.208755 , 4741874);
    
    expect(cityController.getMostNorthern().name).toBe('Yellowknife');
    expect(cityController.getMostSouthern().name).toBe('Sydney');
});

// // 130E PRACITCING REFERENCE

test('check referece', () => {
    let myCity = new City (key++, 'Calgary', 51.0447, -114.0719, 1267344);
    let myFav = myCity;
 
    expect(myCity.population).toBe(1267344);
    expect(myFav.population).toBe(1267344);

    expect(myCity.population).toBe(1267344);
    myCity.movedIn(1000000);
    expect(myCity.population).toBe(2267344);
    expect(myFav.population).toBe(2267344);

    expect(myFav.population).toBe(2267344);
    myFav.movedIn(1000000);
    expect(myFav.population).toBe(3267344);
    expect(myCity.population).toBe(3267344);

 });


// add some population to one of the references
// check the population of both references
// what happened and why
// create a test to make sure it keeps working
