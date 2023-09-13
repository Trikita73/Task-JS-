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

/* << EVENT >> */

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