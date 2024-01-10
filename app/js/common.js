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




/* <<<<<[(---)]>>>>> */



/* << Special Task >> */

/* <<<< Task Factorial (for) >>>> */

/*
let n = prompt('Enter', '');
let facNum = 1;
	for(let i = 1; i <= n; i++) {
		facNum = facNum * i;
	}
alert(facNum);
*/

/* <<<< Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом (String) >>>> */

/*
let str = prompt('Enter', '');
function ucFirst(str) {
	if(str) {
		return str;
	}
	return str[0].toUppperCase() + str.slice(1);
}
*/


/* <<<< Напишите функцию checkSpam(str), возвращающую true, если str содержит '1xBet' или 'XXX', а иначе false (String) >>>> */

/*
function checkSpam(str) {
	let checkStr = str.toLowerCase();
	return checkStr.includes('1xbet') || checkStr.includes('xxx');
}
*/

/* <<<< Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength. (String) >>>> */

/*
function truncate(str, maxlength) {
	if(str.lenght > maxlength) {
		return (str.slice(0, maxlength -1) + '...');
	}
	return str;
}
*/

/* Напишите функцию camelize(str), которая преобразует строки вида 'my-short-string' в 'myShortString'.
   То есть дефисы удаляются, а все слова после них получают заглавную букву.  (String)*/

/*
let camelize = prompt('Enter', 'Font-back-string');

function camelize(str) {
	return str.split('-').map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
}
*/

/* <<<< Напишите функцию для суммирования всех зарплат. Должно получиться 3900. (Object) >>>> */

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

/* <<<< Create calculator (Object) >>>> */

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

/*массив объектов user, и в каждом из них есть user.name. Напишите функцию namify, которая преобразует их в массив имён. (Object) */

/*
let vasya = { name: 'Вася', age: 25 };
let petya = { name: 'Петя', age: 30 };
let masha = { name: 'Маша', age: 28 };

function namify(users) {
	return(users.map((item) => item.name));
}
*/

/* Напишите функцию filterRange(arr, a, b), которая принимает массив чисел arr, ищет в нём элементы между a и b и отдаёт массив этих элементов. 
   Если элемент равен a или b, то его тоже нужно включить в отфильтрованный массив. (Array) */

/*
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {
	return arr.filter((item) => (a <= item && item <= b));
}
*/



/* Создайте функцию showSalary, которая принимает массив пользователей users и максимальный возраст age и возвращает строку с именами и зарплатами пользователей, у которых возраст меньше или равен параметру age. */
/* Функция showSalary должна возвращать строку из имён и баланса подходящих пользователей (Array) */
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

/* Реализуйте функцию, которая принимает строку с числами и возвращает объект, содержащий минимальное и максимальное значения чисел из этой строки. (Array) */

/*
const inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';

function getMinMax(str) {

	let SpaceMap = str.split(' ').join(',').split(',');

	let arr = SpaceMap.filter((item) => isFinite(item));

	return { min: Math.min(...arr), max: Math.max(...arr) }
}

console.log(getMinMax(inputData));
*/


/* << DOM >> */

/* Task_1 */

/*
<html>
<body>
  <div>Пользователи:</div>
  <ul>
    <li>Джон</li>
    <li>Пит</li>
  </ul>
</body>
</html>

a) Получить элемент <div>?
b) Получить <ul>?
c) Получить второй <li> (с именем Пит)?
*/

/* Task_1_a */

//document.body.firstElementChild;
//or
//document.body.children[0];
//или первый узел пробел, выбираем втрой.
//document.body.childNodes[1];

/* Task_1_b */

//document.body.lastElementChild;
//or
//document.body.children[0];

/* Task_1_c */

//document.body.lastElementChild.lastElementChild;

/* Task_2 */

/*
Задача Соседи
Если elem – произвольный узел DOM-элемента…

a) Правда, что elem.lastChild.nextSibling всегда равен null?
b) Правда, что elem.children[0].previousSibling всегда равен null ?
*/

/* Task_1_a */

//elem.lastChild.nextSibling // Yes(null)

/* Task_1_b */

//elem.children[0].previousSibling // No(null)

/* Task_3 */

/*
Выделите ячейки по диагонали
Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red';

<!DOCTYPE HTML>
<html>
<head>
  <style>
    table {
      border-collapse: collapse;
    }

    td {
      border: 1px solid black;
      padding: 3px 5px;
    }
  </style>
</head>

<body>
  <table>
    <tr>
      <td>1:1</td>
      <td>2:1</td>
      <td>3:1</td>
      <td>4:1</td>
      <td>5:1</td>
    </tr>
    <tr>
      <td>1:2</td>
      <td>2:2</td>
      <td>3:2</td>
      <td>4:2</td>
      <td>5:2</td>
    </tr>
    <tr>
      <td>1:3</td>
      <td>2:3</td>
      <td>3:3</td>
      <td>4:3</td>
      <td>5:3</td>
    </tr>
    <tr>
      <td>1:4</td>
      <td>2:4</td>
      <td>3:4</td>
      <td>4:4</td>
      <td>5:4</td>
    </tr>
    <tr>
      <td>1:5</td>
      <td>2:5</td>
      <td>3:5</td>
      <td>4:5</td>
      <td>5:5</td>
    </tr>
  </table>
</body>
</html>
*/

/*
let table = document.body.firstElementChild;

for(let i = 0; i < table.rows.lenght; i++) {
	let row = table.rows[i];
	row.cells[i].style.backgroungColor = 'red';
}
*/

/* Task_4 */

/*
Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.
*/

/*
<!DOCTYPE HTML>
<html>
<body>
  <form name="search">
    <label>Search the site:
      <input type="text" name="search">
    </label>
    <input type="submit" value="Search!">
  </form>

  <hr>

  <form name="search-person">
    Search the visitors:
    <table id="age-table">
      <tr>
        <td>Age:</td>
        <td id="age-list">
          <label>
            <input type="radio" name="age" value="young">less than 18</label>
          <label>
            <input type="radio" name="age" value="mature">18-50</label>
          <label>
            <input type="radio" name="age" value="senior">more than 50</label>
        </td>
      </tr>

      <tr>
        <td>Additionally:</td>
        <td>
          <input type="text" name="info[0]">
          <input type="text" name="info[1]">
          <input type="text" name="info[2]">
        </td>
      </tr>

    </table>

    <input type="submit" value="Search!">
  </form>
</body>
</html>
*/

// 1. Таблица с `id="age-table"`.
/*
let table = document.getElementById('age-table');
*/

// 2. Все label в этой таблице.
/*
table.getElementsByTagName('label');
*/
// или 
/*
document.querySelectorAll('#age-table label');
*/

// 3. Первый td в этой таблице
/*
table.getElementsByTagName('td')[0];
*/
// или
/*
table.rows[0].sells[0];
*/
// или
/*
table.querySelector('td');
*/

// 4. Форма с name="search"
// предполагаем, что есть только один элемент с таким name в документе
/*
let form = document.getElementByName('search');
*/
// или, именно форма:
/*
document.querySelector('form[name="search"]');
*/

// 5. Первый input в этой форме
/*
form.getElementByTagName('input')[0]; 
*/
//или 
/*
form.querySelector('input');
*/

// 6. Последний input в этой форме
/*
let inputs = form.querySelectorAll('input'); // найти все input

inputs[inputs.length-1] // взять последний
*/


/* Task_6 */
/*
У нас есть дерево, структурированное как вложенные списки ul/li.

Напишите код, который выведет каждый элемент списка <li>:

Какой в нём текст (без поддерева) ?
Какое число потомков – всех вложенных <li> (включая глубоко вложенные) ?
*/

/*
<!DOCTYPE HTML>
<html>
<body>

  <ul>
    <li>Животные
      <ul>
        <li>Млекопитающие
          <ul>
            <li>Коровы</li>
            <li>Ослы</li>
            <li>Собаки</li>
            <li>Тигры</li>
          </ul>
        </li>
        <li>Другие
          <ul>
            <li>Змеи</li>
            <li>Птицы</li>
            <li>Ящерицы</li>
          </ul>
        </li>
      </ul>
    </li>
    <li>Рыбы
      <ul>
        <li>Аквариумные
          <ul>
            <li>Гуппи</li>
            <li>Рыба-ангел</li>
          </ul>
        </li>
        <li>Морские
          <ul>
            <li>Морская форель</li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

  <script>
    for (let li of document.querySelectorAll('li')) {
      // получаем название из текстового узла
      let title = li.firstChild.data;

      title = title.trim(); // удаляем лишние пробелы c конца строки

      // считаем количество потомков
      let count = li.getElementsByTagName('li').length;

      alert(title + ': ' + count);
    }
  </script>

</body>
</html>
*/

/* Task_7 */

// Что выведет этот код?

/*
<script>
  let body = document.body;

  body.innerHTML = "<!--" + body.tagName + "-->";

  alert( body.firstChild.data ); // что выведет? Ответ: BODY 
</script>
*/

/*
Происходящее по шагам:

Заменяем содержимое <body> на комментарий. Он будет иметь вид <!--BODY-->, т.к. body.tagName == "BODY". Как мы помним, свойство tagName в HTML всегда находится в верхнем регистре.
Этот комментарий теперь является первым и единственным потомком body.firstChild.
Значение свойства data для элемента-комментария – это его содержимое (внутри <!--...-->): "BODY".
*/

/* Task_8 */

//Написать код для выбора элемента с атрибутом data-widget-name.

/*
<!DOCTYPE html>
<html>
<body>

  <div data-widget-name="menu">Choose the genre</div>

  <script>
	//получаем элемент
	let elem = document.querySelector('[data-widget-name]');

	// читаем значение
	alert(elem.dataset.widgetName);
	//или так
    alert(elem.getAttribute('data-widget-name'));
  </script>
</body>
</html>
*/

/* Task_9 */

/*
Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

Ссылка является внешней, если:

Её href содержит ://
Но не начинается с http://internal.com.
*/

