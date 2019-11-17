import {Community} from './cities.js';
import {domCity} from './domCity.js';
import {postData, getData, addData, clearData, deleteData, updateData} from './api.js';



let count = 0;
const communityController = new Community();
//let name ="";
//let latitude = 0;
//let longitude = 0;
//let population = 0;
// let accountIndex = 0;
// let amount = 0;
// let currentCard=document.getElementById(`id${account}`);
// let currentCardName;

let serverData = [];
let lastKey = 0;
//ON PAGE LOAD
window.onload = async (event) => {
    //clearData();
    serverData = await getData();
    console.log(serverData);
    if (serverData.length !== 0) {
        lastKey = serverData[serverData.length-1].key;
        communityController.loadCitiesServer(serverData, lastKey);
        domCity.loadCardsServer(idCityTable, serverData);
        domCity.loadSelectOptionServer(idCityNameSelect, serverData);
    };
    console.log(communityController.cities);
};

// RIGHT SIDE PANEL
idRightPanel.addEventListener('click', async (event) => {
    if (event.target.id === 'idCreateBtn') {
        idCreateCityForm.style.visibility = 'visible';
    }
    
    if (event.target.id === 'idRightSubmit') {
        let name = idNewName.value;
        let latitude = Number(idNewLatitude.value);
        let longitude = Number(idNewLongitude.value);
        let population = Number(idNewPopulation.value);

        
        lastKey++;
        
        let newCity = communityController.createCity(lastKey, name, latitude, longitude, population);
        console.log(newCity);
        console.log(communityController.cities);


        await addData(newCity);
        domCity.addCard(idCityTable, newCity.key, name, latitude, longitude, population);
        domCity.createSelectOption(idCityNameSelect, newCity.name);
        //createSelectOption: (selectParent, optionText)
    }
    
    if (event.target.id === 'idRightCancel') {
        
        idNewLatitude.value = "";
        idCreateAccForm.style.visibility = 'collapse';
    }
    if(event.target.className === 'Delete') {
        let currentCard = event.target.parentNode;
        console.log(currentCard);

        let currentCardName = currentCard.children[0].textContent;
        console.log(currentCardName);
        console.log(communityController.cities);

        communityController.deleteCity(currentCard);
        console.log(communityController.cities);


        domCity.deleteCard(currentCard);
        console.log(communityController.byName);
    
        communityController.deleteCity(currentCardName);
        
        domCity.deleteSelectOption(idCityNameSelect, currentCardName);
        //idRightDisplay.textContent= communityController.message;
        // updates.updateDisplay();      
        await deleteData(currentCard.getAttribute("key"));
    }
   
});
// LEFT SIDE PANEL
idLeftSubmit.addEventListener('click', async (event) => {
    let cityName = idCityNameSelect.value;
    if (cityName !== 'default') {

        let populationChange;
        
        // let populationChange = idPopulationChange.value;
        let amount = Number(idAmountInp.value);;

        console.log(populationChange); //type of move
        console.log(amount); //people moving

        console.log(communityController.byName); //all cities
        console.log(communityController.byName[cityName]); //single city object
        console.log(communityController.byName[cityName].key); //single city object KEY
        let cityObj = communityController.byName[cityName];

        let currentCityCard = document.getElementById(`${cityObj.name}`);
        let currentCityKey = cityObj.key;

            if (document.getElementById("idMoveIn").checked) {
                populationChange = "moveIn";
            }else{populationChange = "moveOut";}
        communityController.populationControl(cityObj, populationChange, amount);
        currentCityCard.children[3].textContent = `Population: ${cityObj.population}`;



        console.log(populationChange);
       
        await updateData(cityObj);

        console.log(communityController.byName);
        console.log(communityController.cities);


        

       


    };
    //     accountIndex = communityController.getAccountIndex(account);
        
    //     currentCard = document.getElementById(`${account}`);
        
    //     balance = communityController.operationControl(populationChange, amount, accountIndex);
    //     if (balance !== undefined) {
    //         domCity.adjustCardBalance(currentCard, communityController.userAccounts[accountIndex].balance);
    //         updates.updateDisplay();   
    //     };
    // }else{communityController.message= 'Please select a valid account.'};
    // idBalanceInp.value = '';
    // idRightDisplay.textContent = '';
    // idLeftDisplay.textContent = communityController.message;
    
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

