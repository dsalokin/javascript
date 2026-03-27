// Если конструктор возвращает объект, new вернёт его, а не this. Обе функции возвращают один и тот же obj.
let obj = {};

function A() { return obj; }
function B() { return obj; }

alert(new A() == new B()); // true
