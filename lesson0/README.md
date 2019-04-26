# Lesson 0：概論

## 為什麼要寫程式？
* 賺＄＄
* 解決日常生活大小問題
* 增進效率：[神一般的程式設計師！連發簡訊給老婆說要晚回家，都能編成程式化腳本代勞](https://technews.tw/2015/11/28/programs-are-programmed-throughout-his-life-any-more-than-90-seconds-of-work-made-to-the-program-code-to-do/)

## 認識 JavaScript

* 哪邊可以跑 JavaScript？
    1. 網頁端：瀏覽器 (IE / Firefox / Chrome)
        * JavaScript (縮寫 js)
    1. 本機端：作業系統 (Windows / Mac / Linux)
        * node.js
* JavaScript 可以用來作什麼？
    1. UI/UX
    1. 處理資料
    1. 自動化工作(外掛)
    1. 操作硬體
    1. 寫 App
    1. ：
    1. ：
* JavaScript 特性
    1. 自由 <==> 難維護  
    1. ~~很好抄~~ 很好 Google
    1. 生態系完整：一堆現成的套件
    1. 上手後~~且對程式還保留熱情~~的話，可以往 Python 跳
        * 寫法差不多自由(吧XD)
        * 生態系完整：一堆現成的 Solution

## 環境建立
* 用什麼寫？
    * ~~Windows 記事本~~
    * 好上手的文字編輯器：[Visual Studio Code](https://code.visualstudio.com/)
    * Word 檔是 .doc；PowerPoint 檔是 .ppt；JavaScript 寫出來通常是 .js 
* 用什麼跑：
    * 網頁端： IE / Firefox / Chrome
    * 本機端 [Node.js](https://nodejs.org/en/)
    * 認識 Command Line (cmd: 命令提示字元)
        * 工程師的咒語  
        ![https://therapyvlado.com/my-work/attachment/martix-ludia-2/](https://i.imgur.com/e6YzCQg.png)

----

## 第一支 js 程式 ( helloworld.js )
```javascript
alert('Hello World!!');
```

## 完整範例 ( helloworld.html )

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>我是一個網頁</title>
</head>
<body>
<script>
    alert('Hello World');
</script>
</body>
</html>
```

## 另一種寫法 ( helloworld2.html )
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>我是一個網頁</title>
</head>
<body>
<!--直接把 .js 檔獨立成另一個檔案 -->
<script src="helloworld.js"></script>
</body>
</html>
```

### 目前為止，要具備什麼概念？
* 網頁的結構
    * HTML: `H`yper `T`ext `M`arkup `L`anguage
    * HTML `<tags>`
        * `<html>` `<head>` `<body>` 理論上有開頭，就要有結尾 `</html>` `</head>` `</body>`
        * HTML 是另一個可以說很久的故事(遠目)
* 網頁如何執行 js 程式?
    * `<script>` tag 裡面就是 js 程式內容
    * 程式原則上是從上執行到下 (好像廢話XD)
* 常用名詞
    * HTML `<tags>`
        * 不同 Tag 就是不同的網頁元素 
    * 程式敘述 (statement)：分號結尾
    * 字串 (string)：引號包著的文字
        * 雙引號 → "Hello World!!"
        * 單引號 → 'Hello World!!'
        * `[1]` 旁邊的頓號 → \`Hello World!!\`
            * 較少見，先記前兩種就好
    * 函數呼叫 (function call)： `alert( ... );`
        * alert
            * 瀏覽器提供的函數
            * 告訴網頁生一個對話框，並且把第一個參數的內容 show 在對話框裡
        * 什麼是函數：
            * 可視為事先定義好的子程式
            * 可接受 0 ~ 多個輸入 (input)
            * 可回傳 0 或一個輸出 (output)

# 下一課：[Lesson 1：變數、運算子、函數](../lesson1/README.md)
