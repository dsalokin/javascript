// if: если a меньше b — возвращаем a, иначе b
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// ? — то же самое в одну строку
function min2(a, b) {
  return a < b ? a : b;
}
