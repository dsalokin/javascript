

let a = prompt("Первое число?", 1);// "1"
let b = prompt("Второе число?", 2);// "2"

alert(a + b); // "12" - строка

//приводим к числу с помощью Number()
let a1 = Number(prompt("Первое число?", 1));
let b1 = Number(prompt("Второе число?", 2));

alert(a1 + b1); // 3

// приводим к числу с помощью `+`
let a2 = +prompt("Первое число?", 1);
let b2 = +prompt("Второе число?", 2);

alert(a2 + b2); // 3

//Или внутри alert
let a3 = prompt("Первое число?", 1);
let b3 = prompt("Второе число?", 2);

alert(+a3 + +b3); // 3

