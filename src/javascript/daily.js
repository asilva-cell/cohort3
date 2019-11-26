const functions = {
	//2019/11/22 - three ways of functons
	sortAlpha: myArray => {
		let sortedArray = myArray.sort(function sortAlpha(a, b) {
			console.log(a.str, b.str);
			if (a.str > b.str) {
				return 1;
			}
			return -1;
		});
		return sortedArray;
	},

	nunAscending: myArray => {
		let sortedArray = myArray.sort(function(a, b) {
			return a.num - b.num;
		});
		return sortedArray;
	},

	//2019/11/21 - callbacks part 2
	peopleTotals: peopleArray => {
		let totalAge = peopleArray.reduce(
			(accumulator, person) => accumulator + person.age,
			0
		);
		let totalPeople = peopleArray.length;
		let ageAvg = totalAge / totalPeople;
		return { numPeople: totalPeople, age: totalAge, ageAvg: ageAvg };
	},

	//2019/11/8 - callbacks part 1

	peopleABBC: (people, callback) => {
		let peopleOfAbAndBc = people.filter(function(person) {
			return person.province === "AB" || person.province === "BC";
		});

		if (typeof callback === "function") {
			let peopleFullNames = callback(peopleOfAbAndBc);
			return peopleFullNames;
		}

		return peopleOfAbAndBc;
	},

	fullName: people => {
		let peopleFullName = [];
		people.forEach(function(person) {
			peopleFullName.push(`${person.fname} ${person.lname}`);
		});
		return peopleFullName;
	},

	//2019/11/6 - filter callback

	balanceGreater: (staffArray, filterBalance) => {
		let balanceGreater = staffArray.filter(function(person) {
			return person.balance >= filterBalance;
		});

		console.log(balanceGreater);
		return balanceGreater;
	},

	//2019/10/30 - reduce(): take the array of objects and returns total of balance
	loopStaffBalance: staffArray => {
		let totalBalance = staffArray.reduce(
			(accumulator, user) => accumulator + user.balance,
			0
		);
		// accumulator is the sum of balance
		return totalBalance;
	},

	loopStaffAverageBalance: staffArray => {
		let averageBalance =
			functions.loopStaffBalance(staffArray) / staffArray.length;
		return Number(averageBalance.toFixed(2));
	},

	//2019/10/25 - for echa / map: take the array of objects and returns list of emails
	loopStaffForEach: staffArray => {
		let staffForEach = [];
		staffArray.forEach(function(person) {
			staffForEach.push(functions.makeEmailObj(person));
		});

		return staffForEach;
	},

	loopStaffMap: staffArray => {
		let staffMap = staffArray.map(person => {
			return functions.makeEmailObj(person);
		});

		return staffMap;
	},

	//2019/10/24 - for in / for of: take the array of objects and returns list of emails
	loopStaffIn: staffArray => {
		let staffEmailIn = [];

		for (const indexPerson in staffArray) {
			let staffInfo = staffArray[indexPerson];
			staffEmailIn.push(functions.makeEmailObj(staffInfo));
		}
		return staffEmailIn;
	},

	loopStaffOf: staffArray => {
		let staffEmailOf = [];
		for (const person of staffArray) {
			staffEmailOf.push(functions.makeEmailObj(person));
		}
		return staffEmailOf;
	},

	//2019/10/21 - take the array of objects and returns list of emails
	loopStaff: array => {
		let staffEmail = [];
		array.forEach(function(item) {
			let email = functions.makeEmailObj(item);
			staffEmail.push(email);
		});
		return staffEmail;
	},

	//2019/10/17 - slice, splice, forEach, map, filter and reduce
	//https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

	slice: (array2, start, end) => {
		return array2.slice(start, end);
	},

	splice: (i, toRemove, toAdd, array) => {
		let newArray = array.splice(i, toRemove, toAdd);
		return newArray;
	}, //splice returns deleted items

	forEachInArray: array => {
		let myArray4 = [];
		array.forEach(function(item) {
			myArray4.push(item * 2);
		});
		return myArray4;
	},

	map1: () => {
		let userDatabase = [
			{ fName: "Anna", lName: "Smith", age: 33, gender: "female" },
			{ fName: "Laura", lName: "Jhons", age: 65, gender: "female" },
			{ fName: "Jhon", lName: "Cooper", age: 46, gender: "male" },
			{ fName: "Julia", lName: "Foxx", age: 45, gender: "female" },
			{ fName: "Eric", lName: "Blunt", age: 33, gender: "male" }
		];
		const userAge = userDatabase.map(function(user) {
			return user.age;
		});

		return userAge;
	},

	map2: () => {
		let userDatabase = [
			{ fName: "Anna", lName: "Smith", age: 33, gender: "female" },
			{ fName: "Laura", lName: "Jhons", age: 65, gender: "female" },
			{ fName: "Jhon", lName: "Cooper", age: 46, gender: "male" },
			{ fName: "Julia", lName: "Foxx", age: 45, gender: "female" },
			{ fName: "Eric", lName: "Blunt", age: 33, gender: "male" }
		];
		const userFullName = userDatabase.map(user =>
			[user.fName, user.lName].join(" ")
		);
		return userFullName;
	},

	reduce: () => {
		let userDatabase = [
			{ fName: "Anna", lName: "Smith", age: 33, gender: "female" },
			{ fName: "Laura", lName: "Jhons", age: 65, gender: "female" },
			{ fName: "Jhon", lName: "Cooper", age: 46, gender: "male" },
			{ fName: "Julia", lName: "Foxx", age: 45, gender: "female" },
			{ fName: "Eric", lName: "Blunt", age: 33, gender: "male" }
		];

		let ageTotal = userDatabase.reduce(
			(accumulator, user) => accumulator + user.age,
			0
		);
		// accumulator is the sum of age
		return ageTotal;
	},

	filter: () => {
		let userDatabase = [
			{ fName: "Anna", lName: "Smith", age: 33, gender: "female" },
			{ fName: "Laura", lName: "Jhons", age: 65, gender: "female" },
			{ fName: "Jhon", lName: "Cooper", age: 46, gender: "male" },
			{ fName: "Julia", lName: "Foxx", age: 45, gender: "female" },
			{ fName: "Eric", lName: "Blunt", age: 33, gender: "male" }
		];

		let under50 = userDatabase.filter(user => eval(user.fName === "Laura"));
		// console.log(under50);
		return under50; //returns an ARRAY of the users older that 50
	},

	//PREPARED FOR ARRAY - 2019/10/15
	forArray: array => {
		let myArray = [];
		for (let i = 0; i < array.length; i++) {
			myArray.push(array[i] * 2);
		}
		return myArray;
	},

	whileLopping: array => {
		let i = 0;
		let myArray2 = [];
		while (i < array.length) {
			myArray2.push(array[i] * 2);
			i++;
		}
		return myArray2;
	},

	doWhileLopping: array => {
		let i = 0;
		let myArray3 = [];
		do {
			myArray3.push(array[i] * 2);
			i++;
		} while (i < array.length);
		return myArray3;
	},

	forIn: object => {
		let key;
		let listKeys = [];
		for (key in object) {
			listKeys.push(key);
		}
		return listKeys;
	},

	forOf: array => {
		let array4 = [];
		for (const item of array) {
			array4.push(item + "!");
		}
		return array4;
	},

	//DAYLY 2
	assertEquals: (p1, p2) => {
		if (p1 !== p2) {
			// console.log(`*** The two values are not the same: \n p1 --> ${p1} \n p2 --> ${p2}`);
			return false;
		} else {
			return true;
		}
	},

	makeEmailArr: name => {
		let firstName = name[0].toLowerCase();
		let lastName = name[1].toLowerCase();
		return `${firstName}.${lastName}@evolveu.ca`;
	},

	makeEmailObj: name => {
		let fulName = `${name.fname}.${name.lname}@evolveu.ca`;
		return fulName.toLowerCase();
	}
};

export { functions };