/*
<!DOCTYPE HTML>
<html>
<body>

  <a name="list">The list:</a>
  <ul>
    <li><a href="https://google.com">https://google.com</a></li>
    <li><a href="/tutorial">/tutorial.html</a></li>
    <li><a href="local/path">local/path</a></li>
    <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
    <li><a href="https://nodejs.org">https://nodejs.org</a></li>
    <li><a href="http://internal.com/test">http://internal.com/test</a></li>
  </ul>

  <script>
  let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue; // нет атрибута

  if (!href.includes('://')) continue; // нет протокола

  if (href.startsWith('http://internal.com')) continue; // внутренняя

  link.style.color = 'orange';
}
  </script>

</body>
</html>
*/

/*
Другой, более простой путь – добавить проверку в CSS-селектор:
*/

/*
// найти все ссылки, атрибут href у которых содержит ://
// и при этом href не начинается с http://internal.com
let selector = 'a[href*="://"]:not([href^="http://internal.com"])';
let links = document.querySelectorAll(selector);

links.forEach(link => link.style.color = 'orange');
*/


/* Task_10 */

/* 
Создать уведомление

Напишите функцию showNotification(options), которая создаёт уведомление: <div class="notification"> с заданным содержимым. Уведомление должно автоматически исчезнуть через 1,5 секунды.
*/

/*
<!DOCTYPE HTML>
<html>
<head>
  <link rel="stylesheet" href="index.css">
</head>

<body>

  <h2>Уведомление находится справа</h2>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum aspernatur quam ex eaque inventore quod voluptatem adipisci omnis nemo nulla fugit iste numquam ducimus cumque minima porro ea quidem maxime necessitatibus beatae labore soluta voluptatum
    magnam consequatur sit laboriosam velit excepturi laborum sequi eos placeat et quia deleniti? Corrupti velit impedit autem et obcaecati fuga debitis nemo ratione iste veniam amet dicta hic ipsam unde cupiditate incidunt aut iure ipsum officiis soluta
    temporibus. Tempore dicta ullam delectus numquam consectetur quisquam explicabo culpa excepturi placeat quo sequi molestias reprehenderit hic at nemo cumque voluptates quidem repellendus maiores unde earum molestiae ad.
  </p>

  <script>
    function showNotification({top = 0, right = 0, className, html}) {
      
      let notification = document.createElement('div');

      notification.className = 'notification';

      if(className) {
        notification.classList.add(className);
      }

      notification.style.top = top + 'px';
      notification.style.right = right + 'px';

      notification.innerHTML = html;
      document.body.append(notification);

      setTimeout(() => notification.remove(), 1500);

    }

    // test it
    let i = 1;
    setInterval(() => {
      // показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
      showNotification({
        top: 10, // 10px от верхней границы окна (по умолчанию 0px)
        right: 10, // 10px от правого края окна (по умолчанию 0px)
        html: 'Hello ' + i++, // HTML-уведомление
        className: "welcome" // дополнительный класс для div (необязательно)
      });
    }, 2000);
  </script>

</body>
</html>

/* Task_11*/

/* <<<< Необходимо реализовать функцию makeFriendsList, которая преобразует переданный массив друзей в стандартный HTML список (ul, li). >>>> */

/* Массив с друзьями имеет следующий формат:

let friends = [
    {
        firstName: 'Artsiom',
        lastName: 'Mezin'
    },
    {
        firstName: 'Ilia',
        lastName: 'Kantor'
    },
    {
        firstName: 'Christopher',
        lastName: 'Michael'
    }
];

Функция должна вернуть DOM элемент ul, внутри которого будет список друзей:

<ul>
   <li>Artsiom Mezin</li>
   <li>Ilia Kantor</li>
   <li>Christopher Michael</li>
</ul>

Обращаю ваше внимание, что функция должна вернуть именно DOM элемент, а не строку с вёрсткой. При этом добавлять элементы списка внутрь ul, вы можете используя свойство innerHTML или любой другой способ.
*/

// <<<< решение:

/*
<!DOCTYPE HTML>
	<html>
	<head>
	<title>Занятие 4: Список друзей</title>
	</head>
	<body>
	<script>
		function makeFriendslist(friends) {
			
			const ul = document.createElement('ul');
			ul.innerHTML = friends.map(item => `
					<li>${item.firstName} ${item.lastName}</li>
				`).join('');

				return ul;
		}
	</script>
	<script>
		let friends = [
		{
			firstName: 'Artsiom',
			lastName: 'Mezin'
		},
		{
			firstName: 'Ilia',
			lastName: 'Kantor'
		},
		{
			firstName: 'Christopher',
			lastName: 'Michael'
		}
		];

								
		document.body.appendChild(makeFriendslist(friends));
	</script>
	</body>
</html>
*/


/* Task_12*/

/*
Напишите функцию makeDiagonalRed, которая выделит красным цветом все ячейки в таблице по диагонали.

Вам нужно получить из таблицы <table> все диагональные <td> и выделить их красным. 

function makeDiagonalRed(table) {
  // ваш код
}

// Где в переменной table находится DOM-элемент для тега <table>
makeDiagonalRed(table);

P.S. для решения рекомендуется использовать свойства rows таблицы (элемент <table>) и cells элемента строки (элемент <tr>).

Чтобы сделать ячейку красной, рекомендуется использовать свойство style, которое есть у всех элементов.
*/

// <<<< решение:

/*
<!DOCTYPE HTML>
<html>

<head>
  <style>
    table {
      border-collapse: collapse;
    }

    td {
      border: 1px solid black;
      padding: 3px 5px;
    }
  </style>
</head>

<body>
  <table>
    <tr>
      <td>1:1</td>
      <td>2:1</td>
      <td>3:1</td>
      <td>4:1</td>
      <td>5:1</td>
    </tr>
    <tr>
      <td>1:2</td>
      <td>2:2</td>
      <td>3:2</td>
      <td>4:2</td>
      <td>5:2</td>
    </tr>
    <tr>
      <td>1:3</td>
      <td>2:3</td>
      <td>3:3</td>
      <td>4:3</td>
      <td>5:3</td>
    </tr>
    <tr>
      <td>1:4</td>
      <td>2:4</td>
      <td>3:4</td>
      <td>4:4</td>
      <td>5:4</td>
    </tr>
    <tr>
      <td>1:5</td>
      <td>2:5</td>
      <td>3:5</td>
      <td>4:5</td>
      <td>5:5</td>
    </tr>
  </table>
  <script>

    let table = document.querySelector('table');

		function makeDiagonalRed(table) {

			let rowsLength = table.rows.length;
			let rows = table.rows;
		
			for (let i = 0; i < rowsLength; i++) {
			let row = rows[i];
			row.cells[i].style.backgroundColor = 'red';
			}
		}

    makeDiagonalRed(table);
	
  </script>
</body>

</html>
*/


/* Task_13*/

/*
Напишите функцию highlight, которая внесёт изменения в таблицу.

В качестве аргумента функция принимает элемент таблицы (тег table) 

Функция highlight для каждой строки tr таблицы должна сделать следующее:

Проставить класс available/unavailable в зависимости от значения атрибута data-available у ячейки Status. Если её значение true – класс available, если её значение false – класс unavailable.
Проставить атрибут hidden, если атрибута data-available нет вообще.
Проставить класс male/female в зависимости от содержимого ячейки Gender. Если её значение m – класс male, Если её значение f – класс female.
Добавить inline-стиль style="text-decoration: line-through", если значение ячейки Age меньше 18.
(!!!) Обращаем отдельное внимание, что все манипуляции нужно делать со СТРОКАМИ таблицы (тег tr). Т.е. вы проверяете ячейку (тег td), но изменяете строку (тег tr). Это распространённая ошибка, из-за которой часто не проходит автоматическая проверка.

/**
 * Метод устанавливает необходимые по условию атрибуты таблице
 * @param {Element} table
 
function highlight(table) {
}
*/

/*
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Занятие 4: Функция highlight</title>
  
</head>

<body>
  <table class="js-teachers">
    <thead>
      <tr>
        <td>Name</td>
        <td>Age</td>
        <td>Gender</td>
        <td>Status</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Ilia</td>
        <td>30</td>
        <td>m</td>
        <td data-available="true">Free</td>
      </tr>
      <tr>
        <td>Tim</td>
        <td>39</td>
        <td>m</td>
        <td data-available="false">On duty</td>
      </tr>
      <tr>
        <td>Marina</td>
        <td>25</td>
        <td>f</td>
        <td data-available="true">Ready to teach</td>
      </tr>
      <tr>
        <td>Klivden</td>
        <td>42</td>
        <td>m</td>
        <td>Leeeroy Jenkins!</td>
      </tr>
      <tr>
        <td>Ivan</td>
        <td>17</td>
        <td>m</td>
        <td data-available="true">Ready to teach</td>
      </tr>
    </tbody>
  </table>
  <script>
    let table = document.querySelector('.js-teachers');
	const FIRST_COLUMN = 1;
	const SECOND_COLUMN = 2;
	const THIRD_COLUMN = 3;

	function highlight(table) {
		const actions = {
			[THIRD_COLUMN]: (root, td) => {
				if (td.dataset.available === 'true') {
					root.classList.toggle('available', true);
				} else if (td.dataset.available === 'false') {
					root.classList.toggle('unavailable', true);
				} else if (!td.hasAttribute('data-available')) {
					root.hidden = true;
				}
			},
			[SECOND_COLUMN]: (root, td) => {
				if (td.textContent === 'm') {
					root.classList.toggle('male', true);
				} else if (td.textContent === 'f') {
					root.classList.toggle('female', true);
				}
			},
			[FIRST_COLUMN]: (root, td) => {
				const age = parseInt(td.textContent, 10);

				if (age < 18) {
					root.style.textDecoration = 'line-through';
				}
			},
		};

		for (const tr of table.rows) {
			Array.from(tr.cells).forEach((td, index) => {
			const fn = actions[index];

				if (typeof fn === 'function') {
					fn(tr, td);
				}
			});
		}
	}
    highlight(table);
  </script>
</body>

</html>
*/

