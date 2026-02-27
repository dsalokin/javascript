let num1 = 10,
    num2 = 20,
    result;

// if (result === null || result === undefined) { // если result null или undefined 
//   if (num1 !== null && num1 !== undefined) {   // то если num1 не равен null и не равен undefined
//     result = num1;                             // тогда result равен num1
//   } else {
//     result = num2;                             // иначе result равен num2
//   }
// }

result ??= num1 ?? num2;
// првое ?? если num1 не null и не undefined то num1 иначе num2
// второе ??=  если резалт null или undefined то см выше