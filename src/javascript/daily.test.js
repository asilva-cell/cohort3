import {functions} from './daily';

const people = [
	{fname:"Alex", lname:"Smith", province:"BC", age:33},
	{fname:"Angela", lname:"Jones", province:"AB", age:61},
	{fname:"Anne", lname:"Bird", province:"SK", age:35},
	{fname:"Brent", lname:"Riddle", province:"MN", age:79},
	{fname:"Byron", lname:"Cardenas", province:"BC", age:38},
	{fname:"Carrie", lname:"Ramirez", province:"AB", age:89},
	{fname:"Cheryl", lname:"Glenn", province:"SK", age:70},
	{fname:"Dima", lname:"Curry", province:"MN", age:67},
	{fname:"Dustin", lname:"Bullock", province:"BC", age:59},
	{fname:"Eva", lname:"Keiths", province:"AB", age:24},
	{fname:"Faith", lname:"Liu", province:"SK", age:46},
	{fname:"Fawad", lname:"Bowman", province:"MN", age:69},
	{fname:"Forest", lname:"Vaughn", province:"BC", age:52},
    {fname:"Giovanni", lname:"Browning", province:"AB", age:32},
    {fname:"Greg", lname:"Hogan", province:"SK", age:55},
	{fname:"Harpreet", lname:"Ramsey", province:"MN", age:18},
	{fname:"Ian", lname:"Fitzgerald", province:"BC", age:16},
	{fname:"James", lname:"Kramer", province:"AB", age:57},
	{fname:"Jarvis", lname:"Ortega", province:"SK", age:69},
	{fname:"Jawad", lname:"Huerta", province:"MN", age:35},
	{fname:"Jinbong", lname:"Robinson", province:"BC", age:26},
	{fname:"Jingnan", lname:"Hatfield", province:"AB", age:71},
	{fname:"Joe", lname:"Banks", province:"SK", age:37},
	{fname:"Kristina", lname:"Dalton", province:"MN", age:73},
	{fname:"Latora", lname:"Matthews", province:"BC", age:25},
	{fname:"Lauren", lname:"McClure", province:"AB", age:42},
	{fname:"Licedt", lname:"Rasmussen", province:"SK", age:30},
	{fname:"Linden", lname:"Pierce", province:"MN", age:68},
	{fname:"Luis", lname:"Price", province:"BC", age:23},
	{fname:"Marcela", lname:"Perez", province:"AB", age:20},
	{fname:"Marilou", lname:"Graham", province:"SK", age:32},
	{fname:"Matt", lname:"Novak", province:"MN", age:29},
	{fname:"Monica", lname:"Giles", province:"BC", age:34},
	{fname:"Niloufar", lname:"Carson", province:"AB", age:29},
	{fname:"Omar", lname:"Olson", province:"SK", age:69},
	{fname:"Roger", lname:"Woodard", province:"MN", age:84},
	{fname:"Roman", lname:"Swanson", province:"BC", age:21},
	{fname:"Seun", lname:"Kelly", province:"AB", age:60},
	{fname:"Shane", lname:"Frost", province:"SK", age:87},
	{fname:"Steven", lname:"Haynes", province:"MN", age:47},
	{fname:"Thomas", lname:"Hart", province:"BC", age:14},
	{fname:"Trent", lname:"Kerr", province:"AB", age:12},
	{fname:"Darrell", lname:"Koch", province:"SK", age:10},
	{fname:"Tylor", lname:"Torres", province:"MN", age:98}
];





const data = {
    staff: [
        { fname: "Jane", lname: "Smith", balance: 10 },
        { fname: "Liam", lname: "Henry", balance: 1000 },
        { fname: "Emma", lname: "Jones", balance: 1330 },
        { fname: "Olivia", lname: "Notly", balance: 310 },
        { fname: "Noah", lname: "Ho", balance: 503 },
        { fname: "William", lname: "Lee", balance: 520 },
        { fname: "Benjamin", lname: "Amis", balance: 150 },
    ],
    company: "EvolveU",
    city: "Calgary",
    prov: "Alberta",
};
//2019/11/21 - callbacks part 2
test('check peopleTotals from AB and BC', () => {
    const peopleTotals = functions.peopleABBC(people, functions.peopleTotals);
    // let peopleTotals = functions.peopleTotals;
    expect(peopleTotals.numPeople).toBe(22);
    expect(peopleTotals.age).toBe(838);
    expect(peopleTotals.ageAvg).toBeCloseTo(38.09);


});


 //2019/11/8 - callbacks part 1
 test('filter people from AB and BC', () => {
    const peopleABBC = functions.peopleABBC(people, 'callback');
    expect(peopleABBC.length).toBe(22);
    expect(peopleABBC[0].province).toBe('BC');
    expect(peopleABBC[1].province).toBe('AB');

    let fullNameStr = functions.fullName([{fname:"Alex", lname:"Smith", province:"BC", age:33}]);
    expect(fullNameStr[0]).toBe('Alex Smith');

    const peopleABBC2 = functions.peopleABBC(people, functions.fullName);
    expect(peopleABBC2.length).toBe(22);
    expect(peopleABBC2[0]).toBe('Alex Smith');
    expect(peopleABBC2[21]).toBe('Trent Kerr');
});

