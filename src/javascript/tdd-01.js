const functions = {
    emailBuilder : (fName, lName) => {
        let email = `${fName.slice(0,1)}.${lName}@evolveu.ca`;
        return email;
    }

};




export default functions;
