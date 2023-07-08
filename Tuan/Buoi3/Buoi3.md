![title](https://4.bp.blogspot.com/-r47z5CGGzH0/W8GthuPqoyI/AAAAAAAABtI/uk3smW2IRWIQZoZVTtrUIfgZJwC_1DW1ACLcBGAs/s640/responsive_web_for_mobi_600.png)
# [BUỔI 3]:  TÌM HIỂU VỀ DISPLAY VÀ RESPONSIVE
### I.Grid.
#### 1) Grid Intro
**Thuộc tính Display**
Grid layout bao gồm một phần tử cha, với một hoặc nhiều phần tử con.
Phần tử HTML trở thành grid container khi thuộc tính hiển thị của nó được đặt thành grid hoặc inline-grid.
```html
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
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 30px;
        text-align: center;
      }
    </style>
  </head>
  <body>

    <h1>Grid Elements</h1>

    <p>A Grid Layout must have a parent element with the <em>display</em> property set to <em>grid</em> or <em>inline-grid</em>.</p>

    <p>Direct child element(s) of the grid container automatically becomes grid items.</p>

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
Kết quả xem tại đây: https://onecompiler.com/html/

Hãy thử lại code trên với **display: inline-grid;** 
Tất cả các phần tử con trực tiếp của grid container sẽ tự động trở thành các  grid items. 
**Grid Columns, Grid Rows, Grid Gaps**
![title](https://1.bp.blogspot.com/-8wnWYzuj0Qw/XzPKK6SeONI/AAAAAAAALaY/hxedM3zFRGMz5ucO1OdR84iacU6pQSMKwCLcBGAsYHQ/s1028/css-grid-module-new.png)
Bạn có thể điều chỉnh kích thước khoảng cách bằng cách sử dụng một trong các thuộc tính sau:
+ column-gap
+ row-gap
+ gap

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        column-gap: 100px;
        row-gap: 100px;
        grid-template-columns: auto auto auto;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-item {
        background-color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(0, 0, 0, 0.8);
        padding: 20px;
        font-size: 30px;
        text-align: center;
      }
    </style>
  </head>
  <body>

    <h1>The column-gap Property</h1>

    <p>Use the <em>column-gap</em> property to adjust the space between the columns:</p>

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
Kết quả xem tại đây: https://onecompiler.com/html/
Thuộc tính **gap** là thuộc tính tốc ký cho thuộc tính **row-gap** và **column-gap**:
Hãy thử code trên với **gap: 50px 100px;** với 50px, 100px tương ứng với **row-gap** và **column-gap**. Hay có thể rút gọn **gap: 50px;** chỉ định cả 2 thuộc tính đều chung 1 giá trị 50px.

**Grid Lines**
Các dòng giữa các cột được gọi là column lines.
Các dòng giữa các hàng được gọi là row lines.
![title](https://www.w3schools.com/css/grid_lines.png)
```html
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
        grid-column-start: 1;
        grid-column-end: 3;
      }
    </style>
  </head>
  <body>

    <h1>Grid Lines</h1>

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

    <p>You can refer to line numbers when placing grid items.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/

Hãy thay bằng các thuộc tính class item1 với đoạn code sau và xem kết quả
```html
.item1 {
  grid-row-start: 1;
  grid-row-end: 3;
}
```
Vui lòng tham khảo thêm tại  https://www.w3schools.com/css/css_grid.asp

#### 2) Grid Container
**Thuộc tính grid-template-columns**
Thuộc tính grid-template-columns xác định số cột trong bố cục lưới của bạn và nó có thể xác định chiều rộng của mỗi cột.
Giá trị là một danh sách được phân tách bằng dấu cách, trong đó mỗi giá trị xác định chiều rộng của cột tương ứng.
Nếu bạn muốn bố cục lưới của mình chứa 4 cột, hãy chỉ định chiều rộng của 4 cột hoặc "tự động" nếu tất cả các cột phải có cùng chiều rộng.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
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
    </style>
  </head>
  <body>

    <h1>The grid-template-columns Property</h1>

    <p>You can use the <em>grid-template-columns</em> property to specify the number of columns in your grid layout.</p>

    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
      <div>7</div>
      <div>8</div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Lưu ý**: Nếu bạn có nhiều hơn 4 mục trong lưới 4 cột, lưới sẽ tự động thêm một hàng mới để đặt các mục vào.
Thuộc tính grid-template-columns cũng có thể được sử dụng để chỉ định kích thước (chiều rộng) của các cột.
Hãy thử thay thế đoạn code sau
```html
.grid-container {
  display: grid;
  grid-template-columns: 80px 200px auto 40px;
}
```
**Thuộc tính grid-template-rows**
Thuộc tính grid-template-rows xác định chiều cao của mỗi hàng.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;
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
    </style>
  </head>
  <body>

    <h1>The grid-template-rows Property</h1>

    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>

    <p>Use the <em>grid-template-rows</em> property to specify the size (height) of each row.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Thuộc tính just-content**
