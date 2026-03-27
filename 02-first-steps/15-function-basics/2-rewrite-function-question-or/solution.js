// оператор ? — если age > 18 возвращаем true, иначе результат confirm
function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

// оператор || — при age > 18 выражение даёт true, иначе выполнится confirm и вернётся его результат
function checkAge2(age) {
  return (age > 18) || confirm('Родители разрешили?');
}
