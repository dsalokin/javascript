// Массивы — объекты, shoppingCart и fruits ссылаются на один массив, push меняет его
let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
alert(fruits.length); // 4