Thuộc tính **justify-content** được sử dụng để căn chỉnh toàn bộ grid bên trong vùng chứa.
Nào hãy cùng thử lần lượt **justify-content** với
+ space-evenly: cung cấp cho các cột khoảng cách bằng nhau giữa và xung quanh chúng.
+ space-around: cung cấp cho các cột một lượng không gian bằng nhau xung quanh chúng.
+ space-between: cung cấp cho các cột khoảng cách bằng nhau giữa chúng.
+ center: căn chỉnh grid ở giữa vùng chứa.
+ start: căn chỉnh grid ở đầu vùng chứa.
+ end: căn chỉnh grid ở cuối vùng chứa.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        justify-content: space-around;
        grid-template-columns: 50px 50px 50px; /*Make the grid smaller than the container*/
        gap: 10px 10px;
        background-color: #2196F3;
        padding: 10px;
      }

      .grid-container > div {
        background-color: rgba(255, 255, 255, 0.8);
        text-align: center;
        padding: 20px 0;
        font-size: 30px;
      }
    </style>
  </head>
  <body>

    <h1>The justify-content Property</h1>

    <p>Use the <em>justify-content</em> property to align the grid inside the container.</p>

    <p>The value "space-around" will give the columns equal amount of space around them:</p>

    <div class="grid-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
      <div>4</div>
      <div>5</div>
      <div>6</div>  
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Thuộc tính align-content**
Thuộc tính align-content được sử dụng để căn chỉnh toàn bộ lưới bên trong vùng chứa theo chiều dọc.
**Lưu ý**: Tổng chiều cao của lưới phải nhỏ hơn chiều cao của vùng chứa để thuộc tính nội dung căn chỉnh có hiệu lực.
Nào hãy cùng thử lần lượt **align-content** với
+ space-evenly: cung cấp cho các hàng khoảng cách bằng nhau giữa và xung quanh chúng.
+ space-around: cung cấp cho các hàng một lượng không gian bằng nhau xung quanh chúng.
+ space-between: cung cấp cho các hàng khoảng cách bằng nhau giữa chúng.
+ center: căn chỉnh các hàng ở giữa vùng chứa.
+ start: căn chỉnh các hàng ở đầu vùng chứa.
+ end: căn chỉnh các hàng ở cuối vùng chứa.
#### 3) Grid Item
**Child Elements (Items)**
Theo mặc định, vùng chứa có một grid item cho mỗi cột, trong mỗi hàng, nhưng bạn có thể tạo kiểu cho các grid item để chúng trải dài trên nhiều cột và/hoặc hàng.
**Thuộc tính grid-column**
Thuộc tính **grid-column** xác định (các) cột nào sẽ đặt một mục.
Bạn xác định nơi mục sẽ bắt đầu và nơi mục sẽ kết thúc.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
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
        grid-column: 1 / 5;
      }
    </style>
  </head>
  <body>

    <h1>The grid-column Property</h1>

    <p>Use the <em>grid-column</em> property to specify where to place an item.</p>
    <p>Item1 will start on column 1 and end before column 5:</p>

    <div class="grid-container">
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
      <div class="item12">12</div>
      <div class="item13">13</div>
      <div class="item14">14</div>
      <div class="item15">15</div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Lưu ý**: Thuộc tính grid-column là thuộc tính tốc ký cho thuộc tính grid-column-start và grid-column-end.
Để đặt một mục, bạn có thể tham khảo số dòng hoặc sử dụng từ khóa "span" để xác định mục sẽ kéo dài bao nhiêu cột.
Thử lại với 
```html
grid-column: 1 / span 5;
```
Ta thấy từ cột 1 sẽ mở rộng tới cột 5, trong đó grid-column: 1 / 5; chỉ mở rộng tới cột 4
**Thuộc tính grid-row**
Thuộc tính grid-row xác định hàng nào sẽ đặt một mục.
Bạn xác định nơi mục sẽ bắt đầu và nơi mục sẽ kết thúc.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
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
        grid-row: 1 / 4;
      }
    </style>
  </head>
  <body>

    <h1>The grid-row Property</h1>

    <p>Use the <em>grid-row</em> property to specify where to place an item.</p>
    <p>Item1 will start on row-line 1 and end on row-line 4:</p>

    <div class="grid-container">
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
      <div class="item12">12</div>
      <div class="item13">13</div>
      <div class="item14">14</div>
      <div class="item15">15</div>
      <div class="item16">16</div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Lưu ý**: Thuộc tính grid-row là thuộc tính tốc ký cho thuộc tính grid-row-start và grid-row-end.
Để đặt một mục, bạn có thể tham khảo số dòng hoặc sử dụng từ khóa "span" để xác định mục sẽ kéo dài bao nhiêu hàng.
```html
  grid-row: 1 / span 3;
```
**Thuộc tính grid-area**
The grid-area property can be used as a shorthand property for the grid-row-start, grid-column-start, grid-row-end and the grid-column-end properties.
Ví dụ đặt "item8" bắt đầu ở dòng 1 và dòng 2, và kết thúc ở dòng 5 và dòng 6:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto auto auto;
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

      .item8 {
        grid-area: 1 / 2 / 5 / 6;
      }
    </style>
  </head>
  <body>

    <h1>The grid-area Property</h1>

    <p>You can use the <em>grid-area</em> property to specify where to place an item.</p>

    <p>The syntax is:</p>
    <p>grid-row-start / grid-column-start / grid-row-end / grid-column-end.</p>

    <p>Item8 will start on row-line 1 and column-line 2, and end on row-line 5 column-line 6:</p>

    <div class="grid-container">
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
      <div class="item12">12</div>
      <div class="item13">13</div>
      <div class="item14">14</div>
      <div class="item15">15</div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Đặt tên cho các Grid Items**