/* << EVENT (Событие) >> */

/* Task_1 */

/*
Скрыть элемент по нажатию кнопки
Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
*/

// <<<< решение:

/*
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>
	<input type="button" id="hider" value="Нажать чтоб спрятать текст" />
	<div id="text">ТЕКСТ</div>
	<script>
		document.getElementById('hider').onclick = function() {
			document.getElementById('text').hidden = true;
		}
	</script>
</body>
</html>
*/

/* Task_2 */

/*
Спрятать себя
Создайте кнопку, которая будет скрывать себя по нажатию.
Можем использовать this в обработчике для доступа к самому элементу:
*/

// <<<< решение:

/*
<input type="button" onclick="this.hidden=true" value="Нажми чтобы спрятать кнопку">
*/

/* Task_3 */

/*
Какой обработчик запустится?
В переменной button находится кнопка. Изначально на ней нет обработчиков.
Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);
*/

// <<<< решение:

/*
Ответ: 1 и 2.
Первый обработчик сработает, потому что он не был удалён методом removeEventListener. Чтобы удалить обработчик, необходимо передать именно ту функцию, которая была назначена в качестве обработчика. Несмотря на то, что код идентичен, в removeEventListener передаётся новая, другая функция.
Для того чтобы удалить функцию-обработчик, нужно где-то сохранить ссылку на неё, например:

function handler() {
  alert(1);
}

button.addEventListener("click", handler);
button.removeEventListener("click", handler);

Обработчик button.onclick сработает независимо от addEventListener.
*/

/* Task_4 */

/*
Передвиньте мяч по полю.
Пусть мяч перемещается при клике на поле, туда, куда был клик.

Требования:

Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
CSS-анимация желательна, но не обязательна;
Мяч ни в коем случае не должен пересекать границы поля;
При прокрутке страницы ничего не должно ломаться;

Заметки:

Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.


// <<<< решение:

/*
Сначала мы должны выбрать метод позиционирования мяча.
Мы не можем использовать position:fixed, поскольку прокрутка страницы будет перемещать мяч с поля.
Правильнее использовать position:absolute, и, чтобы сделать позиционирование действительно надёжным, сделаем само поле (field) позиционированным.
Далее мы должны назначить корректные значения ball.style.left/top. Сейчас они содержат координаты относительно поля.
У нас есть значения event.clientX/clientY – координаты нажатия мышки относительно окна браузера;
Чтобы получить значение left для мяча после нажатия мышки относительно поля, мы должны из координаты нажатия мышки вычесть координату левого края поля и ширину границы:

let left = event.clientX - fieldCoords.left - field.clientLeft;

Значение ball.style.left означает «левый край элемента» (мяча). И если мы назначим такой left для мяча, тогда его левая граница, а не центр, будет под курсором мыши.
Нам нужно сдвинуть мяч на половину его высоты вверх и половину его ширины влево, чтобы центр мяча точно совпадал с точкой нажатия мышки.
В итоге значение для left будет таким:

let left = event.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth/2;

Вертикальная координата будет вычисляться по той же логике.
Следует помнить, что ширина и высота мяча должна быть известна в тот момент, когда мы получаем значение ball.offsetWidth. Это значение может задаваться в HTML или CSS.
*/

/*
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<style>
	#field {
		width: 200px;
		height: 150px;
		border: 10px solid black;
		background-color: #00FF00;
		position: relative;
		overflow: hidden;
		cursor: pointer;
	}
	#ball {
		position: absolute;
		left: 0;
		top: 0;
		width: 40px;
		height: 40px;
		transition: all 1s;
	}
</style>
<body style="height: 2000px;">
	<p>Нажмите на поле для перемещение мяча.</p>
	<div id="field">
		<img src="https://ru.js.cx/clipart/ball.svg" id="ball"> . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
		. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
	</div>
	<script>
		field.onclick = function(event) {
			// координаты поля относительно окна браузера
			let fieldCoords = this.getBoundingClientRect();
			// мяч имеет абсолютное позиционирование (position:absolute), поле - относительное (position:relative).
			// таким образом, координаты мяча рассчитываются относительно внутренего, верхнего левого угла
			let ballCoords = {
				top: event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2,
				left: event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2,
			};
			// запрещаем пересекать верхнюю границу поля
			if (ballCoords.top < 0) {
				ballCoords.top = 0;
			}
			// запрещаем пересекать левую границу поля
			if (ballCoords.left < 0) {
				ballCoords.left = 0;
			}
			// запрещаем пересекать правую границу поля
			if (ballCoords.left + ball.clientWidth > field.clientWidth) {
				ballCoords.left = field.clientWidth - ball.clientWidth;
			}
			// запрещаем пересекать нижнюю границу поля
			if (ballCoords.top + ball.clientHeight > field.clientHeight) {
				ballCoords.top = field.clientHeight - ball.clientHeight;
			}
			ball.style.left = ballCoords.left + 'px';
			ball.style.top = ballCoords.top + 'px';
		}
	</script>
</body>
</html>
*/

/* Task_5 */

/*
Создать раскрывающееся меню
Создать меню, которое по нажатию открывается либо закрывается
*/

// <<<< решение:

/*
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<style>
	.menu ul {
		margin: 0;
		list-style: none;
		padding-left: 20px;
		display: none;
	}
	.menu .title {
		font-size: 18px;
		cursor: pointer;
	}
	.menu .title::before {
		content: '▶ ';
		font-size: 80%;
		color: green;
	}
	.menu.open .title::before {
		content: '▼ ';
	}
	.menu.open ul {
		display: block;
	}
</style>
<body>
	<div id="sweeties" class="menu">
		<span class="title">Сладости (нажми на меня!)</span>
		<ul>
			<li>Пироженое</li>
			<li>Пончик</li>
			<li>Мед</li>
		</ul>
	</div>
	<script>
		let menuElem = document.getElementById('sweeties');
		let titleElem = menuElem.querySelector('.title');

		titleElem.onclick = function() {
			menuElem.classList.toggle('open');
		};
	</script>
</body>
</html>
*/

/* Task_6 */

/*
Добавить кнопку закрытия
Есть список сообщений.
При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.
*/

// <<<< решение:

/*
Чтобы добавить кнопку закрытия, мы можем использовать либо position:absolute (и сделать плитку (pane) position:relative) либо float:right. Преимущество варианта с float:right в том, что кнопка закрытия никогда не перекроет текст, но вариант position:absolute даёт больше свободы для действий. В общем, выбор за вами.
Тогда для каждой плитки код может выглядеть следующим образом:

pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');

Элемент <button> становится pane.firstChild, таким образом мы можем добавить на него обработчик события:

pane.firstChild.onclick = () => pane.remove();
*/

/*
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<style>
	body {
		margin: 10px auto;
		width: 470px;
	}
	h3 {
		margin: 0;
		padding-bottom: .3em;
		padding-right: 20px;
		font-size: 1.1em;
	}
	p {
		margin: 0;
		padding: 0 0 .5em;
	}
	.pane {
		background: #edf5e1;
		padding: 10px 20px 10px;
		border-top: solid 2px #c4df9b;
		position: relative;
	}
	.remove-button {
		position: absolute;
		font-size: 110%;
		top: 0;
		color: darkred;
		right: 10px;
		display: block;
		width: 24px;
		height: 24px;
		border: none;
		background: transparent;
		cursor: pointer;
	}
</style>
<body>
	<div>
		<div class="pane">
			<h3>Лошадь</h3>
			<p>Домашняя лошадь — животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p>
		</div>
		<div class="pane">
			<h3>Осел</h3>
			<p>Домашний осёл (лат. Equus asinus asinus), или ишак, — одомашненный подвид дикого осла (Equus asinus), сыгравший важную историческую роль в развитии хозяйства и культуры человека и по-прежнему широко в хозяйстве многих развивающихся стран.</p>
		</div>
		<div class="pane">
			<h3>Кошка</h3>
			<p>Кошка, или домашняя кошка (лат. Felis silvestris catus), — домашнее животное, одно из наиболее популярных(наряду с собакой) «животных-компаньонов». Являясь одиночным охотником на грызунов и других мелких животных, кошка — социальное животное, использующее для общения широкий диапазон звуковых сигналов.</p>
		</div>
	</div>
	<script>
		let panes = document.querySelectorAll('.pane');
		for(let pane of panes) {
			pane.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
			// кнопка становится первым потомком плитки (pane)
			pane.firstChild.onclick = () => pane.remove();
		}
	</script>
</body>
</html>
*/

/* Task_7 */

/*
Карусель
Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
В дальнейшем к ней можно будет добавить анимацию, динамическую подгрузку и другие возможности.
P.S. В этой задаче разработка структуры HTML/CSS составляет 90% решения.
*/

// <<<< решение:

/*
Лента изображений в разметке должна быть представлена как список ul/li с картинками <img>.
Нужно расположить ленту внутри <div> фиксированного размера, так чтобы в один момент была видна только нужная часть списка

Чтобы список сделать горизонтальным, нам нужно применить CSS-свойство display: inline-block для <li>.
Для тега <img> мы также должны настроить display, поскольку по умолчанию он inline. Во всех элементах типа inline резервируется дополнительное место под «хвосты» символов. И чтобы его убрать, нам нужно прописать display:block.
Для «прокрутки» будем сдвигать <ul>. Это можно делать по-разному, например, назначением CSS-свойства transform: translateX() (лучше для производительности) или margin-left

У внешнего <div> фиксированная ширина, поэтому «лишние» изображения обрезаются.
Вся карусель – это самостоятельный «графический компонент» на странице, таким образом нам лучше его «обернуть» в отдельный <div class="carousel"> и уже модифицировать стили внутри него.
*/

