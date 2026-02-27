// Цепочка возможна, если каждый метод возвращает this (сам объект)
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  }
};

ladder.up().up().down().showStep().down().showStep();
