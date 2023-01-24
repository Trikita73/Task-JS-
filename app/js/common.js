/* << Numbers >> */

// << Task: 1

/*
let a = 2;

alert(x = 1 + (a *= 2));
*/

// << Task: 2 (sum)

/*
let a = +prompt('Enter a', ''); // используй унарный оператор (+), для определение строки в число.
let b = +prompt('Enter', ''); // используй унарный оператор (+), для определение строки в число.

alert(a + b);
*/

// << Task: 3 (Enter only Number)

/*
function readNumber() {
	let num;

	do {
		num = prompt('Enter', '0');
	} while (!isFinite(num));

	if(num === null || num === ' ') {
		return null;
	}
	return +num;
}

alert(`Number: ${readNumber()}`);
*/

// << Task: 3

/*
let i = 0;

while (i < 11) {
	i += 0.2; //избегайте проверок на равенство при работе с десятичными дробями.
	if(i > 9.8 && i < 10.2) alert(i);
}
*/

// << Task: 4

/*
function random(min, max) {
	return min + Math.random() * (max-min);
}

alert( random(1, 5));
alert( random(1, 5));
alert( random(1, 5));
*/

// << Task: 5 (random number part 1)

/*
function randomInteger(min, max) {
	// получить случайное число от (min-0.5) до (max+0.5)
	let rand = min - 0.5 + Math.random() * (max -min + 1);
	return Math.round(rand);
}

alert(randomInteger(1, 3));
*/

// << Task: 6 (random number part 2)

/*
function randomInteger(min, max) {
	// случайное число от min до (max+1)
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

alert( randomInteger(1, 3));
*/


/* << String >> */

// << Task: 1 (Заглавная буква) 

/*
function ucFirst(str) {
	if(!str) return str;

	return str[0].toUpperCase() + str.slice(1);
}
alert(ucFirst("andrii"));
*/

// << Task: 2 (Тест на спам)

/*
function checkSpam(str) {
	let lowerStr = str.toLowerCase();
	return lowerStr.includes('xxx') || lowerStr.includes('viagra');
}
alert(checkSpam('by Viagra here'));
alert(checkSpam('free xxxx'));
alert(checkSpam('white rabbit'));
*/

// << Task 3 (maxlength)

/*
function truncate(str, maxlength) {
	return (str.length > maxlength) ?
	  str.slice(0, maxlength - 1) + '…' : str;
  }

alert(truncate("Lorem LoremLoremLoremLoremLorem", 20));
alert(truncate("Say Hello"));
*/

// << Task 4 

/*
function extraCurrencyValue(str) {
	return +str.slice(1);
}

alert(extraCurrencyValue('$120'));
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

/* << this >> */

/*
// Task: 1 (this)
let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function() {
		alert( this.step );
		return this;
	}
};

ladder
	.up()
	.up()
	.down()
	.showStep()
	.down()
	.showStep();
*/

// << Task: 2 (calculator)

/*
let calculator = {
	firstNumber: 0,
	lastNumber: 0,
	read () {
		this.firstNumber = prompt('Enter First Number', '0');
		this.lastNumber = prompt('Enter Last Number', '0');
	},
	sum() {
		return (+this.firstNumber) + (+this.lastNumber);
	},
	multipl () {
		return (this.firstNumber) * (this.lastNumber);
	}
}
calculator.read ();
alert(calculator.sum());
alert(calculator.multipl());
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

// << Task: 1 (object: Напишите код, выполнив задание из каждого пункта отдельной строкой)

/*
let user = {};

user.name = "Josh";
user.surname = "Smith";
user.age = "29";

//user.name ="Pete";
//delete user.name;

console.log(user.name, user.surname, user.age);
*/

// << Task: 2 (Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false)

/*
let shedule = {};
alert(isEmpty(shedule)); // true

shedule["8:30"] = "get up";
alert(isEmpty(shedule)); // false

function isEmpty(shedule) {
	for(let key in shedule) {
		// если тело цикла начнет выполняться - значит в объекте есть свойства
		return false;
	}
	return true;
}
*/

// << Task: 3 (Можно ли изменить объект, объявленный с помощью const?)

/*
const user = {
	name: "Josh",
};
//Paботает
user.name = "Pete";
//Ошибка
//user = 124;

console.log(user.name);
*/

