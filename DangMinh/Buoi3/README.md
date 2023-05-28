# **BUỔI 3: TÌM HIỂU VỀ DISPLAY VÀ RESPONSIVE**

## **I. Grid layout**

**1. Thuộc tính `display`**

Một layout dạng lưới này phải có một element cha với `display` được set là `grid` hay `inline-grid`.

Khi dùng `display: grid;`, chúng ta sẽ được một container chứa grid dưới dạng block

**HTML**
```HTML
<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
</div>
```

**CSS**
```CSS
.container {
  display: grid;
  grid-template-columns: auto auto;
  background-color: #3e2723;
  padding: 10px;
  border-radius: 10px;
}
.item {
  background-color: #80cbc4;
  border: 1px solid #fff;
  padding: 20px;
  font-size: 30px;
  text-align: center;
}
```

Và chúng ta sẽ có:

![Grid layout](https://images.viblo.asia/0430efa3-36b7-4a56-8e80-03ccd0904e35.png)

Chúng ta có thể thay đổi kích thước các cột như sau:

**CSS**
```CSS
.container {
  display: grid;
  grid-template-columns: 100px 500px;
}
```

![Grid layout](https://images.viblo.asia/6b66489e-b287-41b0-b950-1004c5f8dbf5.png)

Các bạn có thể tùy biến layout của bạn ở [đây](https://codepen.io/serg-gavel/pen/OzBJpa/).

Tương tự như `display: grid;`, `display: inline-grid;` sẽ khiến tạo một container inline.

**CSS**
```CSS
.container {
  display: inline-grid;
  grid-template-columns: auto auto auto auto;
  background-color: #3e2723;
  padding: 10px;
  border-radius: 10px;
}
.item {
  background-color: #80cbc4;
  border: 1px solid #fff;
  padding: 40px;
  font-size: 30px;
  text-align: center;
}
```

Chúng ta cũng có thể tùy biến được các hàng (rows) một cách đơn giản.

**CSS**
```CSS
.container {
  display: grid;
  grid-template-rows: auto; 
}
```

![Grid layout](https://images.viblo.asia/6b38e9ab-3169-4669-aab0-b55ba4d947c7.png)

**2. Khoảng cách trong Grid - gap**

Chúng ta cũng có thể thay đổi hoảng cách giữa các cột/hàng bằng cách sử dụng một số thuộc tính sau:

**CSS**

```CSS
.container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  
  grid-column-gap: 10px;
  grid-row-gap: 25px;
 
  background-color: #3e2723;
  padding: 10px;
  border-radius: 10px;
}
.item {
  background-color: #80cbc4;
  border: 1px solid #fff;
  padding: 40px;
  font-size: 30px;
  text-align: center;
}
```

Hoặc có thể viết ngắn gọn lại là `grid-gap: 25px 10px;` 

![gap](https://images.viblo.asia/f35faa65-f8f8-4991-b38a-5270b9e815ef.png)

**3. Đường kẻ - line**

Đường kẻ giữa các hàng gọi là row lines, giữa các cột là column lines

![line](https://images.viblo.asia/d1dbacf3-3f2d-4468-b148-a0f48c25f233.png)

Lấy ví dụ nào, chúng ta sẽ để ô 1 và 6 bắt đầu từ column line 1 và kết thúc ở column line 3

**HTML**
```HTML
<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
    <div class="item7">7</div>
</div>
```

**CSS**
```CSS
.container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
  
  background-color: #3e2723;
  padding: 10px;
  border-radius: 10px;
}
.container > div {
  background-color: #80cbc4;
  border: 1px solid #fff;
  padding: 40px;
  font-size: 30px;
  text-align: center;
}
.item1,  .item6 {
  grid-column-start: 1;
  grid-column-end: 3;
  //hoặc có thể viết ngắn hơn bằng "grid-column":
  //grid-column: 1 / 3;
}
```

![line](https://images.viblo.asia/a34f293f-a7e7-4a67-9d7a-a9db76df4fb8.png)

Và với thuộc tính `grid-row`:

**CSS**
```CSS
.item1, .item6 {
   grid-row: 1 / 3;
}
```

![row-column](https://images.viblo.asia/1990827e-5ff2-4124-a257-95b28a288443.png)

**4. Thuộc tính `grid-area`**

Thuộc tính `grid-area` có thể được dùng thay cho các thuộc tính `grid-row-start`, `grid-column-start`, `grid-row-end`, và `grid-column-end`

```HTML
<div class="container">
    <div class="item1">1</div>
    <div class="item2">2</div>
    <div class="item3">3</div>
    <div class="item4">4</div>
    <div class="item5">5</div>
    <div class="item6">6</div>
    <div class="item7">7</div>
    <div class="item8">8</div>
    <div class="item9">9</div>
    <div class="item10">10</div>
    <div class="item11">11</div>
</div>
```

```CSS
.item5 {
  grid-area: 1 / 2 / 5 / 7;
}
```

`item5` sẽ bắt đầu ở row-line 1 và column-line 2, và kết thúc ở row-line 5 và column-line 7. Kết quả: 

![grid-area](https://images.viblo.asia/33b0b71c-4bd8-44b8-9703-c6dfd09d68d8.png)

[Demo](https://codepen.io/serg-gavel/pen/RxeWqe)

**5. Đặt tên cho các item của Grid**

Chúng ta có thể gán tên cho từng item với thuộc tính `grid-area`.

**HTML**
```HTML
<div class="container">
  <div class="item1">Header</div>
  <div class="item2">Left Side</div>
  <div class="item3">Main</div>  
  <div class="item4">Right side</div>
  <div class="item5">Footer</div>
</div>
```
**CSS**
```CSS
.container {
  display: grid;
  grid-template-areas:
    'header header header header header header'
    'menu main main main right right'
    'menu footer footer footer footer footer';
}
.item1 { grid-area: header; }
.item2 { grid-area: menu; }
.item3 { grid-area: main; }
.item4 { grid-area: right; }
.item5 { grid-area: footer; }
```

![name](https://images.viblo.asia/1c8db552-a828-43ec-bbb5-d9abc417b5da.png)

[Demo](https://codepen.io/serg-gavel/pen/wpYMvv)

**6. Poster**

Thông tin về grid layout có thể xem thêm tại [đây](https://css-tricks.com/snippets/css/complete-guide-grid/)

![poster](https://css-tricks.com/wp-content/uploads/2022/02/css-grid-poster.png)

## **II. Flexbox layout**

Thông tin về flexbox layout có thể xem thêm tại [đây](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

![flexbox](https://css-tricks.com/wp-content/uploads/2022/02/css-flexbox-poster.png)

## **III. Media Query**

Media query là một công cụ mạnh mẽ giúp chúng ta có thể tạo ra các trang web responsive.

Nó sử dụng `@media` để xác định các điều kiện cho các kiểu trang web với các khối CSS khác nhau.

Ví dụ, nếu cửa sổ browser có chiều rộng nhỏ hơn 500px, thì hãy thay đổi màu nền của trang web.

```CSS
@media only screen and (max-width: 500px) {
  body {
    background-color: lightblue;
  }
}
```

## **IV. Breakpoint**

Chúng ta có thể thêm các breakpoint để thay đổi thiết kế của trang web theo các kích thước khác nhau:

Ví dụ, khi mà cửa sổ browser nhỏ hơn 768px, mỗi cột sẽ chiếm 100% chiều rộng của cửa sổ browser.

```CSS
/* For desktop: */
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

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }
}
```

Chúng ta có thể thêm nhiều breakpoint cho trang web.

**Always Design for Mobile First**

Mobile First có nghĩa là thiết kế cho mobile trước khi thiết kế cho desktop hoặc bất kỳ thiết bị nào khác (Điều này sẽ làm cho trang web hiển thị nhanh hơn trên các thiết bị nhỏ hơn).

Điều này có nghĩa là chúng ta phải thay đổi một số kiểu CSS của chúng ta.

Thay vì thay đổi kiểu khi chiều rộng nhỏ hơn 768px, chúng ta nên thay đổi thiết kế khi chiều rộng lớn hơn 768px. Điều này sẽ làm cho thiết kế của chúng ta Mobile First:

```CSS
/* For mobile phones: */
[class*="col-"] {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  /* For desktop: */
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
}
```

**Mốt số breakpoint phổ biến**

Có rất nhiều kích thước màn hình khác nhau, và chúng ta không thể tạo breakpoint cho tất cả chúng.

Tuy nhiên, có một số kích thước màn hình phổ biến mà chúng ta có thể sử dụng:

```CSS
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {...}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {...}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {...}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {...}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {...}
```

Có thể thử tại [đây](https://www.w3schools.com/css/tryit.asp?filename=tryresponsive_mediaquery_breakpoints)

## **V. Viewport**

Viewport là khu vực hiển thị nội dung trên màn hình.

<!-- The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

Before tablets and mobile phones, web pages were designed only for computer screens, and it was common for web pages to have a static design and a fixed size.

Then, when we started surfing the internet using tablets and mobile phones, fixed size web pages were too large to fit the viewport. To fix this, browsers on those devices scaled down the entire web page to fit the screen.

This was not perfect!! But a quick fix. 

translate about to Vietnamese-->

Viewport thay đổi theo thiết bị, và sẽ nhỏ hơn trên điện thoại di động so với màn hình máy tính.

Trước khi có máy tính bảng và điện thoại di động, các trang web được thiết kế chỉ cho màn hình máy tính, và việc thiết kế tĩnh và kích thước cố định là phổ biến.

Sau đó, khi chúng ta bắt đầu lướt web bằng máy tính bảng và điện thoại di động, các trang web có kích thước cố định quá lớn để vừa với viewport. Để khắc phục điều này, các trình duyệt trên các thiết bị đó thu nhỏ toàn bộ trang web để vừa với màn hình.

Khác biệt giữa có viewport và không có viewport:
* Một trang web không có thẻ meta viewport sẽ được hiển thị với độ rộng của trang web, không phụ thuộc vào thiết bị.
* Một trang web với thẻ meta viewport sẽ được hiển thị với độ rộng của thiết bị, và với tỷ lệ khung hình cố định.

**Thẻ meta viewport**
```HTML
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**width=device-width** phù hợp với chiều rộng của thiết bị (đừng quên để thẻ meta viewport trong thẻ `<head>`)

**initial-scale=1.0** thiết lập tỷ lệ khung hình của trang web

Ví dụ [trang web không có thẻ meta viewport](https://www.w3schools.com/css/example_withoutviewport.htm):

![image](https://www.w3schools.com/css/img_viewport1.png)

Ví dụ [trang web có thẻ meta viewport](https://www.w3schools.com/css/example_withviewport.htm):

![image](https://www.w3schools.com/css/img_viewport2.png)
