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

// <<<< решение:

/*
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <script>
    document.onclick = function(e) { // показывает координаты точки клика
      coords.innerHTML = e.clientX + ':' + e.clientY;
    };
  </script>
</head>\
<style>
	body {
	padding: 20px 0 0 20px;
	cursor: pointer;
	}

	#field {
	overflow: hidden;
	width: 200px;
	height: 150px;
	border-top: 10px solid black;
	border-right: 10px solid gray;
	border-bottom: 10px solid gray;
	border-left: 10px solid black;
	background-color: #00FF00;
	font: 10px/1.2 monospace;
	}

	.triangle-right {
	position: relative;
	width: 0;
	height: 0;
	border-top: 6px solid transparent;
	border-bottom: 6px solid transparent;
	border-left: 20px solid red;
	text-indent: -20px;
	font: 12px/1 monospace;
	}
</style>

<body>

  Кликните в любом месте для получения координат в контексте окна.
  <br> Это для тестирования, чтобы проверить результат, который вы получили с помощью JavaScript.
  <br>
  <div id="coords">(координаты покажутся здесь)</div>


  <div id="field">
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
  </div>


  <div class="triangle-right" id="first" style="left:-20px;top:-176px">1</div>
  <div class="triangle-right" id="second" style="left:-10px;top:-178px">3</div>
  <div class="triangle-right" id="third" style="left:190px;top:-40px">4</div>
  <div class="triangle-right" id="fourth" style="left:200px;top:-42px">2</div>


  <script>

	// Первое решение :

	let fieldCoords = field.getBoundingClientRect();

	let answer = [
		[ //1
			fieldCoords.left,
			fieldCoords.top
		],
		[ //2
			fieldCoords.right,
			fieldCoords.bottom
		],
		[ //3
			fieldCoords.left + field.clientLeft,
			fieldCoords.top + field.clientTop
		],
		[ //4
			fieldCoords.left + field.clientLeft + field.clientWidth,
			fieldCoords.top + field.clientTop + field.clientHeight
		]
	];

	alert(answer.join(' '));



	// Второе решение:

	// Верхний левый, внешний угол.
	let checkpoint1Right = first.getBoundingClientRect().right;
	let checkpoint1Top = Math.round(first.getBoundingClientRect().top);
	alert(checkpoint1Right + ":" + checkpoint1Top);

	// Нижний правый, внешний угол.
	let checkpoint2Right = second.getBoundingClientRect().right;
	let checkpoint2Top = Math.round(second.getBoundingClientRect().top);
	alert(checkpoint2Right + ":" + checkpoint2Top);

	// Верхний левый, внутренний угол
	let checkpoint3Right = third.getBoundingClientRect().right;
	let checkpoint3Top = Math.round(third.getBoundingClientRect().top);
	alert(checkpoint3Right + ":" + checkpoint3Top);

	// Нижний правый, внутренний угол 
	let checkpoint4Right = fourth.getBoundingClientRect().right;
	let checkpoint4Top = Math.round(third.getBoundingClientRect().top);
	alert(checkpoint4Right + ":" + checkpoint4Top);
</script>

</body>
</html>
*/

/* TASK_2 */

/*
Создайте функцию positionAt(anchor, position, elem), 
которая позиционирует элемент elem в зависимости от значения 
свойства position рядом с элементом anchor.

Аргумент position – строка с одним из 3 значений:

"top" – расположить elem прямо над anchor
"right" – расположить elem непосредственно справа от anchor
"bottom" – расположить elem прямо под anchor

Она используется внутри функции showNote(anchor, position, html), 
которая уже есть в исходном коде задачи. 
Она создаёт и показывает элемент-«заметку» с текстом html 
на заданной позиции position рядом с элементом anchor.

В этой задаче нам нужно только аккуратно вычислить координаты.

Обратите внимание, что элементы должны уже быть в документе 
перед чтением offsetHeight и других свойств. 
Спрятанный (display:none) элемент или элемент 
вне документа не имеют размеров.
*/

// <<<< решение:

/* 

<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>
<style>
  .note {
    position: fixed;
    z-index: 1000;
    padding: 5px;
    border: 1px solid black;
    background: white;
    text-align: center;
    font: italic 14px serif;
  }

  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 0 0 0 100px;
    padding: .5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
    display: inline-block;
    white-space: pre;
  }

  blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: .1em;
    margin-right: .25em;
    vertical-align: -.4em;
  }
</style>

<body>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>

  <blockquote>
    Teacher: Why are you late?
    Student: There was a man who lost a hundred dollar bill.
    Teacher: That's nice. Were you helping him look for it?
    Student: No. I was standing on it.
  </blockquote>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>


  <script>
    
    //  Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
     
    //  @param {Node} anchor     элемент, около которого позиционируется другой элемент
    //  @param {string} position одно из: top/right/bottom
    //  @param {Node} elem       элемент, который позиционируется
     
    // Оба элемента elem и anchor должны присутствовать в документе
    
    function positionAt(anchor, position, elem) {
		let anchorCoords = anchor.getBoundingClientRect();
		
		switch (position) {
		  case "top":
			elem.style.left = anchorCoords.left + "px";
			elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
			break;
  
		  case "right":
			elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
			elem.style.top = anchorCoords.top + "px";
			break;
  
		  case "bottom":
			elem.style.left = anchorCoords.left + "px";
			elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
			break;
		}
	}
  
	 
	// Показывает заметку с заданным содержимым на заданной позиции
	// относительно элемента anchor.
	   
	  function showNote(anchor, position, html) {
		let note = document.createElement('div');
		note.className = "note";
		note.innerHTML = html;
		document.body.append(note);
  
		positionAt(anchor, position, note);
	  }
  
	  // test it
	  let blockquote = document.querySelector('blockquote');
  
	  showNote(blockquote, "top", "note above");
	  showNote(blockquote, "right", "note at the right");
	  showNote(blockquote, "bottom", "note below");
	</script>
  
  
  </body>
  </html>

*/

/* TASK_3 */

/*
Покать заметку около элемента (абсолютное позиционирование)

Измените код решения "TASK_2" так, чтобы элемент заметки использовал 
свойство position:absolute вместо position:fixed.

Это предотвратит расхождение элементов при прокрутке страницы.

Используйте решение предыдущего задания для начала. 
Чтобы проверить решение в условиях с прокруткой, 
добавьте стиль элементу <body style="height: 2000px">.

Решение достаточно простое:
Используйте position:absolute в CSS вместо position:fixed для элемента с классом .note.
Используйте функцию getCoords(), 
чтобы получить координаты относительно документа.
*/

// <<<< решение:

/*
<style>
	.note {
		// position: fixed; меняем на absolute
		position: absolute;
	}
</style>

<body style="height: 2000px">

<script>

function getCoords(elem) {
      let box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };
}
    
function positionAt(anchor, position, elem) {

  let anchorCoords = getCoords(anchor);

  switch (position) {
    case "top":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "right":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;
  }
}

</script>
</body>

*/

/* TASK_4 */

/*
Расположите заметку внутри элемента (абсолютное позиционирование)
Усовершенствуйте решение TASK_2, TASK_3 Покажите заметку около элемента 
(абсолютное позиционирование): научите функцию positionAt(anchor, position, elem) 
вставлять elem внутрь anchor.

Новые значения для аргумента position:

top-out, right-out, bottom-out – работают так же, как раньше, 
они вставляют elem сверху/справа/снизу anchor.
top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к 
верхнему/правому/нижнему краю.

Например:

// показывает заметку поверх цитаты
positionAt(blockquote, "top-out", note);

// показывает заметку внутри цитаты вблизи верхнего края элемента
positionAt(blockquote, "top-in", note);

*/

// <<<< решение:

/*
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>
<style>
  .note {
    position: absolute;
    z-index: 1000;
    padding: 5px;
    border: 1px solid black;
    background: white;
    text-align: center;
    font: italic 14px serif;
    opacity: .9;
  }

  blockquote {
    background: #f9f9f9;
    border-left: 10px solid #ccc;
    margin: 0 0 0 100px;
    padding: .5em 10px;
    quotes: "\201C""\201D""\2018""\2019";
    display: inline-block;
    white-space: pre;
  }

  blockquote:before {
    color: #ccc;
    content: open-quote;
    font-size: 4em;
    line-height: .1em;
    margin-right: .25em;
    vertical-align: -.4em;
  }
</style>

<body style="height: 2000px">

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>

  <blockquote>
    Teacher: Why are you late?
    Student: There was a man who lost a hundred dollar bill.
    Teacher: That's nice. Were you helping him look for it?
    Student: No. I was standing on it.
  </blockquote>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit sint atque dolorum fuga ad incidunt voluptatum error fugiat animi amet! Odio temporibus nulla id unde quaerat dignissimos enim nisi rem provident molestias sit tempore omnis recusandae
    esse sequi officia sapiente.</p>


<script>
    
function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}
    
function positionAt(anchor, position, elem) {

  let anchorCoords = getCoords(anchor);

  switch (position) {
    case "top-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
      break;

    case "right-out":
      elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom-out":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
      break;

    case "top-in":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + "px";
        break;

    case "right-in":
      elem.style.width = '150px';
      elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
      elem.style.top = anchorCoords.top + "px";
      break;

    case "bottom-in":
      elem.style.left = anchorCoords.left + "px";
      elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
      break;
  }
}

function showNote(anchor, position, html) {

  let note = document.createElement('div');
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAt(anchor, position, note);
}
  
  // test it
  let blockquote = document.querySelector('blockquote');

  showNote(blockquote, "top-in", "note top-in");
  showNote(blockquote, "top-out", "note top-out");
  showNote(blockquote, "right-out", "note right-out");
  showNote(blockquote, "bottom-in", "note bottom-in");
</script>
  
  
</body>
</html>
*/

/* TASK_5 */

/* 
Бесконечная страница

Создайте бесконечную страницу. Когда посетитель прокручивает её до конца, 
она автоматически добавляет текущие время и дату в текст (чтобы посетитель мог прокрутить ещё).

Прокрутка «эластична». Можно прокрутить немного дальше начала или конца документа на некоторых 
браузерах/устройствах (после появляется пустое место, 
а затем документ автоматически «отскакивает» к нормальному состоянию).

Прокрутка неточна. Если прокрутить страницу до конца, можно оказаться в 0-50px от 
реальной нижней границы документа.

Таким образом, «прокрутка до конца» должна означать, что посетитель находится на 
расстоянии не более 100px от конца документа.

P.S. В реальной жизни мы можем захотеть показать «больше сообщений» или «больше товаров».
*/

// <<<< решение:

/*
<body>

<h1>Прокрути меня</h1>

<script>
	function populate() {
		while(true) {
			// нижняя граница документа
			let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
			// если пользователь прокрутил достаточно далеко (< 100px до конца)
			if(windowRelativeBottom > document.documentElement.clientHeight + 100) break;
			// добавим больше данных
			document.body.insertAdjacentHTML("beforeend", `<p>Date: ${new Date()}</p>`)
		}
	}

	window.addEventListener('scroll', populate);

	populate(); //инициализация документа
</script>

</body>
*/

/* TASK_6 */

/*
Кнопка вверх/вниз

Создайте кнопку «наверх», чтобы помочь с прокруткой страницы.

Она должна работать следующим образом:

Пока страница не прокручена вниз хотя бы на высоту окна – кнопка невидима.
Когда страница прокручена вниз больше, чем на высоту окна – появляется стрелка «наверх» 
в левом верхнем углу. Если страница прокручивается назад, стрелка исчезает.
Когда нажимается стрелка, страница прокручивается вверх.
*/

// <<<< решение:

/*
<style>
	body,
    html {
      height: 100%;
      width: 100%;
      padding: 0;
      margin: 0;
    }

    #matrix {
      width: 400px;
      margin: auto;
      overflow: auto;
      text-align: justify;
    }

    #arrowTop {
      height: 9px;
      width: 14px;
      color: green;
      position: fixed;
      top: 10px;
      left: 10px;
      cursor: pointer;
    }

    #arrowTop::before {
      content: '▲';
    }
</style>


<body>
	<div id="matrix">
		<script>
			for(let i = 0; i < 2000; i++) document.writeln(i)
		</script>
	</div>

	<div id="arrowTop" hidden></div>

	<script>
		arrowTop.onclick = function() {
			window.scrollTo(pageXOffset, 0);
			// после scrollTo возникнет событие "scroll", так что стрелка автоматически скроется
		};

		window.addEventListener('scroll', function() {
			arrowTop.hidden = (pageYOffset < document.documentElement.clientHeight);
		});
	</script>
</body>
*/

