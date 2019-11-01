import {functions} from './functions.js';

idBtn.addEventListener("click", ()=>{
    functions.dummyFunction();
});

//let count = 0;
// -----------DOM SPIKE------------
// idAddDiv.addEventListener("click", ()=>{
    
//     let newDiv = document.createElement('div');
//     newDiv.className = "boxes";
//     idBigDiv.appendChild(newDiv);
//     newDiv.setAttribute("count", count);
//     newDiv.textContent = `Card# ${count++}`
    
// });

// idBigDiv.addEventListener('click', (event) => {
//     console.log(event.target);
//     console.log('-----DIV-----');
//     console.log(event.target.getAttribute("count"));
//     console.log(event.target.parentNode);
//     console.log(event.target.children);
//     console.log(event.target.nextElementSibling)
//     console.log('-----DIV-----');
//     let newDiv = document.createElement('div');
//     newDiv.className = "boxes";
//     newDiv.setAttribute("count", count);
//     newDiv.textContent = `Card# ${count++}`;
//     idBigDiv.appendChild(newDiv);
//     let current = event.target;
//     console.log(current);
//     //idBigDiv.insertBefore(newDiv, current);

//     current.after(newDiv);

// });

idBody.addEventListener('click', (event) => {
    let currentCard = event.target.parentNode;
    if (event.target.id === "idAddCard") {
        functions.addCard(idBody);
    }else if (event.target.id === "idAddCardBefore") {
        functions.addBefore(currentCard);
    }else if (event.target.id === "idAddCardAfter") {
        functions.addAfter(currentCard);
    };
});