Thuộc tính grid-area cũng có thể được sử dụng để gán tên cho các grid items.
Các grid items được đặt tên có thể được gọi bằng thuộc tính grid-template-areas của vùng chứa lưới.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .item1 {
        grid-area: myArea;
      }

      .grid-container {
        display: grid;
        grid-template-areas: 'myArea myArea myArea myArea myArea';
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
    </style>
  </head>
  <body>

    <h1>The grid-area Property</h1>

    <p>You can use the <em>grid-area</em> property to name grid items.</p>

    <p>You can refer to the name when you set up the grid layout, by using the <em>grid-template-areas</em> property on the grid container.</p>

    <p>Item1, is called "myArea" and will take up the place of all five columns:</p>

    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Mỗi hàng được xác định bởi dấu nháy đơn (' ')
Các cột trong mỗi hàng được xác định bên trong dấu nháy đơn, được phân tách bằng khoảng trắng.
**Lưu ý**: Dấu chấm đại diện cho một mục lưới không có tên.
Hãy thử với **grid-template-areas: 'myArea myArea . . .';**
Để xác định hai hàng, hãy xác định cột của hàng thứ hai bên trong một tập hợp dấu nháy đơn khác:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .item1 {
        grid-area: myArea;
      }

      .grid-container {
        display: grid;
        grid-template-areas: 'myArea myArea . . .' 'myArea myArea . . .';
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
    </style>
  </head>
  <body>

    <h1>The grid-area Property</h1>

    <p>You can use the <em>grid-area</em> property to name grid items.</p>

    <p>You can refer to the name when you set up the grid layout, by using the <em>grid-template-areas</em> property on the grid container.</p>

    <p>Item1, is called "myArea" and will take up the place of two columns (out of five), and will span two rows:</p>

    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
      <div class="item7">7</div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Đặt tên cho tất cả các mục và tạo mẫu trang web sẵn sàng sử dụng:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .item1 { grid-area: header; }
      .item2 { grid-area: menu; }
      .item3 { grid-area: main; }
      .item4 { grid-area: right; }
      .item5 { grid-area: footer; }

      .grid-container {
        display: grid;
        grid-template-areas:
          'header header header header header header'
          'menu main main main right right'
          'menu footer footer footer footer footer';
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
    </style>
  </head>
  <body>

    <h1>The grid-area Property</h1>

    <p>You can use the <em>grid-area</em> property to name grid items.</p>

    <p>You can refer to the name when you set up the grid layout, by using the <em>grid-template-areas</em> property on the grid container.</p>

    <p>This grid layout contains six columns and three rows:</p>

    <div class="grid-container">
      <div class="item1">Header</div>
      <div class="item2">Menu</div>
      <div class="item3">Main</div>  
      <div class="item4">Right</div>
      <div class="item5">Footer</div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Thứ tự của  Items**
Bố cục lưới cho phép định vị các mục ở bất kỳ đâu chúng ta muốn.
Mục đầu tiên trong mã HTML không nhất thiết phải xuất hiện dưới dạng mục đầu tiên trong lưới.
```html
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

      .item1 { grid-area: 1 / 3 / 2 / 4; }
      .item2 { grid-area: 2 / 3 / 3 / 4; }
      .item3 { grid-area: 1 / 1 / 2 / 2; }
      .item4 { grid-area: 1 / 2 / 2 / 3; }
      .item5 { grid-area: 2 / 1 / 3 / 2; }
      .item6 { grid-area: 2 / 2 / 3 / 3; }
    </style>
  </head>
  <body>

    <h1>Sort the Items</h1>

    <p>The grid items do not have to be displayed in the same order as they are written in the HTML code.</p>

    <div class="grid-container">
      <div class="item1">1</div>
      <div class="item2">2</div>
      <div class="item3">3</div>  
      <div class="item4">4</div>
      <div class="item5">5</div>
      <div class="item6">6</div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
### II. Flexbox.
#### 1) Flexbox
Để bắt đầu sử dụng mô hình Flexbox, trước tiên bạn cần xác định flex container.
Một flex container linh hoạt với ba flex items:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        margin: 10px;
        padding: 20px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>

    <h1>Create a Flex Container</h1>

    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>

    <p>A Flexible Layout must have a parent element with the <em>display</em> property set to <em>flex</em>.</p>

    <p>Direct child elements(s) of the flexible container automatically becomes flexible items.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Flexible Layout phải có phần tử cha với thuộc tính hiển thị được đặt thành flex.
(Các) phần tử con trực tiếp của vùng chứa flexible sẽ tự động trở thành  flexible items.
#### 2) Flex Container
Các thuộc tính của flex container là:
+ flex-direction
+ flex-wrap
+ flex-flow
+ justify-content
+ align-items
+ align-content
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        flex-direction: column;
        background-color: DodgerBlue;
      }

      .flex-container > div {
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

    <h1>The flex-direction Property</h1>

    <p>The "flex-direction: column;" stacks the flex items vertically (from top to bottom):</p>

    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Hãy thử thêm với column-reverse,row,row-reverse
**The flex-wrap Property**
Thuộc tính flex-wrap chỉ định xem các mục flex có nên bọc hay không.
Các ví dụ bên dưới có 12 mục flex, để thể hiện rõ hơn thuộc tính flex-wrap.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        flex-wrap: wrap;
        background-color: DodgerBlue;
      }

      .flex-container > div {
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

    <h1>The flex-wrap Property</h1>

    <p>The "flex-wrap: wrap;" specifies that the flex items will wrap if necessary:</p>

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
      <div>10</div>
      <div>11</div>
      <div>12</div>  
    </div>

    <p>Try resizing the browser window.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Hãy thử với nowrap và wrap-reverse.
**Thuộc tính flex-flow**
Thuộc tính flex-flow là thuộc tính tốc ký để thiết lập cả thuộc tính flex-direction và flex-wrap.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        flex-wrap: wrap;
        background-color: DodgerBlue;
      }

      .flex-container > div {
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

    <h1>The flex-wrap Property</h1>

    <p>The "flex-wrap: wrap;" specifies that the flex items will wrap if necessary:</p>

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
      <div>10</div>
      <div>11</div>
      <div>12</div>  
    </div>

    <p>Try resizing the browser window.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Thuộc tính justify-content**
Thuộc tính justify-content được sử dụng để căn chỉnh các mục linh hoạt.
+ center: căn chỉnh các mục linh hoạt ở giữa vùng chứa.
+ flex-start: căn chỉnh các mục linh hoạt ở đầu vùng chứa (đây là mặc định).
+ flex-end: căn chỉnh các mục linh hoạt ở cuối vùng chứa.
+ space-around: hiển thị các mục linh hoạt có khoảng trắng trước, giữa và sau các dòng.
+ space-between hiển thị các mục linh hoạt có khoảng trắng trước, giữa và sau các dòng.
+ 
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        justify-content: center;
        background-color: DodgerBlue;
      }

      .flex-container > div {
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

    <h1>The justify-content Property</h1>

    <p>The "justify-content: center;" aligns the flex items at the center of the container:</p>

    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>  
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Thuộc tính align-items**
Thuộc tính align-items được sử dụng để căn chỉnh các mục linh hoạt.
+ center: căn chỉnh các mục linh hoạt ở giữa vùng chứa:
+ flex-start: căn chỉnh các mục flex ở trên cùng của vùng chứa:
+ flex-end: căn chỉnh các mục flex ở dưới cùng của vùng chứa:
+ stretch: kéo dài các mục linh hoạt để lấp đầy vùng chứa (đây là giá trị mặc định).
+ baseline căn chỉnh các mục linh hoạt chẳng hạn như căn chỉnh đường cơ sở của chúng:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        height: 200px;
        align-items: baseline;
        background-color: DodgerBlue;
      }

      .flex-container > div {
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
    <h1>The align-items Property</h1>

    <p>The "align-items: baseline;" aligns the flex items such as their baselines aligns:</p>

    <div class="flex-container">
      <div><h1>1</h1></div>
      <div><h6>2</h6></div>
      <div><h3>3</h3></div>  
      <div><small>4</small></div>  
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Thuộc tính Perfect Centering**
Trong ví dụ sau, chúng ta sẽ giải quyết một vấn đề về phong cách rất phổ biến: perfect centering.
**GIẢI PHÁP**: Đặt cả hai thuộc tính justify-content và align-items thành chính giữa và mục flex sẽ được căn giữa hoàn hảo:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 300px;
        background-color: DodgerBlue;
      }

      .flex-container > div {
        background-color: #f1f1f1;
        color: white;
        width: 100px;
        height: 100px;
      }
    </style>
  </head>
  <body>

    <h1>Perfect Centering</h1>

    <p>A flex container with both the justify-content and the align-items properties set to <em>center</em> will align the item(s) in the center (in both axis).</p>

    <div class="flex-container">
      <div></div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
#### 3) Flex Items
Các thuộc tính mục flex là:
+ order: chỉ định thứ tự của flex items.
+ flex-grow: chỉ định mức độ tăng trưởng của một mục flex so với phần còn lại của các mục flex.
+ flex-shrink: chỉ định một mục linh hoạt sẽ co lại bao nhiêu so với phần còn lại của flex items.
+ flex-basis: chỉ định độ dài ban đầu của một flex item.
+ flex: là một thuộc tính tốc ký cho các thuộc tính flex-grow, flex-shrink và flex-basis.
+ align-self: căn chỉnh cho mục đã chọn bên trong vùng chứa linh hoạt,ghi đè căn chỉnh mặc định được đặt bởi thuộc tính align-items của vùng chứa.

**Thuộc tính order**
Mục  flex item đầu tiên trong mã không nhất thiết phải xuất hiện dưới dạng mục đầu tiên trong bố cục.
Giá trị order phải là một số, giá trị mặc định là 0.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        align-items: stretch;
        background-color: #f1f1f1;
      }

      .flex-container>div {
        background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>

    <h1>The order Property</h1>

    <p>Use the order property to sort the flex items as you like:</p>

    <div class="flex-container">
      <div style="order: 3">1</div>
      <div style="order: 2">2</div>
      <div style="order: 4">3</div> 
      <div style="order: 1">4</div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Thuộc tính flex-grow**
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        align-items: stretch;
        background-color: #f1f1f1;
      }

      .flex-container > div {
        background-color: DodgerBlue;
        color: white;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>

    <h1>The flex-grow Property</h1>

    <p>Make the third flex item grow eight times faster than the other flex items:</p>

    <div class="flex-container">
      <div style="flex-grow: 1">1</div>
      <div style="flex-grow: 1">2</div>
      <div style="flex-grow: 8">3</div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Giá trị phải là một số, giá trị mặc định là 0.
**Thuộc tính flex-shrink**
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        align-items: stretch;
        background-color: #f1f1f1;
      }

      .flex-container>div {
        background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>

    <h1>The flex-shrink Property</h1>

    <p>Do not let the third flex item shrink as much as the other flex items:</p>

    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div style="flex-shrink: 0">3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>10</div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Giá trị phải là một số, giá trị mặc định là 1.

**Thuộc tính flex-basis**
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        align-items: stretch;
        background-color: #f1f1f1;
      }

      .flex-container > div {
        background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>

    <h1>The flex-basis Property</h1>

    <p>Set the initial length of the third flex item to 200 pixels:</p>

    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div style="flex-basis:300px">3</div>
      <div>4</div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Thuộc tính flex**
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        align-items: stretch;
        background-color: #f1f1f1;
      }

      .flex-container>div {
        background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>

    <h1>The flex Property</h1>

    <p>Make the third flex item not growable (0), not shrinkable (0), and with an initial length of 200 pixels:</p>

    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div style="flex: 0 0 200px">3</div>
      <div>4</div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Thuộc tính align-self**
Thuộc tính align-self chỉ định căn chỉnh cho mục đã chọn bên trong vùng chứa linh hoạt.
Thuộc tính align-self ghi đè căn chỉnh mặc định được đặt bởi thuộc tính align-items của vùng chứa.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .flex-container {
        display: flex;
        height: 200px;
        background-color: #f1f1f1;
      }

      .flex-container > div {
        background-color: DodgerBlue;
        color: white;
        width: 100px;
        margin: 10px;
        text-align: center;
        line-height: 75px;
        font-size: 30px;
      }
    </style>
  </head>
  <body>

    <h1>The align-self Property</h1>

    <p>The "align-self: center;" aligns the selected flex item in the middle of the container:</p>

    <div class="flex-container">
      <div>1</div>
      <div>2</div>
      <div style="align-self: center">3</div>
      <div>4</div>
    </div>

    <p>The align-self property overrides the align-items property of the container.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Ngoài ra hãy thử với   
```html
  <div style="align-self: flex-start">2</div>
  <div style="align-self: flex-end">3</div>
``` 
### III. Media Queries.
Quy tắc @media, được giới thiệu trong CSS2, giúp xác định các quy tắc kiểu khác nhau cho các loại phương tiện khác nhau.
Ví dụ: Bạn có thể có một bộ quy tắc kiểu cho màn hình máy tính, một cho máy in, một cho thiết bị cầm tay, một cho thiết bị kiểu tivi, v.v.
Thật không may, các loại phương tiện này không bao giờ nhận được nhiều sự hỗ trợ của các thiết bị, ngoài loại phương tiện in.
Truy vấn phương tiện trong CSS3 đã mở rộng ý tưởng về loại phương tiện CSS2: Thay vì tìm kiếm một loại thiết bị, chúng xem xét khả năng của thiết bị.
Truy vấn phương tiện có thể được sử dụng để kiểm tra nhiều thứ, chẳng hạn như:
chiều rộng và chiều cao của khung nhìn
chiều rộng và chiều cao của thiết bị
hướng (máy tính bảng/điện thoại ở chế độ ngang hay dọc?)
nghị quyết
Sử dụng truy vấn phương tiện là một kỹ thuật phổ biến để cung cấp biểu định kiểu phù hợp cho máy tính để bàn, máy tính xách tay, máy tính bảng và điện thoại di động (chẳng hạn như điện thoại iPhone và Android).
**Media Query Syntax**
Truy vấn phương tiện bao gồm một loại phương tiện và có thể chứa một hoặc nhiều biểu thức, các biểu thức này phân giải thành đúng hoặc sai.
```scss
@media not|only mediatype and (expressions) {
  CSS-Code;
}
```
Kết quả của truy vấn là đúng nếu loại phương tiện được chỉ định khớp với loại thiết bị mà tài liệu đang được hiển thị trên đó và tất cả các biểu thức trong truy vấn phương tiện đều đúng. Khi truy vấn phương tiện là true, biểu định kiểu hoặc quy tắc kiểu tương ứng sẽ được áp dụng, tuân theo quy tắc xếp tầng thông thường.
Trừ khi bạn sử dụng toán tử not hoặc only, loại phương tiện là tùy chọn và loại tất cả sẽ được ngụ ý.
Bạn cũng có thể có các biểu định kiểu khác nhau cho các phương tiện khác nhau:

><link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">

**CSS3 Media Types**
| Value  | Description                                                                    |
| ------ | ------------------------------------------------------------------------------ |
| all    | Được sử dụng cho tất cả các thiết bị loại phương tiện                          |
| print  | Dùng cho máy in                                                                |
| screen | Được sử dụng cho màn hình máy tính, máy tính bảng, điện thoại thông minh, v.v. |
| speech | Được sử dụng cho trình đọc màn hình "đọc" trang thành tiếng                    |

**Ví dụ Media Queries** 
Một cách để sử dụng truy vấn phương tiện là có phần CSS thay thế ngay bên trong biểu định kiểu của bạn.

Ví dụ sau thay đổi màu nền thành màu xanh nhạt nếu khung nhìn rộng 480 pixel hoặc rộng hơn (nếu khung nhìn nhỏ hơn 480 pixel, màu nền sẽ là màu hồng):
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: pink;
      }

      @media screen and (min-width: 480px) {
        body {
          background-color: lightgreen;
        }
      }
    </style>
  </head>
  <body>

    <h1>Resize the browser window to see the effect!</h1>
    <p>The media query will only apply if the media type is screen and the viewport is 480px wide or wider.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Ví dụ sau đây cho thấy một menu sẽ nổi ở bên trái của trang nếu chế độ xem rộng 480 pixel hoặc rộng hơn (nếu chế độ xem nhỏ hơn 480 pixel, menu sẽ ở trên cùng của nội dung):
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      .wrapper {overflow: auto;}

      #main {margin-left: 4px;}

      #leftsidebar {
        float: none;
        width: auto;
      }

      #menulist {
        margin: 0;
        padding: 0;
      }

      .menuitem {
        background: #CDF0F6;
        border: 1px solid #d4d4d4;
        border-radius: 4px;
        list-style-type: none;
        margin: 4px;
        padding: 2px;
      }

      @media screen and (min-width: 480px) {
        #leftsidebar {width: 200px; float: left;}
        #main {margin-left: 216px;}
      }
    </style>
  </head>
  <body>

    <div class="wrapper">
      <div id="leftsidebar">
        <ul id="menulist">
          <li class="menuitem">Menu-item 1</li>
          <li class="menuitem">Menu-item 2</li>
          <li class="menuitem">Menu-item 3</li>
          <li class="menuitem">Menu-item 4</li>
          <li class="menuitem">Menu-item 5</li>
        </ul>
      </div>

      <div id="main">
        <h1>Resize the browser window to see the effect!</h1>
        <p>This example shows a menu that will float to the left of the page if the viewport is 480 pixels wide or wider. If the viewport is less than 480 pixels, the menu will be on top of the content.</p>
      </div>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Tham khảo thêm tại : https://www.w3schools.com/css/css3_mediaqueries_ex.asp
### IV. Break point.
Có rất nhiều màn hình và thiết bị có chiều cao và chiều rộng khác nhau, vì vậy rất khó để tạo điểm dừng chính xác cho từng thiết bị. Để giữ cho mọi thứ đơn giản, bạn có thể nhắm mục tiêu năm nhóm phổ biến:
Ví dụ:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      .example {
        padding: 20px;
        color: white;
      }
      /* Extra small devices (phones, 600px and down) */
      @media only screen and (max-width: 600px) {
        .example {background: red;}
      }

      /* Small devices (portrait tablets and large phones, 600px and up) */
      @media only screen and (min-width: 600px) {
        .example {background: green;}
      }

      /* Medium devices (landscape tablets, 768px and up) */
      @media only screen and (min-width: 768px) {
        .example {background: blue;}
      } 

      /* Large devices (laptops/desktops, 992px and up) */
      @media only screen and (min-width: 992px) {
        .example {background: orange;}
      } 

      /* Extra large devices (large laptops and desktops, 1200px and up) */
      @media only screen and (min-width: 1200px) {
        .example {background: pink;}
      }
    </style>
  </head>
  <body>

    <h2>Typical Breakpoints</h2>
    <p class="example">Resize the browser window to see how the background color of this paragraph changes on different screen sizes.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
### V. Viewport.
**Viewport là gì ?**
Khung nhìn là khu vực hiển thị của người dùng trên trang web.
Khung nhìn thay đổi theo thiết bị và sẽ nhỏ hơn trên điện thoại di động so với trên màn hình máy tính.
Trước máy tính bảng và điện thoại di động, các trang web chỉ được thiết kế cho màn hình máy tính và các trang web thường có thiết kế tĩnh và kích thước cố định.
Sau đó, khi chúng tôi bắt đầu lướt internet bằng máy tính bảng và điện thoại di động, các trang web có kích thước cố định quá lớn để vừa với khung nhìn. Để khắc phục điều này, các trình duyệt trên các thiết bị đó đã thu nhỏ toàn bộ trang web để vừa với màn hình.
Điều này không hoàn hảo!! Nhưng nó là một cách hiệu quả nhanh chóng!.
**Cài đặt Viewport**
HTML5 đã giới thiệu một phương pháp cho phép các nhà thiết kế web kiểm soát chế độ xem, thông qua thẻ < meta>.
Bạn nên đưa phần tử khung nhìn < meta> sau vào tất cả các trang web của mình:
><meta name="viewport" content="width=device-width, initial-scale=1.0">

Điều này cung cấp hướng dẫn cho trình duyệt về cách kiểm soát kích thước và tỷ lệ của trang.
Phần width=device-width đặt chiều rộng của trang theo chiều rộng màn hình của thiết bị (sẽ thay đổi tùy theo thiết bị).
Phần initial-scale=1.0 đặt mức thu phóng ban đầu khi trang được trình duyệt tải lần đầu tiên.
Dưới đây là ví dụ về một trang web không có thẻ meta chế độ xem và cùng một trang web có thẻ meta chế độ xem:

[Without the viewport meta tag](https://www.w3schools.com/css/example_withoutviewport.htm)

[With the viewport meta tag](https://www.w3schools.com/css/example_withviewport.htm)

Mẹo: Nếu bạn đang duyệt trang này bằng điện thoại hoặc máy tính bảng, bạn có thể nhấp vào hai liên kết ở trên để thấy sự khác biệt.
### VI. GridView.
Grid-View là gì ?
Nhiều trang web dựa trên chế độ xem dạng lưới, có nghĩa là trang được chia thành các cột:
Sử dụng chế độ xem dạng lưới rất hữu ích khi thiết kế trang web. Nó làm cho việc đặt các phần tử trên trang dễ dàng hơn.
**Xây dựng Responsive Grid-View**
Hãy bắt đầu xây dựng chế độ xem lưới đáp ứng.
Trước tiên, hãy đảm bảo rằng tất cả các thành phần HTML đều có thuộc tính  box-sizing được đặt thành border-box. Điều này đảm bảo rằng phần đệm và đường viền được bao gồm trong tổng chiều rộng và chiều cao của các phần tử.
Thêm đoạn mã sau vào CSS của bạn:
```scss
* {
  box-sizing: border-box;
}
```
Ví dụ sau đây cho thấy một trang web đáp ứng đơn giản, với hai cột:
```html
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
      <p>Resize the browser window to see how the content respond to the resizing.</p>
    </div>

  </body>
</html>
```
### VII. Flexible Media
Cuối cùng nhưng không kém phần quan trọng chính là flexible media. Khi mà viewport thay đổi kích thước thì các đa phương tiện (ảnh, video,..) cũng cần có khả năng thay đổi sao cho phù hợp.
Một cách thông dụng là set width là 100% cùng với height: auto. Khi đó ảnh hoặc video sẽ thay đổi chiều rộng và chiều cao sao cho phù hợp với độ dãn của màn hình.
```css
img {
  width: 100%;
  height: auto;
}
```
Nếu muốn ảnh hoặc video thay đổi theo viewport nhưng không quá kích thước gốc của nó ta có thể sử dụng thuộc tính max-width:
```css
img {
  max-width: 100%;
  height: auto;
}
```

### VIII. SASS Tutorial
Sass là viết tắt của Syntactally Awesome Stylesheet
Sass là một phần mở rộng của CSS
Sass là một bộ tiền xử lý CSS
Sass hoàn toàn tương thích với tất cả các phiên bản CSS
Sass giảm sự lặp lại của CSS và do đó tiết kiệm thời gian
Sass được thiết kế bởi Hampton Catlin và được phát triển bởi Natalie Weizenbaum vào năm 2006
#### 1) Sass Variables
Biến là một cách để lưu trữ thông tin mà bạn có thể sử dụng lại sau này.
Với Sass, bạn có thể lưu trữ thông tin trong các biến, như:
+ strings
+ numbers
+ colors
+ booleans
+ lists
+ nulls

Sass sử dụng ký hiệu $, theo sau là tên, để khai báo các biến:
**Sass Variable Syntax:**
>$variablename: value;

Ví dụ:
```scss
$myFont: Helvetica, sans-serif;
$myColor: red;
$myFontSize: 18px;
$myWidth: 680px;

body {
  font-family: $myFont;
  font-size: $myFontSize;
  color: $myColor;
}

#container {
  width: $myWidth;
}                  
```
Vì vậy, khi tệp Sass được dịch mã, nó sẽ lấy các biến (myFont, myColor, v.v.) và xuất CSS bình thường với các giá trị biến được đặt trong CSS, như sau:

```css
body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: red;
}

#container {
  width: 680px;
}
```
**Phạm vi biến Sass**
Các biến Sass chỉ khả dụng ở cấp độ lồng nhau nơi chúng được xác định.
Nhìn vào ví dụ sau:
```scss
$myColor: red;

