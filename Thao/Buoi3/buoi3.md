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
Media query là một công cụ trong CSS được sử dụng để áp dụng các quy tắc CSS khác nhau dựa trên các điều kiện môi trường hiển thị của trình duyệt. Nó cho phép bạn điều chỉnh kiểu dáng và bố cục của trang web để tương thích với các thiết bị và màn hình khác nhau.

Media query dựa trên các đặc điểm của màn hình như chiều rộng, chiều cao, tỷ lệ khung hình, độ phân giải và các tính năng khác để xác định khi nào các quy tắc CSS được áp dụng.
``` css
@media media-type and (media-feature) {
  /* Các quy tắc CSS áp dụng trong media query */
}
```
**media-type** là loại phương tiện mà media query sẽ áp dụng, như **screen**, **print**, **speech**.
**media-feature** là điều kiện mà media query sẽ dựa trên, ví dụ như **max-width**, **min-width**, **orientation**, **resolution**.
``` css
@media screen and (max-width: 600px) {
  /* Các quy tắc CSS áp dụng khi chiều rộng màn hình nhỏ hơn hoặc bằng 600px */
  body {
    font-size: 14px;
  }
}
```
## 4. Break point
Break point trong CSS là một điểm hoặc một ngưỡng trong thiết kế đáp ứng (responsive design) để xác định khi nào các quy tắc CSS khác nhau sẽ được áp dụng cho các kích thước màn hình khác nhau.
Khi thiết kế một trang web đáp ứng, ta thường xác định các break point, tức là các giá trị chiều rộng màn hình cụ thể, và tạo ra các tập hợp quy tắc CSS riêng cho mỗi break point đó. Khi màn hình có kích thước nằm trong khoảng của một break point, các quy tắc CSS tương ứng sẽ được áp dụng.

Cách thông thường để xác định break point là sử dụng media queries trong CSS. 
``` css
/* Quy tắc CSS áp dụng cho màn hình có chiều rộng nhỏ hơn 600px */
@media screen and (max-width: 600px) {
  /* Các quy tắc CSS tại break point 600px */
}

/* Quy tắc CSS áp dụng cho màn hình có chiều rộng từ 601px đến 1024px */
@media screen and (min-width: 601px) and (max-width: 1024px) {
  /* Các quy tắc CSS tại break point 601px - 1024px */
}

/* Quy tắc CSS áp dụng cho màn hình có chiều rộng lớn hơn 1024px */
@media screen and (min-width: 1025px) {
  /* Các quy tắc CSS tại break point lớn hơn 1024px */
}

```
>Trong ví dụ trên, ta đã xác định ba break point với các giá trị chiều rộng màn hình là 600px, 601px - 1024px và lớn hơn 1024px. Tương ứng với mỗi break point, ta đã định nghĩa các tập hợp quy tắc CSS riêng để điều chỉnh giao diện tùy theo kích thước màn hình.
##5. Viewport
Viewport trong CSS là khu vực hiển thị của màn hình trình duyệt, nơi nội dung của trang web được hiển thị. Nó là một khái niệm quan trọng trong thiết kế đáp ứng (responsive design) để điều chỉnh cách trình duyệt hiển thị và thu nhỏ nội dung trên các thiết bị với các kích thước màn hình khác nhau.
Để điều chỉnh viewport trong CSS, chúng ta sử dụng meta tag <meta> trong phần <head> của tài liệu HTML. Ví dụ:
``` css
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
```
Trong trường hợp này, width=device-width chỉ định rằng chiều rộng của viewport sẽ bằng với chiều rộng của thiết bị, và initial-scale=1.0 đặt tỷ lệ thu phóng ban đầu của trang web là 1.
## 6. GridView
Nhiều trang web dựa trên chế độ xem dạng lưới, có nghĩa là trang được chia thành các cột:
Sử dụng chế độ xem dạng lưới rất hữu ích khi thiết kế trang web. Nó làm cho việc đặt các phần tử trên trang dễ dàng hơn.
Chế độ xem lưới thường có 12 cột và có tổng chiều rộng là 100%, đồng thời sẽ thu nhỏ và mở rộng khi bạn thay đổi kích thước cửa sổ trình duyệt.
#### Building a Responsive grid-view
- Đầu tiên đảm bảo rằng tất cả các element của HTML đều có thuộc tính **box-sizing** được set là **border-box**. Điều này đảm bảo rằng phần padding và border được bao gồm trong tổng chiều rộng và chiều cao của các phần tử.
``` css
* {
  box-sizing: border-box;
}
```
``` html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

.header {
  border: 1px solid red;
  padding: 15px;
}

.menu {
  width: 25%;
  float: left;
  padding: 15px;
  border: 1px solid red;
}

.main {
  width: 75%;
  float: left;
  padding: 15px;
  border: 1px solid red;
}
</style>
</head>
<body>

<div class="header">
  <h1>Chania</h1>
</div>

<div class="menu">
  <ul>
    <li>The Flight</li>
    <li>The City</li>
    <li>The Island</li>
    <li>The Food</li>
  </ul>
</div>

<div class="main">
  <h1>The City</h1>
  <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>		
</div>

</body>
</html>
```
Tuy nhiên, chúng tôi muốn sử dụng chế độ xem lưới đáp ứng với 12 cột để có nhiều quyền kiểm soát hơn đối với trang web.

Đầu tiên chúng ta phải tính tỷ lệ phần trăm cho một cột: 100%/12 cột = 8,33%.

Sau đó, chúng tôi tạo một lớp cho mỗi trong số 12 cột, class="col-" và một số xác định số lượng cột mà phần đó sẽ kéo dài:
``` html
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
* {
  box-sizing: border-box;
}

.header {
  border: 1px solid red;
  padding: 15px;
}

.row::after {
  content: "";
  clear: both;
  display: table;
}

[class*="col-"] {
  float: left;
  padding: 15px;
  border: 1px solid red;
}

.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}
</style>
</head>
<body>

<div class="header">
  <h1>Chania</h1>
</div>

<div class="row">

<div class="col-3">
  <ul>
    <li>The Flight</li>
    <li>The City</li>
    <li>The Island</li>
    <li>The Food</li>
  </ul>
</div>

<div class="col-9">
  <h1>The City</h1>
  <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
</div>

</div>

</body>
</html>
```
Tất cả các cột này phải float ở bên trái và có phần padding là 15px:
##7. Flexible Media
Flexible media trong CSS là một cách để điều chỉnh các phương tiện truyền thông (như hình ảnh, video, bản đồ, iframe, ...) để tự động thay đổi kích thước và thích ứng với các kích thước màn hình khác nhau.

Khi trình duyệt hiển thị một phương tiện truyền thông, như một hình ảnh, nó thường giữ nguyên kích thước gốc của nó. Điều này có thể gây ra vấn đề khi màn hình có kích thước nhỏ hơn hoặc lớn hơn kích thước của phương tiện. Flexible media giúp giải quyết vấn đề này bằng cách điều chỉnh phương tiện tự động để phù hợp với kích thước màn hình.
``` css
img {
  max-width: 100%;
  height: auto;
}
```
Trong ví dụ trên, ta đang áp dụng các quy tắc CSS cho các phần tử \<img>. Thuộc tính max-width: 100% giúp hình ảnh co dãn với chiều rộng tối đa bằng với chiều rộng của phần tử chứa nó. Thuộc tính **height: auto** giữ tỷ lệ khung hình chính xác và đảm bảo hình ảnh không bị biến dạng khi co dãn.