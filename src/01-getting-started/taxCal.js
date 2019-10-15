
let payment = 0;
let income = 12;

const taxCalculator = {
    
    checkIfIncome : (income) => {
        if (income.length === 0) {
            return 0;
        };     
    },

    calulateTax : (income) => {
        switch(true) {
            case (income <= 0):
                console.log("negative");
                payment = "Invalid";
                break;
            case (income < 47630):
                console.log("1st");
                payment = income * 0.15;
                break;
            case (income < 95259):
                console.log("2nd");
                payment == (income - 47630) * 0.205 + 7145;
                break;
            case (income < 147667):
                console.log("3rd");
                payment = (income - 95259) * 0.26 + 16908;
                break;
            case (income < 210371):
                console.log("4th");
                payment = (income - 147667) * 0.29 + 30535;
                break;
            case (income >= 210371):
                console.log("5th");
                payment = (income - 210371) * 0.29 + 48719;
                break;
        }
    return payment;    
    }
};

export {taxCalculator};