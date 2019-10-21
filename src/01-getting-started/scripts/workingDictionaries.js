
const jsDictionaries = {

    provinceLookup: (input) => {
        const province = [
        {code : "AB", name : 'Alberta'},
        {code : 'BC', name : 'British Columbia'},
        {code : 'MB', name : 'Manitoba'},
        {code : 'NB', name : 'New Brunswick'},
        {code : 'NL', name : 'Newfoundland and Labrador'},
        {code : 'NS', name : 'Nova Scotia'},
        {code : 'NT', name : 'Northwest Territories'},
        {code : 'NU', name : 'Nunavut'},
        {code : 'ON', name : 'Ontario'},
        {code : 'PE', name : 'Prince Edward Island'},
        {code : 'QC', name : 'Quebec'},
        {code : 'SK', name : 'Saskatchewan'},
        {code : 'YT', name : 'Yukon'}
        ];

        let userProvince = province.filter(provCode => provCode.code === input.toUpperCase());
        const provName = userProvince[0].name;
        return provName;
    }
};

export {jsDictionaries};