//2019/11/6 - filter callback
test('filter: balance=>1000', () => {
    const balanceGreater = functions.balanceGreater(data.staff,1000);
    expect(balanceGreater.length).toBe(2);
    expect(balanceGreater[0].balance).toBeGreaterThanOrEqual(1000);
    expect(balanceGreater[1].balance).toBeGreaterThanOrEqual(1000);
});


//2019/10/30 - USING REDUCE AND MAP take an array of objects and return totals
test('reduce: balance addition', () => {
    const totalBalance = functions.loopStaffBalance(data.staff);
    expect(totalBalance).toBe(3823);
});

test('map: average balance ', () => {
    const averageBalance = functions.loopStaffAverageBalance(data.staff);
    expect(averageBalance).toBe(546.14);
});



//2019/10/25 - USING FOR EACH take an array of objects and return an array of emails 
test('for each: email builder for company', () => {
    const staffEmailForEach = functions.loopStaffForEach(data.staff);
    expect(staffEmailForEach[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmailForEach[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmailForEach[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('map: email builder for company', () => {
    const staffEmailMap = functions.loopStaffMap(data.staff);
    
  
    expect(staffEmailMap[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmailMap[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmailMap[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

//2019/10/24 - USING IN take an array of objects and return an array of emails 
test('for in: email builder for company', () => {
   
    const staffEmailIn = functions.loopStaffIn(data.staff);
    expect(staffEmailIn[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmailIn[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmailIn[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

test('for of: email builder for company', () => {
   
    const staffEmailOf = functions.loopStaffOf(data.staff);
    expect(staffEmailOf[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmailOf[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmailOf[6])
        .toEqual("benjamin.amis@evolveu.ca");
});

//2019/10/21 - take an array of objects and return an array of emails
test('for each: email builder for company', () => {
   
    const staffEmail = functions.loopStaff(data.staff);
    expect(staffEmail[0])
        .toEqual("jane.smith@evolveu.ca");
    expect(staffEmail[3])
        .toEqual("olivia.notly@evolveu.ca");
    expect(staffEmail[6])
        .toEqual("benjamin.amis@evolveu.ca");
});


//2019/10/17 - slice, splice, forEach, map, filter and reduce
test('check slice', () => {
    expect(functions.slice([1,2,3,4], 1,3)).toEqual([2,3]);
});

test('check splice', () => {
    expect(functions.splice(2,2, "hi", [1,2,3,4])).toEqual([3,4]);
});

test('check for each loop in array by pushing value into a new array', () => {
    expect(functions.forEachInArray([1,2,3])).toEqual([2,4,6]);
});

test('check mapping through an array of objects and returns users age', () => {
    expect(functions.map1()).toEqual([33, 65, 46, 45, 33]);
});

test('check mapping through an array of objects and returns users full name', () => {
    expect(functions.map2()).toEqual(['Anna Smith', 'Laura Jhons', 'Jhon Cooper', 'Julia Foxx', 'Eric Blunt' ]);
});

test('check reduce to add up users age', () => {
    expect(functions.reduce()).toBe(222);
});

test('check filter users over 50', () => {
    expect(functions.filter()).toEqual([{fName: "Laura", lName: "Jhons", age: 65, gender: "female"}]);
});


//PREPARED FOR ARRAY - 2019/10/15
test('checking fo rArray ', () => {
    expect(functions.forArray([0, 1, 2])).toEqual([0, 2, 4]);
});

test('check while loop in array by pushing value into a new array', () => {
    expect(functions.whileLopping([1,2,3])).toEqual([2,4,6]);
});

test('check do while loop in array by pushing value into a new array', () => {
    expect(functions.doWhileLopping([1,2,3])).toEqual([2,4,6]);
});

test('check for/ in loop in object by returning an array of keys', () => {
    expect(functions.forIn({a:1, b:2})).toEqual(["a", "b"]);
});

test('check for/ of loop with array by adding !to each item', () => {
    expect(functions.forOf(["Hello", "Bye"])).toEqual(["Hello!", "Bye!"]);
});




//my first test


test('this is me playing', () => {
   //console.log("Hello World!");

});

 test('Check the comparison', () => {
    expect(functions.assertEquals('a', 'b')).toBe(false);
    expect(functions.assertEquals(1, '1')).toBe(false);
    expect(functions.assertEquals('a', 'a')).toBe(true);
    expect(functions.assertEquals(1, 1)).toBe(true);

});

// Write a function to format an email based on an array.

test('email builder from an array', () => {
   const name = ["first", "last"];
   expect(functions.makeEmailArr(name))
       .toEqual("first.last@evolveu.ca");
   expect(functions.makeEmailArr(["First", "Last"]))
       .toEqual("first.last@evolveu.ca");
   expect(functions.makeEmailArr(["Bill", "Smith"]))
       .toEqual("bill.smith@evolveu.ca");
});

test('email builder from an object / map', () => {
    const name = { fname: 'first', lname: 'last' };
    expect(functions.makeEmailObj(name))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
        .toEqual("first.last@evolveu.ca");
    expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
        .toEqual("bill.smith@evolveu.ca");
});
