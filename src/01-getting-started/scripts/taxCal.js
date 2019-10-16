const bracker1 = {maxIncome : 47630, taxRate : 0.15, tax : 0};
const bracker2 = {maxIncome : 95259, taxRate : 0.205, tax : 7145};
const bracker3 = {maxIncome : 147667, taxRate : 0.26, tax : 16908};
const bracker4 = {maxIncome : 210371, taxRate : 0.29, tax : 30535};
const bracker5 = {maxIncome : bracker4.maxIncome, taxRate :0.33, tax : 48719};

const taxCalculator = {
    
    checkIfIncome : (income) => {
        if (income.length === 0) {
            return 0;
        };     
    },

    calulateTax : (income) => {
        let payment = 0;
        switch(true) {
            case (income <= 0):
                payment = "Invalid";
                break;
            case (income < bracker1.maxIncome):
                payment = Number((income * bracker1.taxRate).toFixed(2));
                break;
            case (income < bracker2.maxIncome):
                payment = Number(((income - bracker1.maxIncome) * bracker2.taxRate + bracker2.tax).toFixed(2));
                break;
            case (income < bracker3.maxIncome):
                payment = Number(((income - bracker2.maxIncome) * bracker3.taxRate + bracker3.tax).toFixed(2));
                break;
            case (income < bracker4.maxIncome):
                payment = Number(((income - bracker3.maxIncome) * bracker4.taxRate + bracker4.tax).toFixed(2));
                break;
            case (income >= bracker5.maxIncome):
                payment = Number(((income - bracker5.maxIncome) * bracker5.taxRate + bracker5.tax).toFixed(2));
                break;
        }
    return payment;    
    }
};

export {taxCalculator};