h1 {
  $myColor: green;
  color: $myColor;
}

p {
  color: $myColor;
}    
```
Vì vậy, đầu ra CSS sẽ là:
```css
h1 {
  color: green;
}

p {
  color: red;
}
```
Ok, đó là hành vi mặc định cho phạm vi biến.
**Using Sass !global**
Hành vi mặc định cho phạm vi biến có thể được ghi đè bằng cách sử dụng khóa chuyển !global.
!global chỉ ra rằng một biến là toàn cầu, có nghĩa là nó có thể truy cập được ở mọi cấp độ.
Hãy xem ví dụ sau (giống như trên; nhưng có thêm !global):
```scss
$myColor: red;

h1 {
  $myColor: green !global;
  color: $myColor;
}

p {
  color: $myColor;
}                  
```
Bây giờ màu của văn bản bên trong thẻ < p> sẽ là màu xanh lục!
Vì vậy, đầu ra CSS sẽ là:
```css
h1 {
  color: green;
}

p {
  color: green;
}    
```
Mẹo: Các biến toàn cầu nên được xác định bên ngoài bất kỳ quy tắc nào. Sẽ là khôn ngoan nếu xác định tất cả các biến toàn cục trong tệp riêng của nó, có tên là "_globals.scss" và bao gồm tệp bằng từ khóa @include.

#### 2) Sass Nesting
Sass cho phép bạn lồng các bộ chọn CSS theo cách tương tự như HTML.
Xem ví dụ về một số mã Sass cho điều hướng của trang web
```scss
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li {
    display: inline-block;
  }
  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}  
