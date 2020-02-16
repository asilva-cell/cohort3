bracker1 = {'maxIncome' : 48535, 'taxRate' : 0.15}
bracker2 = {'maxIncome' : 97069, 'taxRate' : 0.205}
bracker3 = {'maxIncome' : 150473, 'taxRate' : 0.26}
bracker4 = {'maxIncome' : 214368, 'taxRate' : 0.29}
bracker5 = {'taxRate' :0.33}

def check_valid_income(income):
    if income <= 0:
        return True

def cal_maxtax_per_bracker():
    bracker1['maxTax'] = bracker1['maxIncome'] * bracker1['taxRate']
    bracker2['maxTax'] = (bracker2['maxIncome'] - bracker1['maxIncome'])* bracker2['taxRate'] + bracker1['maxTax']
    bracker3['maxTax'] = (bracker3['maxIncome'] - bracker2['maxIncome'])* bracker3['taxRate'] + bracker2['maxTax']
    bracker4['maxTax'] = (bracker4['maxIncome'] - bracker3['maxIncome'])* bracker4['taxRate'] + bracker3['maxTax']
    print(bracker1['maxTax'])

def tax_payment (income):
    cal_maxtax_per_bracker()
    payment = 0
    if check_valid_income(income):
        return 'Your income must be greater zero.'
    elif income <= bracker1['maxIncome']:
        payment = income * bracker1['taxRate']
    elif income <= bracker2['maxIncome']:
        payment = (income - bracker1['maxIncome'])* bracker2['taxRate'] + bracker1['maxTax']
    elif income <= bracker3['maxIncome']:
        payment = (income - bracker2['maxIncome'])* bracker3['taxRate'] + bracker2['maxTax']
    elif income <= bracker4['maxIncome']:
        payment = (income - bracker3['maxIncome'])* bracker4['taxRate'] + bracker3['maxTax']
    else:
        payment= (income - bracker4['maxIncome'])* bracker5['taxRate'] + bracker4['maxTax']
    return round(payment, 2)


cal_maxtax_per_bracker()