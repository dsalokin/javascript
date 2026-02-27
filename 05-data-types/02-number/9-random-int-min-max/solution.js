// Math.round даёт неравные вероятности для min/max. Используем Math.floor от min до max+1 — все целые с равной вероятностью
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

alert(randomInteger(1, 3));
