

const domTesting = {
    addCard: (node, counter) => {
        console.log('in the card');
        let newCard = document.createElement('div');
        node.appendChild(newCard);
        newCard.className = 'cards';
        newCard.setAttribute('counter', counter),
        newCard.textContent = `Card # ${counter}`;
    },

    whatCards: (node) => {
        return [0, 1, 2];
    }
    
};



export {domTesting};
