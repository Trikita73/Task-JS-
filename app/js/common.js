/* <<  >> */

/*
let a = 2;

alert(x = 1 + (a *= 2));
*/

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

// << Task: 6 (if...else)

/*
let browser = prompt('Which browser you are use?', '');

if(browser === 'Edge') {
	alert('You have got the Edge');
}else if(browser === 'Chorme' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
	alert('Okay we support this browsers too');
}else {
	alert('We hope this page look nice!');
}
*/

// << Task: 6 (if...else)

/*
let age = prompt('Enter age', '');

if(age >= 14 && age <= 90) {
	alert('Nice age! I can buy beer!');
}else if(age <= 14) {
	alert('You are so young!');
}else if(age >= 90) {
	alert('You are so old!');
}
*/

// << Task: 7 (if...else)

/*
let age = prompt('Enter age', '');

if(!(age >= 14 &&  age <= 90)) {
	alert('Nice!');
}else {
	alert('Bad!');
}
*/

// << Task: 8 (if...else)

/*
let age = prompt('Enter age', '');

if(age <= 14 || age >= 90) {
	alert('Nice!');
}else {
	alert('Bad!');
}
*/

/* << switch >> */

// << Task: 1 (switch)

/*
const number = +prompt('Enter number beetwen 0 and 3', '');

switch(number) {
	case 0:
		alert('You are enter number 0');
		break;
	case 1:
		alert('You are enter number 1');
		break;
	case 2:
	case 3:
		alert('You are enter number 2 or maybe number 3');
		break;
	default:
		alert('Are you sure what that a wrong number?');
}
*/

// << Task: 2 (switch)

/*
switch (browser) {
	case 'Edge':
	  alert( "You've got the Edge!" );
	  break;
  
	case 'Chrome':
	case 'Firefox':
	case 'Safari':
	case 'Opera':
	  alert( 'Okay we support these browsers too' );
	  break;
  
	default:
	  alert( 'We hope that this page looks ok!' );
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

/*
function min(a, b) {
	let a = 2;
	let b = 5;
	return a < b ? a : b;
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

// << Task: 3 (Function Expression => e)

/*
function ask(question, yes, no) {
	if(confirm(question)) yes()
	else no();
}

ask(
	"You agree?",
	function() {
		alert("You are complited");
	} 
	function() {
		alert("You esc!");
	}
);

ask(
	"You agree?",
	() => alert("You are complited");
	() => alert("You esc!");
);
*/

// << Task: 4 ()

/*
function pow(x, n) {
	let result = x;
	
	for(let i = 1; i < n; i++) {
		result *= x;
	}
	return result;
}

let x = prompt('Enter number x', '');
let n = prompt('Enter number y', '');
if(n < 1) {
	alert(`${n} don't support!`);
}else {
	alert(pow(x, n));
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


/* ERROR >>>
let num;

for(; num >= 100;) {
	let num = prompt('Enter number more than 100', 0);
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


/* << Arrays >> */

// << Task: 1 (object)

/*
let friuts = ["Apple", "Orange", "Kivi"];

let shoopingCart = friuts;
shoopingCart.push("Banana");

alert(friuts.length);
*/

// << Task: 2 (object)

/*
let styles = ["Djaz", "Bjuze"];

styles.push("ROK");

styles[Math.floor((styles.length -1) / 2)] = "Klassic";

//alert(styles.shift());

styles.shift("Djaz", "Bjuze");

styles.unshift("RAP", "Reggi");

alert(styles);
*/

// << Task: 3 (object)

/*
let arr = ["a", "b"];

arr.push(function() {
	alert(this);
});

arr[2]();
*/

// << Task: 4 (object)

/*
function sumInput() {
	let numbers = [];
	while(true) {
		let value = prompt('Enter', '0');
		if(value === '' || value === null || !isFinite(value)) break; 
			numbers.push(+value);
	}

	let sum = 0;
		for(let number of numbers) {
			sum += number;
		}
	return sum;
}

alert(sumInput());
*/

// << Task: 5 (object)
/*
function getMaxSubSum(arr) {
	let maxSum = 0; // если элементов не будет - возвращаем 0
  
	for (let i = 0; i < arr.length; i++) {
	  let sumFixedStart = 0;
	  for (let j = i; j < arr.length; j++) {
		sumFixedStart += arr[j];
		maxSum = Math.max(maxSum, sumFixedStart);
	  }
	}
  
	return maxSum;
  }
  
  alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
*/

/*
function getMaxSubSum(arr) {
	let maxSum = 0;
	let partialSum = 0;

	for(let item of arr) {
		partialSum += item;
		maxSum = Math.max(maxSum, partialSum);
		if(partialSum < 0) partialSum =0;
	}
	return maxSum;
}

alert(getMaxSubSum([-1, 2, 4, 55]));
*/

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

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

/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

/* << Special Task >> */

/* << Task Factorial >> */

/*
let n = prompt('Enter', '');
let facNum = 1;
	for(let i = 1; i <= n; i++) {
		facNum = facNum * i;
	}
alert(facNum);
*/

/* << Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом >> */

/*
let str = prompt('Enter', '');
function ucFirst(str) {
	if(str) {
		return str;
	}
	return str[0].toUppperCase() + str.slice(1);
}
*/


/* << Напишите функцию checkSpam(str), возвращающую true, если str содержит '1xBet' или 'XXX', а иначе false >> */

/*
function checkSpam(str) {
	let checkStr = str.toLowerCase();
	return checkStr.includes('1xbet') || checkStr.includes('xxx');
}
*/

/* << Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength. >> */

/*
function truncate(str, maxlength) {
	if(str.lenght > maxlength) {
		return (str.slice(0, maxlength -1) + '...');
	}
	return str;
}
*/



















