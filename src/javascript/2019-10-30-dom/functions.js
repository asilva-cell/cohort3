
const functions = {
    dummyFunction : () => {
        console.log('hello from functions');
        return 0;
    },

    cardCounter : 0,

    createCard : () => {
        let newDiv = document.createElement('div');
        functions.cardCounter++;
        newDiv.setAttribute("count", functions.cardCounter);
        newDiv.textContent = `Card ${functions.cardCounter}`;
        newDiv.className = 'boxes';
        return newDiv;
    },

    addCard : (parent) => {
        let newCard = functions.createCard();
        parent.appendChild(newCard);

        let btnAddCardBefore = document.createElement('button');
        btnAddCardBefore.id = 'idAddCardBefore';
        btnAddCardBefore.textContent = 'Add Before';
        newCard.appendChild(btnAddCardBefore);

        let btnAddCardAfter = document.createElement('button');
        btnAddCardAfter.id = 'idAddCardAfter';
        btnAddCardAfter.textContent = 'Add After';
        newCard.appendChild(btnAddCardAfter);

        return newCard;
    },


    addBefore : (currentCard) => {
        let parent = currentCard.parentNode;
        let newCard = functions.addCard(currentCard.parentNode);
        parent.insertBefore(newCard, currentCard);
    },

    addAfter : (currentCard) => {
        let newCard = functions.addCard(currentCard.parentNode);
        currentCard.after(newCard);
    }
};

export {functions};