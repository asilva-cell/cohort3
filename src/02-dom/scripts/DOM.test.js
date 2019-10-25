import {domTesting} from './DOM';

test('check add card', () => {
    const myDiv = document.createElement('div');
    const counter = 0;
    const childrenCount = myDiv.childElementCount;
    domTesting.addCard(myDiv, counter);
    expect(myDiv.childElementCount).toEqual(childrenCount + 1);
    expect(domTesting.addCard(myDiv,counter)).toEqual(myDiv.lastElementChild);    
});

test('check add button', () => {
    const myDiv = document.createElement('div');
    const newCard = domTesting.addCard(myDiv, 0);
    
    expect(domTesting.addButton(newCard, 'add button')).toEqual('add button');   
});

test('check add Before', () => {
    const myDiv = document.createElement('div');
    expect(domTesting.addBefore(myDiv, 1)).toEqual('cardBefore'); 
    
});

 
 
test('check whatCards', () => {
    const myDiv = document.createElement('div');
    domTesting.addCard(myDiv, 0);
    domTesting.addCard(myDiv, 1);
    domTesting.addCard(myDiv, 2);
    expect(domTesting.whatCards(myDiv)).toEqual([0, 1, 2]);
    
    domTesting.addCard(myDiv, 3);
    expect(domTesting.whatCards(myDiv)).toEqual([0, 1, 2, 3]);
    
    domTesting.addCard(myDiv, 7);
    expect(domTesting.whatCards(myDiv)).toEqual([0, 1, 2, 3, 7]);
});