```
Lưu ý rằng trong Sass, bộ chọn ul, li và a được lồng bên trong bộ chọn điều hướng.
Trong CSS, các quy tắc được xác định từng cái một (không lồng nhau):
```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```
Vì bạn có thể lồng các thuộc tính trong Sass, nên nó sạch hơn và dễ đọc hơn CSS tiêu chuẩn.
**Sass Nested Properties**
Nhiều thuộc tính CSS có cùng một tiền tố, như họ phông chữ, cỡ chữ và trọng lượng phông chữ hoặc căn chỉnh văn bản, chuyển đổi văn bản và tràn văn bản.
Với Sass, bạn có thể viết chúng dưới dạng các thuộc tính lồng nhau:
```scss
font: {
  family: Helvetica, sans-serif;
  size: 18px;
  weight: bold;
}

text: {
  align: center;
  transform: lowercase;
  overflow: hidden;
}
```
Trình biên dịch Sass sẽ chuyển đổi phần trên thành CSS bình thường:
```css
font-family: Helvetica, sans-serif;
font-size: 18px;
font-weight: bold;

text-align: center;
text-transform: lowercase;
text-overflow: hidden;
```
#### 3) Sass @import and Partials
**a) Sass Importing Files**
Cũng giống như CSS, Sass cũng hỗ trợ chỉ thị @import.
Chỉ thị @import cho phép bạn đưa nội dung của tệp này vào tệp khác.
Chỉ thị CSS @import có một nhược điểm lớn do các vấn đề về hiệu năng; nó tạo thêm một yêu cầu HTTP mỗi khi bạn gọi nó. Tuy nhiên, chỉ thị Sass @import bao gồm tệp trong CSS; vì vậy không cần thêm cuộc gọi HTTP nào trong thời gian chạy!
Sass Import Syntax:
>@import filename;

Mẹo: Bạn không cần chỉ định phần mở rộng tệp, Sass sẽ tự động giả định rằng bạn muốn nói đến tệp .sass hoặc .scss. Bạn cũng có thể nhập tệp CSS. Chỉ thị @import nhập tệp và mọi biến hoặc mixin được xác định trong tệp đã nhập sau đó có thể được sử dụng trong tệp chính.
Bạn có thể nhập bao nhiêu tệp tùy thích vào tệp chính:
**SCSS Syntax (reset.scss)**:
```scss
@import "variables";
@import "colors";
@import "reset";
```

Hãy xem một ví dụ: Giả sử chúng ta có một tệp đặt lại tên là "reset.scss", trông giống như sau:
**SCSS Syntax (reset.scss)**:
```css
html,
body,
ul,
ol {
  margin: 0;
  padding: 0;
}
```
và bây giờ chúng tôi muốn nhập tệp "reset.scss" vào một tệp khác có tên "standard.scss".
Đây là cách chúng tôi thực hiện: Việc thêm chỉ thị @import ở đầu tệp là điều bình thường; theo cách này, nội dung của nó sẽ có phạm vi toàn cầu:
**SCSS Syntax (standard.scss)**:
```css
@import "reset";