/*
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<style>
	body {
		padding: 10px;
	}
	.carousel {
		position: relative;
		width: 398px;
		padding: 10px 40px;
		border: 1px solid #CCC;
		border-radius: 15px;
		background: #eee;
	}
	.carousel img {
		width: 130px;
		height: 130px;
		//делаем этот элемент блочным, чтобы убрать лишнее пространство вокруг картинок 
		display: block;
	}
	.arrow {
		position: absolute;
		top: 60px;
		padding: 0;
		background: #ddd;
		border-radius: 15px;
		border: 1px solid gray;
		font-size: 24px;
		line-height: 24px;
		color: #444;
		display: block;
	}
	.arrow:focus {
		outline: none;
	}
	.arrow:hover {
		background: #ccc;
		cursor: pointer;
	}
	.prev {
		left: 7px;
	}
	.next {
		right: 7px;
	}
	.gallery {
		width: 390px;
		overflow: hidden;
	}
	.gallery ul {
		height: 130px;
		width: 9999px;
		margin: 0;
		padding: 0;
		list-style: none;
		transition: margin-left 250ms;
		font-size: 0;
	}
	.gallery li {
		display: inline-block;
	}
</style>
<body>
	<div id="carousel" class="carousel">
		<button class="arrow prev">⇦</button>
		<div class="gallery">
			<ul>
				<li><img src="https://ru.js.cx/carousel/1.png"></li>
				<li><img src="https://ru.js.cx/carousel/2.png"></li>
				<li><img src="https://ru.js.cx/carousel/3.png"></li>
				<li><img src="https://ru.js.cx/carousel/4.png"></li>
				<li><img src="https://ru.js.cx/carousel/5.png"></li>
				<li><img src="https://ru.js.cx/carousel/6.png"></li>
				<li><img src="https://ru.js.cx/carousel/7.png"></li>
				<li><img src="https://ru.js.cx/carousel/8.png"></li>
				<li><img src="https://ru.js.cx/carousel/9.png"></li>
				<li><img src="https://ru.js.cx/carousel/10.png"></li>
			</ul>
		</div>
		<button class="arrow next">⇨</button>
	</div>
	<script>
		// этот код помечает картинки, для удобства разработки 
		let i = 1;
		for(let li of carousel.querySelectorAll('li')) {
			li.style.position = 'relative';
			li.insertAdjacentHTML('beforeend', `<span style="position:absolute; left:0; top:0">${i}</span>`);
				i++;
		}
		// конфигурация 
		let width = 130; // ширина картинки
		let count = 3; //видимое количевство изображений

		let list = carousel.querySelector('ul');
		let listElems = carousel.querySelectorAll('li');

		let position = 0; //положение ленты прокутки

		carousel.querySelector('.prev').onclick = function() {
			// сдвиг влево
			position += width * count;
			// последнее передвижение влево может быть не на 3, а на 2 или 1 элемент
			position = Math.min(position, 0)
			list.style.marginLeft = position + 'px';
		};
		carousel.querySelector('.next').onclick = function() {
			// сдвиг вправо
			position -=width * count;
			// последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент
			position = Math.max(position, -width * (listElems.length - count));
			list.style.marginLeft = position + 'px';
		};
	</script>
</body>
</html>
*/

/* Task_8 */

/* 
При клике на блок, он подсвечивается красным.
*/

// <<<< решение:

/*
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>title-color</title>
</head>
<style>
	#bagua-table th {
	text-align: center;
	font-weight: bold;
	}

	#bagua-table td {
	width: 150px;
	white-space: nowrap;
	text-align: center;
	vertical-align: bottom;
	padding-top: 5px;
	padding-bottom: 12px;
	}

	#bagua-table .nw {
	background: #999;
	}

	#bagua-table .n {
	background: #03f;
	color: #fff;
	}

	#bagua-table .ne {
	background: #ff6;
	}

	#bagua-table .w {
	background: #ff0;
	}

	#bagua-table .c {
	background: #60c;
	color: #fff;
	}

	#bagua-table .e {
	background: #09f;
	color: #fff;
	}

	#bagua-table .sw {
	background: #963;
	color: #fff;
	}

	#bagua-table .s {
	background: #f60;
	color: #fff;
	}

	#bagua-table .se {
	background: #0c3;
	color: #fff;
	}

	#bagua-table .highlight {
	background: red;
	}
</style>
<body>
	
</body>
</html>

<body>

  <table id="bagua-table">
    <tr>
      <th colspan="3">Квадрат<em>Bagua</em>: Направление, Элемент, Цвет, Значение</th>
    </tr>
    <tr>
      <td class="nw"><strong>Северо-Запад</strong>
        <br>Металл
        <br>Серебро
        <br>Старейшины
      </td>
      <td class="n"><strong>Север</strong>
        <br>Вода
        <br>Синий
        <br>Перемены
      </td>
      <td class="ne"><strong>Северо-Восток</strong>
        <br>Земля
        <br>Жёлтый
        <br>Направление
      </td>
    </tr>
    <tr>
      <td class="w"><strong>Запад</strong>
        <br>Металл
        <br>Золото
        <br>Молодость
      </td>
      <td class="c"><strong>Центр</strong>
        <br>Всё
        <br>Пурпурный
        <br>Гармония
      </td>
      <td class="e"><strong>Восток</strong>
        <br>Дерево
        <br>Синий
        <br>Будущее
      </td>
    </tr>
    <tr>
      <td class="sw"><strong>Юго-Запад</strong>
        <br>Земля
        <br>Коричневый
        <br>Спокойствие
      </td>
      <td class="s"><strong>Юг</strong>
        <br>Огонь
        <br>Оранжевый
        <br>Слава
      </td>
      <td class="se"><strong>Юго-Восток</strong>
        <br>Дерево
        <br>Зелёный
        <br>Роман 
      </td>
    </tr>

  </table>

  <script>
	let table = document.getElementById('bagua-table');

    let selectedTd;

	//	у текущей версии кода есть недостаток.
	//	Клик может быть не на теге <td>, а внутри него.
	//	В нашем случае, если взглянуть на HTML-код таблицы внимательно, видно, что ячейка <td> содержит вложенные теги, например <strong>
	//	Внутри обработчика table.onclick мы должны по event.target разобраться, был клик внутри <td> или нет.
	

	
	table.onclick = function(event) {

		let target = event.target; // где был клик? 

		if(target.tagName != 'TD') return; // не на TD? тогда не интерисует

		highlight(target); // подсветить TD
	};
	

	// лучший пример  

	
	table.onclick = function(event) {

		let td = event.target.closest('td'); // Метод elem.closest(selector) возвращает ближайшего предка, соответствующего селектору. В данном случае нам нужен <td>, находящийся выше по дереву от исходного элемента.

		if(!td) return; // Если event.target не содержится внутри элемента <td>, то вызов вернёт null, и ничего не произойдёт.

		if(!table.contains(td)) return; // Если таблицы вложенные, event.target может содержать элемент <td>, находящийся вне текущей таблицы. В таких случаях мы должны проверить, действительно ли это <td> нашей таблицы.
		
		highlight(td); // И если это так, то подсвечиваем его.
	};
	

	// еще лучший вариант 
	
	table.onclick = function(event) {
		let target = event.target;

		while(target != this) {
			if(target.tagName == 'TD') {
				highlight(target);
				return;
			}
			target = target.parentnode;
		}
	}

	function highlight(td) {
		if(selectedTd) { // убрать существующую подсветку, если есть
			selectedTd.classList.remove('highlight');

		}
		selectedTd = td;
		selectedTd.classList.add('highlight'); // подсветить новый td
	}
  </script>

</body>
</html>
*/

/* Task_9 */

/*Спрячьте сообщения с помощью делегирования*/
/*Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.*/
//P.S. Используйте делегирование событий. Должен быть лишь один обработчик на элементе-контейнере для всего.

// <<<< решение:

/*
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>target-button</title>
</head>
<style>
	body {
	margin: 10px auto;
	width: 470px;
	}

	h3 {
	margin: 0;
	padding-bottom: .3em;
	padding-right: 20px;
	font-size: 1.1em;
	}

	p {
	margin: 0;
	padding: 0 0 .5em;
	}

	.pane {
	background: #edf5e1;
	padding: 10px 20px 10px;
	border-top: solid 2px #c4df9b;
	position: relative;
	}

	.remove-button {
	position: absolute;
	font-size: 110%;
	top: 0;
	color: darkred;
	right: 10px;
	display: block;
	width: 24px;
	height: 24px;
	border: none;
	background: transparent;
	cursor: pointer;
	}
</style>
<body>
	<div id="container">
		<div class="pane">
		  <h3>Лошадь</h3>
		  <p>Домашняя лошадь - животное семейства непарнокопытных, одомашненный и единственный сохранившийся подвид дикой лошади, вымершей в дикой природе, за исключением небольшой популяции лошади Пржевальского.</p>
		  <button class="remove-button">[x]</button>
		</div>
		<div class="pane">
		  <h3>Осёл</h3>
		  <p>Домашний осёл или ишак — одомашненный подвид дикого осла, сыгравший важную историческую роль в развитии хозяйства и культуры человека. Все одомашненные ослы относятся к африканским ослам.</p>
		  <button class="remove-button">[x]</button>
		</div>
		<div class="pane">
		  <h3>Кошка</h3>
		  <p>Кошка, или домашняя кошка (лат. Félis silvéstris cátus), — домашнее животное, одно из наиболее популярных (наряду с собакой) "животных-компаньонов". С точки зрения научной систематики, домашняя кошка — млекопитающее семейства кошачьих отряда хищных. Ранее домашнюю кошку нередко рассматривали как отдельный биологический вид.
		  </p>
		  <button class="remove-button">[x]</button>
		</div>
	</div>
	<script>
		container.onclick = function(event) {
			if (event.target.className != 'remove-button') return;

			let pane = event.target.closest('.pane');
			pane.remove();
		}; 
	</script>	
</body>
</html>
*/

