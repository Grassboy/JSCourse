var a = parseInt(prompt('第一個數字？'));
var b = parseInt(prompt('第二個數字？'));
var op = (prompt('運算子？ + - * / %'));
var calc = function(num1, num2, op){
    //implement it
    var answer;
    switch(op){
    case '+' :
    case '加' :
        answer = num1 + num2;
        break;
    case '-' :
    case '減' :
        answer = num1 - num2;
        break;
    case '*' :
    case '乘' :
        answer = num1 * num2;
        break;
    case '/' :
    case '除' :
        if (num2 == 0){
            answer = '不能除以0';
        } else {
            answer = num1 / num2;
        }
        break;
    case '%' :
    case '餘數' :
        answer = num1 % num2;
        break;
    default:
        answer = '賣來亂';
    }
    return answer;
};
var answer = calc(a, b, op);
alert(answer);
