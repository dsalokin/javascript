alert( alert(1) || 2 || alert(3) );
// 1 2

alert( alert(1) || alert(2) || alert(3) );
// 1 2 3 undefined
alert( alert(1) || false || alert(3) );
// 1 3 undefined

// Вызов `alert` не возвращает значени true /false, но при это м выполняет вывод значения
// Таким образом перебор будет до первого true пропуская false