/* Task_10 */

/*
Раскрывающееся дерево
Создайте дерево, которое по клику на заголовок скрывает-показывает потомков
Требования:
Использовать только один обработчик событий (применить делегирование)
Клик вне текста заголовка (на пустом месте) ничего делать не должен.
*/

// <<<< решение:

/*
Решение состоит из двух шагов:
Оборачиваем текст каждого заголовка дерева в элемент <span>. Затем мы можем добавить стили CSS на :hover и обрабатывать клики только на тексте, т.к. ширина элемента <span> в точности совпадает с шириной текста.
Устанавливаем обработчик на корневой узел дерева tree и ловим клики на элементах <span>, содержащих заголовки.
*/
 
/*
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>grop_down_menu</title>
</head>
<style>
	.tree span:hover{
		font-weight: bold;
	}
	.tree span {
		cursor: pointer;
	}
</style>
<body>
	<ul class="tree" id="tree">
		<li>Животние на суше
			<ul>
				<li>Млекопитающие
					<ul>
						<li>коровы</li>
						<li>Ослы</li>
						<li>Собаки</li>
						<li>Тигры</li>
					</ul>
				</li>
				<li>Рептилии
					<ul>
						<li>Змеи</li>
						<li>Вараны</li>
						<li>Ящерицы</li>
					</ul>
				</li>
			</ul>
		</li>
		<li>Рыбы
			<ul>
				<li>Аквариумные
					<ul>
						<li>Гуппи</li>
						<li>Скалярии</li>
					</ul>
				</li>
				<li>Морские
					<ul>
						<li>Морская форель</li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
	<script>
		// поместить все текстовые узлы в элемент <span>
    	// он занимает только то место, которое необходимо для текста
		for(let li of tree.querySelectorAll('li')) {
			let span = document.createElement('span');
			li.prepend(span);
			span.append(span.nextSibling); // поместить текстовый узел внутрь элемента <span>
		}

		// ловим клик на всем дереве
		tree.onclick = function(event) {
			if(event.target.tagName != 'SPAN') {
				return;
			}

			let childrenContainer = event.target.parentNode.querySelector('ul');
			if(!childrenContainer) return; // нет детей

			childrenContainer.hidden = !childrenContainer.hidden;
		}
	</script>
</body>
</html>
*/

/* TASK_11 */

/*
Сортируемая таблица
Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.
Каждый элемент <th> имеет атрибут data-type

В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, ведь числа сортируются иначе, чем строки.
Сортировка должна поддерживать только типы "string" и "number".

P.S. Таблица может быть большой, с любым числом строк и столбцов.
*/

// <<<< решение:

/*
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>table_delegirovanie</title>
</head>
<style>
	table {
		border-collapse: collapse;
	}
	th, td {
		border: 1px solid black;
		padding: 4px;
	}
	th {
		cursor: pointer;
	}
	th:hover {
		background: yellow;
	}
</style>
<body>
	<table id="grid">
		<thead>
			<tr>
				<th data-type="number">Возраст</th>
				<th data-type="string">Имя</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>5</td>
				<td>Вася</td>
			</tr>
			<tr>
				<td>2</td>
				<td>Петя</td>
			</tr>
			<tr>
				<td>12</td>
				<td>Женя</td>
			</tr>
			<tr>
				<td>9</td>
				<td>Маша</td>
			</tr>
			<tr>
				<td>1</td>
				<td>Илья</td>
		  	</tr>
		</tbody>
	</table>

	<script>
		grid.onclick = function(e) {
			if(e.target.tagName != 'TH') {
				return;
			}

			let th = e.target;

			// если ячейка TH, тогда сортировать
			// cellIndex - это номер ячейки th:
			//   0 для первого столбца
			//   1 для второго и т.д.
			sortGrid(th.cellIndex, th.dataset.type);
		};

		function sortGrid(colNum, type) {
			let tbody = grid.querySelector('tbody');
			let rowsArray = Array.from(tbody.rows);

			//compare(a, b) сравнивает две строки, нужен для сортировки 
			let compare;

			switch (type) {
				case 'number': 
					compare = function(rowA, rowB) {
						return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
					};
					break;
				case 'string':
					compare = function(rowA, rowB) {
						return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1: -1;
					};
					break;
			}

			// сортировка
			rowsArray.sort(compare);

			tbody.append(...rowsArray);
		}
	</script>
</body>
</html>
*/

/* TASK_12 */

/*
Поведение "подсказка"
JS-код, реализующий поведение «подсказка».
При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка и скрываться при переходе на другой элемент.

В этой задаче мы полагаем, что во всех элементах с атрибутом data-tooltip – только текст. То есть, в них нет вложенных тегов (пока).

Детали оформления:

Отступ от подсказки до элемента с data-tooltip должен быть 5px по высоте.
Подсказка должна быть, по возможности, посередине элемента.
Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена, если нельзя показать сверху – показывать снизу элемента.
Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
Для решения вам понадобятся два события:

mouseover срабатывает, когда указатель мыши заходит на элемент.
mouseout срабатывает, когда указатель мыши уходит с элемента.
Примените делегирование событий: установите оба обработчика на элемент document, чтобы отслеживать «заход» и «уход» курсора на элементы с атрибутом data-tooltip и управлять подсказками с их же помощью.

После реализации поведения – люди, даже не знакомые с JavaScript смогут добавлять подсказки к элементам.

P.S. В один момент может быть показана только одна подсказка.
*/

// <<<< решение:

/*
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Подсказка</title>
</head>
<style>
	.tooltip {
		position: fixed;
		padding: 10px 20px;
		border: 1px solid #b3c9ce;
		border-radius: 4px;
		text-align: center;
		font: italic 14px/1.3 sans-serif;
		color: #333;
		background: #fff;
		box-shadow: 3px 3px 3px rgba(0, 0, 0, .3);
	}
</style>
<body>
	<p>ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя</p>
  	<p>ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя ЛяЛяЛя</p>

	<button data-tooltip="эта подсказка должна быть длиннее, чем элемент">Короткая кнопка</button>
	<button data-tooltip="HTML<br>подсказка">Ещё кнопка</button>

	<p>Прокрутите страницу, чтобы кнопки оказались у верхнего края, а затем проверьте, правильно ли выводятся подсказки.</p>
	<script>
		let tooltipElem;

		document.onmouseover = function(event) {
			let target = event.target;
			// если у нас есть подсказка...
			let tooltipHtml = target.dataset.tooltip;

			if(!tooltipHtml) {
				return;
			}

			//...создадим элемент для подсказки
			tooltipElem = document.createElement('div');
			tooltipElem.className = 'tooltip';
			tooltipElem.innerHTML = tooltipHtml;
			document.body.append(tooltipElem);

			// спозиционируем его сверху от аннотируемого элемента (top-center)
			let coords = target.getBoundingClientRect();

			let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
			if (left < 0) {
				left = 0; // не заезжать за левый край окна
			}

			let top = coords.top - tooltipElem.offsetHeight - 5;
			if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
				top = coords.top + target.offsetHeight + 5;
			}

			tooltipElem.style.left = left + 'px';
      		tooltipElem.style.top = top + 'px';
		};

		document.onmouseout = function(e) {
			if(tooltipElem) {
				tooltipElem.remove();
				tooltipElem = null;
			}
		};
	</script>
</body>
</html>
*/

/* TASK_13 */

/* Браузер не должен переходить по указанной ссылке */
/* <a href="https://w3.org" onclick="handler()">браузер откроет w3.org</a> */
/*Когда браузер считывает атрибут on*, например onclick, он создаёт функцию-обработчик с содержимым этого атрибута в качестве тела функции. */

// <<<< решение 1:

/*
<a href="https://w3.org" onclick="return handler()">w3.org</a>

<script>
	function handler() {
		alert("...");
		return false;
	}
</script>
*/

// <<<< решение 2:

/* мы можем использовать event.preventDefault() */

/*
<a href="https://w3.org" onclick="handler(event)">w3.org</a>

<script>
	function handler(event) {
		alert("...");
		event.preventDefault();
	}
</script>
*/


/* TASK_14 */

/* Поймайте переход по ссылке */
/* при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, 
действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке. */

/* Детали:
Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>. */

// <<<< решение:

/*
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <style>
    #contents {
      padding: 5px;
      border: 1px green solid;
    }
  </style>
</head>

<body>

  <fieldset id="contents">
    <legend>#contents</legend>
    <p>
      Как насчёт того, чтобы прочитать <a href="https://wikipedia.org">Википедию</a> или посетить <a href="https://w3.org"><i>W3.org</i></a> и узнать о современных стандартах?
    </p>
  </fieldset>

  <script>
    contents.onclick = function(event) {

      function handleLink(href) {
        let isLeaving = confirm(`Leave for ${href}?`);
        if (!isLeaving) return false;
      }

      let target = event.target.closest('a');

      if (target && contents.contains(target)) {
        return handleLink(target.getAttribute('href'));
      }
    };
  </script>

</body>
</html>
*/


/* TASK_15 */

/* Галерея изображений */
/* Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант. */
/* P.S. Используйте делегирование. */
/* Решение состоит в том, чтобы добавить обработчик на контейнер #thumbs и отслеживать клики на ссылках. Если клик происходит по ссылке <a>, тогда меняем атрибут src элемента #largeImg на href уменьшенного изображения. */

// <<<< решение:

