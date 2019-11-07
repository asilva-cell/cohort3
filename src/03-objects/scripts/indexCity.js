import {Community} from './cities.js';
import {domCity} from './domCity.js';



const communityController = new Community();
let name ="";
let latitude = 0;
let longitude = 0;
let population = 0;

let transaction;
let account;
let accountIndex = 0;
let amount = 0;
let currentCard=document.getElementById(`id${account}`);
let currentCardName;

// RIGHT SIDE PANEL
idRightPanel.addEventListener('click', (event) => {
    if (event.target.id === 'idCreateBtn') {
        idCreateCityForm.style.visibility = 'visible';
    }
    
    if (event.target.id === 'idRightSubmit') {
        name = idNewName.value;
        latitude = Number(idNewLatitude.value);
        longitude = Number(idNewLongitude.value);
        population = Number(idNewPopulation.value);
        console.log(name, latitude,longitude,population);
        communityController.createCity(name, latitude, longitude, population);
        domCity.addCard(idCityTable, name, latitude, longitude, population);
        console.log(communityController.byName);
        console.log(communityController.cities);
        
    }
    
    if (event.target.id === 'idRightCancel') {
        
        idNewLatitude.value = "";
        idCreateAccForm.style.visibility = 'collapse';
    }
    if(event.target.className === 'Delete') {
        currentCard = event.target.parentNode;
        currentCardName = currentCard.children[0].textContent;
        console.log(currentCard, currentCardName);
        console.log(communityController.cities);

        communityController.deleteCity(currentCardName);
        domCity.deleteCard(currentCard);
        console.log(communityController.byName);
    
        communityController.deleteCity(currentCardName);
        console.log(communityController.byName);
        console.log(communityController.cities);
        // domCity.deleteSelectOption(idAccNameSelect, currentCardName);
        // idRightDisplay.textContent= communityController.message;
        // updates.updateDisplay();
    }
   
});

// LEFT SIDE PANEL
idLeftSubmit.addEventListener('click', (event) => {
    
    account = idAccNameSelect.value;
    if (account !== 'default') {
        transaction = idTransactions.value;
        amount = Number(idBalanceInp.value);
        accountIndex = communityController.getAccountIndex(account);
        
        currentCard = document.getElementById(`${account}`);
        
        balance = communityController.operationControl(transaction, amount, accountIndex);
        if (balance !== undefined) {
            domCity.adjustCardBalance(currentCard, communityController.userAccounts[accountIndex].balance);
            updates.updateDisplay();   
        };
    }else{communityController.message= 'Please select a valid account.'};
    idBalanceInp.value = '';
    idRightDisplay.textContent = '';
    idLeftDisplay.textContent = communityController.message;
    
});

const updates = {
    updateDisplay : () =>{
        idRightTotal.textContent = `Total account balance is $${communityController.totalBalance()}.`;
        idRightMaxBalance.textContent = `Your maximum balance is $${communityController.maxBalance().balance}
            in your ${communityController.maxBalance().accountName} account.`;
        idRightMinBalance.textContent =  `Your minimum balance is $${communityController.minBalance().balance}
            in your ${communityController.minBalance().accountName} account.`;
    }
};