body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: red;
}
```
Vì vậy, khi tệp "chuẩn.css" được dịch mã, CSS sẽ trông như thế này:
```css
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: red;
}
```
**b) Sass Partials**
Theo mặc định, Sass phiên mã trực tiếp tất cả các tệp .scss. Tuy nhiên, khi bạn muốn nhập một tệp, bạn không cần phải phiên mã tệp trực tiếp.
Sass có một cơ chế cho việc này: Nếu bạn bắt đầu tên tệp bằng dấu gạch dưới, Sass sẽ không phiên mã nó. Các tệp được đặt tên theo cách này được gọi là partials trong Sass.
Vì vậy, một phần tệp Sass được đặt tên với dấu gạch dưới hàng đầu:
**Sass Partial Syntax:**
> _filename;

Ví dụ sau hiển thị một phần tệp Sass có tên "_colors.scss". (Tệp này sẽ không được dịch trực tiếp sang "colors.css"):
Ví dụ: "_colors.scss":
```scss
$myPink: #EE82EE;
$myBlue: #4169E1;
$myGreen: #8FBC8F;
```
Bây giờ, nếu bạn nhập tệp một phần, hãy bỏ qua dấu gạch dưới. Sass hiểu rằng nó nên nhập tệp "_colors.scss":
```css
@import "colors";

