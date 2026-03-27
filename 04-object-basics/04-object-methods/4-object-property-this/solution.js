// ref: this не работает — this в makeUser() при вызове как функции равен undefined. Делаем ref методом, возвращающим this (объект перед точкой).
function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    }
  };
}

let user = makeUser();
alert(user.ref().name); // John
