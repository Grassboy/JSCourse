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

## 變數型態
* Number 數值
* String 字串
* Boolean 布林值 true/false
* Object 物件

## 運算子
* 指定運算子 `=`
* 邏輯運算子 `==` `&&` `||` `!` `===` (嚴格比較)
* 算數運算子 `+` `-` `*` `/` `%` (取餘數)
* 位元運算子 `&` `|` `^`

## 物件宣告

## Assign Reference / Assign Value


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

## 待教：
* trusy / falsy
* 程式流程控制 if / swich / for / while