body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: $myBlue;
}
```
#### 4) Sass @mixin and @include
**a) Sass Mixins**
Lệnh @mixin cho phép bạn tạo mã CSS để sử dụng lại trên toàn bộ trang web.
Chỉ thị @include được tạo để cho phép bạn sử dụng (bao gồm) mixin.
**Định nghĩa Mixin**
Một mixin được xác định bằng chỉ thị @mixin.
Sass @mixin Syntax:
>@mixin name {
  property: value;
  property: value;
  ...
}

Ví dụ sau tạo một mixin có tên là "văn bản quan trọng":
```scss
@mixin important-text {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}
```
Mẹo: Mẹo về dấu gạch nối và dấu gạch dưới trong Sass: Dấu gạch nối và dấu gạch dưới được coi là giống nhau. Điều này có nghĩa là @mixin important-text { } và @mixin important_text { } được coi là cùng một mixin!
**Using a Mixin**
Chỉ thị @include được sử dụng để bao gồm một mixin.
```scss
selector {
  @include mixin-name;
}
```
Vì vậy, để bao gồm mixin văn bản quan trọng được tạo ở trên:
```scss
.danger {
  @include important-text;
  background-color: green;
}
```
Trình biên dịch Sass sẽ chuyển đổi phần trên thành CSS bình thường:
```css
.danger {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
  background-color: green;
}
```
Một mixin cũng có thể bao gồm các mixin khác:
```scss
@mixin special-text {
  @include important-text;
  @include link;
  @include special-border;
}
```
**Truyền biến cho Mixin**
Mixins chấp nhận đối số. Bằng cách này, bạn có thể chuyển các biến vào một mixin.
Đây là cách xác định một mixin với các đối số:
Ví dụ;
```scss
/* Define mixin with two arguments */
@mixin bordered($color, $width) {
  border: $width solid $color;
}

