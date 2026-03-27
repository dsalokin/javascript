// read сохраняет a и b в свойствах, sum/mul используют this.a и this.b
let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
