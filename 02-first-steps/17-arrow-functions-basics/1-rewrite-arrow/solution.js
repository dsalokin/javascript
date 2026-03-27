// ask вызывает yes() или no() в зависимости от ответа в confirm
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

// Колбэки заменены на стрелочные функции: () => alert(...) вместо function() { alert(...); }
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);
