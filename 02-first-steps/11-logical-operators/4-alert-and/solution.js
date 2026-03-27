alert( alert(1) && alert(2) );
// 1 undefined 
alert( 1 && alert(2) );
// 2 undefined 
alert( true && alert(2) );
// 2 undefined

// true пропускается останавливается на первом false (undefined)

