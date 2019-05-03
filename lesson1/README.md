# Lesson 1：變數、運算子、函數

## 先看 code (variable.js)
```javascript
var a = '123';
alert(a);           // 123

var b = 123;
alert(b);           // 123

alert(a + a);       // 123123
alert(b + b);       // 246
alert('測試 a == \'123\'');
alert(a == '123');  // true
alert('測試 a == b');
alert(a == b);      // true?
alert('測試 a === b');
alert(a === b);      // false?
```

## 用瀏覽器執行 (variable.html)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>我是一個網頁</title>
</head>
<body>
<!--直接把 .js 檔獨立成另一個檔案 -->
<script src="variable.js"></script>
</body>
</html>
```

## 變數宣告
* 不得宣告為保留字 (JavaScript 內建的文法)：
    * [JavaScript 中的保留字一覽表](https://hiskio.com/courses/51/lectures/881)
* `var [變數名稱] = [變數值];`
* `var [變數名稱];` ← 不預先 assign 值

## 變數型態
* Number 數值
* String 字串
* Boolean 布林值 true/false
* function 函數
    * `alert( ... )` `prompt( ... )`
* Object 物件
    * 物件建構 `new XXX();`
        * 陣列 `new Array();`
            * 簡化寫法 `[]`
        * 基本物件 `new Object();`
            * 簡化寫法 `{}`
        * Date `new Date`
        * ：
        * ：
    * 常用物件練習
        * Date
        * Math (為什麼不用 new?)

## 運算子
* 算數運算子(回傳運算結果) `+` `-` `*` `/` `%` (取餘數)
* 邏輯運算子(回傳true/false) `>` `<` `>=` `<=` `&&` `||` `!`(logic NOT) `==` `!=` `===` `!==` (嚴格比較)
* 賦值運算子 `=` `+=` `-=` `*=` `/=` `%=` `++`(遞增) `--`(遞減)...
    * `++a` 和 `a++` 的差別
* 位元運算子 `&`(bit AND) `|`(bit OR) `^`(bit XOR) `~`(bit NOT) `<<` `>>`

## trusy / falsy
* trusy
    * 數字: 不是零都是 trusy
    * 字串: 不是 '' 空字串 trusy
* false
    * 數字: 0 
    * 字串: 空字串
## 練習
* 輸入攝氏度數(℃) 輸出華氏度數(℉)


## 物件宣告
* `var [變數名稱] = new [物件名稱]();`
```javascript

//宣告陣列
var array = new Array(3);
array[0] = 'hello';
array[1] = 'world';
array[2] = '!!!';

//簡易寫法
var array = ['hello', 'word', '!!!'];

//宣告物件
var grassboy = new Object();
grassboy.age = 34;
grassboy.last_name = 'Wu';

//簡易寫法
var grassboy = {
    age: 34,
    last_name: 'Wu'
};

```


## Assign Reference / Assign Value
```javascript
var a_value = 123;
var b_value = a_value;
b_value *= 2;
alert(a_value); //  ??? 

var a_object = {
    value: 123
};
var b_object = a_object;
b_object.value *= 2;
alert(b_object.value); // ???
```
## 函數
* 目的：重複使用某段操作
* 零至多個參數，一個回傳值
    * 如何進行多個輸出？
### 函數宣告

```javascript
//無參數/無回傳值
var helloworld = function() {
    alert('Helloworld');
};

//另一種寫法
function helloworld(){
    alert('Helloworld');
}

//有參數
var greeting = function(name) {
    alert('hello!!' + name);
}

//有參數/有回傳值
var sum = function(a, b){
    return a + b;
};

```

## Prototype Function
* 字串函數
    * `String.prototype.toLowerCase()`: 轉小寫
    * `String.prototype.toUpperCase()`: 轉大寫
    * `String.prototype.substr(start, length)`: 取字串的子字串
* 數值函數
    * `Number.prototype.toFixed(pos)`: 四捨五入

## 認識 consle：網頁的 Command Line 介面
* 在瀏覽器按下 `[F12]` 鍵，找到 console (主控台) 介面
    * 一個可以執行 js 的地方
    ![console](https://i.imgur.com/M8YXQ9I.png)
    * 方便偵錯程式的地方
    * 認識 console 物件

## 踹踹 node.js 執行 javascript
* 開啟 cmd
* 切到 JSCourse 資料夾
* 執行 node variable.js
    * 噴錯了！  
    ![](https://i.imgur.com/iCPlk0r.png)
    * 認識 JavaScript Error
        * SyntaxError
        * ReferenceError
        * ：
        * ：


# 上一課：[Lesson 0：概論](../lesson0/README.md)
# 下一課：[Lesson 2：流程控制](../lesson2/README.md)

## 待教：
* 函數宣告
* instanceof / 物件導向
* 程式流程控制 if / swich / for / while