/* TASK_7 */

/*
Загрузка видимых изображений

Допустим, у нас есть клиент с низкой скоростью соединения, и мы хотим сэкономить его трафик.
Для этого мы решили не показывать изображения сразу, а заменять их на «макеты», как тут:
<img src="placeholder.svg" width="128" height="128" data-src="real.jpg">

То есть, изначально, все изображения – placeholder.svg. Когда страница прокручивается 
до того положения, где пользователь может увидеть изображение – мы меняем src на значение 
из data-src, и таким образом изображение загружается.

Прокрутите его, чтобы увидеть загрузку изображений «по требованию».

Требования:

При загрузке страницы те изображения, которые уже видимы, должны загружаться сразу же, 
не ожидая прокрутки.
Некоторые изображения могут быть обычными, без data-src. Код не должен касаться их.
Если изображение один раз загрузилось, оно не должно больше перезагружаться при прокрутке.

P.S. Если можете, реализуйте более продвинутое решение, которое будет загружать 
изображения на одну страницу ниже/после текущей позиции.

P.P.S. Достаточно обрабатывать вертикальную прокрутку, горизонтальную не требуется.
*/

// <<<< решение:

/*

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
</head>

<body>

  <p>Текст и картинки взяты с https://wikipedia.org.</p>

  <h3>Все изображения с <code>data-src</code> загружаются, когда становятся видимыми.</h3>

  <h1>Солнечная система</h1>

  <p>Солнечная система — планетная система, включает в себя центральную
    звезду — Солнце — и все естественные космические объекты,
    вращающиеся вокруг Солнца. Она сформировалась путём гравитационного
    сжатия газопылевого облака примерно 4,57 млрд лет назад.</p>

  <p>Большая часть массы объектов Солнечной системы приходится на Солнце;
    остальная часть содержится в восьми относительно уединённых планетах, имеющих почти
    круговые орбиты и располагающихся в пределах почти плоского диска — плоскости эклиптики.
    Общая масса системы составляет около 1,0014. При таком распределении масс
    особенностью кинематики системы является противоречащее ожидаемому распределение
    моментов импульсов вращения между Солнцем и планетами, т.н. «Проблема моментов»:
    на долю Солнца, масса которого в ~740 раз больше общей массы планет, приходится
    всего 2% общего момента системы, а остальные 98% на ~0,001 общей массы Солнечной системы.</p>

  <figure>
    <img src="placeholder.svg" data-src="https://ru.js.cx/clipart/solar/planets.jpg" width="640" height="360">
  </figure>

  <h1>Солнце</h1>

  <p>Солнце — звезда Солнечной системы и её главный компонент. Его масса (332 900 масс Земли)
    достаточно велика для поддержания термоядерной реакции в его недрах,
    при которой высвобождается большое количество энергии, излучаемой в пространство
    в основном в виде электромагнитного излучения, максимум которого приходится
    на диапазон длин волн 400—700 нм, соответствующий видимому свету.</p>

  <figure>
    <img src="placeholder.svg" data-src="https://ru.js.cx/clipart/solar/sun.jpg" width="658" height="658">
  </figure>

  <h1>Меркурий</h1>

  <p>Меркурий (0,4 а. е. от Солнца) является ближайшей планетой к Солнцу и наименьшей
    планетой системы (0,055 массы Земли). У планеты нет спутников. Характерными деталями рельефа
    его поверхности, помимо ударных кратеров, являются многочисленные лопастевидные уступы,
    простирающиеся на сотни километров. Считается, что они возникли в результате приливных
    деформаций на раннем этапе истории планеты во время, когда периоды обращения Меркурия вокруг
    оси и вокруг Солнца не вошли в резонанс. Меркурий имеет крайне разреженную атмосферу,
    она состоит из атомов, «выбитых» с поверхности планеты солнечным ветром.
    Относительно большое железное ядро Меркурия и его тонкая кора ещё не получили удовлетворительного объяснения.
    Имеется гипотеза, предполагающая, что внешние слои планеты, состоящие из лёгких элементов,
    были сорваны в результате гигантского столкновения, в результате которого размеры планеты уменьшились.
    Альтернативно излучение молодого Солнца могло помешать полной аккреции вещества.</p>

  <figure>
    <img src="placeholder.svg" data-src="https://ru.js.cx/clipart/solar/mercury.jpg" width="390" height="390">
  </figure>


   <script>
    
    // Проверка видимости элемента (в видимой части страницы)
    //  Достаточно, чтобы верхний или нижний край элемента был виден
     
    function isVisible(elem) {
      let coords = elem.getBoundingClientRect();

	  let windowHeight = document.documentElement.clientHeight;

	  // видны верхний ИЛИ нижний край элемента
	  let topVisible = coords.top > 0 && coords.top < windowHeight;
	  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

	  return topVisible || bottomVisible;
    }

	
	// Вариант проверки, считающий элемент видимым,
    // если он не более чем -1 страница назад или +1 страница вперед.
	//	function isVisible(elem) {

	//		let coords = elem.getBoundingClientRect(0);

	//		let windowHeight = document.documentElement.clientHeight;

	//		let extendedTop = -windowHeight;
	//		let extendedBottom = 2 * windowHeight;

			// top visible || bottom visible
	//		let topVisible = coords.top > extendedTop && coords.top < extendedBottom;
	//		let bottomVisible = coords.bottom < extendedBottom && coords.bottom > extendedTop;

	//		return topVisible || bottomVisible;
	//	}
	

    function showVisible() {
      for (let img of document.querySelectorAll('img')) {
        let realSrc = img.dataset.src;
        if (!realSrc) continue;

        if (isVisible(img)) {
          // отключение кеширования
          // эта строка должна быть удалена в "боевом" коде
          realSrc += '?nocache=' + Math.random();

          img.src = realSrc;

          img.dataset.src = '';
        }
      }

    }

    window.addEventListener('scroll', showVisible);
    showVisible();
  </script>

</body>
</html>

*/


/* TASK_8 */

/*
Слайдер

Создайте слайдер

Захватите мышкой синий бегунок и двигайте его.

Важные детали:

Слайдер должен нормально работать при резком движении мыши влево 
или вправо за пределы полосы. При этом бегунок должен останавливаться чётко в нужном конце полосы.
При нажатом бегунке мышь может выходить за пределы полосы слайдера, 
но слайдер пусть всё равно работает (это удобно для пользователя).

Как можно видеть из HTML/CSS, слайдер – это <div>, подкрашенный фоном/градиентом, 
внутри которого находится другой <div>, оформленный как бегунок, с position:relative.

Используем для его координат position:relative, т.е. 
координаты ставятся не абсолютные, а относительно родителя, так как это удобнее.

И дальше реализуем Drag’n’Drop только по горизонтали, с ограничением по ширине.
*/

// <<<< решение:

/*
<style>
	.slider {
	border-radius: 5px;
	background: #E0E0E0;
	background: linear-gradient(left top, #E0E0E0, #EEEEEE);
	width: 310px;
	height: 15px;
	margin: 5px;
	}

	.thumb {
	width: 10px;
	height: 25px;
	border-radius: 3px;
	position: relative;
	left: 10px;
	top: -5px;
	background: blue;
	cursor: pointer;
	}
</style>

<body>

  <div id="slider" class="slider">
    <div class="thumb"></div>
  </div>

  <script>
    let thumb = slider.querySelector('.thumb');

	thumb.onmousedown = function(event) {
		event.preventDefault(); // предотвратить запуск выделения (действие браузера)

		let shiftX = event.clientX - thumb.getBoundingClientRect().left;
		// shiftY здесь не нужен, слайдер двигается только по горизонтали

		document.addEventListener('mousemove', onMouseMove);
		document.addEventListener('mouseup', onMouseUp);

		function onMouseMove(event) {
			let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

			// курсор вышел из слайдера => оставить бегунок в его границах.
			if(newLeft < 0) {
				newLeft = 0;
			}
			let rightEdge = slider.offsetWidth - thumb.offsetWidth;
			if(newLeft > rightEdge) {
				newLeft = rightEdge;
			}

			thumb.style.left = newLeft + 'px';
		}

		function onMouseUp() {
			document.removeEventListener('mouseup', onMouseUp);
			document.removeEventListener('mousemove', onMouseMove);
		}

	};

	thumb.ondragstart = function() {
		return false;
	};

  </script>
  */


/* TASK_9 */

/*
Расставить супергероев по полю

Сделайте так, чтобы элементы с классом draggable можно было переносить мышкой.

Требования к реализации:
Используйте делегирование событий для отслеживания начала перетаскивания: 
только один обработчик событий mousedown на документе.
Если элементы подносят к верхней/нижней границе окна – 
оно должно прокручиваться вверх/вниз, чтобы позволить дальнейшее перетаскивание.
Горизонтальная прокрутка отсутствует 
(чуть-чуть упрощает задачу, её просто добавить).
Элемент при переносе, даже при резких движениях мышкой, 
не должен даже частично попасть вне окна.

Чтобы перетащить элемент, мы можем использовать position:fixed, 
это делает управление координатами проще. В конце следует переключиться 
обратно на position:absolute, чтобы положить элемент в документ.
Когда координаты находятся в верхней/нижней части окна, мы используем 
его window.scrollTo для прокрутки.
*/

// <<<< решение:

/*
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
</head>
<style>
html, body {
margin: 0;
padding: 0;
}

#field {
background: url(https://js.cx/drag-heroes/field.png);
width: 800px;
height: 600px;
float: left;
}

// герои и мяч (переносимые элементы) 

.hero {
	background: url(https://js.cx/drag-heroes/heroes.png);
	width: 130px;
	height: 128px;
	float: left;
	}

	#hero1 {
	background-position: 0 0;
	}

	#hero2 {
	background-position: 0 -128px;
	}

	#hero3 {
	background-position: -120px 0;
	}

	#hero4 {
	background-position: -125px -128px;
	}

	#hero5 {
	background-position: -248px -128px;
	}

	#hero6 {
	background-position: -244px 0;
	}

	.draggable {
	cursor: pointer;
	}
</style>
	
	<body>
	
	  <h2>Расставьте супергероев по полю.</h2>
	
	  <p>Супергерои и мяч - это элементы с классом "draggable". Сделайте так, чтобы их можно было переносить.</p>
	  <p>Важно: ограничить перетаскивание границами окна. Если супергероя подносят к верхней или нижней границе страницы, она должна автоматически прокручиваться.</p>
	  <p>Если страница помещается на вашем экране целиком и не имеет вертикальной прокрутки -- сделайте окно браузера меньше, чтобы протестировать эту возможность.</p>
	  <p>В этой задаче достаточно справиться с вертикальной прокруткой. Обычно нет горизонтальной прокрутки, и она обрабатывается аналогичным образом, если это необходимо.</p>
	  <p>Да, и ещё: супергерои ни при каких условиях не должны попасть за край экрана.</p>
	  <div id="field">
	
	  </div>
	
	  <div class="hero draggable" id="hero1"></div>
	  <div class="hero draggable" id="hero2"></div>
	  <div class="hero draggable" id="hero3"></div>
	  <div class="hero draggable" id="hero4"></div>
	  <div class="hero draggable" id="hero5"></div>
	  <div class="hero draggable" id="hero6"></div>
	
	  <img src="https://en.js.cx/clipart/ball.svg" class="draggable">
	
	  <div style="clear:both"></div>
	
	  <script>
		let isDragging = false;
	
		document.addEventListener('mousedown', function(event) {
			let dragElement = event.target.closest('.draggable');
			if(!dragElement) return;
			event.preventDefault();
			dragElement.ondragstart = function() {
				return false;
			};
	
			let coords, shiftX, shiftY;
			startDrag(dragElement, event.clientX, event.clientY);
	
			function onMouseUp(event) {
				finishDrag();
			};
	
			function onMouseMove(event) {
				moveAt(event.clientX, event.clientY);
			}
	
			// в начале перемещения элемента:
			  //   запоминаем место клика по элементу (shiftX, shiftY),
			  //   переключаем позиционирование элемента (position:fixed) и двигаем элемент
			function startDrag(element, clientX, clientY) {
				if(isDragging) {
					return;
				}
	 
				isDragging = true;
	
				document.addEventListener('mousemove', onMouseMove);
				element.addEventListener('mouseup', onMouseUp);
	
				shiftX = clientX - element.getBoundingClientRect().left;
				shiftY = clientY - element.getBoundingClientRect().top;
	
				element.style.position = 'fixed';
	
				moveAt(clientX, clientY);
			};
	
			// переключаемся обратно на абсолютные координаты
			  // чтобы закрепить элемент относительно документа
			function finishDrag() {
				if(!isDragging) {
					return;
				}
				
				isDragging = false;
	
				dragElement.style.top = parseInt(dragElement.style.top) + pageYOffset + 'px';
				dragElement.style.position = 'absolute';
	
				document.removeEventListener('mousemove', onMouseMove);
				dragElement.removeEventListener('mouseup', onMouseUp);
			}
	
			function moveAt(clientX, clientY) {
				// вычисляем новые координаты (относительно окна)
				let newX = clientX - shiftX;
				let newY = clientY - shiftY;
	
				// проверяем, не переходят ли новые координаты за нижний край окна:
				// сначала вычисляем гипотетический новый нижний край окна
				let newBottom = newY + dragElement.offsetHeight;
	
				// затем, если новый край окна выходит за пределы документа, прокручиваем страницу
				if(newBottom > document.documentElement.clientHeight) {
					// координата нижнего края документа относительно окна
					let docBottom = document.documentElement.getBoundingClientRect().bottom;
	
					// простой скролл документа на 10px вниз имеет проблему -
					  // он может прокручивать документ за его пределы,
					  // поэтому используем Math.min(расстояние до конца, 10)
					let scrollY = Math.min(docBottom - newBottom, 10);
	
					// вычисления могут быть не совсем точны - случаются ошибки при округлении,
					  // которые приводят к отрицательному значению прокрутки. отфильтруем их:
					if(scrollY < 0) scrollY = 0;
					window.scrollBy(0, scrollY);
	
					// быстрое перемещение мыши может поместить курсор за пределы документа вниз
					  // если это произошло -
					  // ограничиваем новое значение Y максимально возможным исходя из размера документа:
					newY = Math.min(newY, document.documentElement.clientHeight - dragElement.offsetHeight);
				}
	
				// проверяем, не переходят ли новые координаты за верхний край окна (по схожему алгоритму)
				if(newY < 0) {
					// прокручиваем окно вверх
					let scrollY = Math.min(-newY, 10);
					if(scrollY < 0) scrollY = 0; // проверяем ошибки точности
	
					window.scrollBy(0, -scrollY);
					// быстрое перемещение мыши может поместить курсор за пределы документа вверх
					newY = Math.max(newY, 0); // newY не может быть меньше нуля
				}
	
				// ограничим newX размерами окна
				// согласно условию, горизонтальная прокрутка отсутствует, поэтому это не сложно:
				if(newX < 0) newX = 0;
				if(newX > document.documentElement.clientWidth - dragElement.offsetWidth) {
					newX = document.documentElement.clientWidth - dragElement.offsetWidth;
				}
	
				dragElement.style.left = newX + 'px';
				dragElement.style.top = newY + 'px';
			}
		});
	  </script>
	</body>
	
</html>
*/


/* TASK_10 */

/*
Отследить одновременное нажатие:

Создайте функцию runOnKeys(func, code1, code2, ... code_n), 
которая запускает func при одновременном нажатии клавиш с кодами 
code1, code2, …, code_n.

Например, код ниже выведет alertпри одновременном 
нажатии клавиш "Q" и "W" (в любом регистре, в любой раскладке)

runOnKeys(
  () => alert("Привет!"),
  "KeyQ",
  "KeyW"
);

Необходимо использовать 
два обработчика событий: document.onkeydown и document.onkeyup.

Создадим множество pressed = new Set(), в которое будем записывать клавиши, 
нажатые в данный момент.

В первом обработчике будем добавлять в него значения, а во втором удалять. 
Каждый раз, как отрабатывает keydown, 
будем проверять – все ли нужные клавиши нажаты, и, если да – выводить сообщение.
*/

// <<<< решение:

/*
<body>
	<p>Нажмите "Q" и "W" вместе (язык значения не играет).</p>
	<script>
		function runOnKeys(func, ...codes) {
			let pressed = new Set();

			document.addEventListener('keydown', function(event) {
				pressed.add(event.code);

				for (let code of codes) { // все ли клавиши из набора нажаты?
					if(!pressed.has(code)) {
						return;
					}
				}

				 // да, все

        		// во время показа alert, если посетитель отпустит клавиши - не возникнет keyup
        		// при этом JavaScript "пропустит" факт отпускания клавиш, а pressed[keyCode] останется true
        		// чтобы избежать "залипания" клавиши -- обнуляем статус всех клавиш, пусть нажимает всё заново
				pressed.clear();

				func();
			});

			document.addEventListener('keyup', function(event) {
				pressed.delete(event.code);
			});
		}

		runOnKeys(
			() => alert("Привет!"),
			"KeyQ",
			"KeyW"
		);
	</script>
</body>
*/


/* TASK_11 LENTA_MENU */

/*
Создайте класс RibbonMenu, описывающий компонент «Ленты-Меню»
(для простоты будем называть его «меню»). Данный компонент представляет 
из себя список категорий товаров ресторана. В конечном итоге, мы будем 
показывать товары только той категории, которую выбрал пользователь.

В качестве аргумента в конструктор класса передаётся массив категорий:
let categories = [
  {
    id: '',
    name: 'All'
  },
  {
    id: 'salads', // уникальный идентификатор категории
    name: 'Salads' // имя категории для отображения
  },
  {
    id: 'soups',
    name: 'Soups'
  },
  // и другие...
];

let ribbonMenu = new RibbonMenu(categories);

После этого в ribbonMenu.elem должен быть доступен корневой DOM-элемент меню.

Прокрутка меню:

Как видно из примера, ссылки категорий занимают больше места, 
чем общая ширина меню. Поэтому, чтобы пользователь мог выбрать категории, 
которые не помещаются на экране, мы будем прокручивать меню по горизонтали.
Меню должно прокручиваться влево/вправо при клике по кнопкам вперёд/назад.
Их CSS классы:
ribbon__arrow_right – класс кнопки прокрутки вперёд;
ribbon__arrow_left – класс кнопки прокрутки назад;

Как (технически) будет устроена прокрутка?

Структура меню такова, что есть внешний элемент, в котором находится «лента» 
из подряд идущих ссылок на категории. Внешний элемент имеет фиксированную 
ширину, поэтому видно только часть ленты.

Класс элемента-ленты, в котором находятся все категории – ribbon__inner. 
Прокручивать его мы будем с шагом в 350px, и делать это c помощью 
встроенного метода scrollBy.

Например, чтобы прокрутить его на 350px вперёд:
ribbonInner.scrollBy(350, 0); // положительное значение для прокрутки назад

Скрываем кнопки переключения при достижении крайних положений меню

Когда пользователь прокрутил меню до крайней категории, нужно скрыть кнопку 
переключения вперёд, и наоборот, в начальном состоянии меню, нужно скрыть 
кнопку переключения назад.

Скрывать и показывать кнопки нужно с помощью класса ribbon__arrow_visible, 
если этот класс есть у кнопки, она будет видима, и наоборот. 
Для добавления и удаления можно использовать свойство classList.

Важный момент, прокрутка – это асинхронное действие, она занимает какое-то время,
 а не происходит моментально. Поэтому скрывать кнопки нужно, когда прокрутка 
 закончена – в обработчике события scroll на элементе с классом ribbon__inner, 
 а не сразу после вызова метода scrollBy.

 Но как определить текущее состояние прокрутки?

Для этого нам нужно вычислить ширину оставшейся невидимой области.

Для области скрытой слева, всё очень просто, мы можем использовать 
свойство scrollLeft элемента с классом ribbon__inner:

let scrollLeft = ribbonInner.scrollLeft;
console.log(scrollLeft); // число пикселей, например, 100 или 0.

Другими словами, если scrollLeft будет равен 0, значит мы «упёрлись» 
в первый слайд и нужно скрыть кнопку назад.

Для области скрытой справа всё немного сложнее. 
Чтобы её вычислить нам нужно взять общую ширину прокрутки 
элемента(свойство scrollWidth) и вычесть из неё ширину области 
скрытой слева(свойство scrollLeft) и видимую ширину элемента 
(свойство clientWidth):
let scrollWidth = ribbonInner.scrollWidth;
let scrollLeft = ribbonInner.scrollLeft;
let clientWidth = ribbonInner.clientWidth;

let scrollRight = scrollWidth - scrollLeft - clientWidth; // число пикселей, например, 100 или 0.

Аналогично, если scrollRight будет равен 0, значит мы «упёрлись» в крайний 
слайд и нужно скрыть кнопку вперёд. В некоторых браузерах у вас может 
получиться дробное значение scrollRight. Чтобы себя обезопасить, все 
значения scrollRight от 0 до 1 нужно считать нулем. Другими словами, 
если scrollRight < 1, то мы можем смело скрывать кнопку переключения вперёд.

Выбор конкретной категории

Для выбора конкретной категории товаров пользователю нужно будет кликнуть 
по её ссылке. После чего, нам будет нужно:
Во-первых, остановить действия браузера по умолчанию, вызвав метод preventDefault на объекте события.
Во-вторых, выделить стилями, выбранную категорию, добавив ссылке класс ribbon__item_active. При этом нужно не забыть удалить 
этот класс с предыдущей активной категории.
В-третьих, дать знать другим компонентам, какую категорию выбрал пользователь. 
Для этого сгенерировать пользовательское событие на корневом HTML элементе 
компонента (который хранится в свойстве elem), такого вида:

new CustomEvent('ribbon-select', { // имя события должно быть именно 'ribbon-select'
  detail: category.id, // уникальный идентификатора категории из её объекта
  bubbles: true // это событие всплывает - это понадобится в дальнейшем
})

Как вы видите, для генерации такого события необходим уникальный 
идентификатор категории (category.id). Для простоты его можно хранить 
в дата-атрибуте, к примеру, мы используем атрибут data-id на элементе ссылки.
*/

// <<<< решение:

