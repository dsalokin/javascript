// split по '-', первое слово оставляем, остальные — первый символ в верхний регистр, join
function camelize(str) {
  return str
    .split('-')
    .map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
