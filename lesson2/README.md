# Lesson 2：流程控制

```javascript
var service = function(user_name){
    var food=['hamburger','coke','tomato'];
    var input = prompt(user_name + '你要吃什麼 1.hamburger 2.coke  3.tomato');
    console.log(user_name,'選了',food[input-1]);    
    alert(user_name + '要吃'+ food[input-1]);
};   

service('Tom');
service('Amber');
service('Slivia');
```
## 條件判斷
* 復習 trusy / false 的概念
### if
```javascript
if( [條件1] ) {
    //do something
} else if( [條件2] ){
    //do something
} else {
    //do something
}
```
* else if 可省略
* 條件運算子 `[條件]?[回傳值1]:[回傳值2]`
    ```javascript
    var input = parseInt( prompt('請輸入一個數'), 10 );
    if( input % 2 == 0) {
        alert('您輸入的是偶數');
    } else {
        alert('您輸入的是奇數');
    }
    ```
    ```javascript
    var input = parseInt( prompt('請輸入一個數'), 10 );
    alert('您輸入的是'+ ( (input % 2 == 0)?'偶數':'奇數' ) );
    ```
#### "巢狀"的概念
* if 裡面可以放另一個 if
    ```javascript
    var input = parseInt( prompt('請輸入一個正整數'), 10 );
    if(input > 0) {
        if( input % 2 == 0) {
            alert('您輸入的是偶數');
        } else {
            alert('您輸入的是奇數');
        }
    } else {
        alert('我要一個正整數');
    }
    ```
#### 練習：平閏年判斷
* 四年一閏
* 百年不閏
* 四百年再閏
### switch
* 使用情境：當你有一堆 if else 的 code，裡面的條件都是針對單個變數的值作判斷時，就建議改用 switch
```javascript
//good
if(input == 1) {
    //do something for 1
} else if(input == 2) {
    //do something for 2
} else if(input == 3) {
    //do something for 3
} else if(input == 4) {
    //do something for 4
} else if(input == 5) {
    //do something for 5
} else {
    //default action
}

//better
switch(input) {
case 1:
    //do something for 1
    break;
case 2:
    //do something for 2
    break;
case 3:
    //do something for 3
    break;
case 4:
    //do something for 4
    break;
case 5:
    //do something for 5
    break;
default:
    //default
}
```
* case value 採嚴格比較
```javascript
switch (prompt('請輸入一個數字')) {
case "1":
	alert('字串1');
	break;
case 2:
	alert('數字2');
	break;
}
```
* 搞懂 break 的作用：沒有 break → 整個 block 後面的 code 都會無條件執行
    * 是缺點也是優點
#### 練習：簡易計算機 `calc.js`
* 輸入兩個數字與運算子，輸出運算結果
* 複習 function 的寫法，寫個 calc function
    ```javascript
    var a = prompt('第一個數字？');
    var b = prompt('第二個數字？');
    var op = prompt('運算子？ + - * /');
    var calc = function(num1, num2, op){
        //implement it
    };
    var answer = calc(a, b, op);
    alert(answer);
    ```
* 運算子可以打中文
* 防止除以 0 的錯誤
## 迴圈
### while
* `while([判斷條件]){ ... }` 
```javascript
var i = 0;
while(i < 10) {
    alert('迴圈執行第'+i+'次');
    i++;
}
```
```javascript
while(!confirm('可以嫁給我嗎？')) {
    alert('歐不~拜託~');
}
alert('我就知道妳想嫁給我 hahaha');
```
### do while
* 類似 while，只是先做再說
* `do { ... } while([判斷條件]);`
```javascript
var i = 0;
do {
    console.log('迴圈執行第'+i+'次');
    i++;
} while(i < 10);
```
### for
* 可以用 while 兜出來，但有時候用 for 寫比較簡潔
* `for([初始動作];[判斷條件];[迴圈執行一次後的動作])`
```javascript
for(var i = 0; i < 10; i++) {
    console.log('迴圈執行第'+i+'次');
}
```
#### 巢狀迴圈
* 迴圈裡面還有一層迴圈
```javascript
for(var i = 1; i <= 9; i++){
    for(var j = 1; j <= 9; j++){
        console.log(i + ' * ' + j + ' = ' + (i*j) );
    }
}
```
#### 迴圈控制 continue / break
* continue：不跳出迴圈，但直接跳到迴圈的下一次[判斷條件]區塊
    * 九九乘法表，通常省略 1 * 1 、 1 * 2 、1 * 3 、 ...
#### 0621 作業
* 把 1~100 中，11 的倍數 alert 出來
* 寫一個函數 `var findNum = function(n, a){}` 把 1 ~ n 中，a 的倍數都 alert 出來
#### 練習：
* 星期一猴子穿新衣，星期二猴子肚子餓 ... `monkey.js`
* 終極密碼 1~100 `boom.js`
* 陣列打散 `shuffle.js`
    * 撲克牌洗牌 `card.js`
* 猜數字：輸入兩個四位數字，判斷幾A幾B `guess.js`
    * 輸入的數字是否合法(不得有重複數字)
    * 人猜電腦數字
    * 電腦猜人數字

# 下一課：[Lesson 1：變數、運算子、函數](../lesson1/README.md)
# 下一課：[Lesson 3：JavaScript 下常用的函數](../lesson3/README.md)

## 待教：
* 非同步執行的概念
* 正規表示式
    * 正規表示式下的簡易計算機
* instanceof / 物件導向
