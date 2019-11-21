const domCity = {
    createSelectOption: (selectParent, optionText) => {
        let option = document.createElement('option');
        option.text = optionText;
        selectParent.add(option);
        return selectParent;
    },
    loadSelectOptionServer: (selectParent, arrCitiesServer) => {
        arrCitiesServer.map(city => {
            domCity.createSelectOption(selectParent, city.name); 
        });
        return;
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
     addBreak: (parentCard) => {
        let br = document.createElement('br');
        parentCard.appendChild(br);
        return br;
    },
    addCard: (parent, cardCounter, name, latitude, longitude, population, hemisphere, type) => {
        let newChild = document.createElement('div');
        newChild.className = 'cards';
        newChild.id=`${name}`;
        newChild.setAttribute("key", cardCounter);
        domCity.addText(newChild, `${name}`);
        domCity.addText(newChild, `Population: ${population}`);
        domCity.addText(newChild, `Latitude: ${latitude}`);
        domCity.addText(newChild, `Longitude: ${longitude}`);
        domCity.addButton(newChild, 'Delete');
        domCity.addBreak(newChild);
        let cardDysplay = domCity.addText(newChild, 'cardDisplay');
        cardDysplay.textContent = `This city is in the ${hemisphere} and it's considered a ${type}.`;
        parent.appendChild(newChild);
        return newChild;
    },

    loadCardsServer : (parent, arrCitiesServer) => {
        arrCitiesServer.map(city => {
            domCity.addCard(parent, city.key, city.name, city.latitude, city.longitude, city.population, city.hemisphere, city.type); 
        });
        return;
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



export {domCity};
    
    