/*

Доп. файлы:

index3.js; 
path: './js/index3.js';

categories.js;
path: './libs/categories/categories.js';

create-elements.js;
path: '../libs/lib/create-elements.js';


INDEX.HTML:

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Бангкок Экспресс: Лента-Меню</title>
</head>
<style>
	.ribbon {
		margin-bottom: 38px;
		height: 50px;
		overflow: hidden;
		position: relative;
	}

	.ribbon__inner {
		padding-bottom: 15px;
		margin-bottom: -15px;
		box-sizing: content-box;
		display: flex;
		flex-direction: row;
		height: 100%;
		scroll-behavior: smooth;
		overflow-x: auto;
		overflow-y: hidden;
	}

	.ribbon__arrow {
		display: none;
		position: absolute;
		z-index: 1;
		top: 0;
		bottom: 0;
		width: 120px;
		flex-direction: column;
		justify-content: center;
		cursor: pointer;
	}

	.ribbon__arrow.ribbon__arrow_left {
	left: 0;
	background: linear-gradient(
		90deg,
		var(--color-black) 25%,
		var(--color-black) 61%,
		rgba(31, 30, 25, 0) 100%
	);
		padding-left: 14px;
	}

	.ribbon__arrow.ribbon__arrow_left img {
		transform: rotate(180deg);
	}

	.ribbon__arrow.ribbon__arrow_right {
	right: 0;
	background: linear-gradient(
		90deg,
		rgba(31, 30, 25, 0) 25%,
		var(--color-black) 61%,
		var(--color-black) 100%
	);
		text-align: right;
		align-items: flex-end;
		padding-right: 14px;
	}

	.ribbon__arrow.ribbon__arrow_visible {
		display: flex;
	}

	.ribbon__arrow img {
		width: 8px;
	}

	.ribbon__arrow:hover img {
		opacity: 0.8;
	}

	.ribbon__item {
		color: var(--color-body);
		background: var(--color-black-dark);
		padding: 24px 38px;
		font-size: 21px;
		font-style: italic;
		line-height: 0.2;
		font-weight: 500;
		text-decoration: none;
		white-space: nowrap;
		border: none;
		border-left: 1px solid var(--color-black);
		cursor: pointer;
	}

	.ribbon__item:first-child {
		border-left: none;
	}

	.ribbon__item.ribbon__item_active,
	.ribbon__item:hover {
		background-color: var(--color-black-light);
	}

@media all and (max-width: 767px) {
	.ribbon {
		margin-bottom: 0;
	}

	.ribbon__item {
		font-size: 18px;
		padding: 13px;
	}

	.ribbon__arrow {
		display: none;
	}

	.ribbon__arrow.ribbon__arrow_visible {
		display: none;
	}
}
	@import "https://fonts.googleapis.com/css?family=Lato:400,400i|Source+Sans+Pro|Sriracha&display=swap";
@import "./button.css";

:root {
  --color-white: #fff;
  --color-black: #1f1e19;
  --color-yellow: #ecd41a;
  --color-yellow-dark: #c8b416;
  --color-pink: #c92086;
  --color-black-light: #6e6a51;
  --color-black-middle: #414036;
  --color-black-dark: #2d2c25;
  --color-grey: #b6b4a2;
  --color-body: var(--color-white);
  --carousel-height: 313px;
  --card-height: 320px;
  --font-primary: "Lato";
  --font-secondary: "Sriracha";
}

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-primary), cursive;
  color: var(--color-body);
  font-size: 16px;
  line-height: 1.5;
  background-color: var(--color-black);
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
  outline-width: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body main {
  position: relative;
  z-index: 2;
  padding-bottom: 100px;
}

.text-center {
  text-align: center;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

button {
  box-shadow: none;
  outline: none;
  border: none;
  background-color: transparent;
}

p {
  font-family: var(--font-primary), sans-serif;
  margin: 0;
}

h1,
.heading {
  font-size: 46px;
  line-height: 1.2;
  color: var(--color-yellow);
  text-shadow: 3px 3px var(--color-pink);
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}

.heading.logo {
  font-family: var(--font-secondary), sans-serif;
}

h2,
.section-heading {
  font-family: var(--font-secondary), sans-serif;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-yellow);
  text-shadow: 3px 3px var(--color-pink);
  margin: 40px 0 30px;
  text-align: center;
  text-transform: uppercase;
}

.page-title {
  font-size: 230px;
  line-height: 1;
  font-weight: 400;
  color: var(--color-yellow);
  text-shadow: 6px 6px var(--color-pink);
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 26px;
}

.general-text {
  font-family: var(--font-secondary), sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 21px;
  line-height: 1.2;
  color: var(--color-body);
  text-align: center;
}

.container {
  max-width: 988px;
  margin: 0 auto;
}

.container_half {
  max-width: 494px;
}

.header {
  padding: 50px 0 36px;
  position: relative;
}

.subheading {
  font-size: 21px;
  font-style: italic;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  color: var(--color-grey);
  margin: 0;
}

@media all and (max-width: 767px) {
  h1,
  .heading {
    font-size: 32px;
  }

  .subheading {
    font-size: 18px;
  }

  h2,
  .section-heading {
    font-size: 28px;
    margin: 40px 0 20px;
  }

  .page-title {
    font-size: 118px;
    text-shadow: 4px 4px var(--color-pink);
  }

  .header {
    padding: 20px 0 30px;
    overflow: hidden;
  }

}

@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}

@keyframes loadingSpinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
<body>
	<div class="container"></div>

	<script type="module">
		import RibbonMenu from './js/index3.js';
		import categories from './libs/categories/categories.js';

		let ribbon = new RibbonMenu(categories);

		let container = document.querySelector('.container');

		container.append(ribbon.elem);
	</script>
</body>
</html>

*/

/* TASK_12 MONAL_WINDOW */

/* 
Создайте класс Modal, описывающий компонет «Модальное окно». 
Это будет универсальное модальное окно, позволяющее открывать 
себя из внешнего кода, задавать заголовок, содержимое и др.

Основные методы для работы с модальным окном
Для того, чтобы было удобно использовать наше модальное окно, 
нужно реализовать следующие методы:

Метод open()

«Открывает» модальное окно, т.е. добавляет всю его вёрстку в 
body документа. Помимо этого, необходимо добавлять класс is-modal-open 
элементу body.
let modal = new Modal();
modal.open();

Метод setTitle(„modal title“)

Принимает в качестве аргумента переменную с заголовком модального 
окна и записывает её значение внутрь элемента с классом modal__title.
modal.setTitle('Заголовок модального окна');

Метод setBody(node)

Принимает в качестве аргумента корневой HTML того, что мы хотим показать 
в модальном окне, и вставляет его в элемент с классом modal__body. 
Обращаем ваше внимание, всё, что было до этого внутри элемента 
с классом modal__body, должно быть стёрто.

let modalBody = document.createElement('div');
modalBody.innerHTML = `<b>тут содержится тело модального окна<b/>`
modal.setBody(modalBody);

Закрытие модального окна

При закрытии модального окна нужно полностью удалить его вертску со 
страницы и убрать класс is-modal-open с элемента body. 
Всего нужно реализовать три способа закрытия:

Закрытие при вызове метода close()

Это необходимо, чтобы код, который будет использовать компонент 
модального окна, имел возможность его закрыть.
modal.close();

Закрытие по клику по кнопке [X]

Эта кнопка находится в вёрстке модального 
окна и содержит класс modal__close.

Закрытие по нажатию на клавишу ESC

Чтобы это сделать, нужно «слушать» событие keydown на всём документе 
и закрывать модальное окно, если пользователь нажал именно ESC. 
В определении, какая именно клавиша была нажата, вам поможет 
свойство code объекта события. 
Для клавиши ESC в нём будет строка Escape.

event.code === 'Escape'; // true, если была нажата клавиша 'ESC'
*/

// <<<< решение:

/*

Доп. файлы:

index4.js; 
path: './js/index4.js';

create-elements.js;
path: '../libs/lib/create-elements.js';

INDEX.HTML:

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Бангкок Экспресс: Модальное окно</title>

</head>
<style>
.modal {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
  display: block;
}

.is-modal-open {
  overflow: hidden;
}

.modal__overlay {
  height: 100%;
  width: 100%;
  background-color: #918f79;
  opacity: 0.8;
}

.modal__inner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 994px;
  width: 100%;
  background-color: var(--color-black);
  display: flex;
  flex-direction: column;
}

.modal__header {
  position: relative;
  padding: 30px 80px;
}

.modal__body {
  padding: 0 80px 64px;
}

.modal__body-inner {
  background-color: var(--color-black-dark);
  text-align: center;
  padding: 40px 33px;
  font-weight: 700;
  font-size: 21px;
  line-height: 1.2;
  color: var(--color-body);
  font-family: var(--font-primary), sans-serif;
  font-style: italic;
}

.modal__body-inner img {
  max-width: 100%;
  margin-top: 20px;
}

.modal__buttons {
  margin-top: 48px;
  text-align: center;
}

.modal__title {
  font-size: 36px;
  line-height: 1.8;
  font-family: var(--font-secondary), sans-serif;
  font-weight: 400;
  color: var(--color-yellow);
  text-shadow: 3px 3px var(--color-pink);
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}

.modal__close {
  position: absolute;
  top: 24px;
  right: 24px;
  cursor: pointer;
}

.modal__close:hover {
  opacity: 0.8;
}

@media all and (max-width: 767px) {
  .modal__body {
    padding: 0 0 45px;
    flex-grow: 1;
  }

  .modal__inner {
    top: 0;
    left: 0;
    transform: none;
    min-height: 100vh;
  }

  .modal__title {
    font-size: 28px;
    margin: 0;
  }
}
@import "https://fonts.googleapis.com/css?family=Lato:400,400i|Source+Sans+Pro|Sriracha&display=swap";
@import "./button.css";

:root {
  --color-white: #fff;
  --color-black: #1f1e19;
  --color-yellow: #ecd41a;
  --color-yellow-dark: #c8b416;
  --color-pink: #c92086;
  --color-black-light: #6e6a51;
  --color-black-middle: #414036;
  --color-black-dark: #2d2c25;
  --color-grey: #b6b4a2;
  --color-body: var(--color-white);
  --carousel-height: 313px;
  --card-height: 320px;
  --font-primary: "Lato";
  --font-secondary: "Sriracha";
}

html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

body {
  font-family: var(--font-primary), cursive;
  color: var(--color-body);
  font-size: 16px;
  line-height: 1.5;
  background-color: var(--color-black);
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
  outline-width: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body main {
  position: relative;
  z-index: 2;
  padding-bottom: 100px;
}

.text-center {
  text-align: center;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

button {
  box-shadow: none;
  outline: none;
  border: none;
  background-color: transparent;
}

p {
  font-family: var(--font-primary), sans-serif;
  margin: 0;
}

h1,
.heading {
  font-size: 46px;
  line-height: 1.2;
  color: var(--color-yellow);
  text-shadow: 3px 3px var(--color-pink);
  margin: 0;
  text-align: center;
  text-transform: uppercase;
}

.heading.logo {
  font-family: var(--font-secondary), sans-serif;
}

h2,
.section-heading {
  font-family: var(--font-secondary), sans-serif;
  font-size: 36px;
  line-height: 1.2;
  font-weight: 400;
  color: var(--color-yellow);
  text-shadow: 3px 3px var(--color-pink);
  margin: 40px 0 30px;
  text-align: center;
  text-transform: uppercase;
}

.page-title {
  font-size: 230px;
  line-height: 1;
  font-weight: 400;
  color: var(--color-yellow);
  text-shadow: 6px 6px var(--color-pink);
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 26px;
}

.general-text {
  font-family: var(--font-secondary), sans-serif;
  font-style: italic;
  font-weight: 700;
  font-size: 21px;
  line-height: 1.2;
  color: var(--color-body);
  text-align: center;
}

.container {
  max-width: 988px;
  margin: 0 auto;
}

.container_half {
  max-width: 494px;
}

.header {
  padding: 50px 0 36px;
  position: relative;
}

.subheading {
  font-size: 21px;
  font-style: italic;
  font-weight: 500;
  line-height: 1.2;
  text-align: center;
  color: var(--color-grey);
  margin: 0;
}

@media all and (max-width: 767px) {
  h1,
  .heading {
    font-size: 32px;
  }

  .subheading {
    font-size: 18px;
  }

  h2,
  .section-heading {
    font-size: 28px;
    margin: 40px 0 20px;
  }

  .page-title {
    font-size: 118px;
    text-shadow: 4px 4px var(--color-pink);
  }

  .header {
    padding: 20px 0 30px;
    overflow: hidden;
  }

}

@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}

@keyframes loadingSpinner {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}	
</style>

<body>
	<div class="container">
		<button class='button' onclick="openModal()" style="background: white; color: black; padding: 10px">
			Нажми меня, чтоб открыть модальное окно!
		</button>
	</div>
	<script type="module">
		import Modal from './js/index4.js';
		import createElement from './libs/lib/create-elements.js';

		window.openModal = () => {
			let modal = new Modal();
			modal.setTitle('Modal Title');
			modal.setBody(createElement('<div>Тело модального окна</div>'));

			modal.open();
		}
	</script>
</body>

</html>

*/

/* TASK_13 SLIDER_MENU_PART_ONE */

