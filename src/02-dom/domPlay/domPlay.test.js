import {domTesting} from './domPlay';

test('check add card', () => {
    const myDiv = document.createElement('div');
    const counter = 0;
    domTesting.addCard(myDiv, counter);
    
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


