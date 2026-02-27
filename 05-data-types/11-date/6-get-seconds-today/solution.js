// Начало сегодня 00:00:00, разница с now в мс, делим на 1000 — секунды с начала дня
function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  let diff = now - today;
  return Math.round(diff / 1000);
}

alert(getSecondsToday());