/*
В этой задаче мы создадим слайдер, который меняет свое значение по клику.
А в следующей – добавим возможность «перетягивания» 
бегунка (пока это не нужно).

Cоздайте класс StepSlider, описывающий компонент «Пошаговый слайдер» 
(для простоты будем называть его просто слайдер).

В качестве аргумента в конструктор класса передается объект с двумя свойствами:

let config = {
  steps: 5, // количество шагов слайдера, начинаются с нуля, т.е. шаги в этом случае будут 0-1-2-3-4
  value: 0 // начальное значение, текущий выбранный шаг
}

let stepSlider = new StepSlider(config);

После этого в stepSlider.elem должен быть доступен корневой DOM-элемент слайдера.

Верстка: 
<!--Корневой элемент слайдера-->
<div class="slider">

  <!--Ползунок слайдера с активным значением-->
  <div class="slider__thumb">
    <span class="slider__value">0</span>
  </div>

  <!--Полоска слайдера-->
  <div class="slider__progress"></div>

  <!-- Шаги слайдера (вертикальные чёрточки) -->
  <div class="slider__steps">
    <!-- текущий выбранный шаг выделен этим классом -->
    <span class="slider__step-active"></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

Количество элементов span внутри элемента с классом slider__steps 
должно соответствовать количеству шагов из свойства steps объекта, 
переданного в момент создания слайдера.

В свойстве elem должна оказаться ссылка на корневой 
элемента с классом slider.

Изменение значение слайдера

Диапазон возможных значений слайдера: от 0 до config.steps 
(не включительно), при этом слайдер может принимать только 
конкретные значения шагов, без промежуточных (без дробей).

Давайте разберем это на подробном примере.
Допустим, мы создали слайдер c 5-ю шагами:

let config = {
  steps: 5, // Количество шагов
  value: 0
}
let slider = new StepSlider(config);

Значения должны начинаться с нуля, возможные значения 
слайдера из 5-и шагов – 0, 1, 2, 3, 4.

Дальнейшее объяснение приводится для этих 5-и шагов, но количество 
шагов может быть любым.

Также введем понятие «сегмент слайдера» – промежуток между 
отметками шагов слайдера. Для слайдера с 5-тью шагами, 
сегментов будет 4, т.е. config.steps - 1.

Как визуально менять значение?

Реализуйте изменение значения слайдера при клике по нему.

Вешать обработчик события клик рекомендуется на корневой элемент слайдера с классом slider.

Если клик произошел на каком-то конкретном шаге, например на 2, то мы меняем значение на значение этого шага.
Клик также может быть не ровно на шаге, а между шагами, тогда выбрать нужно тот шаг, 
к которому курсор был ближе в момент клика.

Напомним, что для слайдера из 5-и шагов, значение должно быть из диапазона 0, 1, 2, 3, 4.
После того, как вы определили новое значение слайдера, его нужно отобразить:
1) Записать новое значение внутрь элемента с классом slider__value.
2) Визуально выделить шаг на слайдере, добавив класс slider__step-active 
элементу span внутри элемента с классом slider__steps. Например, 
если значение – 3, то выделить нужно 4-ый по счету span, т.к. 
у нас счет начинается с 0.
3) Поменять положение ползунка (элемент с классом slider__thumb), задав ему left в стилях.
4) Расширить закрашеную область до ползунка (элемент с классом slider__progress) изменив ее ширину.

Ниже приводится примерная реализация для пунктов 3-4
// this.elem - ссылка на корневой элемент слайдера
let thumb = this.elem.querySelector('.slider__thumb');
let progress = this.elem.querySelector('.slider__progress');

let leftPercents = 55; // Значение в процентах от 0 до 100

thumb.style.left = `${leftPercents}%`;
progress.style.width = `${leftPercents}%`;

Обратите внимание, все значения должны быть в %, верстка ориентируется именно на проценты.

Конкретные значения зависят от клика, вычислите их сами.

Генерация пользовательского события

Всякий раз, как значение слайдера меняется, нужно генерировать событие 
slider-change с этим значением на корневом элементе слайдера, вот так:

new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
  detail: this.value, // значение 0, 1, 2, 3, 4
  bubbles: true // событие всплывает - это понадобится в дальнейшем
})

Таким образом внешний код сможет узнавать об изменениях слайдера.

Как перемещать ползунок и получать значение?

Код приведенный ниже следует писать внутри обработчика события click.

Для начала определим расстояние от начала элемента слайдера до места, 
на котором находился курсор в момент клика. Мы будем использовать 
координаты относительно окна. Возьмем координату по горизонтали 
(из свойства clientX объекта события) и вычтем из нее координату крайней 
левой точки слайдера, которую получим с помощью 
метода getBoundingClientRect():

let left = event.clientX - this.elem.getBoundingClientRect().left;
// event - объект события "click"
// this.elem - ссылка на корневой элемент слайдера

В итоге мы получим расстояние в пикселях от начала слайдера до места 
клика. Но нам нужно выбрать значение слайдера 
из дипазона – 0, 1, 2, 3, 4. Поэтому рассчитаем относительное 
значение, взяв за основу ширину слайдера:

let leftRelative = left / this.elem.offsetWidth;

Полученное значение будет в диапазоне от 0 до 1, ведь клик был внутри слайдера.

Как вы помните, нам нужно получить конкретное значение 
слайдера (0, 1, 2, 3, 4). Для этого возьмем полученное значение 
(переменная leftRelative) и умножим его на количество сегментов:

// steps - количество шагов слайдера, для нашего примера - 5
let segments = steps - 1;
let approximateValue = leftRelative * segments;

В итоге вероятнее всего вы получите некое дробное значение, 
например: 1.2345, 3.442 или подобное. При этом оно не будет 
меньше 0 и не больше максимально возможного значения слайдера, 
для нашего примера – это 4. Чтобы получить конкретно значение, 
которое нужно задать слайдеру, округлим дробное значение по 
правилам математики:

let value = Math.round(approximateValue);

Его мы и будем использовать для отображения 
в слайдере, как это требуется выше.

Чтобы получить значение в процентах для перемещения 
ползунка и закрашивания заполненной области, выполним 
обратное преобразование, разделив value на количество 
сегментов и умножив на 100:

let valuePercents = value / segments * 100;
*/

// <<<< решение:

/*
Доп. файлы:

index5.js; 
path: './js/index5.js';

create-elements.js в index5.js;
path: '../libs/lib/create-elements.js';

INDEX.HTML:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Бангкок Экспресс: Пошаговый слайдер часть 1</title>

  <link rel="stylesheet" href="/css/styles/slider_menu.css" />
</head>
<style>
.slider {
  position: relative;
  background-color: var(--color-black-dark);
  margin: 0 16px;
  width: 330px;
  height: 8px;
  border-radius: 3px;
  cursor: pointer;
}

.slider__progress {
  height: 8px;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 1;
  background: linear-gradient(90deg, #f3e273 0%, #dd6428 52%, #d31c34 100%);
  transform: translate(0, -50%);
}

.slider_dragging .slider__thumb {
  cursor: grabbing;
}

.slider__thumb {
  background-color: var(--color-white);
  border-radius: 3px;
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 0;
  margin-left: -10px;
  transform: translate(0, -50%);
  cursor: grab;
}

.slider__value {
  color: var(--color-body);
  font-size: 12px;
  font-weight: 700;
  font-family: var(--font-primary);
  position: absolute;
  left: 0;
  top: calc(100% + 6px);
  text-align: center;
  width: 100%;
  pointer-events: none;
  cursor: default;
}

.slider__steps {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  right: 0;
}

.slider__steps > span {
  background-color: var(--color-black-dark);
  display: inline-flex;
  width: 2px;
  height: 9px;
  margin-left: -1px;
  transition: 0.2s height;
}

.slider__steps > span:first-child,
.slider__steps > span:last-child {
  margin-left: 0;
}

.slider__steps > .slider__step-active {
  background-color: var(--color-black-light);
  height: 14px;
}
</style>
<body>
  <div class="container" id="holder" style="padding: 50px"></div>

  <script type="module">
    import StepSlider from './js/index5.js';

    let stepSlider = new StepSlider({
      steps: 5
    });

    holder.append(stepSlider.elem);

    holder.addEventListener('slider-change', (event) => console.log(event));
  </script>
</body>
</html>

*/

/* TASK_14 SLIDER_MENU_PART_TWO */

/* 
Изменение значения с помощью Drag-and-Drop.

Принцип работы Drag-and-Drop:
1) Пользователь наводит курсор мыши на ползунок слайдера и кликает по нему.
2) Зажав кнопку мыши он перемещает ползунок влево или вправо. 
Ползунок перемещается по слайдеру, следуя за курсором.
3) Пользователь отпускает кнопку мыши в любом месте слайдера.
4) Ползунок перемещается на ближайший шаг слайдера.

Небольшое отличие этой задачи от описанной в статье в том, что мы будем использовать 
Pointer Events вместо событий мыши. Pointer Events – это более универсальные и 
современные аналоги, которые срабатывают не только для мыши, но и других устройств ввода, 
например, стилуса на сенсорных экранах. В контексте алгоритма Drag-and-Drop из статьи, 
мы просто заменим события мыши на аналогичные:

1) событию mousedown соответствует событие pointerdown;
2) событию mousemove соответствует событие pointermove;
3) событию mouseup соответствует событие pointerup;

В остальном для нашей задачи они работают точно также как события мыши.

Напоминаем, что для корректной работы нужно «выключить» встроенный браузерный Drag-and-Drop 
для элемента с классом slider__thumb:

// this.elem - ссылка на корневой элемент слайдера
let thumb = this.elem.querySelector('.slider__thumb');

thumb.ondragstart = () => false;

Также для устройств с сенсорными экранами, нужно предотвращать действия браузера по умолчанию 
для событий pointerdown и pointermove.

Требования к реализации

1) Элемент для перетаскивания (ползунок) имеет класс – slider__thumb.
2) После начала перетаскивания ползунка, корневому элементу слайдера нужно добавить класс slider_dragging. 
После окончания перетаскивания этот класс должен быть удален.
3) Технически перемещать ползунок нужно точно также, как в предыдущей задаче:

// this.elem - ссылка на корневой элемент слайдера
let thumb = this.elem.querySelector('.slider__thumb');
let progress = this.elem.querySelector('.slider__progress');

let leftPercents = 55; // Значение в процентах от 0 до 100

thumb.style.left = `${leftPercents}%`;
progress.style.width = `${leftPercents}%`;

4) Ползунок нужно перемещать, даже если во время перетаскивания пользователь увел 
курсор со слайдера. Подумайте, куда именно нужно повесить обработчик для отслеживания перемещений.
5) По мере перемещения ползунка по слайдеру, нам нужно выбирать конкретные значение шага из доступного 
диапазона (0, 1, 2, 3, 4). Если ползунок находится между какими-то двумя значениями (шагами), 
то выбрать нужно тот шаг, к которому курсор мыши находится ближе.

Выбранное значение необходимо отображать динамически во время перемещения:

1) Отобразить выбранное значение в верстке, записав его внутрь элемента с классом slider__value.
2) Визуально выделить шаг на слайдере, добавив класс slider__step-active элементу span внутри 
элемента с классом slider__steps. Например, если значение – 3, 
то выделить нужно 4-ый по счету span, т.к. у нас счет начинается с 0.

Генерация пользовательского события

После того как пользователь отпускает кнопку мыши, и выбрано новое значение слайдера, 
нам нужно сгенерировать событие slider-change с новым значением на корневом элементе слайдера, 
так же как и в предыдущей задаче:

new CustomEvent('slider-change', { // имя события должно быть именно 'slider-change'
  detail: this.value, // значение 0, 1, 2, 3, 4
  bubbles: true // событие всплывает - это понадобится в дальнейшем
})

Как перемещать ползунок и получать значение?

Код приведенный ниже следует писать внутри обработчика события pointermove.

Для начала определим расстояние от начала элемента слайдера до места, на котором находился 
курсор в момент клика. Мы будем использовать координаты относительно окна. 
Возьмем координату по горизонтали (из свойства clientX объекта события) и вычтем из нее 
координату крайней левой точки слайдера, которую получим с помощью метода getBoundingClientRect():

let left = event.clientX - this.elem.getBoundingClientRect().left;
// event - объект события "pointermove"
// this.elem - ссылка на корневой элемент слайдера

Для получения значения в процентах относительно всего слайдера, разделим предыдущее 
значение на ширину слайдера и умножим на 100. При этом нужно не забыть, что значение в 
процентах должно быть в пределах от 0 до 100:

let left = event.clientX - this.elem.getBoundingClientRect().left;
let leftRelative = left / this.elem.offsetWidth;

if (leftRelative < 0) {
  leftRelative = 0;
}

if (leftRelative > 1) {
  leftRelative = 1;
}

let leftPercents = leftRelative * 100;

Полученное значение в процентах используем для перемещения 
ползунка и «закрашивания» области до него:

// this.elem - ссылка на корневой элемент слайдера
let thumb = this.elem.querySelector('.slider__thumb');
let progress = this.elem.querySelector('.slider__progress');

thumb.style.left = `${leftPercents}%`;
progress.style.width = `${leftPercents}%`;

Итак, мы переместили ползунок, в тоже время нам нужно получить конкретное значение 
слайдера (0, 1, 2, 3, 4). Для этого возьмем промежуточное относительное значение 
из вычислений выше (переменная leftRelative) и умножим его на количество сегментов:

// steps - количество шагов слайдера, для нашего примера - 5
let segments = steps - 1;
let approximateValue = leftRelative * segments;

В итоге вероятнее всего вы получите некое дробное значение, например: 1.2345, 3.442 или подобное. 
При этом оно не будет меньше 0 и не больше максимально возможного значения слайдера, 
для нашего примера – это 4. Чтобы получить конкретно значение, которое нужно задать слайдеру, 
округлим дробное значение по правилам математики:

let value = Math.round(approximateValue);
Его мы и будем использовать для отображения в слайдере, как это требуется выше.
*/

