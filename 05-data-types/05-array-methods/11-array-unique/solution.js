// Проходим по массиву, добавляем в result только если ещё нет (includes)
function unique(arr) {
  let result = [];
  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
}

let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
alert(unique(strings)); // кришна, харе, :-O