/*
<!DOCTYPE HTML>
<html>

<head>
  <title>Галерея</title>
  <link rel="stylesheet" href="gallery.css">
  <meta charset="utf-8">
</head>

<body>

  <p><img id="largeImg" src="https://en.js.cx/gallery/img1-lg.jpg" alt="Large image"></p>

  <ul id="thumbs">
    <!-- браузер показывает небольшую встроенную подсказку из атрибута "title" при наведении курсора на текст -->
    <li>
      <a href="https://en.js.cx/gallery/img2-lg.jpg" title="Image 2"><img src="https://en.js.cx/gallery/img2-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img3-lg.jpg" title="Image 3"><img src="https://en.js.cx/gallery/img3-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img4-lg.jpg" title="Image 4"><img src="https://en.js.cx/gallery/img4-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img5-lg.jpg" title="Image 5"><img src="https://en.js.cx/gallery/img5-thumb.jpg"></a>
    </li>
    <li>
      <a href="https://en.js.cx/gallery/img6-lg.jpg" title="Image 6"><img src="https://en.js.cx/gallery/img6-thumb.jpg"></a>
    </li>
  </ul>

  <script>
    thumbs.onclick = function(event) {
      let thumbnail = event.target.closest('a');

      if (!thumbnail) return;
      showThumbnail(thumbnail.href, thumbnail.title);
      event.preventDefault();
    }

    function showThumbnail(href, title) {
      largeImg.src = href;
      largeImg.alt = title;
    }
  </script>

</body>
</html>
*/


/* TASK_16 */

/*
Выделяемый список
Создайте список, в котором элементы могут быть выделены, как в файловых менеджерах.
При клике на элемент списка выделяется только этот элемент (добавляется класс .selected), отменяется выделение остальных элементов.
Если клик сделан вместе с Ctrl (Cmd для Mac), то выделение переключается на элементе, но остальные элементы при этом не изменяются.
*/

/*
P.S. В этом задании все элементы списка содержат только текст. Без вложенных тегов.
P.P.S. Предотвратите стандартное для браузера выделение текста при кликах.
*/

// <<<< решение:

/*
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <style>
    .selected {
      background: #0f0;
    }

    li {
      cursor: pointer;
    }
  </style>
</head>

<body>

  Кликни на элемент списка, чтобы выделить его.
  <br>

  <ul id="ul">
    <li>Кристофер Робин</li>
    <li>Винни Пух</li>
    <li>Тигра</li>
    <li>Кенга</li>
    <li>Кролик. Просто Кролик.</li>
  </ul>

  <script>
    ul.onclick = function(event) {
      if (event.target.tagName != "LI") return;

      if (event.ctrlKey || event.metaKey) {
        toggleSelect(event.target);
      } else {
        singleSelect(event.target);
      }

    }

    // предотвращает ненужное выделение элементов списка при клике
    ul.onmousedown = function() {
      return false;
    };

    function toggleSelect(li) {
      li.classList.toggle('selected');
    }

    function singleSelect(li) {
      let selected = ul.querySelectorAll('.selected');
      for(let elem of selected) {
        elem.classList.remove('selected');
      }
      li.classList.add('selected');
    }

  </script>

</body>
</html>
*/


/* TASK_17 */

/* Напишите функцию hideSelf, которая сделает так, чтобы кнопка с классом hide-self-button 
скрывала себя по нажатию. Чтобы скрыть кнопку, добавьте ей атрибут hidden. */

// <<<< решение:

/*
<button class="hide-self-button">Нажмите, чтобы спрятать</button>

function hideSelf() {
	let button = document.querySelector('.hide-self-button');
  
	button.onclick = function() {
	  this.hidden = true;
	};
  }

  hideSelf();
*/


/* TASK_18 */

/* Напишите функцию toggleText, которая сделает так, чтобы при первом 
нажатии на кнопку с классом toggle-text-button текст <div id="text">Текст</div> исчезал, 
а при повторном нажатии появлялся. Чтобы скрыть текст, добавьте ему атрибут hidden и наоборот. */

// <<<< решение:

/* <button class="toggle-text-button">Нажмите, чтобы спрятать/показать текст</button>
	<div id="text">Текст</div>


function toggleText() {
	let toggleButton = document.querySelector('.toggle-text-button');
	let textElement = document.getElementById('text');

	toggleButton.addEventListener('click', () => {
		let isTextElementHidden = textElement.hidden;
		textElement.hidden = !isTextElementHidden;
	});
}

toggleText();

*/

/* TASK_19 */

/* Карусель для сайта */

// <<<< решение:

/* верстка:

<head>
	<style>
		.carousel {
			height: var(--carousel-height);
			position: relative;
			overflow: hidden;
			padding-bottom: 313px;
		}

		.carousel__caption {
			position: absolute;
			z-index: 2;
			right: 0;
			bottom: 0;
			height: 70px;
			background-color: var(--color-black-dark);
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}

		.carousel__price {
			position: absolute;
			right: 0;
			bottom: 100%;
			display: inline-block;
			padding: 8px;
			min-width: 72px;
			text-align: center;
			background-color: var(--color-pink);
			color: var(--color-body);
			font-family: var(--font-primary), sans-serif;
			font-weight: 700;
			font-size: 17px;
			line-height: 1.2;
		}

		.carousel__title {
			text-align: center;
			font-weight: 500;
			font-size: 21px;
			font-style: italic;
			line-height: 1.2;
			width: 100%;
			padding: 0 20px;
		}

		.carousel__button {
			background-color: var(--color-yellow);
			width: 72px;
			flex: 1 0 72px;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			cursor: pointer;
			transition: 0.2s all;
		}

		.carousel__button:hover,
		.carousel__button:active {
			background-color: var(--color-yellow-dark);
		}

		.carousel__inner {
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: row;
			position: absolute;
			left: 0;
			top: 0;
			transition: all 1s ease;
		}

		.carousel__slide {
			width: 100%;
			min-width: 100%;
			height: 100%;
			position: relative;
			margin: 0;
		}

		.carousel__arrow {
			position: absolute;
			z-index: 3;
			bottom: 0;
			top: 50%;
			transform: translate(0, -50%);
			cursor: pointer;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			width: 70px;
			height: 70px;
		}

		.carousel__arrow_right {
			right: 0;
		}

		.carousel__arrow_left {
			left: 0;
		}

		.carousel__arrow img,
		.carousel__arrow svg {
			max-width: 20px;
		}

		.carousel__img {
			min-width: 100%;
			display: block;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}

		@media all and (max-width: 767px) {
			.carousel {
				position: relative;
				padding-bottom: 57px;
			}

			.carousel__caption {
				left: 0;
				height: 57px;
			}

			.carousel__arrow {
				bottom: 57px;
			}

			.carousel__arrow_right img,
			.carousel__arrow_right svg {
				margin-top: 0;
			}

			.carousel__arrow_left img,
			.carousel__arrow_left svg {
				margin-bottom: 0;
			}
		}
	</style>
</head>

<main>
	<div class="container" data-carousel-holder>
		<div class="carousel">
			<div class="carousel__arrow carousel__arrow_right">
				<img src="img/carousel/angle-icon.svg" alt="icon">
			</div>
			<div class="carousel__arrow carousel__arrow_left">
				<img src="img/carousel/angle-left-icon.svg" alt="icon">
			</div>

			<div class="carousel__inner">
				<div class="carousel__slide" data-id="penang-shrimp">
				<img src="img/carousel/chicken_loempias.png" class="carousel__img" alt="slide">
				<div class="carousel__caption">
					<span class="carousel__price">€16.00</span>
					<div class="carousel__title">Penang shrimp</div>
					<button type="button" class="carousel__button">
					<img src="img/carousel/plus-icon.svg" alt="icon">
					</button>
				</div>
				</div>

				<div class="carousel__slide" data-id="chicken-cashew">
				<img src="img/carousel/chicken_cashew.png" class="carousel__img" alt="slide">
				<div class="carousel__caption">
					<span class="carousel__price">€14.00</span>
					<div class="carousel__title">Chicken cashew</div>
					<button type="button" class="carousel__button">
					<img src="img/carousel/plus-icon.svg" alt="icon">
					</button>
				</div>
				</div>

				<div class="carousel__slide" data-id="red-curry-veggies">
				<img src="img/carousel/red_curry_vega.png" class="carousel__img" alt="slide">
				<div class="carousel__caption">
					<span class="carousel__price">€12.50</span>
					<div class="carousel__title">Red curry veggies</div>
					<button type="button" class="carousel__button">
					<img src="img/carousel/plus-icon.svg" alt="icon">
					</button>
				</div>
				</div>

				<div class="carousel__slide" data-id="chicken-springrolls">
				<img src="img/carousel/chicken_loempias.png" class="carousel__img" alt="slide">
				<div class="carousel__caption">
					<span class="carousel__price">€6.50</span>
					<div class="carousel__title">Chicken springrolls</div>
					<button type="button" class="carousel__button">
					<img src="img/carousel/plus-icon.svg" alt="icon">
					</button>
				</div>
				</div>
			</div>
		</div>
	</div>
</main>

<script>

	function initCarousel() {
		let currentSlideNumber = 0;
		let slidesAmount = 4;
		let elem = document.querySelector('[data-carousel-holder]');
	
		let carouselInnerElem = elem.querySelector('.carousel__inner');
		let carouselArrowRight = elem.querySelector('.carousel__arrow_right');
		let carouselArrowLeft = elem.querySelector('.carousel__arrow_left');
	
		update();
	
		elem.onclick = ({target}) => {
		if (target.closest('.carousel__arrow_right')) {
			next();
		}
	
		if (target.closest('.carousel__arrow_left')) {
			prev();
		}
		};
	
		function next() {
		currentSlideNumber++;
		update();
		}
	
		function prev() {
		currentSlideNumber--;
		update();
		}
	
		function update() {
		let offset = -carouselInnerElem.offsetWidth * currentSlideNumber;
		carouselInnerElem.style.transform = `translateX(${offset}px)`;
	
		if (currentSlideNumber == slidesAmount - 1) {
			carouselArrowRight.style.display = 'none';
		} else {
			carouselArrowRight.style.display = '';
		}
	
		if (currentSlideNumber == 0) {
			carouselArrowLeft.style.display = 'none';
		} else {
			carouselArrowLeft.style.display = '';
		}
		}
	}

</script>

initCarousel(); // после того, как эта функция выполнится, в карусели должны начать переключаться слайды

*/


