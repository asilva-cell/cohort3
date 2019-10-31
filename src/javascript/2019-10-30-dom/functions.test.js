import {functions} from './functions.js';

test('check hello', () => {
    console.log('hello from functions test');
    expect(functions.dummyFunction()).toEqual(0);
});

test('check create card', () => {
    const div = functions.createCard();
    expect(div.getAttribute('count')).toEqual('1');
    expect(div.textContent).toEqual('Card 1');

    const div2 = functions.createCard();
    expect(div2.getAttribute('count')).toEqual('2');
    expect(div2.textContent).toEqual('Card 2');
    expect(div2.className).toEqual('boxes');
});

test('check add cards', () => {
    const myDiv = document.createElement('div');
    functions.cardCounter = 0;
    expect(myDiv.childElementCount).toEqual(0);

    functions.addCard(myDiv);
    expect(myDiv.childElementCount).toEqual(1);
    functions.addCard(myDiv);
    expect(myDiv.childElementCount).toEqual(2);
    functions.addCard(myDiv);
    expect(myDiv.childElementCount).toEqual(3);
    
    
    expect(myDiv.children[0].getAttribute('count')).
        toEqual('1');
    expect(myDiv.children[1].getAttribute('count')).
        toEqual('2');
    expect(myDiv.children[2].getAttribute('count')).
        toEqual('3');
});

test('check utilities three cards', () => {
    let myDiv = utilities.giveThreeCards()
    expect(myDiv.childElementCount).toEqual(3);
});

test('check utilities arraychildren', () => {
    //gets an array of cards within a div
    functions.cardCounter = 0;
    let myDiv = utilities.giveThreeCards();
    expect(utilities.arrayChildren(myDiv).length).toEqual(3);
});


test('check utilities arrayCounter', () => {
    functions.cardCounter = 0;
    let myDiv = utilities.giveThreeCards();
    let arrayCards = utilities.arrayChildren(myDiv);

    expect(utilities.arrayCounter(arrayCards)).toEqual(['1', '2', '3']);
});

test('check add before', () => {
    functions.cardCounter = 0;
    let myDiv = utilities.giveThreeCards();
    let arrayCards = utilities.arrayChildren(myDiv);
    let arrayCounter = utilities.arrayCounter(arrayCards);
    expect(arrayCounter).toEqual(['1', '2', '3']);
    
//     let current = myDiv.children[1].getAttribute('count')
//     console.log(current);

//     functions.addBefore(myDiv)
//     expect(utilities.arrayCounter()).toEqual(['1', '4', '2', '3']);
});


const utilities = {
    giveThreeCards : () => {
        let myDiv = document.createElement('div');
        functions.addCard(myDiv);
        functions.addCard(myDiv);
        functions.addCard(myDiv);
        return myDiv;
    },

    arrayChildren : (myDiv) => {
        //gets an array of cards within a div
        // [ HTMLDivElement {}, HTMLDivElement {}, HTMLDivElement {} ]
        return Array.from(myDiv.children);
    },

    arrayCounter : (arrayCards) => {
        //gets an array of the counter ['1','2','3']
        let arrayCount = arrayCards.map( function (card) {return card.getAttribute('count')});
        return arrayCount;
    }


}