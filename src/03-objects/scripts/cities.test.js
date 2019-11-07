import {City, Community} from './cities';

test('check show', () => {
    let newCity = new City ('Calgary', '51.0447° N', '114.0719° W', 1267344);
    const showStr = newCity.show();
    expect(showStr).toBe('name:Calgary, latitude:51.0447° N, longitude:114.0719° W, population:1267344');
 });
test('check movedIn and movedOut', () => {
    let newCity = new City ('Calgary', '51.0447° N', '114.0719° W', 1267344);
    expect(newCity.population).toBe(1267344);
    newCity.movedIn(1000000);
    expect(newCity.population).toBe(2267344);
    newCity.movedOut(1000000);
    expect(newCity.population).toBe(1267344);
 });
 test('check how big a city is', () => {
    let newCity = new City ('Red Deer', '52.2690° N', '113.8116° W', 100418);
    let largeTown = new City ('Medicine Hat', '50.0421° N', '110.7197° W', 63260);
    let town = new City ('Strathmore', '51.0378° N', '113.4004° W', 13528);
    let village = new City ('Flagstaff County', '52.6531° N', '111.8823° W', 639);
    let hamlet = new City ('Flagstaff County', '52.6531° N', '111.8823° W', 60);

    expect(newCity.howBig()).toBe('City');
    expect(largeTown.howBig()).toBe('Large town');
    expect(town.howBig()).toBe('Town');
    expect(village.howBig()).toBe('Village');
    expect(hamlet.howBig()).toBe('Hamlet');
 
 });





// const utilities = {
//     createCity (name, latitude, longitude, population) {
//         return new City(name, latitude, longitude, population);
//     }
// };

