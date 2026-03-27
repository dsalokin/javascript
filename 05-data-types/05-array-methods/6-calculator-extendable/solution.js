// Методы хранятся в объекте-калькуляторе. calculate парсит "a op b", addMethod добавляет новый оператор и функцию
function Calculator() {
  this.methods = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  this.calculate = function(str) {
    let parts = str.split(' ');
    let a = +parts[0];
    let op = parts[1];
    let b = +parts[2];
    if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;
    return this.methods[op](a, b);
  };

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}

let calc = new Calculator();
alert(calc.calculate("3 + 7")); // 10
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
alert(powerCalc.calculate("2 ** 3")); // 8
