// Примитивы не хранят свойства: при str.test = 5 создаётся обёртка, она сразу отбрасывается — в strict будет ошибка, без strict alert(str.test) даст undefined
let str = "Привет";
str.test = 5;
alert(str.test); // undefined (или ошибка в strict)