// << Task 4 (object: Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390. Если объект salaries пуст, то результат должен быть 0.)

/*
let salaries = {
	Josh: 100,
	Ann: 160,
	Pete: 130,
	Andy: 0,
};

let sum = 0;
for(let key in salaries) {
	sum +=salaries[key];
}
console.log(sum);
*/

// << Task 5 (object: Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.)

/*
let menu = {
	width: 200,
	height: 300,
	title: "New menu",
	size: 0,
};

function multiplyNumeric(obj) {
	for(let key in menu) {
		if(typeof menu[key] == 'number'){
			menu[key] *= 2;
		}
		alert(menu[key]);
	}
}
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

/* << Напишите функцию для суммирования всех зарплат. Должно получиться 3900. >> */

/*
let salaries = {
	John: 1000,
	Ann: 1600,
	Pete: 1300,
	month: 'December',
	currency: 'USD',
	isPayed: false
}

function sumSalary(salaries) {
	let sum = 0; 
	for(let key in salaries) {
		if(typeof salaries[key] == 'number' && Infinity(salaries[key]) && -Infinity(salaries[key])) {
			sum += salaries[key];
		}
	}
	return sum;
}
*/

/* << Create calculator >> */

/*
let calculator = {
	sum: function() {
		return this.a + this.b;
	},
	minus: function() {
		return this.a - this.b;
	},
	mul: function() {
		return this.a * this.b;
	},
	division: function() {
		return this.a / this.b;
	},
	readValues: function() {
		this.a = +prompt('a', 0);
		this.b = +prompt('b', 0);
	}
}

calculator.readValues();
alert(calculator.sum());
alert(calculator.minus());
alert(calculator.mul());
alert(calculator.division());
*/

/*массив объектов user, и в каждом из них есть user.name. Напишите функцию namify, которая преобразует их в массив имён. */

/*
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

function namify(users) {
	return(users.map((item) => item.name));
}
*/

/* Напишите функцию filterRange(arr, a, b), которая принимает массив чисел arr, ищет в нём элементы между a и b и отдаёт массив этих элементов. Если элемент равен a или b, то его тоже нужно включить в отфильтрованный массив. */

/*
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {
	return arr.filter((item) => (a <= item && item <= b));
}
*/

/* Напишите функцию camelize(str), которая преобразует строки вида 'my-short-string' в 'myShortString'.
То есть дефисы удаляются, а все слова после них получают заглавную букву. */

/*
let camelize = prompt('Enter', 'Font-back-string');

function camelize(str) {
	return str.split('-').map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
}
*/


/* Создайте функцию showSalary, которая принимает массив пользователей users и максимальный возраст age и возвращает строку с именами и зарплатами пользователей, у которых возраст меньше или равен параметру age. */
/* Функция showSalary должна возвращать строку из имён и баланса подходящих пользователей */
// users - массив пользователей
// age - максимальный возраст пользователей (любое число)
/*
let result = showSalary(users, age);


// Объект 1
let user1 = {
	"balance": "$1,825.65",
	"picture": "https://placehold.it/32x32",
	"age": 21,
	"name": "Golden Branch",
	"gender": "male",
	"greeting": "Hello, Golden Branch! You have 7 unread messages.",
	"favouriteFruit": "banana"
  };
// Объект 2
  let user2 = {
	"balance": "$1,455.23",
	"picture": "https://placehold.it/32x32",
	"age": 22,
	"name": "Duncan Randall",
	"gender": "male",
	"greeting": "Hello, Duncan Randall! You have 6 unread messages.",
	"favouriteFruit": "orange"
  };

function showSalary(users, age) {
	return users.filter((user) => user.age <= age).map((user) => `${user.name}, ${user.balance}`).join('\n');
}
*/

/* Реализуйте функцию, которая принимает строку с числами и возвращает объект, содержащий минимальное и максимальное значения чисел из этой строки. */

/*
const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(str) {

	let SpaceMap = str.split(' ').join(',').split(',');

	let arr = SpaceMap.filter((item) => isFinite(item));

	return { min: Math.min(...arr), max: Math.max(...arr) }
}

console.log(getMinMax(inputData));
*/





