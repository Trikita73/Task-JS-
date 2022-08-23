// Task: 3 (object: constant)

/*

const user = {
	name : "Josh",
}

user.name = "Pete";

console.log(user.name);

*/

// Task 4 (object: sum)

/*

let salaries = {
	Josh: 100,
	Ann: 160,
	Pete: 130
}

let sum = 0;
	for(let key in salaries) {
		sum += salaries[key];
	}

	console.log(sum);

*/

// Task 5 (object: *)

let menu = {
	width: 200,
	height: 300,
	title: "My menu"
}

function multiplyNumeric(menu) {
	for(let key in menu) {
		if(typeof menu[key] == 'number') {
			menu[key] *= 2;
		}
	}
}

console.log(menu);