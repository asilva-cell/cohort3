import {AccountController} from './accounts.js';
import {domAccount} from './domAccount.js';



const accController = new AccountController();
let balance = 0;
let transaction;
let account;
let accountIndex = 0;
let amount = 0;
let currentCard=document.getElementById(`id${account}`);
let currentCardName;

// RIGHT SIDE PANEL
idRightPanel.addEventListener('click', (event) => {
    if (event.target.id === 'idCreateBtn') {
        idCreateAccForm.style.visibility = 'visible';
    }
    idRightCancel
    if (event.target.id === 'idRightSubmit') {
        account = idNewAccName.value;
        if (account === "" || accController.checkAccountExists(account) === true) {
            idRightInputError.textContent= `Please enter a name for the account.`;
            return;
        };
        balance = Number(idNewAccBal.value);
        accController.addAccount(account, balance);
        domAccount.addCard(idAccTable, account, balance);
        domAccount.createSelectOption(idAccNameSelect, account);
        idRightDisplay.textContent = accController.message;
        idCreateAccForm.style.visibility = 'collapse';
        idNewAccName.value = "";
        idNewAccBal.value = "";
        updates.updateDisplay();
    }
    
    if (event.target.id === 'idRightCancel') {
        idNewAccName.value = "";
        idNewAccBal.value = "";
        idCreateAccForm.style.visibility = 'collapse';
    }
    if(event.target.className === 'Delete') {
        currentCard = event.target.parentNode;
        currentCardName = currentCard.children[0].textContent;
        accController.removeAccount(currentCardName);
        domAccount.deleteCard(currentCard);
        domAccount.deleteSelectOption(idAccNameSelect, currentCardName);
        idRightDisplay.textContent= accController.message;
        updates.updateDisplay();
    }
   
});

// LEFT SIDE PANEL
idLeftSubmit.addEventListener('click', (event) => {
    
    account = idAccNameSelect.value;
    if (account !== 'default') {
        transaction = idTransactions.value;
        amount = Number(idBalanceInp.value);
        accountIndex = accController.getAccountIndex(account);
        
        currentCard = document.getElementById(`${account}`);
        
        balance = accController.operationControl(transaction, amount, accountIndex);
        if (balance !== undefined) {
            domAccount.adjustCardBalance(currentCard, accController.userAccounts[accountIndex].balance);
            updates.updateDisplay();   
        };
    }else{accController.message= 'Please select a valid account.'};
    idBalanceInp.value = '';
    idRightDisplay.textContent = '';
    idLeftDisplay.textContent = accController.message;
    
});

const updates = {
    updateDisplay : () =>{
        idRightTotal.textContent = `Total account balance is $${accController.totalBalance()}.`;
        idRightMaxBalance.textContent = `Your maximum balance is $${accController.maxBalance().balance}
            in your ${accController.maxBalance().accountName} account.`;
        idRightMinBalance.textContent =  `Your minimum balance is $${accController.minBalance().balance}
            in your ${accController.minBalance().accountName} account.`;
    }
};


