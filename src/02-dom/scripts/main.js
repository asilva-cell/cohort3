import {domTesting} from './DOM.js';

const oList = document.getElementById("idOList");

// home.addEventListener('click', (event) => {
//     console.log(event);
// });


idShow.addEventListener('click', (event) => {
    console.log(oList.children);
});

idAdd.addEventListener('click', (event) => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode('Testing'));
    oList.appendChild(li);
});


// 2nd exercise
let counter = 0;
idPlay.addEventListener('click', (event) => {

    if (event.target.id === "idAddCard") {
        let newcard = domTesting.addCard(idPlay, counter++);
    }

    if (event.target.name === "Add Before") {
        let newcard = domTesting.addBefore(idPlay, counter++);
    }
    console.log(event);
});
