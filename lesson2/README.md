# Lesson 2：流程控制

## 條件判斷
### if
### switch
### (condition)?(A):(B)
## 迴圈
### while
* `while([條件]){ ... }` 
```javascript
var i = 0;
while(i < 0) {
    alert('迴圈執行第'+i+'次');
    i++;
}
```
### do while
* 類似 while，只是先做再說
* `do { ... } while([條件]);`
```javascript
var i = 0;
do {
    alert('迴圈執行第'+i+'次');
    i++;
} while(i < 0);
```
### for
* 可以用 while 兜出來，但有時候用 for 寫比較簡潔
* `for([初始動作];[判斷條件];[迴圈執行一次後的動作])`
#### 迴圈控制 continue / break
## 待教：
* instanceof / 物件導向
* 程式流程控制 if / swich / for / while
