import {domCity} from './domCity.js';



test('check if options are ADDED to teh select menu', () => {
    let selectList = document.createElement('select');
    expect(selectList.length).toEqual(0); 
    domCity.createSelectOption(selectList, 'item1');
    expect(selectList.length).toEqual(1); 
    expect(selectList[0].value).toEqual('item1');   
});
test('loadSelectOptionServer and deleteSelectOption', () => {

    let selectParent = document.createElement('select');
    let serverData = [
        {key: 1, name: 'Medicine Hat', latitude: 50.0421, longitude: -110.7197, population: 63260},
        {key: 2, name: 'Yellowknife', latitude: 62.453972, longitude: -114.371788, population: 19569}];
    expect(selectParent.length).toEqual(0);
    domCity.loadSelectOptionServer(selectParent, serverData);
    expect(selectParent.length).toEqual(2);
    console.log(selectParent[1].textContent);
    expect(selectParent[1].textContent).toEqual("Yellowknife");

    // delete Yellowknife from the select menu
    domCity.deleteSelectOption(selectParent, "Yellowknife")
    expect(selectParent[1]).toEqual(undefined);
});
test('check add button', () => {
    const myDiv = document.createElement('div');
    const newCard = domCity.addCard(myDiv, 0);
    const btn = domCity.addButton(newCard, 'add button');
    expect(btn.className).toEqual('add button');   
});

test('check add card and adjust balance', () => {
    const myDiv = document.createElement('div');
    let serverData = [
        {key: 1, name: 'Medicine Hat', latitude: 50.0421, longitude: -110.7197, population: 63260},
        {key: 2, name: 'Yellowknife', latitude: 62.453972, longitude: -114.371788, population: 19569}];
    expect(myDiv.childElementCount).toEqual(0);
    domCity.loadCardsServer(myDiv, serverData);
    expect(myDiv.childElementCount).toEqual(2);
    console.log(myDiv.children[0].children[0].textContent);
    expect(myDiv.children[0].children[0].textContent).toEqual('Medicine Hat');
    let currentCard= myDiv.children[0].children[0];
});

test('check delete card', () => {
    const myDiv = document.createElement('div');
    const currentCard = domCity.addCard(myDiv,0);
    expect(domCity.deleteCard(currentCard, myDiv)).toEqual(0);    
});
 
