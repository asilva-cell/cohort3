import {domAccount} from './domAccount.js';

let selectList = document.createElement('select');

test('check if options are ADDED to teh select menu', () => {
    
    expect(selectList.length).toEqual(0); 
    domAccount.createSelectOption(selectList, 'item1');
    expect(selectList.length).toEqual(1); 
    expect(selectList[0].value).toEqual('item1');   
});

test('check if options are REMOVED to teh select menu', () => {
    expect(selectList.length).toEqual(1);
    domAccount.deleteSelectOption(selectList, 'item1');
    expect(selectList.length).toEqual(0);
    expect(selectList[0]).toEqual(undefined); 
});


test('check add button', () => {
    const myDiv = document.createElement('div');
    const newCard = domAccount.addCard(myDiv, 0);
    const btn = domAccount.addButton(newCard, 'add button');
    expect(btn.className).toEqual('add button');   
});

test('check add card and adjust balance', () => {
    const myDiv = document.createElement('div');
    let newCard = domAccount.addCard(myDiv, 'card1', 50);
    console.log(newCard.children[2].textContent);
    expect(newCard.childElementCount).toEqual(3);
    expect(newCard.children[0].textContent).toEqual('card1');
    expect(newCard.children[1].textContent).toEqual('$50');

    domAccount.adjustCardBalance(newCard, 100);
    expect(newCard.children[1].textContent).toEqual('$100');
});

// adjustCardBalance : (accountCard, newBalance) => {
//     accountCard.nextElementSibling.textContent = `$${newBalance}`;
//     return newBalance;
// },


test('check delete card', () => {
    const myDiv = document.createElement('div');
    const currentCard = domAccount.addCard(myDiv,0);
    expect(domAccount.deleteCard(currentCard, myDiv)).toEqual(0);    
});
 