/* << Класы и компоненты >> */

/* TASK_1 */

/* Класс Clock написан в функциональном стиле. 
Перепишите его, используя современный синтаксис классов. */
/* P.S. Часики тикают в консоли. Откройте её, чтобы посмотреть. */

// <<<< решение:

/*

class Clock {
	constructor({ template }) {
		this.template = template;
	}

	render() {
		let date = new Date();

		let hours = date.getHours();
		if (hours < 10) hours = '0' + hours;

		let mins = date.getMinutes();
		if (mins < 10) mins = '0' + mins;

		let sec = date.getSeconds();
		if (sec < 10) sec = '0' + sec;

		let output = this.template
			.replace('h', hours)
			.replace('m', mins)
			.replace('s', sec);

		console.log(output);
	}

	stop() {
		clearInterval(this.timer);
	}

	start() {
		this.render();
		this.timer = setInterval(() => this.render(), 1000);
	}
}

let clock = new Clock({template: 'h:m:s'});
clock.start();

*/

/* TASK_2 */

/*
В этом задании нужно создать таблицу с возможностью удаления строк.
Вы получаете данные в виде массива.
Пример данных:

let rows = [
    {
        name: 'Вася',
        age: 25,
        salary: 1000,
        city: 'Самара'
    },
    {
        name: 'Петя',
        age: 30,
        salary: 1500,
        city: 'Москва'
    }
];

*/

/*
Напишите класс UserTable, который создаёт таблицу с этими данными:
Для каждого элемента массива должна быть отдельная строка в таблице.
В конце каждой строки должна быть кнопка [X], при клике на которую эта строка удаляется.
Ссылку на корневой элемент table следует добавить в свойство elem.

Пример использования:

let table = new UserTable(rows);
document.body.appendChild(table.elem);

*/

/*
Структура, которая должна быть в HTML:

<table>
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Вася</td>
            <td>25</td>
            <td>1000</td>
            <td>Самара</td>
            <td><button>X</button></td>
        </tr>
        <tr>
            <td>Петя</td>
            <td>25</td>
            <td>1000</td>
            <td>Самара</td>
            <td><button>X</button></td>
        </tr>
    </tbody>
</table>

*/

// <<<< решение:

/*
<body>
	<h2>Пример минимально необходимой структуры таблицы (только HTML) для прохождения тестов:</h1>
		
	<div class="example">
		<table>
		<thead>
			<tr>
			<th>Имя</th>
			<th>Возраст</th>
			<th>Зарплата</th>
			<th>Город</th>
			<th></th>
			</tr>
		</thead>
		<tbody>
			<tr>
			<td>Ilia</td>
			<td>25</td>
			<td>1000</td>
			<td>Petrozavodsk</td>
			<td><button>X</button></td>
			</tr>
		</tbody>
		</table>
	</div>
	  
	<h2>Результат выполнения вашего кода:</h2>

	<script type="module">
		import UserTable from './js/index.js';

		let rows = [
			{
				name: 'Ilia',
				age: 25,
				salary: 1000,
				city: 'Petrozavodsk'
			},
			{
				name: 'Vasya',
				age: 14,
				salary: 1500,
				city: 'Moscow'
			},
			{
				name: 'Ivan',
				age: 22,
				salary: 100,
				city: 'Bryansk',
			},
			{
				name: 'Petya',
				age: 45,
				salary: 990,
				city: 'Chita'
			},
		];

		let table = new UserTable(rows);
		document.body.append(table.elem);
		
	</script>
</body>

*/

/*
Код для нового файла index.js:

/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 */

/*
export default class UserTable {
    constructor(rows) {
        this.elem = document.createElement('table');

        this.elem.innerHTML = `
            <thead>
                <tr>
                <td>Имя</td>
                <td>Возраст</td>
                <td>Зарплата</td>
                <td>Город</td>
                <td></td>
                </tr>
            </thead>
        `;

        let tbody = this.elem.querySelector('tbody');

        let tableInner = rows.map(row => {
            let cellsWithData = Object.values(row) // для каждого значения из объекта row
                .map(value => `<td>${value}</td>`) // обернуть его в <td>
                .join(''); // полученный массив <td>...</td> объединить в одну строку

            return `
                <tr>
                    ${cellsWithData}
                    <td><button>X</button></td>
                </tr>
            `; // возвращаем верстку одной строки
        }).join('');

        this.elem.innerHTML += `
            <tbody>
                ${tableInner}
            </tbody>
        `; // оборачиваем полученные строчки в tbody

        this.elem.addEventListener('click', (event) => this.onClick(event));
    }

    onClick(event) {
        if (event.target.tagName != 'BUTTON') {
            return;
        }

        let tr = event.target.closest('tr');

        tr.remove();
    }
    
}
*/

/* TASK_3 */

/*
Создайте класс ProductCard, описывающий компонент «Карточка товара».
В качестве аргумента в конструктор класса передаётся объект, описывающий товар:

let product = {
    name: "Laab kai chicken salad", // название товара
    price: 10, // цена товара
    category: "salads", // категория, к которой он относится, нам это понадобится чуть позже
    image: "laab_kai_chicken_salad.png", // название картинки товара
    id: "laab-kai-chicken-salad" // уникальный идентификатор товара, нужен для добавления товара в корзину
}

let productCard = new ProductCard(product);

После этого в productCard.elem должен быть доступен DOM-элемент с карточкой товара.

Вот его вид (HTML):
<div id="holder" class="container_half">
	<div class="card">
		<div class="card__top">
			<img src="/assets/images/products/...значение product.image..." class="card__image" alt="product">
			<span class="card__price">€<!--значение product.price--></span>
		</div>
		<div class="card__body">
			<div class="card__title"><!--значение product.name--></div>
			<button type="button" class="card__button">
				<img src="/assets/images/icons/plus-icon.svg" alt="icon">
			</button>
		</div>
	</div>
</div>

Цена представлена в объекте товара, как число (например, вот так: 10), 
но отобразить её нужно, во-первых, со значком валюты в начале – €, а во-вторых, с двумя символами после точки – €10.00. Чтобы получить два символа, воспользуйтесь методом числа toFixed

Записать ссылку на корневой HTML элемент в свойство elem. 
Вёрстка каждой карточки имеет корневой элемент: div с CSS классом card. Так вот, ссылку на этот элемент нужно записать в свойство elem, вот так:

let productCard = new ProductCard(product);
console.log(productCard.elem); // корневой HTML элемента карточки товара

Событие при клике на «+»

Кроме показа карточки товара (генерации DOM-элемента), 
нужно генерировать событие при клике по кнопке добавления «+».
В дальнейшем этот компонент будет использоваться в списке товаров, 
а также будет участвовать в добавлении их в корзину.
А именно, при клике пользователя по кнопке с классом card__button генерировать 
пользовательское событие на корневом HTML элементе компонента (который хранится в свойстве elem), такого вида:

new CustomEvent("product-add", { // имя события должно быть именно "product-add"
    detail: this.product.id, // Уникальный идентификатора товара из объекта товара
    bubbles: true // это событие всплывает - это понадобится в дальнейшем
}

*/

// <<<< решение:
 
/*
INDEX.HTML:

<link rel="stylesheet" href="css/styles/common.css">

<style>
	.card {
	height: var(--card-height);
	display: flex;
	flex-direction: column;
	position: relative;
	transition: 0.2s all;
	cursor: pointer;
	}

	.card:hover,
	.card:hover .card__body {
	background-color: #3b3a31;
	}

	.card:hover .card__top {
	background-color: #4e4d41;
	}

	.card__top {
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
	background-color: var(--color-black-middle);
	}

	.card__image {
	max-width: calc(100% - 100px);
	width: 100%;
	}

	.card__price {
	position: absolute;
	right: 0;
	bottom: 0;
	display: inline-block;
	padding: 8px;
	min-width: 72px;
	text-align: center;
	background-color: var(--color-pink);
	color: var(--color-body);
	font-family: var(--font-primary), sans-serif;
	font-weight: 700;
	font-size: 17px;
	line-height: 1.2;
	}

	.card__body {
	height: 70px;
	background-color: var(--color-black-dark);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	}

	.card__title {
	text-align: center;
	font-weight: 500;
	font-size: 21px;
	font-style: italic;
	line-height: 1.2;
	width: 100%;
	}

	.card__button {
	background-color: var(--color-yellow);
	width: 72px;
	flex: 1 0 72px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	}

	.card__button:hover,
	.card__button:active {
	background-color: var(--color-yellow-dark);
	}

	@media all and (max-width: 767px) {
	.card {
		margin-bottom: 16px;
		height: auto;
	}
	}
</style>

<div id="holder" class="container_half"></div>

<script type="module">
	import ProductCard from './js/index1.js';

	let card = new ProductCard({
		name: "Laab kai chicken salad",
		price: 10,
		category: "salads",
		image: "laab_kai_chicken_salad.png",
		id: "laab-kai-chicken-salad"
	});

	holder.append(card.elem);
</script>

*/

/*
INDEX.JS:

import createElement from '../libs/lib/create-elements.js';
import escapeHtml from '../libs/lib/escape-html.js';

export default class ProductCard {
    constructor(product) {
        this.product = product;
        this.render();
        this.addEventlisteners();
    }

    render() {
        this.elem = createElement(`<div class="card">
            <div class="card__top">
                <img src="/img/products/${this.product.image}" class="card__image" alt="product"/>
                <span class="card__price">€${this.product.price.toFixed(2)}</span>
            </div>
            <div class="card__body">
                <div class="card__title">${escapeHtml(this.product.name)}</div>
                <button type="button" class="card__button">
                    <img src="/img/icons/plus-icon.svg" alt="icon"/>
                </button>
            </div>
        </div>`);
    }

    addEventlisteners() {
        this.elem.onclick = (event) => this.onClick(event);
    }

    onClick(event) {
        this.elem.dispatchEvent(new CustomEvent("product-add", {
            detail: this.product.id,
            bubbles: true
        }));
    }
}

*/

