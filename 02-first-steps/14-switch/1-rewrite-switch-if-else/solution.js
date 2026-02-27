// switch (browser) {                                 // проверка значения browser
//   case 'Edge':                                     // если Edge то выводим текст 1
//     alert( "You've got the Edge!" );
//     break;                                         // заканчиваем

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':                                    // если что-то из списка то выводим текст 2
//     alert( 'Okay we support these browsers too' );
//     break;                                         // заканчиваем

//   default:
//     alert( 'We hope that this page looks ok!' );   // если другое то выводим текст 3 и заканчиваем

// }

// if
if(browser === 'Edge') {
  alert("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}
