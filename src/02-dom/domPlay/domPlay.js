

const domTesting = {
    addCard: (parent, counter) => {
        let newChild = document.createElement('div');
        parent.appendChild(newChild);
        newChild.className = 'cards';
        newChild.setAttribute('counter', counter),
        newChild.textContent = `Card # ${counter}`;
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
