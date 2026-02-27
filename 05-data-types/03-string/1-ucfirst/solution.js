// Строки неизменяемы — собираем новую: первый символ в верхний регистр + slice(1). Проверка на пустую строку
function ucFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("вася")); // Вася
