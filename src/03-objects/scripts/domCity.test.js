import {domCity} from './domCity.js';

let selectList = document.createElement('select');

test('check if options are ADDED to teh select menu', () => {
    
    expect(selectList.length).toEqual(0); 
    domCity.createSelectOption(selectList, 'item1');
    expect(selectList.length).toEqual(1); 
    expect(selectList[0].value).toEqual('item1');   
});

test('check if options are REMOVED to teh select menu', () => {
    expect(selectList.length).toEqual(1);
    domCity.deleteSelectOption(selectList, 'item1');
    expect(selectList.length).toEqual(0);
    expect(selectList[0]).toEqual(undefined); 
});


test('check add button', () => {
    const myDiv = document.createElement('div');
    const newCard = domCity.addCard(myDiv, 0);
    const btn = domCity.addButton(newCard, 'add button');
    expect(btn.className).toEqual('add button');   
});

test('check add card and adjust balance', () => {
    const myDiv = document.createElement('div');
    let newCard = domCity.addCard(myDiv, 'card1', 50);
    console.log(newCard.children[2].textContent);
    expect(newCard.childElementCount).toEqual(3);
    expect(newCard.children[0].textContent).toEqual('card1');
    expect(newCard.children[1].textContent).toEqual('$50');

    domCity.adjustCardBalance(newCard, 100);
    expect(newCard.children[1].textContent).toEqual('$100');
});

// adjustCardBalance : (accountCard, newBalance) => {
//     accountCard.nextElementSibling.textContent = `$${newBalance}`;
//     return newBalance;
// },


test('check delete card', () => {
    const myDiv = document.createElement('div');
    const currentCard = domCity.addCard(myDiv,0);
    expect(domCity.deleteCard(currentCard, myDiv)).toEqual(0);    
});
 
