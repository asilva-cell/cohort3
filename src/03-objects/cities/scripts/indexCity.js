import {Community} from './cities.js';
import {domCity} from './domCity.js';
import {postData, getData, addData, clearData, deleteData, updateData} from './api.js';

const communityController = new Community();
let serverData = [];
let lastKey = 0;
//ON PAGE LOAD
window.onload = async (event) => {
    //await clearData();
    serverData = await getData();
    if (serverData.length !== 0) {
        lastKey = serverData[serverData.length-1].key;
        communityController.loadCitiesServer(serverData, lastKey);
        domCity.loadCardsServer(idCityTable, serverData);
        domCity.loadSelectOptionServer(idCityNameSelect, serverData);
        idRightDisplay.textContent = communityController.message;
        return;
    };
    idRightDisplay.textContent = `Please add a city.`
};

// RIGHT SIDE PANEL
idRightPanel.addEventListener('click', async (event) => {
    // if (event.target.id === 'idCreateBtn') {
    //     idCreateCityForm.style.visibility = 'visible';
    // }
    
    if (event.target.id === 'idRightSubmit') {
        let name = idNewName.value;
        let latitude = Number(idNewLatitude.value);
        let longitude = Number(idNewLongitude.value);
        let population = Number(idNewPopulation.value);

        
        lastKey++;
        
        let newCity = communityController.createCity(lastKey, name, latitude, longitude, population);
        await addData(newCity);
        domCity.addCard(idCityTable, newCity.key, name, latitude, longitude, population);
        domCity.createSelectOption(idCityNameSelect, newCity.name);
    }
    
    if (event.target.id === 'idRightCancel') {
        
        idNewLatitude.value = "";
        idCreateAccForm.style.visibility = 'collapse';
    }
    if(event.target.className === 'Delete') {
        let currentCard = event.target.parentNode;
        let currentCardName = currentCard.children[0].textContent;
        communityController.deleteCity(currentCard);
        domCity.deleteCard(currentCard);
        communityController.deleteCity(currentCardName);
        domCity.deleteSelectOption(idCityNameSelect, currentCardName);
        idRightDisplay.textContent= communityController.message;
        // updates.updateDisplay();      
        await deleteData(currentCard.getAttribute("key"));
    }
   
});
// LEFT SIDE PANEL
idLeftSubmit.addEventListener('click', async (event) => {
    let cityName = idCityNameSelect.value;
    if (cityName !== 'default') {

        let populationChange;

        let amount = Number(idAmountInp.value);;

        let cityObj = communityController.byName[cityName];

        let currentCityCard = document.getElementById(`${cityObj.name}`);
        let currentCityKey = cityObj.key;

        if (document.getElementById("idMoveIn").checked) {
            populationChange = "moveIn";
        }else{populationChange = "moveOut";}
        communityController.populationControl(cityObj, populationChange, amount);
        currentCityCard.children[3].textContent = `Population: ${cityObj.population}`;

        await updateData(cityObj);

        


    };
 
});

// const updates = {
//     updateDisplay : () =>{
//         idRightTotal.textContent = `Total account balance is $${communityController.totalBalance()}.`;
//         idRightMaxBalance.textContent = `Your maximum balance is $${communityController.maxBalance().balance}
//             in your ${communityController.maxBalance().accountName} account.`;
//         idRightMinBalance.textContent =  `Your minimum balance is $${communityController.minBalance().balance}
//             in your ${communityController.minBalance().accountName} account.`;
//     }
// };

