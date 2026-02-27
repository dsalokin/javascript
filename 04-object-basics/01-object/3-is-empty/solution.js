// Перебираем свойства в цикле — как только есть хотя бы одно, возвращаем false
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
