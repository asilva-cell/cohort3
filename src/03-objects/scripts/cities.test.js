import {City, Community} from './cities';

// CLASS CITY TESTING. (-) longitude W, (-) latitude S
test('check show', () => {
    let newCity = new City ('Calgary', 51.0447, -114.0719, 1267344);
    const showStr = newCity.show();
    expect(showStr).toBe('name:Calgary, latitude:51.0447, longitude:-114.0719, population:1267344');
 });
test('check movedIn and movedOut', () => {
    let newCity = new City ('Calgary', 51.0447, -114.0719, 1267344);
    expect(newCity.population).toBe(1267344);
    newCity.movedIn(1000000);
    expect(newCity.population).toBe(2267344);
    newCity.movedOut(1000000);
    expect(newCity.population).toBe(1267344);
 });
 test('check how big a city is', () => {
    let newCity = new City ('Red Deer', 52.2690, -113.8116, 100418);
    let largeTown = new City ('Medicine Hat', 50.0421, -110.7197, 63260);
    let town = new City ('Strathmore', 51.0378, -113.4004, 13528);
    let village = new City ('Flagstaff County', 52.6531, -111.8823, 639);
    let hamlet = new City ('Tilt Cove', 49.88499646, -55.622830842, 6);

    expect(newCity.howBig()).toBe('City');
    expect(largeTown.howBig()).toBe('Large town');
    expect(town.howBig()).toBe('Town');
    expect(village.howBig()).toBe('Village');
    expect(hamlet.howBig()).toBe('Hamlet');
 });
test('check whichSphere', () => {
    let northernCity = new City ('Calgary', 51.0447, -114.0719, 1267344);
    northernCity.whichSphere();
    expect(northernCity.hemisphere).toBe('Northern Hemisphere');

    let southernCity = new City ('Sidney', -33.870453, 151.208755 , 4741874);
    southernCity.whichSphere();
    expect(southernCity.hemisphere).toBe('Southern Hemisphere');
 });

 //  CLASS COMMUNITY - CONTROLLER.
 test('check createCity, if it exists', () => {
    let cityController = new Community();
    expect(cityController.cities.length).toBe(0);
    expect(cityController.checkCityExists('Red Deer')).toBe(false);

    let newCity = cityController.createCity('Red Deer', 52.2690, -113.8116, 100418);
    expect(cityController.cities.length).toBe(1);
    expect(cityController.checkCityExists('Red Deer')).toBe(true);
   

    expect(cityController.checkCityExists('Medicine Hat')).toBe(false);
    let largeTown = cityController.createCity('Medicine Hat', 50.0421, -110.7197, 63260);
    expect(cityController.cities.length).toBe(2);
    expect(cityController.checkCityExists('Medicine Hat')).toBe(true);

    cityController.deleteCity('Medicine Hat');
    expect(cityController.checkCityExists('Medicine Hat')).toBe(false);
     //console.log(cityController.byName['Red Deer'].name);
     console.log(cityController.cities);
     console.log(cityController.byName);
});
test('check getPopulation, ', () => {
    let cityController = new Community();
    console.log(cityController.cities);
    console.log(cityController.byName);
  
    cityController.createCity('Red Deer', 52.2690, -113.8116, 100418);
    cityController.createCity('Medicine Hat', 50.0421, -110.7197, 63260);
    cityController.createCity('Strathmore', 51.0378, -113.4004, 13528);
    expect(cityController.getPopulation()).toBe(177206);

    cityController.createCity('Flagstaff County', 52.6531, -111.8823, 639);
    cityController.createCity('Tilt Cove', 49.88499646, -55.622830842, 6);
    expect(cityController.getPopulation()).toBe(177851);
    console.log(cityController.cities);
    console.log(cityController.byName);
});

// const utilities = {
//     createCity (name, latitude, longitude, population) {
//         return new City(name, latitude, longitude, population);
//     }
// };