// <<<< решение:

/*

Доп. файлы:

index6.js; 
path: './js/index6.js';

create-elements.js - в index6.js;
path: '../libs/lib/create-elements.js';

INDEX.HTML:

<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Бангкок Экспресс: Пошаговый слайдер часть 2</title>

  <link rel="stylesheet" href="/css/styles/slider_menu.css" />
</head>
<style>
.slider {
  position: relative;
  background-color: var(--color-black-dark);
  margin: 0 16px;
  width: 330px;
  height: 8px;
  border-radius: 3px;
  cursor: pointer;
}

.slider__progress {
  height: 8px;
  border-radius: 3px;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  z-index: 1;
  background: linear-gradient(90deg, #f3e273 0%, #dd6428 52%, #d31c34 100%);
  transform: translate(0, -50%);
}

.slider_dragging .slider__thumb {
  cursor: grabbing;
}

.slider__thumb {
  background-color: var(--color-white);
  border-radius: 3px;
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 0;
  margin-left: -10px;
  transform: translate(0, -50%);
  cursor: grab;
}

.slider__value {
  color: var(--color-body);
  font-size: 12px;
  font-weight: 700;
  font-family: var(--font-primary);
  position: absolute;
  left: 0;
  top: calc(100% + 6px);
  text-align: center;
  width: 100%;
  pointer-events: none;
  cursor: default;
}

.slider__steps {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  right: 0;
}

.slider__steps > span {
  background-color: var(--color-black-dark);
  display: inline-flex;
  width: 2px;
  height: 9px;
  margin-left: -1px;
  transition: 0.2s height;
}

.slider__steps > span:first-child,
.slider__steps > span:last-child {
  margin-left: 0;
}

.slider__steps > .slider__step-active {
  background-color: var(--color-black-light);
  height: 14px;
}
</style>

<body>
  <div class="container" id="holder" style="padding: 50px;">
  </div>

  <script type="module">
    import StepSlider from './js/index6.js';

    let stepSlider = new StepSlider({
      steps: 5
    });

    holder.append(stepSlider.elem);

    holder.addEventListener('slider-change', (event) => console.log(event));
  </script>
</body>

</html>

*/


/* << Взаимодействие с сервером >> */

/* TASK_1 */

/*
Добавьте пункт к выпадающему списку

Имеется <select>:
<select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>Блюз</option>
</select>

Используя JavaScript:

1) Выведите значение и текст выбранного пункта.
2) Добавьте пункт: <option value="classic">Классика</option>.
3) Сделайте его выбранным.

*/

// <<<< решение:

/*
<body class="is_home">
	<select id="genres">
		<option value="rock">Рок</option>
		<option value="blues" selected>Блюз</option>
	</select>

	<script>
		// 1)
		let selectedOption = genres.options[genres.selectedIndex];
		alert( selectedOption.value );
		alert( selectedOption.text );

		// 2) 
		let newOption = new Option("Классика", "classic");
		genres.append(newOption);

		// 3) 
		newOption.selected = true;
	</script>

</body>
*/


/* TASK_2 */

/*
Редактируемый div

Создайте <div>, который превращается в <textarea>, если на него кликнуть.

<textarea> позволяет редактировать HTML в элементе <div>.

Когда пользователь нажимает Enter или переводит фокус, <textarea> 
превращается обратно в <div>, и его содержимое становится HTML-кодом 
в <div>.
*/

// <<<< решение:

/*
<style>
.view,
.edit {
  height: 150px;
  width: 400px;
  font-family: sans-serif;
  font-size: 14px;
  display: block;
}

.view {
  //padding + border = 3px 
  padding: 2px;
  border: 1px solid black;
}

.edit {
  // замена внутреннего отступа рамкой (по-прежнему 3px, и содержимое не смещается) 
  border: 3px solid blue;
  padding: 0px;
}

.edit:focus {
  // удаление обводки фокуса в Safari 
  outline: none;
}
</style>
<body>

  <ul>
    <li>Кликните на div ниже, чтобы отредактировать текст.</li>
    <li>Нажатие на Enter или потеря фокуса с ввода сохранят содержимое.</li>
  </ul>

  HTML-код разрешён.

  <div id="view" class="view">Текст</div>

  <script>
    // Заметьте: <textarea> должен иметь class="edit"
    // my.css содержит стиль, чтобы <textarea> и <div> были одного размера
	
	let area = null;
	let view = document.getElementById('view');

	view.onclick = function() {
		editStart();
	};

	function editStart() {
		area = document.createElement('textarea');
		area.className = 'edit';
		area.value = view.innerHTML;

		area.onkeydown = function(event) {
			if (event.key == 'Enter') {
				this.blur();
			}
		};

		area.onblur = function() {
			editEnd();
		};

		view.replaceWith(area);
		area.focus();
	}

	function editEnd() {
		view.innerHTML = area.value;
		area.replaceWith(view);
	}
  </script>

</body>
*/


/* TASK_3 */

/*
Редактирование TD по клику

Сделайте ячейки таблицы редактируемыми по клику.

По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), 
мы можем изменять HTML. Изменение размера ячейки должно быть отключено.

Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, 
завершают/отменяют редактирование.

Только одну ячейку можно редактировать за один раз. Пока <td> в 
«режиме редактирования», клики по другим ячейкам игнорируются.

Таблица может иметь множество ячеек. Используйте делегирование событий.

1) По клику – заменить innerHTML ячейки на <textarea> с теми же размерами и без рамки. 
Можно использовать JavaScript или CSS, чтобы установить правильный размер.

2) Присвоить textarea.value значение td.innerHTML.

3) Установить фокус на текстовую область.

4) Показать кнопки ОК/ОТМЕНА под ячейкой, обрабатывать клики по ним.
*/

// <<<< решение:

/*
<style>
// общие стили для таблицы, изменять их не нужно 

th {
text-align: center;
font-weight: bold;
}

td {
width: 150px;
white-space: nowrap;
text-align: center;
vertical-align: middle;
padding: 10px;
}

.nw {
background-color: #999;
}

.n {
background-color: #03f;
color: #fff;
}

.ne {
background-color: #ff6;
}

.w {
background-color: #ff0;
}

.c {
background-color: #60c;
color: #fff;
}

.e {
background-color: #09f;
color: #fff;
}

.sw {
background-color: #963;
color: #fff;
}

.s {
background-color: #f60;
color: #fff;
}

.se {
background-color: #0c3;
color: #fff;
}
// add css 
.edit-td .edit-area {
border: none;
margin: 0;
padding: 0;
display: block;

// отключаем изменение размера мышью в Firefox 
resize: none;

// удаляем обводку при фокусировке в Chrome 
outline: none;

// удаляем полосу прокрутки в IE 
overflow: auto;
}

.edit-controls {
position: absolute;
}

.edit-td {
position: relative;
padding: 0;
}
</style>

<p>Кликните на ячейку таблицы, чтобы отредактировать её. Нажмите ОК или ОТМЕНА, когда закончите.</p>

<table id="bagua-table">
	<tr>
	<th colspan="3">Квадрат <em>Bagua</em>: Направление, Элемент, Цвет, Значение</th>
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
		<br>Зеленый
		<br>Роман
	</td>
	</tr>

</table>

<script>
	let table = document.getElementById('bagua-table');

	let editingTd;

	table.onclick = function(event) {

		// 3 возможных цели
		let target = event.target.closest('.edit-cancel, .edit-ok,td');

		if (!table.contains(target)) return;

		if (target.className == 'edit-cancel') {
			finishTdEdit(editingTd.elem, false);
		}	else if (target.className == 'edit-ok') {
			finishTdEdit(editingTd.elem, true);
		}	else if (target.nodeName == 'TD') {
			if (editingTd) return; // уже редактируется

			makeTdEdittable(target);
		}
	};

	function makeTdEdittable(td) {
		editingTd = {
			elem: td,
			data: td.innerHTML
		};

		td.classList.add('edit-td'); // td в состоянии редактирования, CSS применятся к textarea внутри ячейки

		let textArea = document.createElement('textarea');
		textArea.style.width = td.clientWidth + 'px';
		textArea.style.height = td.clientHeight + 'px';
		textArea.className = 'edit-area';

		textArea.value = td.innerHTML;
		td.innerHTML = '';
		td.appendChild(textArea);
		textArea.focus();

		td.insertAdjacentHTML("beforeEnd",
			'<div class="edit-controls"><button class="edit-ok">OK</button><button class="edit-cancel">CANCEL</button></div>'
		);
	}

	function finishTdEdit(td, isOk) {
		if (isOk) {
			td.innerHTML = td.firstChild.value;
		}	else {
			td.innerHTML = editingTd.data;
		}
		td.classList.remove('edit-td');
		editingTd = null;
	}
</script>

</body>

</html>
*/


/* TASK_4 */

/*
Мышь, управляемая клавиатурой

Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать

P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.

Мы можем использовать mouse.onclick для обработки клика и сделать мышь «перемещаемой» 
с помощью position:fixed, а затем использовать mouse.onkeydown для обработки клавиш со стрелками.

нная проблема в том, что keydown срабатывает только на элементах с фокусом. 
И нам нужно добавить tabindex к элементу. Так как изменять HTML запрещено, 
то для этого мы можем использовать свойство mouse.tabIndex.

P.S. Мы также можем заменить mouse.onclick на mouse.onfocus.
*/

// <<<< решение:

/*
<!DOCTYPE HTML>
<html>

<head>
  <meta charset="utf-8">
  <style>
    #mouse {
      display: inline-block;
      cursor: pointer;
      margin: 0;
    }

    #mouse:focus {
      outline: 1px dashed black;
    }
  </style>
</head>

<body>

  <p>Кликните по "изображению" мыши и перемещайте её с помощью клавиш со стрелками.</p>

  <pre id="mouse">
 _   _
(q\_/p)
 /. .\
=\_t_/=   __
 /   \   (
((   ))   )
/\) (/\  /
\  Y  /-'
 nn^nn
</pre>


  <script>
    mouse.tabIndex = 0;

	mouse.onclick = function() {
		this.style.left = this.getBoundingClientRect().left + 'px';
		this.style.top = this.getBoundingClientRect().top + 'px';

		this.style.position = 'fixed';
	};

	mouse.onkeydown = function(e) {
		switch (e.key) {
			case 'ArrowLeft':
				this.style.left = parseInt(this.style.left) - this.offsetWidth + 'px';
				return false;
			case 'ArrowUp':
				this.style.top = parseInt(this.style.top) - this.offsetHeight + 'px';
				return false;
			case 'ArrowRight':
				this.style.left = parseInt(this.style.left) + this.offsetWidth + 'px';
				return false;
			case 'ArrowDown':
				this.style.top = parseInt(this.style.top) + this.offsetHeight + 'px';
				return false;
		}
	};
  </script>

</body>

</html>
*/


