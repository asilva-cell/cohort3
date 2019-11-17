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
    
    if (event.target.value === 'Add City') {
      
        let name = idNewName.value;
        if (communityController.checkCityExists(name) === true){
            idRightInputError.textContent = communityController.message;
            return;
        };
        lastKey++;
        let latitude = Number(idNewLatitude.value);
        let longitude = Number(idNewLongitude.value);
        let population = Number(idNewPopulation.value);
        let newCity = communityController.createCity(lastKey, name, latitude, longitude, population);
        await addData(newCity);
        domCity.addCard(idCityTable, newCity.key, name, latitude, longitude, population);
        domCity.createSelectOption(idCityNameSelect, newCity.name);
        idRightDisplay.textContent = communityController.message;
        return;
        
    }

    if(event.target.className === 'Delete') {
        console.log(await getData());
        const toConfirm = confirm('Are you sure you want to delete this city?');
        if (toConfirm === true) {
            let currentCard = event.target.parentNode;
            let currentCardName = currentCard.children[0].textContent;
            await deleteData(currentCard.getAttribute("key"));
            communityController.deleteCity(currentCard);
            domCity.deleteCard(currentCard);
            communityController.deleteCity(currentCardName);
            domCity.deleteSelectOption(idCityNameSelect, currentCardName);
            idRightDisplay.textContent= communityController.message;
            // updates.updateDisplay();      
            
        }
    }    
});
// LEFT SIDE PANEL
idLeftSubmit.addEventListener('click', async (event) => {
    let cityName = idCityNameSelect.value;
    if (cityName !== 'default') {
        let cityObj = communityController.byName[cityName];
        let populationChange;
        let amount = Number(idAmountInp.value);
        if (amount < 0){
            idLeftDisplay.textContent = `Please enter a positive integer.`;
            return;
        };
        if (document.getElementById("idMoveIn").checked) {
            populationChange = "moveIn";
        }else{populationChange = "moveOut";};

        if (populationChange === "moveOut" && cityObj.population < amount){
            idLeftDisplay.textContent = `Moving out people should be less than current population.`;
            return;
        };

        let currentCityCard = document.getElementById(`${cityObj.name}`);
        communityController.populationControl(cityObj, populationChange, amount);
        await updateData(cityObj);
        currentCityCard.children[3].textContent = `Population: ${cityObj.population}`;

    }else{
        idLeftDisplay.textContent = `Please select a city to update.`
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

