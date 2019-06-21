# JavaScript 下常用的函數
## Global Function
* `alert(str)`: 將 str 以對話方塊的方式顯示
* `prompt(str)`: 顯示 str 訊息，並讓用戶輸入一串文字，並回傳該文字
* `parseInt(str, [n])`: 將 str 轉成整數，n 表示 str 為 n 進位的字串，通常為 10 (有時會有例外)
* `parseFloat(str)`: 將 str 轉成數值型態(可以有小數點)
## Number.prototype [Number - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)
```javascript
var num = 3.1415926;
```
* `num.toFixe(n)`: 四捨五入到小數後 n 位(回傳字串)
## String.prototype [String - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)
```javascript
var str = 'helloworld';
```
* `str.substr(start, length)`: 回傳以第 start 字為首，長度為 length 的子字串
* `str.indexOf(sub_str)`: 回傳 sub_str 在 str 出現的第一個位置，若無，則回傳 -1
* `str.lastIndexOf(sub_str)`: 回傳 sub_str 在 str 出現的最後一個位置，若無，則回傳 -1
* `str.toUpperCase()`: 字串轉大寫
* `str.toLowerCase()`: 字串轉小寫
* `str.padStart(n, [char])`: 若 str 長度不足 n，則開頭補 char 到長度為 n (char 不指定則補空白)
* `str.padEnd(n, [char])`: 若 str 長度不足 n，則結尾補 char 到長度為 n (char 不指定則補空白)
* `str.split(char)`: 將 str 依照 char 分割成陣列
## Array.prototype [Array - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)
```javascript
var array = [1, 2, 3];
```
* `array.push()`: 在尾端插入元素
* `array.slice(start, end)`: 取得 array[start] 為首，array[end - 1] 作結的陣列
* `array,splice(start, delete, insert1, insert2, insert3, ... )`: 從 array[start] 開始算起，刪除 delete 個元素，並將 insert1, insert2, insert3, ... 插入 array 裡
* `array.join(char)`: 將陣列依照 chart 合併成字串
## Date.prototype [Date - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)
```javascript
var date = new Date();
```
* `date.getTime()`: 將 date 轉成 timestamp ( 1970/01/01 00:00:00 到目前所經過的毫秒數 )
* ``:
* ``:
* ``:
## Math [Math - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)
* `Math.floor(n)`: 小於等於 n 的最大整數(地板)
* `Math.ceil(n)`: 大於等於 n 的最小整數(天花板)
* `Math.max(n1, n2, n3 ... )`: n1, n2, n3 ... 的最大值