/* TASK_5 */

/*
Депозитный калькулятор

Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент, 
а затем рассчитать, какая это будет сумма через заданный промежуток времени.

Любое изменение введённых данных должно быть обработано немедленно.

Формула:

// initial: начальная сумма денег
// interest: проценты, например, 0.05 означает 5% в год
// years: сколько лет ждать
let result = Math.round(initial * (1 + interest) ** years);


*/

// <<<< решение:

/*
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <style>
    td select,
    td input {
      width: 150px;
    }

    #diagram td {
      vertical-align: bottom;
      text-align: center;
      padding: 10px;
    }

    #diagram div {
      margin: auto;
    }
  </style>
</head>

<body>

  Депозитный калькулятор.

  <form name="calculator">
    <table>
      <tr>
        <td>Первоначальный депозит</td>
        <td>
          <input name="money" type="number" value="10000" required>
        </td>
      </tr>
      <tr>
        <td>Срок вклада?</td>
        <td>
          <select name="months">
            <option value="3">3 (минимум)</option>
            <option value="6">6 (полгода)</option>
            <option value="12" selected>12 (год)</option>
            <option value="18">18 (1.5 года)</option>
            <option value="24">24 (2 года)</option>
            <option value="30">30 (2.5 года)</option>
            <option value="36">36 (3 года)</option>
            <option value="60">60 (5 лет)</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>Годовая процентная ставка?</td>
        <td>
          <input name="interest" type="number" value="5" required>
        </td>
      </tr>
    </table>

  </form>

  <table id="diagram">
    <tr>
      <th>Было:</th>
      <th>Станет:</th>
    </tr>
    <tr>
      <th id="money-before"></th>
      <th id="money-after"></th>
    </tr>
    <td>
      <div style="background: red;width:40px;height:100px"></div>
    </td>
    <td>
      <div style="background: green;width:40px;height:0" id="height-after"></div>
    </td>
  </table>

  <script>

    let form = document.forms.calculator;

    form.money.oninput = calculate;
	form.months.onchange = calculate;
	form.interest.oninput = calculate;

	function calculate() {
		let initial = +form.money.value;
		if (!initial) return;

		let interest = form.interest.value * 0.01;

		if (!interest) return;
		
		let years = form.months.value / 12;
		if (!years) return;

		let result = Math.round(initial * (1 + interest) ** years);

		let height = result / form.money.value * 100 + 'px';
		document.getElementById('height-after').style.height = height;
		document.getElementById('money-before').innerHTML = form.money.value;
		document.getElementById('money-after').innerHTML = result;
	}

	calculate();
  </script>

</body>
</html>
*/


/* TASK_6 */

/*
Модальное диалоговое окно с формой

Создайте функцию showPrompt(html, callback), которая 
выводит форму с сообщением (html), полем ввода и кнопками OK/ОТМЕНА.

Пользователь должен ввести что-то в текстовое поле и нажать Enter или 
кнопку «OK», после чего должна вызываться функция callback(value) со значением поля.
Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).
В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.

Требования:
1) Форма должна быть в центре окна.
2) Форма является модальным окном, это значит, что никакое взаимодействие 
с остальной частью страницы невозможно, пока пользователь не закроет его.
3) При показе формы, фокус должен находиться сразу внутри <input>.
4) Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, 
не позволяя ему переходить к другим элементам страницы.

Пример использования:
showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
  alert(value);
});

Модальное окно может быть реализовано с помощью полупрозрачного 
<div id="cover-div">, который полностью перекрывает всё окно:

#cover-div {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  width: 100%;
  height: 100%;
  background-color: gray;
  opacity: 0.3;
}

Так как он перекрывает вообще всё, все клики будут именно по этому <div>.

Также возможно предотвратить прокрутку страницы, 
установив body.style.overflowY='hidden'.

Форма должна быть не внутри <div>, а после него, чтобы 
она не унаследовала полупрозрачность (opacity).
*/

// <<<< решение:


/*
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
</head>
<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#prompt-form {
  display: inline-block;
  padding: 5px 5px 5px 70px;
  width: 200px;
  border: 1px solid black;
  background: white url(https://en.js.cx/clipart/prompt.png) no-repeat left 5px;
  vertical-align: middle;
}

#prompt-form-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: none;
  width: 100%;
  height: 100%;
  text-align: center;
}

#prompt-form-container:before {
  display: inline-block;
  height: 100%;
  content: '';
  vertical-align: middle;
}

#cover-div {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9000;
  width: 100%;
  height: 100%;
  background-color: gray;
  opacity: 0.3;
}

#prompt-form input[name="text"] {
  display: block;
  margin: 5px;
  width: 180px;
}
</style>
<body style="height:3000px">

	<h2>Кликните на кнопку ниже</h2>
  
	<input type="button" value="Кликните, чтобы увидеть форму" id="show-button">

  <div id="prompt-form-container">
    <form id="prompt-form">
      <div id="prompt-message">Введите что-нибудь...
        <br>Пожалуйста..</div>
      <input name="text" type="text">
      <input type="submit" value="Ok">
      <input type="button" name="cancel" value="Отмена">
    </form>
  </div>

  <script>
	// Показать полупрозрачный DIV, чтобы затенить страницу
    // (форма располагается не внутри него, а рядом, потому что она не должна быть полупрозрачной)
	function showCover() {
		let coverDiv = document.createElement('div');
		coverDiv.id = 'cover-div';

		// убираем возможность прокрутки страницы во время показа модального окна с формой
		document.body.style.overflowY = 'hidden';

		document.body.append(coverDiv);
	}

	function hideCover() {
		document.getElementById('cover-div').remove();
		document.body.style.overflowY = ''
	}

	function showPrompt(text, callback) {
		showCover();
		let form = document.getElementById('prompt-form');
		let container = document.getElementById('prompt-form-container');
		document.getElementById('prompt-message').innerHTML = text;
		form.text.value = '';

		function complete(value) {
			hideCover();
			container.style.display = 'none';
			document.onkeydown = null;
			callback(value);
		}

		form.onsubmit = function() {
			let value = form.text.value;
			if (value == '') return false; // игнорируем отправку пустой формы

			complete(value);
			return false;
		}

		form.cancel.onclick = function() {
			complete(null);
		};

		document.onkeydown = function(e) {
			if (e.key == 'Escape') {
				complete(null);
			}
		};

		let lastElem = form.elements[form.elements.length - 1];
		let firstElem = form.elements[0];

		lastElem.onkeydown = function(e) {
			if (e.key == 'Tab' && !e.shiftKey) {
				firstElem.focus();
				return false;
			}
		};

		firstElem.onkeydown = function(e) {
			if (e.key == 'Tab' && e.shiftKey) {
				lastElem.focus();
				return false;
			}
		};

		container.style.display = 'block';
		form.elements.text.focus();
	}

	document.getElementById('show-button').onclick = function() {
		showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
			alert("Вы ввели: " + value);
		});
	};
  </script>

</body>

</html>
*/


/* TASK_7 */

/*
Получите данные о пользователях GitHub

Создайте асинхронную функцию getUsers(names), которая получает на вход массив 
логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает 
массив объектов-пользователей.

Информация о пользователе GitHub с логином USERNAME доступна 
по ссылке: https://api.github.com/users/USERNAME.

Важные детали:

1) На каждого пользователя должен приходиться один запрос fetch.
2) Запросы не должны ожидать завершения друг друга. Надо, 
чтобы данные приходили как можно быстрее.
3) Если какой-то запрос завершается ошибкой или оказалось, что данных о 
запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.

Чтобы получить сведения о пользователе, 
нам нужно вызвать fetch('https://api.github.com/users/USERNAME').

Если ответ приходит cо статусом 200, то вызываем метод .json(), чтобы прочитать JS-объект.

А если запрос завершается ошибкой или код статуса в ответе отличен от 200, 
то мы просто возвращаем null в массиве результатов.

Код:

async function getUsers(names) {
  let jobs = [];

  for(let name of names) {
    let job = fetch(`https://api.github.com/users/${name}`).then(
      successResponse => {
        if (successResponse.status != 200) {
          return null;
        } else {
          return successResponse.json();
        }
      },
      failResponse => {
        return null;
      }
    );
    jobs.push(job);
  }

  let results = await Promise.all(jobs);

  return results;
}

Пожалуйста, обратите внимание: вызов .then прикреплён к fetch, чтобы, 
когда ответ получен, сразу начинать считывание данных с помощью .json(), 
не дожидаясь завершения других запросов.

Если бы мы использовали await Promise.all(names.map(name => fetch(...))) 
и вызывали бы .json() на результатах запросов, то пришлось бы ждать, 
пока завершатся все из них.

Вызывая .json() сразу после каждого fetch, мы добились того, что считывание 
присланных по каждому запросу данных происходит независимо от других запросов.

Это пример того, как относительно низкоуровневое Promise API может быть полезным, 
даже если мы в основном используем async/await в коде.
*/

// <<<< решение:

/*
Доп. файлы:

fetch.js; 
path: '../js/fetch.js';

HTML:

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Fetch</title>
</head>
<body>
	<script src="https://ru.js.cx/test/libs.js"></script>
	<script src="../js/fetch.js"></script>
<script>

  async function getUsers(names) {
    let jobs = [];

	for(let name of names) {
		let job = fetch(`https://api.github.com/users/${name}`).then(
			successResponse => {
				if (successResponse.status != 200) {
					return null;
				} else {
					return successResponse.json();
				}
			},
			failResponse => {
				return null;
			}
		);
		jobs.push(job);
	}

	let results = await Promise.all(jobs);

	return results;
  }

</script>
</body>
</html>
*/


/* TASK_8 */

/*
Задержка на промисах

Встроенная функция setTimeout использует колбэк-функции. 
Создайте альтернативу, использующую промисы.

Функция delay(ms) должна возвращать промис, который перейдёт 
в состояние «выполнен» через ms миллисекунд, так чтобы 
мы могли добавить к нему .then:

function delay(ms) {
  // ваш код
}

delay(3000).then(() => alert('выполнилось через 3 секунды'));

Заметьте, что resolve вызывается без аргументов. 
Мы не возвращаем из delay ничего, просто гарантируем задержку.
*/

// <<<< решение:

/*
<script>
	function delay(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	delay(3000).then(() => alert('выполнилось через 3 секунды'));
</script>
*/

/* TASK_9 */

/*
Анимированный круг

Напишите функцию showCircle(cx, cy, radius), которая 
будет рисовать постепенно растущий круг.

cx,cy – координаты центра круга относительно окна браузера,
radius – радиус круга.
*/

// <<<< решение:

/*
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <style>
    .circle {
      transition-property: width, height;
      transition-duration: 2s;
      position: fixed;
      transform: translateX(-50%) translateY(-50%);
      background-color: red;
      border-radius: 50%;
    }
  </style>
</head>

<body>

	<button onclick=" showCircle(150, 150, 100)">showCircle(150, 150, 100)</button>

	<script>
		function showCircle(cx, cy, radius, callback) {
			let div = document.createElement('div');
			div.style.width = 0;
			div.style.height = 0;
			div.style.left = cx + 'px';
			div.style.top = cy + 'px';
			div.className = 'circle';
			document.body.append(div);

			setTimeout(() => {
				div.style.width = radius * 2 + 'px';
				div.style.height = radius * 2 + 'px';

			}, 0);
		}
	</script>
</body>
</html>
*/

/* TASK_10 */

/*
Анимация круга с помощью колбэка

В задаче Анимированный круг(task_9) показывается анимированный 
растущий круг.

Теперь предположим, что нам нужен не просто круг, а чтобы в нём 
было ещё и сообщение. Сообщение должно появиться после завершения 
анимации (круг полностью вырос), в противном случае это будет 
выглядеть некрасиво.

В решении задачи функция showCircle(cx, cy, radius) рисует окружность, 
но не даёт возможности отследить, когда она будет готова.

В аргументы добавьте колбэк: showCircle(cx, cy, radius, callback) 
который будет вызываться по завершении анимации. Колбэк в качестве 
аргумента должен получить круг <div>.

Вот пример:

showCircle(150, 150, 100, div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});
*/

