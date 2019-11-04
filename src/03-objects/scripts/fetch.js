
const fetchLearn = {
    
    getFirstName: (data) => {
        let i=0;
        return data[i].name;
    },
    getAllFirstNames: (data) => {
        let firstNames = []
        
        for ( let person of data) {
            firstNames.push(person.name);
        }
        return firstNames;
    }   
}
