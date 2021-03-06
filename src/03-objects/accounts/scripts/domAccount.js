
const domAccount = {
    createSelectOption: (selectParent, optionText) => {
        let option = document.createElement('option');
        option.text = optionText;
        selectParent.add(option);
        return selectParent;
    },

    deleteSelectOption: (selectParent, optionText) => {
        let optionToRemove;
        for (let i=0; i< selectParent.length; i++){
            if (selectParent.options.item(i).text === optionText){ 
                optionToRemove = selectParent[i];    
            };
        };
        optionToRemove.remove();
        return selectParent;
    },

    // addBreak: () => {
    //     let br = document.createElement('br');
    //     return br;
    // },

    addButton: (parentCard, value) => {
        let newButton = document.createElement('button');
        parentCard.appendChild(newButton);
        newButton.className = value
        newButton.textContent = value;
        return newButton;
    },

    addText: (parentCard, text) => {
        let newText = document.createElement('span');
        newText.textContent = text;
        newText.className = `${text}`;
        newText.id = `id${text}`;
        parentCard.appendChild(newText);
        return newText;
    },
    
    addCard: (parent, name, balance) => {
        let newChild = document.createElement('div');
        newChild.className = 'cards';
        newChild.id=`${name}`;
        domAccount.addText(newChild, `${name}`);
        domAccount.addText(newChild, `$${balance}`);
        domAccount.addButton(newChild, 'Delete');
        parent.appendChild(newChild);
        return newChild;
    },

    adjustCardBalance : (currentCard, newBalance) => {
        currentCard.children[1].textContent = `$${newBalance}`;
        return currentCard;
    },

    deleteCard : (currentCard) => {
        let parent = currentCard.parentNode;
        currentCard.remove();
        return parent.childElementCount;
    }
};



export {domAccount};
    
    


