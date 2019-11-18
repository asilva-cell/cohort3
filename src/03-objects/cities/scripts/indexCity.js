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
        idSummaryDisplay.textContent = communityController.message;
        updates.updateDisplay();
        return;
    };
    idSummaryDisplay.textContent = `Please add a city.`
};
// updates.updateDisplay();

idHome.addEventListener('click', async (event) => {

    // CITY INFORMATION PANEL
    if (event.target.id === 'idAddCity') {
        let name = idNewName.value;
        
        name = name.toLowerCase()
            .split(' ')
            .map((words) => words.charAt(0).toUpperCase() + words.substring(1))
            .join(' ');
        //let name = idNewName.value.charAt(0).toUpperCase() + idNewName.value.slice(1);
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
        idSummaryDisplay.textContent = communityController.message;
        updates.updateDisplay();
        return;
    };

     // UPDATE CITY PANEL
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

    // DELETE CARDS
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
            idSummaryDisplay.textContent= communityController.message;
            updates.updateDisplay();        
        };
    };    
});

const updates = {
    updateDisplay : () =>{
        idTotal.textContent = `Total population is ${communityController.getPopulation()}.
        The most northern city in your list is ${communityController.getMostNorthern().name}
        and the most southern is ${communityController.getMostSouthern().name}.`;
        
        // idMostNorth.textContent = `The most northern city in your list is ${communityController.getMostNorthern().name}.`;
        // idMostSouth.textContent =  `The most southern city in your list is ${communityController.getMostSouthern().name}.`;
    }
};