// <<<< решение:

/*
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <style>
	.message-ball {
      font-size: 20px;
      line-height: 200px;
      text-align: center;
    }
    .circle {
      transition-property: width, height;
      transition-duration: 2s;
      position: fixed;
      transform: translateX(-50%) translateY(-50%);
      background-color: red;
      border-radius: 50%;
    }
  </style>
</head>

<body>

	<button onclick="go()">Нажми на меня</button>

	<script>

		function go() {
			showCircle(150, 150, 100, div => {
				div.classList.add('message-ball');
				div.append("Привет, мир!")
			});
		}

		function showCircle(cx, cy, radius, callback) {
			let div = document.createElement('div');
			div.style.width = 0;
			div.style.height = 0;
			div.style.left = cx + 'px';
			div.style.top = cy + 'px';
			div.className = 'circle';
			document.body.append(div);

			setTimeout(() => {
				div.style.width = radius * 2 + 'px';
				div.style.height = radius * 2 + 'px';

				div.addEventListener('transitionend', function handler() {
					div.removeEventListener('transitionend', handler);
					callback(div);
				});
			}, 0);
		}
	</script>
</body>
</html>
*/


/* TASK_11 */

/*
Анимация круга с помощью промиса

Перепишите функцию showCircle, написанную в задании Анимация круга с 
помощью колбэка (TASK_11) таким образом, чтобы она возвращала промис, вместо 
того чтобы принимать в аргументы функцию-callback.

Новое использование:

showCircle(150, 150, 100).then(div => {
  div.classList.add('message-ball');
  div.append("Hello, world!");
});

Возьмите решение из Анимация круга с помощью колбэка в качестве основы (TASK_11).
*/

// <<<< решение:

/*
<script>
	function go() {
		showCircle(150, 150, 100).then(div => {
			div.classList.add('message-ball');
			div.append("hello, world");
		});
	}

	function showCircle(cx, cy, radius) {
		let div = document.createElement('div');
		div.style.width = 0;
		div.style.height = 0;
		div.style.left = cx + 'px';
		div.style.top = cy + 'px';
		div.className = 'circle';
		document.body.append(div);

		return new Promise(resolve => {
			setTimeout(() => {
				div.style.width = radius * 2 + 'px';
				div.style.height = radius * 2 + 'px';

				div.addEventListener('transitionend', function handler() {
					div.removeEventListener('transitionend', handler);
					resolve(div);
				});
			}, 0);
		})
	}
</script>
*/


/* TASK_12 */

/*
Преобразуйте объект в JSON, а затем обратно в обычный объект

Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user = {
  name: "Василий Иванович",
  age: 35
};
*/

// <<<< решение:

/*
<script>
	let user = {
		name: "Василий Иванович",
		age: 35 
	};

	let user2 = JSON.parse(JSON.stringify(user));
	alert(user2);
</script>
*/

/* TASK_13 */

/*
Исключить обратные ссылки

В простых случаях циклических ссылок мы можем исключить свойство, 
из-за которого они возникают, из сериализации по его имени.

Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, 
свойства с этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.

Напишите функцию replacer для JSON-преобразования, которая удалит свойства, ссылающиеся на meetup:

let room = {
  number: 23
};

let meetup = {
  title: "Совещание",
  occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
  place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
  // ваш код 
}));

// в результате должно быть:
// {
// 	"title":"Совещание",
// 	"occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
// 	"place":{"number":23}
// }

Здесь нам также нужно проверить key =="", чтобы исключить первый вызов, 
где значение value равно meetup.
*/

// <<<< решение:

/*
<script>
	let room = {
		number: 23
	};

	let meetup = {
		title: "Совещание",
		occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
		place: room
	};

	room.occupiedBy = meetup;
	meetup.self = meetup;

	alert( JSON.stringify(meetup, function replacer(key, value){
		return (key !="" && value == meetup) ? undefined : value;
	}));

	
	//{
	//	"title":"Совещание",
	//	"occupiedBy": [{"name":"Иванов"},{"name":"Петров"}],
	//	"place":{"number":23}
	//}

</script>
*/


/* Task_14  BASKET_ICON */

/*
Иконка корзины
«Корзина» – компонент интерфейса онлайн магазина или ресторана, в 
который пользователи добавляют товары для заказа.

В нашем проекте она состоит из двух частей, первая – это компонент «Иконка корзины». 
Она появляется на странице, когда пользователь добавляет 
хотя бы один товар в корзину, и исчезает, когда все товары удаляются.

нужно будет добавить её позиционирование при прокрутке, чтобы иконка корзины всегда была видима.

Исходный файл index.js:

import createElement from '../../assets/lib/create-element.js';

export default class CartIcon {
  constructor() {
    this.render();

    this.addEventListeners();
  }

  // Отрисовать пустую иконку корзины
  render() {
    this.elem = createElement('<div class="cart-icon"></div>');
  }

  // Заполнить её данными из объекта cart (объяснено ниже)
  update(cart) {
    if (!cart.isEmpty()) {
      this.elem.classList.add('cart-icon_visible');

      this.elem.innerHTML = `
        <div class="cart-icon__inner">
          <span class="cart-icon__count">${cart.getTotalCount()}</span>
          <span class="cart-icon__price">€${cart.getTotalPrice().toFixed(2)}</span>
        </div>`;

      this.updatePosition();

      this.elem.classList.add('shake');
      this.elem.addEventListener('transitionend', () => {
        this.elem.classList.remove('shake');
      }, {once: true});

    } else {
      this.elem.classList.remove('cart-icon_visible');
    }
  }

  addEventListeners() {
    document.addEventListener('scroll', () => this.updatePosition());
    window.addEventListener('resize', () => this.updatePosition());
  }

  // позиционировать иконку корзины на экране
  updatePosition() {
    // ваш код ...
  }
}

Использование иконки корзины:

// создаём иконку
let cartIcon = new CartIcon();

// добавляем на страницу
document.body.append(cartIcon.elem);

// обновляем данными из объекта корзины
cartIcon.update(cart);

Давайте внимательно посмотрим на метод update(cart).

Метод update(cart)

Иконка корзины занимается тем, что красиво отображает 
справа-сверху количество товаров и их общую стоимость.

Сами данные находятся в объекте корзины cart.

У него есть три метода:

let cart = {
  isEmpty() {
    // возвращает true если корзина пуста и false если нет
  },

  getTotalCount() {
    // Возвращает общее количество товаров в корзине
  },

  getTotalPrice() {
    // Возвращает общую сумму всех товаров в корзине
  }
}

Если в корзине меняется количество товаров, внешний код сначала обновляет их 
количество в объекте cart таким образом, что методы isEmpty, getTotalCount, getTotalPrice 
начинают возвращать новые значения. После чего вызывает метод cartIcon.update(cart), 
который вносит изменения в отображение иконки корзины:

Реальный объект cart мы сделаем чуть позже, в файле index.html вы можете увидеть 
упрощённый пример такого объекта корзины.

Метод updatePosition()

Реализуйте метод updatePosition(), который будет перемещать иконку корзины вниз и, 
таким образом, делать её видимой, когда пользователь прокручивает страницу.

В коде CartIcon, который уже есть, этот метод уже вызывается в методе update и в 
обработчиках событий scroll и resize (они добавляются в методе addEventListeners).

Требования к перемещению:

Иконка корзины видима только если в корзине есть товары. Изначально она находится 
сверху-справа страницы.

Перед тем, как начать перемещение, нужно обязательно убедиться, что иконка корзины видима на 
странице. Это можно сделать, например, проверив метрики offsetHeight или offsetWidth 
корневого элемента. 

Начинать перемещение иконки корзины нужно сразу, как только при прокрутке 
верхний край иконки ушёл за пределы экрана.

По вертикали:
-иконка корзины должна отстоять на 50px от верхнего края экрана.

По горизонтали иконка должна:
-отстоять на 20px справа от первого элемент в документе с классом container.
-при этом она должна быть не ближе 10px от правого края окна

Если ширина окна браузера меньше или равна 767px, то перемещать иконку корзины не нужно вовсе. 
Это связанно с тем, что на такой ширине у нас используются другие «мобильные» стили. 
Вы сами можете в этом убедиться в консоли разработчика.

Как технически устроено перемещение иконки?

Основная идея перемещение иконки корзины на странице в том, что если пользователь докрутил 
страницу до верхнего край иконки корзины, задавать ей 
фиксированное позиционирование (position: fixed;)

Отслеживание момента начала перемещения

Изначально иконка позиционирована при помощи position: absolute. 
Менять позиционирование на fixed и двигать нужно только, когда край иконки зашёл за границу окна. 
А когда страница обратно прокручена вверх, то нужно вернуть корзину «как было».

Для этого запомним начальную координату верхней границы корзины. Она будет точкой отсчёта: 
когда страница прокручена ниже – будет плавающая корзина с fixed, а когда выше – 
обычное позиционирование absolute:

// текущая Y-координата относительно окна + текущая прокрутка
let initialTopCoord = this.elem.getBoundingClientRect().top + window.pageYOffset;

Это значение не обязательно вычислять каждый раз, достаточно рассчитать при первом вызове 
метода updatePosition().

Полученное значение мы будем сравнивать со степенью прокрутки страницы при каждом новом вызове метода:

if (window.pageYOffset > initialTopCoord) {
  // плавающая корзина
} else {
  // корзина сверху
}

Если значение window.pageYOffset будет больше initialTopCoordinate, 
значит пользователь уже докрутил до верхнего края иконки корзины, и нам 
нужно поменять её позиционирование на фиксированное, и наоборот.

Вычисление отступа по горизонтали

А чтобы понять какой оступ взять слева, нужно вычислить два значения:

1) Значение, чтобы отступ был 20px справа от первого элемент в документе с классом container. 
Для этого возьмём расстояние от края документа этого самого первого элемента 
с классом container и прибавим к нему 20px:

document.querySelector('.container').getBoundingClientRect().right + 20;

2) Значение, чтобы отступ от правого края экрана был 10px. Для этого нужно из общей 
ширины страницы (document.documentElement.clientWidth) вычесть ширину иконки 
корзины(this.elem.offsetWidth) и размер отступа от края(10px), вот так:

document.documentElement.clientWidth - this.elem.offsetWidth - 10;

Теперь нужно выбрать одно значение из двух. Правильным значением для нас будет наименьшее из них. 
Сделаем это с помощью Math.min:

let leftIndent = Math.min(
  document.querySelector('.container').getBoundingClientRect().right + 20,
  document.documentElement.clientWidth - this.elem.offsetWidth - 10
) + 'px'

Применение фиксированного позиционирования

В итоге, чтобы фиксированно спозиционировать иконку корзины на странице нужно:

let leftIndent = Math.min(
  document.querySelector('.container').getBoundingClientRect().right + 20,
  document.documentElement.clientWidth - this.elem.offsetWidth - 10
) + 'px'

Object.assign(this.elem.style, {
  position: 'fixed',
  top: '50px',
  zIndex: 1e3,
  right: '10px',
  left: leftIndent
});

Не забудьте всё вернуть как было, когда пользователь докрутил обратно до верха:

Object.assign(this.elem.style, {
  position: '',
  top: '',
  left: '',
  zIndex: ''
});

Мобильные устройства

Для мобильных устройств или просто для небольшой ширины окна у нас используются другие стили, 
где иконка корзины всегда спозиционированна фиксированно. Поэтому если ширина экрана меньше или 
равна 767px, то позиционирование нужно обнулить к исходным значениям. Чтобы это определить 
используем свойство clientWidth всего документа:

let isMobile = document.documentElement.clientWidth <= 767;

// Если условие выполняется, обнуляем стили к исходным
if (document.documentElement.clientWidth <= 767) {
  Object.assign(this.elem.style, {
    position: '',
    top: '',
    left: '',
    zIndex: ''
  });
}
*/


// <<<< решение:

/*

*/