// Случайное от 0..1 умножаем на (max - min) и прибавляем min — получаем число от min до max
function random(min, max) {
  return min + Math.random() * (max - min);
}

alert(random(1, 5));