/*
CREATE-ELEMENTS.JS:

// doesn't work for td and some other elements that may not be placed into <div>
export default function(html) {
    const div = document.createElement('div');
    div.innerHTML = html;
    return div.firstElementChild;
}
*/

/*
ESCAPE-HTML.JS:

export default string => Array.from(string).map(char => {
    switch(char) {
        case '&':
            return '&amp;';
        case '"':
            return '&quot;';
        case '\'':
            return '&#39;';
        case '<':
            return '&lt;';
        case '>':
            return '&gt;';
        default:
            return char;
    }
}).join('');
*/


/* TASK_3 */

/*
Создайте класс Carousel, описывающий компонент «Карусель».
Главным отличием этой задачи будет использование компонентного подхода.

В качестве аргумента в конструктор класса передаётся массив слайдов для отображения:

let slides = [
  {
    name: 'Penang shrimp', // Название товара со слайда
    price: 16, // Цена товара со слайда
    image: 'penang_shrimp.png', // Название файла картинки со слайда
    id: 'penang-shrimp' // Уникальный идентификатор товара со слайда
  },
  {
    name: 'Chicken cashew',
    price: 14,
    image: 'chicken_cashew.png',
    id: 'chicken-cashew'
  },
];

let carousel = new Carousel(slides);


После этого в carousel.elem должен быть доступен корневой DOM-элемент карусели.

Отрисовка вёрстки компонента:

<div class="carousel__slide" data-id="penang-shrimp">
  <img src="/assets/images/carousel/...значение slide.image..." class="carousel__img" alt="slide">
  <div class="carousel__caption">
    <span class="carousel__price">€<!--значение slide.price--></span>
    <div class="carousel__title"><!--значение slide.name--></div>
    <button type="button" class="carousel__button">
      <img src="/assets/images/icons/plus-icon.svg" alt="icon">
    </button>
  </div>
</div>

Записать ссылку на корневой HTML элемент в свойство elem. 
Вёрстка всей карусели имеет корневой элемент: div с классом carousel. 
Так вот, ссылку на этот элемент нужно записать в свойство elem, вот так:

let carousel = new Carousel(slides);
console.log(carousel.elem); // Корневой HTML элемента карусели

Переключение слайдов по стрелкам
Требования к переключениям слайдов точно такие же, 
как в предыдущей задаче про карусель. Отличие в том, 
что здесь количество слайдов не фиксированное, а может быть любым. 

Событие при клике на «+»:

Кроме показа карусели и переключения слайдов, нужно генерировать событие при клике по кнопке добавления "+".
В нашем проекте товары можно будет добавлять не только из «Карточки товара», но и из «Карусели».
А именно, при клике пользователя по кнопке с классом carousel__button генерировать 
пользовательское событие на корневом HTML элементе компонента (который хранится в свойстве elem), такого вида:

new CustomEvent("product-add", { // имя события должно быть именно "product-add"
    detail: slide.id, // Уникальный идентификатора товара из объекта слайда
    bubbles: true // это событие всплывает - это понадобится в дальнейшем
}

*/

// <<<< решение:

/*
INDEX.HTML:

	<link rel="stylesheet" href="css/styles/common.css">
	<link rel="stylesheet" href="css/styles/button.css">

</head>
<style>
	.carousel {
	height: var(--carousel-height);
	position: relative;
	overflow: hidden;
	}

	.carousel__caption {
	position: absolute;
	z-index: 2;
	right: 0;
	bottom: 0;
	height: 70px;
	background-color: var(--color-black-dark);
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	}

	.carousel__price {
	position: absolute;
	right: 0;
	bottom: 100%;
	display: inline-block;
	padding: 8px;
	min-width: 72px;
	text-align: center;
	background-color: var(--color-pink);
	color: var(--color-body);
	font-family: var(--font-primary), sans-serif;
	font-weight: 700;
	font-size: 17px;
	line-height: 1.2;
	}

	.carousel__title {
	text-align: center;
	font-weight: 500;
	font-size: 21px;
	font-style: italic;
	line-height: 1.2;
	width: 100%;
	padding: 0 20px;
	}

	.carousel__button {
	background-color: var(--color-yellow);
	width: 72px;
	flex: 1 0 72px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	transition: 0.2s all;
	}

	.carousel__button:hover,
	.carousel__button:active {
	background-color: var(--color-yellow-dark);
	}

	.carousel__inner {
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	position: absolute;
	left: 0;
	top: 0;
	transition: all 1s ease;
	}

	.carousel__slide {
	width: 100%;
	min-width: 100%;
	height: 100%;
	position: relative;
	margin: 0;
	}

	.carousel__arrow {
	position: absolute;
	z-index: 3;
	bottom: 0;
	top: 50%;
	transform: translate(0, -50%);
	cursor: pointer;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 70px;
	height: 70px;
	}

	.carousel__arrow_right {
	right: 0;
	}

	.carousel__arrow_left {
	left: 0;
	}

	.carousel__arrow img,
	.carousel__arrow svg {
	max-width: 20px;
	}

	.carousel__img {
	min-width: 100%;
	width: 100%;
	display: block;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	}

	@media all and (max-width: 767px) {
	.carousel {
		padding-bottom: 57px;
	}

	.carousel__caption {
		left: 0;
		height: 57px;
	}

	.carousel__arrow {
		bottom: 57px;
	}

	.carousel__arrow_right img,
	.carousel__arrow_right svg {
		margin-top: 0;
	}

	.carousel__arrow_left img,
	.carousel__arrow_left svg {
		margin-bottom: 0;
	}
	}

	@media (max-width: 992px) {
	.carousel__img {
		position: absolute;
		top: 0;
		left: 0;
		transform: none;
	}
	}
</style>

<!-- Main_body -->
<body>
	
	<div class="container"></div>

	<script type="module">
		import slides from './js/slides.js';
		import Carousel from './js/index2.js';

		let carousel = new Carousel(slides);
		let containerElement = document.body.querySelector('.container');

		containerElement.append(carousel.elem);
	</script>
	<script src="js/common.min.js"></script>

</body>

*/

/*
INDEX2.HTML:

import createElement from '../libs/lib/create-elements.js';

export default class Carousel {

    constructor(slides) {
        this.slides = slides;
    
        this.currentSlideNumber = 0;
        this.render();
        this.addEventListeners();
    }

    render() {
        this.elem = createElement(`
            <div class="carousel">
                <div class ="carousel__arrow carousel__arrow_right">
                    <img src="/img/icons/angle-icon.svg" alt="icon" />
                </div>
                <div class="carousel__arrow carousel__arrow_left">
                    <img src="/img/icons/angle-left-icon.svg" alt="icon" />
                </div>
                <div class="carousel__inner"></div>
            </div>
            `);
        
        let slides = this.slides.map(item => createElement(`
            <div class="carousel__slide" data-id="${item.id}">
                <img src="/img/carousel/${item.image}" class="carousel__img" alt="slide" />
                <div class="carousel__caption">
                    <span class="carousel__price">€${item.price.toFixed(2)}</span>
                    <div class="carousel__title">${item.name}</div>
                    <button type="button" class="carousel__button">
                        <img src="/img/icons/plus-icon.svg" alt="icon" />
                    </button>
                </div>
            </div>
        `));

        this.sub('inner').append(...slides);

        this.update();
    }

    addEventListeners() {
        this.elem.onclick = ({target}) => {
            let button = target.closest('.carousel__button');
            if (button) {
                let id = target.closest('[data-id]').dataset.id;

                this.elem.dispatchEvent(new CustomEvent('product-add', {
                    detail: id,
                    bubbles: true
                }));
            }

            if (target.closest('.carousel__arrow_right')) {
                this.next();
            }

            if (target.closest('.carousel__arrow_left')) {
                this.prev();
            }
        };
    }

    sub(ref) {
        return this.elem.querySelector(`.carousel__${ref}`);
    }

    next() {
        this.currentSlideNumber++;
        this.update();
    }

    prev() {
        this.currentSlideNumber--;
        this.update();
    }

    update() {
        let offset = -this.elem.offsetWidth * this.currentSlideNumber;
        this.sub('inner').style.transform = `translateX(${offset}px)`;

        if (this.currentSlideNumber == this.slides.length -1) {
            this.sub('arrow_right').style.display = 'none';
        } else {
            this.sub('arrow_right').style.display = '';
        }

        if (this.currentSlideNumber == 0) {
            this.sub('arrow_left').style.display = 'none';
        } else {
            this.sub('arrow_left').style.display = '';
        }
    }
}

*/

/*

SLIDES.JS: 

export default [
    {
        name: 'Penang shrimp',
        price: 16,
        image: 'penang_shrimp.png',
        id: 'penang-shrimp'
    },
    {
        name: 'Chicken cashew',
        price: 14,
        image: 'chicken_cashew.png',
        id: 'chicken-cashew'
    },
    {
        name: 'Red curry veggies',
        price: 12.5,
        image: 'red_curry_vega.png',
        id: 'red-curry-veggies'
    },
    {
        name: 'Chicken springrolls',
        price: 6.5,
        image: 'chicken_loempias.png',
        id: 'chicken-springrolls'
    }
];

*/

/* << Сложные компоненты >> */

/* TASK_1 */

/*
Найдите координаты точек относительно окна браузера

В ифрейме ниже располагается документ с зелёным «полем».
Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

Ваш код должен при помощи DOM получить четыре пары координат:
1) верхний левый, внешний угол (это просто).
2) нижний правый, внешний угол (тоже просто).
3) верхний левый, внутренний угол (чуть сложнее).
4) нижний правый, внутренний угол (есть несколько способов, выберите один).

Координаты, вычисленные вами, должны совпадать с теми, которые возвращаются по клику мыши.
P.S. Код должен работать, если у элемента другие размеры или есть рамка, без привязки к конкретным числам.
*/
