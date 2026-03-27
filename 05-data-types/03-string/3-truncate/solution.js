// Если длина больше maxlength — обрезаем до maxlength-1 и добавляем один символ '…'
function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
