
const domTesting = {
     // EXERCISE 1 - ADD ITEMS TO LIST
    createLiItem: (orgList, text) => {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(text));
        orgList.appendChild(li);
        return orgList.childElementCount;
    },

    addBreak: () => {
        let br = document.createElement('br');
        return br;
    },

    showItems: (orgList, parent) => {
        if (parent.lastElementChild.className ==='showList') {
            parent.lastElementChild.remove();
        };

        let showList = document.createElement('ol');
        showList.className = 'showList';

        for (let i = 0; i < orgList.childElementCount; i++) {
            domTesting.createLiItem(showList, orgList.children[i].textContent);
        };
        parent.appendChild(showList);
        return showList;
    },


    // EXERCISE 2 - ADD CARDS AND BUTTONS
   
    addButton: (parentCard, value) => {
        let newButton = document.createElement('button');
        parentCard.appendChild(newButton);
        newButton.name = value;
        newButton.textContent = value;
        return newButton.name;
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

    addBefore : (parent, counter, currentCard) => {
        parent.insertBefore(domTesting.addCard(parent, counter), currentCard); 
        return currentCard.getAttribute('counter');
    },

    addAfter : (parent, counter, currentCard) => {
        currentCard.after(domTesting.addCard(parent, counter));
        return currentCard.getAttribute('counter');
    },

    deleteCard : (currentCard, parent) => {
        currentCard.remove();
        return parent.childElementCount;
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
    
    


