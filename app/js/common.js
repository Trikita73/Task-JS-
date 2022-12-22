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

// << Task: 5 (if...else ?, :)

/*
function checkAge(age) {
	if (age > 18) {
	  return true;
	} else {
	  return confirm('Родители разрешили?');
	}
  }
  
  function checkAge(age) {
	  return (age > 18) ? true :  confirm('Родители разрешили?');
  }
*/

/* << function >> */

// << Task: 1

/*
function main(a, b) {
	let a = 2;
	let b = 5;
	if(a < b) {
		// console.log(a);
		// return a;
		alert(a);
	}else {
		// return b;
		console.log(b);
	}
}
*/

// << Task: 2

/*
function pow(x, n) {
	let resultx = prompt('x?', '');
	let resultn = prompt('n?', '');
	console.log('x**n');
}
*/


/* << while, do...while, for >> */

// << Task: 1 (for)

/*
for(let i = 0; i < 5; ++i) {
	alert(i);
}

for(let i = 0; i < 5; i++) {
	alert(i);
}
*/

// << Task: 2 (for, чётные числа от 2 до 10)

/*
for(let i = 0; i <= 10; ++i) {
	if(i % 2 == 0) {
		alert(i);
	}
}
*/

// << Task: 3 (while)

/*
let i = 0;
while(i < 3) {
	alert(`number ${i}!`);
	i++;
}
*/

// << Task: 4 (prompt ввести число, большее 100)

/* ERROR!!!!!!!!!
let num = prompt('Enter number more than 100', 0);

for(let num = 101; num >= 100;) {
	if(num => 100) {
		alert('Nice Choice');
	}else if(num == null || num == '') {
		alert('Good bye')
	}else {
		alert('You are creazy?')
	}
}
*/

/* 
let num;

do {
	num = prompt('Enter num more 100', 0);
}while(num >= 100 && num);
*/

/*
while (true) {
	let number = prompt('Enter num more 100: ');
	if (number >=100 || !number)break
}
*/

// << Task: 5 ()

/*
let n = 10; 

nextPrime:
for(let i = 2; i <= n; i++) {
	for(let j = 2; j < i; j++) {
		if(i % j == 0) continue nextPrime;
	}
	alert(i);
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

