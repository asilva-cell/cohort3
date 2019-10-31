
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
        return newCard;
    },


    addBefore : (currentCard) => {
        return 0;
    }









    
    // mapObject : (array) => {
    //     let arrayBalance = array.map(function (user) {return user.balance});
    //     console.log(arrayBalance);
    //     return arrayBalance;
    // },

    // maxBalance : (arrayBalance) => {
    //     let maxBalance = Math.max.apply(...arrayBalance); 
    //     console.log(maxBalance);
    //     return maxBalance;
    // },

    // minBalance : (arrayBalance) => {
    //     let minBalance = Math.min.apply(...arrayBalance); 
    //     console.log(maxBalance);
    //     return minBalance;
    // }


};

export {functions};