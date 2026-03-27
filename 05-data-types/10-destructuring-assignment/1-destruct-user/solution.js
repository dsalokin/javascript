// Деструктуризация: years переименовываем в age, isAdmin по умолчанию false
let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false } = user;
alert(name);   // John
alert(age);    // 30
alert(isAdmin); // false
