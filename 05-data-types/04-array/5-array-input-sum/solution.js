// value не приводим к числу сразу после prompt, чтобы отличить '' от '0'. break при пустом/null/не-числе, иначе push(+value)
function sumInput() {
  let numbers = [];
  while (true) {
    let value = prompt("Введите число", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }
  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());
