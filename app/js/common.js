/* << if...else >> */

// << Task: 1 (prompt ask me)

/*

let value = prompt('What you are learn?');

if(value == 'JavaScript') {
	alert('Yes');
}else{
	alert('No');
}

*/

// << Task: 2 (if in ?)

/*let result;
if (a + b < 4) {
  result = 'less';
} else {
  result = 'more';
}*/ 

/*

result = (a + b < 4) ? 'less' : 'more';

*/

// << Task: 3 (if in ?)

/*let message;
if (login == 'Сотрудник') {
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}*/

/*

let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';

*/

// << Task: 4 (if...else)

/*
let login = prompt('Enter Login', '');

if(login == 'admin') {
	let password = prompt('Enter password');

	if(password == 'password') {
		alert('Hello Admin');
	}else if(password =='' || password == null){
		alert('Exit');
	}else {
		alert('Wrong passord');
	}
}else if(login == '' || login == null) {
	alert('Exit');
}else{
	alert('Wrong login');
}
*/

/* << Object >> */

// << Task: 3 (object: constant)

/*

const user = {
	name : "Josh",
}

user.name = "Pete";

console.log(user.name);

*/

// << Task 4 (object: sum)

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

// << Task 5 (object: *)

/*

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

*/