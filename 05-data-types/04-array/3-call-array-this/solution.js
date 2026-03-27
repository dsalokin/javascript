// arr[2]() — вызов метода объекта: obj[method](), this = arr. В массив добавлена функция, она выводит this (сам массив)
let arr = ["a", "b"];
arr.push(function() {
  alert(this);
});
arr[2](); // a,b,function(){...}
