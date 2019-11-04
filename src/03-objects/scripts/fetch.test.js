import {fetchLearn} from './fetch.js';

const data =    [{"name":"Majzik","surname":"Fruzsina","gender":"female","region":"Hungary"},{"name":"Amanda","surname":"Lupea","gender":"female","region":"Romania"},{"name":"Mojca","surname":"Zupančič","gender":"female","region":"Slovenia"},{"name":"Λεωνίδας","surname":"Μανιάκης","gender":"male","region":"Greece"},{"name":"Alberta","surname":"Câmpineanu","gender":"female","region":"Romania"},{"name":"Ingrida","surname":"Šimo","gender":"female","region":"Slovakia"},{"name":"Margaréta","surname":"Plešivec","gender":"female","region":"Slovakia"},{"name":"Agárdi","surname":"Rezső","gender":"male","region":"Hungary"},{"name":"Nadia","surname":"Todea","gender":"female","region":"Romania"},{"name":"Ερατοσθένης","surname":"Γιαννακόπουλος","gender":"male","region":"Greece"}];



test('checking getting the first name of the first person', () => {
    expect(fetchLearn.getFirstName(data)).toEqual('Majzik');
});
test('checking getting ALL first names', () => {
    const allFnames = fetchLearn.getAllFirstNames(data);
    console.log(allFnames);
    expect(allFnames.length).toEqual(10);
    expect(allFnames[0]).toEqual('Majzik');
    // expect(allFnames[4]).toEqual('Alberta');
    // expect(allFnames[9]).toEqual('Ερατοσθένης');


    
    
});

