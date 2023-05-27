# BUỔI 3: TÌM HIỂU VỀ DISPLAY VÀ RESPONSIVE
##1. Grid
Hệ thống Grid Layout của CSS cung cấp một hệ thống bố cục dạng lưới với cột và hàng, làm cho việc thiết kế các trang web trở nên dễ dàng hơn mà không cần sử dụng **floats** và **positioning**. Nó có thể sử dụng được ở gần như tất cat các trình duyệt.
#### Grid Elements
- Một grid layout phải bao gồm một element cha với một hoặc nhiều element con.
- Element cha phải được set **display** property là **grid** hoặc **inline-grid**. Khi dùng **display: grid** chúng ta sẽ được một container chứa grid dưới dạng **block**
- Tất cả các phần tử con trực tiếp của grid container(vùng chứa lưới) sẽ tự động trở thành các grid items(mục lưới).
``` html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: #2196F3;
  padding: 10px;
  
}
.grid-item {
  background-color: pink;
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  font-size: 30px;
  text-align: center;
}
</style>
</head>
<body>

<div class="grid-container">
  <div class="grid-item">1</div>
  <div class="grid-item">2</div>
  <div class="grid-item">3</div>  
  <div class="grid-item">4</div>
  <div class="grid-item">5</div>
  <div class="grid-item">6</div>  
  <div class="grid-item">7</div>
  <div class="grid-item">8</div>
  <div class="grid-item">9</div>  
</div>

</body>
</html>
```
- Khoảng trống giữa các cột và hàng được gọi là gaps(khoảng cách). Có thể điều chỉnh kích thước gap bằng các thuộc tính : **column-gap**, **row-gap**, **gap**
``` html
.grid-container {
  display: grid;
  column-gap: 50px;
}
```
``` html
.grid-container {
  display: grid;
  row-gap: 50px;
}
```
``` html
.grid-container {
  display: grid;
  gap: 50px 100px;
}
```
``` html
.grid-container {
  display: grid;
  gap: 50px;
}
```
#### Grid Lines
The lines between columns are called column lines.
The lines between rows are called row lines.
![example](https://i.imgur.com/ibjgWfo.png)
``` html
<!DOCTYPE html>
<html>
<head>
<style>
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}

.item1 {
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 1;
  grid-column-end: 3;
}
</style>
</head>
<body>
<div class="grid-container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>  
  <div class="item4">4</div>
  <div class="item5">5</div>
  <div class="item6">6</div>
  <div class="item7">7</div>
  <div class="item8">8</div>  
</div>

</body>
</html>
```
![example](https://i.imgur.com/kUhWjKF.png)
**Tất cả các thuộc tính của grid**
![example](https://i.imgur.com/1yoK3vp.png)

## 2. FlexBox
Flexbox là một kỹ thuật trong CSS để tạo bố cục và căn chỉnh các phần tử trong một container. Nó cung cấp một cách linh hoạt để xếp chồng, căn chỉnh và phân bổ không gian cho các phần tử trong một dòng hoặc cột.

Để sử dụng Flexbox, bạn cần thiết lập container chứa các phần tử thành một flex container bằng cách sử dụng thuộc tính CSS **"display"** với giá trị là **"flex"** hoặc **"inline-flex"**. Sau đó, bạn có thể sử dụng các thuộc tính và giá trị của Flexbox để điều chỉnh căn chỉnh, sắp xếp và phân bổ không gian cho các phần tử con bên trong.
``` html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: red;
  margin: 5px;
  padding: 20px;
  font-size: 30px;
}
</style>
</head>
<body>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
</div>

</body>
</html>
```
![example](https://i.imgur.com/ybKQgYG.png)
### Các thuộc tính của flex container:
#### flex-direction
Thuộc tính flex-direction xác định hướng mà container muốn xếp chồng các mục flex.
Giá trị **column** chồng các mục linh hoạt theo chiều dọc (từ trên xuống dưới):
``` html
.flex-container {
  display: flex;
  flex-direction: column;
}
```
Giá trị **column-reversee** xếp chồng các mục linh hoạt theo chiều dọc (nhưng từ dưới lên trên)
```html
.flex-container {
  display: flex;
  flex-direction: column-reverse;
}
```
Giá trị **row** xếp chồng các mục linh hoạt theo chiều ngang (từ trái sang phải):
``` html
.flex-container {
  display: flex;
  flex-direction: row;
}
```
#### flex-wrap
Thuộc tính flex-wrap trong Flexbox xác định liệu các phần tử con trong một flex container có nên **xuống dòng** (wrap) khi không đủ không gian hay không.
**nowrap** (mặc định): Các phần tử con sẽ không xuống dòng và sẽ tiếp tục hiển thị trong một hàng ngang duy nhất. Nếu không có đủ không gian, các phần tử con có thể bị tràn ra khỏi flex container
**wrap:** Các phần tử con sẽ được xếp vào nhiều dòng khi không đủ không gian trong flex container. Các phần tử con sẽ xuống dòng và tiếp tục hiển thị từ đầu dòng mới.
**wrap-reverse**: Tương tự như wrap, các phần tử con sẽ được xếp vào nhiều dòng khi không đủ không gian. Tuy nhiên, thứ tự hiển thị của các dòng sẽ bị đảo ngược, tức là các phần tử con sẽ xuất hiện từ dòng cuối cùng đến dòng đầu tiên.
```html
<!DOCTYPE html>
<html>
<head>
<style>
.flex-container {
  display: flex;
  flex-wrap:wrap;
  background-color: DodgerBlue;
}

.flex-container>div {
  background-color: #f1f1f1;
  width: 100px;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
</style>
</head>
<body>

<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>  
  <div>4</div>
  <div>5</div>
  <div>6</div>  
  <div>7</div>
  <div>8</div>
  <div>9</div>  
</div>
</body>
</html>
```
#### flex-flow
Thuộc tính **flex-flow** trong CSS là một thuộc tính ngắn gọn để đồng thời xác định các giá trị cho **flex-direction** và **flex-wrap**. Nó giúp định nghĩa hướng sắp xếp và xuống dòng của các phần tử con trong một flex container.
``` css
flex-flow: <flex-direction> <flex-wrap>;
```
#### justify-content
Thuộc tính justify-content trong CSS được sử dụng trong Flexbox để điều chỉnh căn chỉnh các phần tử con theo **chiều ngang** trong một flex container.
**flex-start**: Các phần tử con sẽ được căn chỉnh về phía bên trái của flex container (hoặc bên trên nếu flex-direction là column).

**flex-end**: Các phần tử con sẽ được căn chỉnh về phía bên phải của flex container (hoặc bên dưới nếu flex-direction là column).

**center**: Các phần tử con sẽ được căn giữa theo chiều ngang trong flex container.

**space-between**: Các phần tử con sẽ được phân bổ đều với khoảng cách đều nhau giữa chúng trong flex container. Khoảng cách giữa hai phần tử liên tiếp sẽ là như nhau, nhưng không có khoảng cách ở hai đầu.

**space-around**: Các phần tử con sẽ được phân bổ đều với khoảng cách đều nhau xung quanh chúng trong flex container. Khoảng cách trước phần tử đầu tiên và sau phần tử cuối cùng sẽ là một nửa khoảng cách giữa các phần tử.

**space-evenly**: Các phần tử con sẽ được phân bổ đều với khoảng cách đều nhau, bao gồm cả khoảng cách trước phần tử đầu tiên và sau phần tử cuối cùng, trong flex container.
Thuộc tính justify-content được sử dụng để căn chỉnh các mục linh hoạt
#### align-items
Thuộc tính **align-items**  được sử dụng trong Flexbox để điều chỉnh căn chỉnh các phần tử con theo chiều **dọc** trong một flex container.
**flex-start**: Các phần tử con sẽ được căn chỉnh về phía **trên cùng** của **flex container** (hoặc bên trái nếu flex-direction là column).

**flex-end**: Các phần tử con sẽ được căn chỉnh về phía dưới cùng của flex container (hoặc bên phải nếu flex-direction là column).

**center**: Các phần tử con sẽ được căn giữa theo chiều dọc trong flex container.

**baseline**: Các phần tử con sẽ được căn chỉnh dựa trên dòng cơ sở (baseline) của chúng. Điều này có nghĩa là các phần tử con sẽ được căn chỉnh sao cho dòng cơ sở của chúng khớp với nhau.

**stretch**: Các phần tử con sẽ được kéo dãn theo chiều dọc của flex container để điền đầy không gian còn trống. Điều này làm cho các phần tử con có chiều cao bằng nhau.
#### Perfect Centering
**SOLUTION**: Set both the justify-content and align-items properties to center, and the flex item will be perfectly centered:


## 3. Media Query



