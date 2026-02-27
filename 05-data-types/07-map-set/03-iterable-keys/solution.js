// map.keys() — итерируемый объект, не массив. Array.from превращает в массив, тогда push сработает
let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");
alert(keys); // name, more
