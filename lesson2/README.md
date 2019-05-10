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
