//alert('我只是簡單的練習用的 js');
/*
var a = prompt('請輸入一個年份',);
if(a % 4 == 0){
    if(a % 100 == 0){
        if (a % 400 ==0){
            alert('閏年');
        } else {
            alert('平年');
        }
    } else {
        alert('潤年');
    }
} else {
    alert('平年');
}

*/
/*
var a = prompt('請輸入一個年份');
if(a % 4 == 0 && a % 100 != 0 || a % 400 == 0 ){
    alert('閏年');
} else {
    alert('平年');
}
*/

var a = parseInt (prompt('請輸入一個年份'),10);
alert('您輸入的是' + (a % 4 == 0 &&  a % 100 != 0 || a % 400 == 0 ?'閏年':'平年'));
