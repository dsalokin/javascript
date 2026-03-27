function checkAge(age) {
    if (age > 18) {
      return true;                              // здесь ключевой момент - если здесь отрабатывает return true
    } else {
      // ...
      return confirm('Родители разрешили?');
    }

  }

  function checkAge2(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Родители разрешили?');
  }