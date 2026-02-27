// Завтра 00:00:00 минус сейчас — разница в мс, в секундах
function getSecondsToTomorrow() {
  let now = new Date();
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  let diff = tomorrow - now;
  return Math.round(diff / 1000);
}

alert(getSecondsToTomorrow());