.myArticle {
  @include bordered(blue, 1px);  // Call mixin with two values
}

.myNotes {
  @include bordered(red, 2px); // Call mixin with two values
}   
```
Kết quả:
```css
.myArticle {
  border: 1px solid blue;
}

.myNotes {
  border: 2px solid red;
}  
```
**Giá trị mặc định cho Mixin**
Cũng có thể xác định các giá trị mặc định cho các biến mixin:
**SCSS Syntax:**
>@mixin bordered($color: blue, $width: 1px) {
  border: $width solid $color;
}
Sau đó, bạn chỉ cần chỉ định các giá trị thay đổi khi bạn bao gồm mixin:
```scss
.myTips {
  @include bordered($color: orange);
}
```
**Sử dụng Mixin cho tiền tố nhà cung cấp**
Một cách sử dụng tốt khác của mixin là dành cho các tiền tố của nhà cung cấp.
Đây là một ví dụ cho chuyển đổi:
```scss
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}

.myBox {
  @include transform(rotate(20deg));
}
```
Sau khi biên dịch, CSS sẽ trông như thế này:
```css
.myBox {
  -webkit-transform: rotate(20deg);
  -ms-transform: rotate(20deg);
  transform: rotate(20deg);
}
```
#### 5) Sass @extend and Inheritance
Chỉ thị @extend cho phép bạn chia sẻ một tập hợp các thuộc tính CSS từ bộ chọn này sang bộ chọn khác.

Chỉ thị @extend rất hữu ích nếu bạn có các phần tử được tạo kiểu gần như giống hệt nhau chỉ khác nhau ở một số chi tiết nhỏ.

Ví dụ Sass sau trước tiên tạo một kiểu cơ bản cho các nút (kiểu này sẽ được sử dụng cho hầu hết các nút). Sau đó, chúng tôi tạo một kiểu cho nút "Báo cáo" và một kiểu cho nút "Gửi". Cả nút "Báo cáo" và "Gửi" đều kế thừa tất cả các thuộc tính CSS từ lớp .button-basic, thông qua chỉ thị @extend. Ngoài ra, chúng có màu sắc riêng được xác định:
```scss
.button-basic  {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button-report  {
  @extend .button-basic;
  background-color: red;
}

.button-submit  {
  @extend .button-basic;
  background-color: green;
  color: white;
}
```
Sau khi biên dịch, CSS sẽ trông như thế này:
```css
.button-basic, .button-report, .button-submit {
  border: none;
  padding: 15px 30px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
}

.button-report  {
  background-color: red;
}

.button-submit  {
  background-color: green;
  color: white;
}
```





