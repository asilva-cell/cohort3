



const domTesting = {

    createLi: (num1, num2) => {
        return 0;
    },

    // EXERCISE 2 - ADD CARDS AND BUTTONS
    addBreak: () => {
        let br = document.createElement('br');
        return br;
    },

    addCard: (parent, counter) => {
        let newChild = document.createElement('div');
        parent.appendChild(newChild);
        newChild.className = 'cards';
        newChild.setAttribute('counter', counter++),
        newChild.textContent = `Card # ${counter}`;
        
        newChild.appendChild(domTesting.addBreak());
        domTesting.addButton(newChild, 'Add Before');
        domTesting.addButton(newChild, 'Add After');

        newChild.appendChild(domTesting.addBreak());
        domTesting.addButton(newChild, 'Delete');
        return newChild;
    },

    addButton: (parentCard, value) => {
        let newButton = document.createElement('button');
        parentCard.appendChild(newButton);
        newButton.name = value;
        newButton.textContent = value;
        return newButton.name;
    },

    addBefore : (parent, counter) => {
        let currentCard = domTesting.addCard(parent, counter).closest('.cards');
        console.log(currentCard);
        return 'cardBefore';
    },

    whatCards: (parent) => {
        let children = parent.children;
        let childrenList = [];
        for (const child of children) {
            childrenList.push(Number(child.getAttribute('counter')));
        };
        return childrenList;
    }
    
};

export {domTesting};
    
    


