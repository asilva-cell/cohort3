import {domTesting} from './DOM.js';


const oList = document.getElementById("idOList");
home.addEventListener('click', (event) => {
    switch (event.target.value){
        case "Show":
            domTesting.showItems(oList, event.target.parentNode);
            break;
        case "Add":
            domTesting.createLiItem(oList, "Item");
            break;
    };
});



// 2nd exercise
let counter = 0;
idPlay.addEventListener('click', (event) => {
    let curent = event.target.parentNode;
    switch (event.target.name) {
        case "Add Card":
            let newcard = domTesting.addCard(idPlay, counter++);
            break;

        case "Add Before":
            domTesting.addBefore(idPlay, counter++, curent);
            break;
        
        case "Add After":
            domTesting.addAfter(idPlay, counter++, curent);
            break;

        case "Delete":
            domTesting.deleteCard(curent, idPlay);
            break;
        }
        


    console.log(event);
});
