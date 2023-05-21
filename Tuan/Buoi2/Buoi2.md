![title](https://wallpaperaccess.com/full/1631874.jpg)
# [BUỔI 2]: CSS

### I.Các cách style cho file HTML.
#### 1) Chức năng của thuộc tính style
Thuộc tính kiểu HTML được sử dụng để thêm kiểu cho một phần tử, chẳng hạn như màu sắc, phông chữ, kích thước, v.v.
#### 2) Cách sử dụng thuộc tính style
Để sử dụng thuộc tính style thì chúng ta đặt nó vào bên trong thẻ mở của phần tử mà mình muốn định dạng với cú pháp như sau:
```html
style="property:value"
```
Trong đó:

| Property                                                                                                                                                                              | Value                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| - Là một thuộc tính CSS dùng để đại diện cho đặc điểm (kiểu dáng) mà bạn muốn định dạng cho phần tử, ví dụ như:color (màu chữ), font-size (kích cỡ chữ), font-family (kiểu phông chữ) | - Là giá trị mà các bạn muốn gán cho thuộc tính CSS, ví dụ như:Để định dạng chữ màu tím thì chúng ta phải gán cho thuộc tính color giá trị violet, để định dạng chữ màu đỏ thì chúng ta phải gán cho thuộc tính color giá trị red, để định dạng chữ màu nâu thì chúng ta phải gán cho thuộc tính color giá trị brown |
Ví dụ: Thiết lập chữ màu đỏ cho phần tử < h1>
```html
<!DOCTYPE html>
<html>
<head>
	<title>Xem ví dụ</title>
	<meta charset="utf-8">
</head>
<body>
	<h1 style="color:red">Hello</h1>
</body>
</html>
```
Xem kết quả: https://webcoban.vn/html/demo?file=3448
**Lưu ý**: Để thiết lập nhiều thuộc tính CSS cho một phần tử thì chúng ta _đặt nhiều cặp_ property:value bên trong giá trị của thuộc tính style. Tuy nhiên, các bạn cần phải nhớ thêm một dấu chấm phẩy ngăn cách giữa các cặp property:value
Ví dụ:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Xem ví dụ</title>
	<meta charset="utf-8">
</head>
<body>
	<p style="font-family:cursive;font-size:55px;color:violet">Hello</p>
</body>
</html>
```
Xem kết quả: https://webcoban.vn/html/demo?file=3449
### II. CSS selectors.
####1. CSS selectors là gì ?
 -**CSS selectors** được sử dụng để "tìm" (hoặc chọn) các phần tử HTML mà bạn muốn tạo kiểu.
 Chúng ta có thể chia CSS selectors thành năm loại:
 + Simple selectors (chọn các phần tử dựa trên tên, id, lớp)
 + Combinator selectors (chọn các phần tử dựa trên mối quan hệ cụ thể giữa chúng)
 + Pseudo-class selectors (chọn các phần tử dựa trên một trạng thái nhất định)
 + Pseudo-elements selectors (chọn và tạo kiểu cho một phần của phần tử)
 + Attribute selectors (chọn các phần tử dựa trên thuộc tính hoặc giá trị thuộc tính)
 
**a) Name selector**
Ví dụ:
Tại đây, tất cả các phần tử < p> trên trang sẽ được căn giữa với màu văn bản là đỏ:
```html
<!DOCTYPE html>
    <html>
    <head>
        <style>
            p {
            text-align: center;
            color: blue;
            } 
        </style>
    </head>
    <body>
        <p>Every paragraph will be affected by the style.</p>
        <p id="para1">Me too!</p>
        <p>And me!</p>
    </body>
</html>
```
Xem kết quả tại đây : https://onecompiler.com/html/3z95xa7fx

**b) ID selector.**
Id của một phần tử là duy nhất trong một trang, vì vậy bộ chọn id được sử dụng để chọn một phần tử duy nhất!
Để chọn một phần tử có id cụ thể, hãy viết ký tự băm (#), theo sau là id của phần tử.
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        #para1 {
        text-align: center;
        color: red;
        }
    </style>
</head>
    <body>
        <p id="para1">Hello World!</p>
        <p>This paragraph is not affected by the style.</p>
    </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/3z95xa7fx
**Lưu ý**: _Tên id không được bắt đầu bằng số!_
**c) Class selector.** 
Để chọn các phần tử với một lớp cụ thể, hãy viết ký tự dấu chấm (.), theo sau là tên lớp.
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        .center {
        text-align: center;
        color: red;
        }
    </style>
</head>
<body>
    <h1 class="center">Red and center-aligned heading</h1>
    <p class="center">Red and center-aligned paragraph.</p> 
</body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/3z95xa7fx
Bạn cũng có thể chỉ định rằng chỉ các phần tử HTML cụ thể mới bị ảnh hưởng bởi một lớp.
Ví dụ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p.center {
        text-align: center;
        color: red;
      }
    </style>
  </head>
  <body>

    <h1 class="center">This heading will not be affected</h1>
    <p class="center">This paragraph will be red and center-aligned.</p> 

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/3z95xa7fx
**d) Universal selector**
Quy tắc CSS sẽ ảnh hưởng đến mọi phần tử HTML trên trang.

Ví dụ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      * {
        text-align: center;
        color: blue;
      }
    </style>
  </head>
  <body>

    <h1>Hello world!</h1>

    <p>Every element on the page will be affected by the style.</p>
    <p id="para1">Me too!</p>
    <p>And me!</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/3z95xa7fx
**e) Grouping Selector**
Nếu như có một số element có cùng thuộc tính ta sẽ có cách khai báo sau
Ví dụ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1, h2, p {
        text-align: center;
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <h2>Smaller heading!</h2>
    <p>This is a paragraph.</p>
  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/3z95xa7fx

Tham khảo thêm tại :https://www.w3schools.com/cssref/css_selectors.php
### III. Độ ưu tiên, các loại đơn vị độ dài trong CSS.
**1. Mức độ ưu tiên trong CSS**
Lấy ví dụ là khi màu chữ của một phần tử HTML được quy định bởi nhiều luật CSS khác nhau, khi đó sẽ chỉ có 1 luật duy nhất được chọn để áp dụng. Hãy thử xem ví dụ dưới đây.
```html
<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Choice</title>
      <style>
        #unique { color: green; }
        .grouped { color: blue; }
        h1 { color: red; }
      </style>
   </head>
   <body>
      <h1 id="unique" class="grouped">
         Tôi nên chọn Đỏ, Xanh Lá, hay Xanh Dương?
      </h1>
   </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/3z95xa7fx

Thông thường thì các tệp CSS sẽ được duyệt từ trên xuống và luật CSS cuối cùng sẽ được chọn để áp dụng thay vì các luật CSS ở phía trên. Tuy nhiên, do các bộ chọn khác nhau lại có những mức độ ưu tiên khác nhau và điều này sẽ ảnh hưởng đến kết quả hiển thị -
+ Bộ chọn id có mức ưu tiên cao nhất
+ Bộ chọn class có mức ưu tiên cao hơn so với các bộ chọn cơ bản
+ Bộ chọn cơ bản ....

**Mức ưu tiên đặc biệt**
Chúng ta cũng có thể khiến 1 luật CSS trở thành rất rất quan trọng bằng cách gắn thêm !important vào phía sau nó.

Từ khóa này sẽ không quan tâm đến các bộ chọn. Nó chỉ đơn giản là sẽ khiến phần tử HTML được chọn cảm thấy luật CSS đó rất quan trọng và ưu tiên sử dụng luật này so với tất cả các lựa chọn khác.

Vẫn là đoạn code trên ta chỉ thêm thuộc tính !important vào thẻ < h> có mức độ ưu tiên thấp nhất trong 3 loại

```html
<!doctype html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Choice</title>
      <style>
        #unique { color: green; }
        .grouped { color: blue; }
        h1 { color: red !important; }
      </style>
   </head>
   <body>
      <h1 id="unique" class="grouped">
         Tôi nên chọn Đỏ, Xanh Lá, hay Xanh Dương?
      </h1>
   </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/3z95xa7fx
**2. Các loại đơn vị độ dài trong CSS.**
CSS có một số đơn vị khác nhau để thể hiện độ dài.
Nhiều thuộc tính CSS nhận các giá trị “chiều dài”, chẳng hạn như width, margin, padding, font-size,v.v.
Độ dài là một số theo sau là đơn vị độ dài, chẳng hạn như 10px, 2em, v.v.
Khoảng trắng không thể xuất hiện giữa số và đơn vị. Tuy nhiên, nếu giá trị là 0, đơn vị có thể được bỏ qua.
Đối với một số thuộc tính CSS, độ dài âm được phép.
Có hai loại đơn vị độ dài: tuyệt đối(absolute) và tương đối(relative).
**a) Độ dài tuyệt đối – Absolute Lengths**
Các đơn vị độ dài tuyệt đối là cố định và độ dài được biểu thị bằng bất kỳ đơn vị nào trong số này sẽ xuất hiện chính xác như kích thước đó.

Đơn vị độ dài tuyệt đối không được khuyến khích sử dụng trên màn hình, vì kích thước màn hình thay đổi rất nhiều. Tuy nhiên, chúng có thể được sử dụng nếu phương tiện đầu ra được biết, chẳng hạn như cho bố cục in.

| Unit(đơn vị) | Mô tả                        |
| ------------ | ---------------------------- |
| cm           | centimeters                  |
| mm           | millimeters                  |
| in           | inches (1in = 96px = 2.54cm) |
| px *         | pixels (1px = 1/96th of 1in) |
| pt           | points (1pt = 1/72 of 1in)   |
| pc           | picas (1pc = 12 pt)          |

Điểm ảnh (px) có liên quan đến thiết bị xem. Đối với các thiết bị dpi thấp, 1px là một pixel thiết bị (chấm) của màn hình. Đối với máy in và màn hình có độ phân giải cao, 1px ngụ ý nhiều pixel thiết bị.

**b) Độ dài tương đối – Relative Lengths**
Đơn vị độ dài tương đối chỉ định độ dài liên quan đến thuộc tính độ dài khác. Các đơn vị độ dài tương đối chia tỷ lệ tốt hơn giữa các phương tiện kết xuất khác nhau.
| Unit  | Mô tả                                                                                                    |
| ----- | -------------------------------------------------------------------------------------------------------- |
| em    | Liên quan đến kích thước phông chữ của phần tử (2em có nghĩa là 2 lần kích thước của phông chữ hiện tại) |
| ex    | Liên quan đến chiều cao x của phông chữ hiện tại (hiếm khi được sử dụng)                                 |
| ch    | Tương đối với chiều rộng của “0” (không)                                                                 |
| rem   | Liên quan đến kích thước phông chữ của phần tử gốc                                                       |
| vw    | Tương đối với 1% chiều rộng của viewport *                                                               |
| vh    | Tương đối với 1% chiều cao của viewport *                                                                |
| vmin  | Tương đối với 1% kích thước nhỏ hơn của viewport *                                                       |
| vmax. | Tương đối với 1% kích thước lớn hơn của viewport *                                                       |
| %     | Liên quan đến phần tử cha                                                                                |
**Mẹo**: _Các đơn vị em và rem rất thiết thực trong việc tạo bố cục có thể mở rộng hoàn hảo!_ *Viewport = kích thước cửa sổ trình duyệt. Nếu khung nhìn rộng 50cm, 1vw = 0,5cm.
### IV. Float, box model.
**1, Thuộc tính float**
Thuộc tính float được sử dụng để định vị và định dạng nội dung, ví dụ: để một hình ảnh nổi bên trái văn bản trong một vùng chứa.
**Thuộc tính float có thể có một trong các giá trị sau:**
+ left - Phần tử nổi ở bên trái vùng chứa của nó
+ right - Phần tử nổi ở bên phải vùng chứa của nó
+ none - Phần tử không trôi nổi (sẽ được hiển thị ngay tại nơi nó xuất hiện trong văn bản). Đây là mặc định
kế thừa - Phần tử kế thừa giá trị float của cha mẹ nó

Trong cách sử dụng đơn giản nhất, thuộc tính float có thể được sử dụng để bọc văn bản xung quanh hình ảnh.

Ví du: float: right;

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            img {
            float: right;
            }
        </style>
    </head>
    <body>
        <h2>Float Right</h2>
        <p>In this example, the image will float to the right in the paragraph, and the text in the paragraph will wrap around the image.</p>
        <p><img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/347558242_1264270097533532_2026614177448701289_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=nlWWzEpTW5sAX9GnSQ5&_nc_ht=scontent.fhan2-3.fna&oh=00_AfC9nx0H6HAXyfwsxXHRpzSHrwHq8SyHuqs8xjL-YcR8GA&oe=646DD850" alt="Pineapple" style="width:170px;height:170px;margin-left:15px;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p>
    </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/3z95xa7fx

Ví du: float: left;

Vẫn với mã nguồn trên ta chỉ thay đổi thuộc tính float:left

```html
<!DOCTYPE html>
<html>
    <head>
        <style>
            img {
            float: left;
            }
        </style>
    </head>
    <body>
        <h2>Float Right</h2>
        <p>In this example, the image will float to the right in the paragraph, and the text in the paragraph will wrap around the image.</p>
        <p><img src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/347558242_1264270097533532_2026614177448701289_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=nlWWzEpTW5sAX9GnSQ5&_nc_ht=scontent.fhan2-3.fna&oh=00_AfC9nx0H6HAXyfwsxXHRpzSHrwHq8SyHuqs8xjL-YcR8GA&oe=646DD850" alt="Pineapple" style="width:170px;height:170px;margin-left:15px;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Mauris ante ligula, facilisis sed ornare eu, lobortis in odio. Praesent convallis urna a lacus interdum ut hendrerit risus congue. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta. Cras ac leo purus. Mauris quis diam velit.</p>
    </body>
</html>
```

Kết quả xem tại đây: https://onecompiler.com/html/3z95xa7fx

Thông thường các phần tử div sẽ được hiển thị chồng lên nhau. Tuy nhiên, nếu chúng ta sử dụng float: left, chúng ta có thể để các phần tử float cạnh nhau:
Ví dụ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        float: left;
        padding: 15px; 
      }

      .div1 {
        background: red;
      }

      .div2 {
        background: yellow;
      }

      .div3 {
        background: green;
      }
    </style>
  </head>
  <body>

    <h2>Float Next To Each Other</h2>

    <p>In this example, the three divs will float next to each other.</p>

    <div class="div1">Div 1</div>
    <div class="div2">Div 2</div>
    <div class="div3">Div 3</div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/3z95xa7fx
**2, Box model**
Mô hình hộp CSS về cơ bản là một hộp bao quanh mọi phần tử HTML. Nó bao gồm: lề(margins), đường viền(borders), phần đệm ( padding) và nội dung thực tế (actual content). Hình ảnh dưới đây minh họa mô hình hộp:

![title](https://th.bing.com/th/id/R.dd8860e4d9e7d5d689c3af4d57640b9e?rik=mC1ShSGkm8vn6w&riu=http%3a%2f%2fgiaiphaptot.com%2fupload%2f_thumbs%2fImages%2fbox-model.png&ehk=XbI5D%2bHb2fDuZKY7QiXbUhmujPtHSpZ1PycdKcL6mgg%3d&risl=&pid=ImgRaw&r=0)

Giải thích về các phần khác nhau:
+ **Content** - Nội dung của hộp, nơi văn bản và hình ảnh xuất hiện
+ **Padding** - Xóa một khu vực xung quanh nội dung. Phần đệm trong suốt
+ **Border** - Đường viền bao quanh phần đệm và nội dung
+ **Margin** - Xóa vùng bên ngoài đường viền. Biên độ trong suốt

Box model cho phép chúng ta thêm đường viền xung quanh các phần tử và xác định khoảng cách giữa các phần tử
Ví dụ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        background-color: lightgrey;
        width: 300px;
        border: 15px solid green;
        padding: 50px;
        margin: 50px;
      }
    </style>
  </head>
  <body>

    <h2>Demonstrating the Box Model</h2>

    <p>The CSS box model is essentially a box that wraps around every HTML element. It consists of: borders, padding, margins, and the actual content.</p>

    <div>This text is the content of the box. We have added a 50px padding, 20px margin and a 15px green border. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Chiều rộng và chiều cao của một phần tử**
Để đặt chiều rộng và chiều cao của phần tử một cách chính xác trong tất cả các trình duyệt, bạn cần biết  box model hoạt động như thế nào.
**Chú ý**: Khi bạn đặt thuộc tính chiều rộng và chiều cao của phần tử bằng CSS, bạn chỉ cần đặt chiều rộng và chiều cao của vùng nội dung. Để tính kích thước đầy đủ của một phần tử, bạn cũng phải thêm phần đệm, đường viền và lề.

Ví dụ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        width: 170px;
        padding: 10px;
        border: 5px solid gray;
        margin: 0;
      }
    </style>
    <meta charset="UTF-8">
  </head>
  <body>

    <h2>Calculate the total width:</h2>

    <img src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.6435-9/178084262_1085270642003408_4539574816671357937_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=ad2b24&_nc_ohc=riqrUBvIS2gAX9zuum7&_nc_oc=AQmJXTFOLBQrHNqAnFrE6s76dkUpp9m_K-dE5qNyLydybwEug31WLJC6ougkisHOLWigHPP95Gi7O-QOkhYttHIv&_nc_ht=scontent.fhan2-4.fna&oh=00_AfBmSo0dqNRYj2RAdr9A_Gh-TZvF15rS2nLb3FENsX3JMw&oe=649060AC" 
    width="200" 
    height="263" 
    alt="Klematis">
    <div>Truy nã 100k</div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Chúng ta có thể tính toán như sau: 170px (width) + 20px (left + right padding) + 10px (left + right border) + 0px (left + right margin) = 200px
**Tổng chiều rộng của một phần tử nên được tính như sau**:
Tổng chiều rộng phần tử = chiều rộng( width) + đệm trái(left padding) + đệm phải(right padding) + viền trái( left border) + viền phải(right border) + lề trái(left margin) + lề phải(right margin).
**Tổng chiều cao của một phần tử nên được tính như sau:**
Tổng chiều cao phần tử = chiều cao(height) + phần đệm( top padding )trên + phần đệm dưới(bottom padding ) + viền trên(top border) + viền dưới(bottom border) + lề trên(top margin) + lề dưới(bottom margin).
###V. Các loại position, z-index trong CSS.
**1. Các loại potision**
Thuộc tính vị trí chỉ định loại phương pháp định vị được sử dụng cho một element  (static, relative, fixed, absolute or sticky).
Có năm giá trị vị trí khác nhau
+ static
+ relative
+ fixed
+ absolute
+ sticky

Các phần tử sau đó được định vị bằng cách sử dụng các thuộc tính trên cùng, dưới cùng, bên trái và bên phải. Tuy nhiên, các thuộc tính này sẽ không hoạt động trừ khi thuộc tính vị trí được đặt trước. Chúng cũng hoạt động khác nhau tùy thuộc vào giá trị vị trí.
**a) static position**
Các phần tử HTML được định vị tĩnh theo mặc định.
Các phần tử được định vị tĩnh không bị ảnh hưởng bởi các thuộc tính trên, dưới, trái và phải.
Một phần tử có vị trí: tĩnh; không được định vị theo bất kỳ cách đặc biệt nào; nó luôn được định vị theo quy trình bình thường của trang:
Ví dụ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div.static {
        position: static;
        border: 3px solid #73AD21;
      }
    </style>
  </head>
  <body>

    <h2>position: static;</h2>

    <p>An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:</p>

    <div class="static">
      This div element has position: static;
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/

Đối với static position, ta không thể sử dụng được left hay right,...nói chung ta không thể di chuyển thẻ div.
**b) relative position**
Một phần tử có vị trí: tương đối; được định vị so với vị trí bình thường của nó.
Đặt các thuộc tính top, right, bottom và left của một phần tử được định vị tương đối sẽ khiến nó bị điều chỉnh khỏi vị trí bình thường. Nội dung khác sẽ không được điều chỉnh để phù hợp với bất kỳ khoảng trống nào do phần tử để lại.
Nào hãy thử lại với ví dụ trên bằng relative position, ta có thể sử dụng left:30px,
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div.static {
        position: relative;
        left: 30px;
        border: 3px solid #73AD21;
      }
    </style>
  </head>
  <body>

    <h2>position: static;</h2>

    <p>An element with position: static; is not positioned in any special way; it is always positioned according to the normal flow of the page:</p>

    <div class="static">
      This div element has position: static;
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/

Giờ thì thẻ div đã dịch chuyển sang trái
**c) fixed position**
Một phần tử có vị trí: cố định; được định vị so với khung nhìn, có nghĩa là nó luôn ở cùng một vị trí ngay cả khi trang được cuộn. Các thuộc tính top, right, bottom và left được sử dụng để định vị phần tử.
Phần tử cố định không để lại khoảng trống trên trang mà nó thường được đặt.
Ví dụ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div.fixed {
        position: fixed;
        bottom: 0;
        right: 0;
        width: 300px;
        border: 3px solid #73AD21;
      }

      body {
        min-height: 100vh; /* Đặt chiều cao tối thiểu cho body là 100% chiều cao của viewport */
        overflow-y: auto; /* Hiển thị thanh cuộn dọc nếu nội dung vượt quá chiều cao của viewport */
      }
    </style>
  </head>
  <body>

    <h2>position: fixed;</h2>

    <p>An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled:</p>

    <div class="fixed">
      This div element has position: fixed;
    </div>

    <!-- Tạo nội dung dài để tạo điều kiện cuộn -->
    <div style="height: 2000px;">
      Long content
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/

**d) absolute position**
Một phần tử có vị trí: tuyệt đối; được định vị so với tổ tiên được định vị gần nhất (thay vì được định vị so với chế độ xem, như cố định).
Tuy nhiên, nếu một phần tử được định vị tuyệt đối không có tổ tiên được định vị, nó sẽ sử dụng phần thân tài liệu và di chuyển cùng với việc cuộn trang.
Lưu ý: Các phần tử được định vị tuyệt đối bị xóa khỏi luồng thông thường và có thể chồng lấp các phần tử.
Đây là một ví dụ đơn giản:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div.relative {
        position: relative;
        width: 400px;
        height: 200px;
        border: 3px solid #73AD21;
      } 

      div.absolute {
        position: absolute;
        top: 80px;
        right: 0;
        width: 200px;
        height: 100px;
        border: 3px solid #73AD21;
      }
      body.bd{
      	position:static;border: 3px solid #73AD21;
      }
    </style>
  </head>
  <body class="bd">

    <h2>position: absolute;</h2>

    <p>An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed):</p>

    <div class="relative">This div element has position: relative;
      <div class="absolute">This div element has position: absolute;</div>
    </div>

  </body>
</html>
```

Kết quả xem tại đây: https://onecompiler.com/html/
_Hãy thử thay position trong thẻ div có class "relative" thành static, ta thấy giờ đây thẻ div có class "relative" đã không còn là cha gần nhất của thẻ div  có class="absolute", vì vậy div  có class="absolute" sẽ tìm thẻ tổ tiên gần nhất tiếp theo là thẻ < body>, vì body thiết lập thuộc tính position  là static nên nó bỏ qua, và cuối cùng nó tìm đến thẻ < html> cũng là chính là thẻ cuối cùng và nó sẽ căn lề theo viewport._

**e) sticky position**
Một phần tử có vị trí: sticky; được định vị dựa trên vị trí cuộn của người dùng.
Phần tử dính chuyển đổi giữa tương đối và cố định, tùy thuộc vào vị trí cuộn. Nó được định vị tương đối cho đến khi một vị trí bù nhất định được đáp ứng trong chế độ xem - sau đó nó "dính" vào vị trí (như vị trí: cố định).
Lưu ý: Internet Explorer không hỗ trợ định vị cố định. Safari yêu cầu tiền tố -webkit- (xem ví dụ bên dưới). Bạn cũng phải chỉ định ít nhất một trong các vị trí trên, phải, dưới hoặc trái để định vị cố định hoạt động.
Đây là ví dụ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div.sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        padding: 5px;
        background-color: #cae8ca;
        border: 2px solid #4CAF50;
      }
    </style>
  </head>
  <body>

    <p>Try to <b>scroll</b> inside this frame to understand how sticky positioning works.</p>

    <div class="sticky">I am sticky!</div>

    <div style="padding-bottom:2000px">
      <p>In this example, the sticky element sticks to the top of the page (top: 0), when you reach its scroll position.</p>
      <p>Scroll back up to remove the stickyness.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
      <p>Some text to enable scrolling.. Lorem ipsum dolor sit amet, illum definitiones no quo, maluisset concludaturque et eum, altera fabulas ut quo. Atqui causae gloriatur ius te, id agam omnis evertitur eum. Affert laboramus repudiandae nec et. Inciderint efficiantur his ad. Eum no molestiae voluptatibus.</p>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**2.  Z-index**
Chúng ta biết rằng vấn đề chồng lấn trong 1 trang web là không thể tránh khỏi.
Thuộc tính z-index chỉ định thứ tự ngăn xếp của một phần tử (phần tử nào sẽ được đặt ở phía trước hoặc phía sau các phần tử khác).
Một phần tử có thể có thứ tự ngăn xếp dương hoặc âm:
Ví dụ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      img {
        position: absolute;
        left: 0px;
        top: 0px;
        z-index: -1;
      }
    </style>
  </head>
  <body>

    <h1>This is a heading</h1>
    <img src="img_tree.png">
    <p>Because the image has a z-index of -1, it will be placed behind the text.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/

**<span style="color: red;">Lưu ý</span>:** 
      + Z-index chỉ hoạt động trên các phần tử được định vị (vị trí: tuyệt đối(absolute), vị trí: tương đối(relative), vị trí: cố định (fixed) hoặc vị trí: dính(sticky)) và các mục flex (các phần tử là phần tử con trực tiếp của phần tử display: flex).
      + Nếu hai phần tử được định vị chồng lên nhau mà không có Z-index được chỉ định, thì phần tử được xác định cuối cùng trong mã HTML sẽ được hiển thị ở trên cùng.
### VI. Các loại display trong CSS.
Display là thuộc tính CSS quan trọng nhất để kiểm soát bố cục.
Ghi đè giá trị hiển thị mặc định
Như đã đề cập, mọi phần tử đều có giá trị hiển thị mặc định. Tuy nhiên, bạn có thể ghi đè điều này.
Thay đổi phần tử nội tuyến thành phần tử khối hoặc ngược lại, có thể hữu ích để làm cho trang trông theo một cách cụ thể mà vẫn tuân theo các tiêu chuẩn web.
Một ví dụ phổ biến là tạo các phần tử < li> nội tuyến cho menu ngang:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      li {
        display: inline;
      }
    </style>
  </head>
  <body>

    <p>Display a list of links as a horizontal menu:</p>

    <ul>
      <li><a href="/html/default.asp" target="_blank">HTML</a></li>
      <li><a href="/css/default.asp" target="_blank">CSS</a></li>
      <li><a href="/js/default.asp" target="_blank">JavaScript</a></li>
    </ul>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Lưu ý: Việc đặt thuộc tính hiển thị của một phần tử chỉ thay đổi cách phần tử đó được hiển thị, KHÔNG thay đổi loại phần tử đó. Vì vậy, một phần tử nội tuyến với display: block; không được phép có các phần tử khối khác bên trong nó.

**Ẩn một phần tử - hiển thị ?**
Ẩn một phần tử có thể được thực hiện bằng cách đặt thuộc tính hiển thị thành none. Phần tử sẽ bị ẩn và trang sẽ hiển thị như thể phần tử không có ở đó:
ví dụ
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1.hidden {
        display: none;
      }
    </style>
  </head>
  <body>

    <h1>This is a visible heading</h1>
    <h1 class="hidden">This is a hidden heading</h1>
    <p>Notice that the h1 element with display: none; does not take up any space.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Hãy thử thay đổi "display: none;" thành "visibility: hidden;", và thử lại, phần tử sẽ vẫn chiếm cùng một không gian như trước đây. Phần tử sẽ bị ẩn, nhưng vẫn ảnh hưởng đến bố cục.
### VII. Background style trong CSS.
**1,Background-color**
Thuộc tính màu nền chỉ định màu nền của phần tử.
Ví dụ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: lightblue;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This page has a light blue background color!</p>
  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Với CSS, một màu thường được chỉ định bởi:

+ Tên màu hợp lệ - như "red"
+ Một giá trị HEX - như "#ff0000"
+ Một giá trị RGB - như "rgb(255,0,0)"
Bạn có thể đặt màu nền cho bất kỳ phần tử HTML nào:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        background-color: green;
      }

      div {
        background-color: lightblue;
      }

      p {
        background-color: yellow;
      }
    </style>
  </head>
  <body>

    <h1>CSS background-color example!</h1>
    <div>
      This is a text inside a div element.
      <p>This paragraph has its own background color.</p>
      We are still in the div element.
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Opacity / Transparency** (Độ trong suốt)
Thuộc tính Opacity chỉ định độ mờ/độ trong suốt của một phần tử. Nó có thể nhận giá trị từ 0,0 - 1,0. Giá trị càng thấp, càng trong suốt:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        background-color: green;
      }

      div.first {
        opacity: 0.1;
      }

      div.second {
        opacity: 0.3;
      }

      div.third {
        opacity: 0.6;
      }
    </style>
  </head>
  <body>

    <h1>Transparent Boxes</h1>

    <p>When using the opacity property to add transparency to the background of an element, all of its child elements become transparent as well. This can make the text inside a fully transparent element hard to read:</p>

    <div class="first">
      <h1>opacity 0.1</h1>
    </div>

    <div class="second">
      <h1>opacity 0.3</h1>
    </div>

    <div class="third">
      <h1>opacity 0.6</h1>
    </div>

    <div>
      <h1>opacity 1 (default)</h1>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Lưu ý**: Khi sử dụng thuộc tính opacity để thêm độ trong suốt cho nền của một phần tử, tất cả các phần tử con của phần tử đó đều có cùng độ trong suốt. Điều này có thể làm cho văn bản bên trong một phần tử hoàn toàn trong suốt khó đọc.
**Transparency using RGBA**
Nếu bạn không muốn áp dụng độ mờ cho các phần tử con, như trong ví dụ của chúng tôi ở trên, hãy sử dụng các giá trị màu RGBA.
Giá trị màu RGBA được chỉ định bằng: rgba(red, green, blue, alpha). Tham số alpha là một số nằm trong khoảng từ 0,0 (hoàn toàn trong suốt) đến 1,0 (hoàn toàn mờ đục).
Ví dụ:
```hmtl
<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        background: rgb(0, 128, 0);
      }

      div.first {
        background: rgba(0, 128, 0, 0.1);
      }

      div.second {
        background: rgba(0, 128, 0, 0.3);
      }

      div.third {
        background: rgba(0, 128, 0, 0.6);
      }
    </style>
  </head>
  <body>

    <h1>Transparent Boxes 2</h1>

    <p>Result with opacity:</p>

    <div style="opacity:0.1;">
      <h1>10% opacity</h1>
    </div>

    <div style="opacity:0.3;">
      <h1>30% opacity</h1>
    </div>

    <div style="opacity:0.6;">
      <h1>60% opacity</h1>
    </div>

    <div>
      <h1>opacity 1</h1>
    </div>

    <p>Result with rgba():</p>

    <div class="first">
      <h1>10% opacity</h1>
    </div>

    <div class="second">
      <h1>30% opacity</h1>
    </div>

    <div class="third">
      <h1>60% opacity</h1>
    </div>

    <div>
      <h1>default</h1>
    </div>

    <p>Notice how the text gets transparent as well as the background color when using the opacity property.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**2. Background Image**
Thuộc tính background-image chỉ định một hình ảnh được sử dụng làm nền của một phần tử.
Theo mặc định, hình ảnh được lặp lại để nó bao phủ toàn bộ phần tử.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-image: url("paper.gif");
      }
    </style>
  </head>
  <body>

    <h1>Hello World!</h1>

    <p>This page has an image as the background!</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/

**Lưu ý**: Khi sử dụng hình nền, hãy sử dụng hình ảnh không ảnh hưởng tới nội dung.
Hình nền cũng có thể được đặt cho các phần tử cụ thể, như phần tử < p>:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        background-image: url("paper.gif");
      }
    </style>
  </head>
  <body>

    <h1>Hello World!</h1>

    <p>This paragraph has an image as the background!</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**3. Background-repeat**
Theo mặc định, thuộc tính hình nền lặp lại hình ảnh theo cả chiều ngang và chiều dọc.
Một số hình ảnh chỉ nên được lặp lại theo chiều ngang hoặc chiều dọc, nếu không chúng sẽ trông lạ, như thế này:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-image: url("gradient_bg.png");
      }
    </style>
  </head>
  <body>

    <h1>Hello World!</h1>
    <p>Strange background image...</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/

Nếu hình trên chỉ được lặp lại theo chiều ngang (background-repeat: repeat-x;) thì background sẽ đẹp hơn:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-image: url("gradient_bg.png");
        background-repeat: repeat-x;
      }
    </style>
  </head>
  <body>

    <h1>Hello World!</h1>
    <p>Strange background image...</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Background-repeat: no-repeat**
Chỉ hiển thị hình nền một lần cũng được chỉ định bởi thuộc tính background-repeat
ví dụ;
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-image: url("img_tree.png");
        background-repeat: no-repeat;
      }
    </style>
  </head>
  <body>

    <h1>Hello World!</h1>
    <p>W3Schools background image example.</p>
    <p>The background image only shows once, but it is disturbing the reader!</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**CSS background-position**
Thuộc tính background-position được sử dụng để chỉ định vị trí của hình nền.
Hãy thêm "background-position: right top;" vào thẻ body ở nguồn code trên và thử lại nhé.
**4. Background Attachment**
Thuộc tính background-attachment chỉ định xem hình nền sẽ cuộn hay cố định (sẽ không cuộn với phần còn lại của trang):
Ví dụ:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-image: url("img_tree.png");
        background-repeat: no-repeat;
        background-position: right top;
        margin-right: 100px;
        background-attachment: fixed;
      }
    </style>
  </head>
  <body>

    <h1>The background-attachment Property</h1>

    <p>The background-attachment property specifies whether the background image should scroll or be fixed (will not scroll with the rest of the page).</p>

    <p><strong>Tip:</strong> If you do not see any scrollbars, try to resize the browser window.</p>

    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>
    <p>The background-image is fixed. Try to scroll down the page.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Hãy thử với "background-attachment: scroll;" : chỉ định rằng hình nền sẽ cuộn cùng với phần còn lại của trang:
**5. Background Shorthand**
Để rút ngắn mã, bạn cũng có thể chỉ định tất cả các thuộc tính nền trong một thuộc tính duy nhất. Đây được gọi là thuộc tính shorthand.
Thay vì viết:
```html
body {
  background-color: #ffffff;
  background-image: url("img_tree.png");
  background-repeat: no-repeat;
  background-position: right top;
}
```
Bạn có thể sử dụng nền thuộc tính shorthand:
```html
body {
  background: #ffffff url("img_tree.png") no-repeat right top;
}
```
### VIII. Pseudo class và pseudo element.
**1. Pseudo class**
Pseudo-classes là gì?
Pseudo-classes được sử dụng để định nghĩa một trạng thái đặc biệt của một phần tử.
Ví dụ, nó có thể được sử dụng để:
+ Tạo kiểu cho một phần tử khi người dùng di chuột qua phần tử đó
+ Tạo kiểu cho các liên kết đã truy cập và chưa truy cập khác nhau
+ Tạo kiểu cho một phần tử khi nó được lấy nét

**Syntax**
```html
selector:pseudo-class {
  property: value;
}
```
Links có thể được hiển thị theo nhiều cách khác nhau:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      /* unvisited link */
      a:link {
        color: red;
      }

      /* visited link */
      a:visited {
        color: green;
      }

      /* mouse over link */
      a:hover {
        color: hotpink;
      }

      /* selected link */
      a:active {
        color: blue;
      }
    </style>
  </head>
  <body>

    <h2>Styling a link depending on state</h2>

    <p><b><a href="https://www.facebook.com/clubproptit" target="_blank">This is a link</a></b></p>
    <p><b>Note:</b> a:hover MUST come after a:link and a:visited in the CSS definition in order to be effective.</p>
    <p><b>Note:</b> a:active MUST come after a:hover in the CSS definition in order to be effective.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Lưu ý: a:hover PHẢI đứng sau a:link và a:visited trong định nghĩa CSS để có hiệu lực! a:active PHẢI xuất hiện sau a:hover trong định nghĩa CSS để có hiệu quả! Tên lớp giả không phân biệt chữ hoa chữ thường.
**Pseudo-classes và HTML Classes**
Khi bạn di chuột qua liên kết trong ví dụ, nó sẽ đổi màu đồng thời tăng kích cỡ link
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      a.highlight:hover {
        color: #ff0000;
        font-size: 22px;
      } 
    </style>
  </head>
  <body>

    <h2>Pseudo-classes and HTML Classes</h2>

    <p>When you hover over the first link below, it will change color and font size:</p>

    <p><a class="highlight" href="css_syntax.asp">CSS Syntax</a></p>

    <p><a href="default.asp">CSS Tutorial</a></p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Pseudo-class :first-child**
:first-child khớp với một phần tử được chỉ định là phần tử con đầu tiên của một phần tử khác.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p:first-child {
        color: blue;
      } 
    </style>
  </head>
  <body>

    <p>This is some text.</p>
    <p>This is some text.</p>

    <div>
      <p>This is some text.</p>
      <p>This is some text.</p>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**So khớp phần tử < i> đầu tiên trong tất cả các phần tử < p>**
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p i:first-child {
        color: blue;
      } 
    </style>
  </head>
  <body>

    <p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
    <p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Khớp tất cả các phần tử < i> trong tất cả các phần tử < p> con đầu tiên**

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p:first-child i {
        color: blue;
      } 
    </style>
  </head>
  <body>

    <p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
    <p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>

    <div>
      <p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
      <p>I am a <i>strong</i> person. I am a <i>strong</i> person.</p>
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/

**2. Pseudo element**
Pseudo-Elements là gì?
Pseudo-Elements CSS được sử dụng để tạo kiểu cho các phần được chỉ định của phần tử.
Ví dụ, nó có thể được sử dụng để:
+ Tạo kiểu cho chữ cái hoặc dòng đầu tiên của phần tử
+ Chèn nội dung vào trước hoặc sau nội dung của phần tử

**Syntax**
```html
selector::pseudo-element {
  property: value;
}
```
pseudo-element  ::first-line được sử dụng để thêm một kiểu dáng đặc biệt vào dòng đầu tiên của văn bản.
Ví dụ sau định dạng dòng đầu tiên của văn bản trong tất cả các phần tử < p>:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p::first-line {
        color: #ff0000;
        font-variant: small-caps;
      }
    </style>
  </head>
  <body>

    <p>You can use the ::first-line pseudo-element to add a special effect to the first line of a text. And even more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more, and more.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Pseudo-element ::first-letter**
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p::first-letter {
        color: #ff0000;
        font-size: xx-large;
      }
    </style>
  </head>
  <body>

    <p>You can use the ::first-letter pseudo-element to add a special effect to the first character of a text!</p>

  </body>
</html>
```
**Pseudo-element ::before và ::after**
pseudo-element ::before có thể được sử dụng để chèn một số nội dung trước nội dung của một phần tử.
Ví dụ sau chèn một hình ảnh trước nội dung của mỗi phần tử < h1>:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1::after {
        content: url(smiley.gif);
      }
    </style>
  </head>
  <body>

    <h1>This is a heading</h1>
    <p>The ::after pseudo-element inserts content after the content of an element.</p>

    <h1>This is a heading</h1>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Hãy thử với ::after, ta chèn một số nội dung sau nội dung của một phần tử.
**Pseudo-element ::marker**
pseudo-element ::marker chọn các điểm đánh dấu của các mục trong danh sách.
Ví dụ sau tạo kiểu cho các điểm đánh dấu của các mục danh sách:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      ::marker { 
        color: red;
        font-size: 23px;
      }
    </style>
  </head>
  <body>

    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>

    <ol>
      <li>First</li>
      <li>Second</li>
      <li>Third</li>
    </ol>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Pseudo-element ::selection**
pseudo-element ::selection khớp với phần của phần tử được người dùng chọn.
Các thuộc tính CSS sau có thể được áp dụng cho ::selection: màu, nền, con trỏ và đường viền.
Ví dụ sau làm cho văn bản đã chọn có màu đỏ trên nền vàng:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      ::selection {
        color: red;
        background: yellow;
      }
    </style>
  </head>
  <body>

    <h1>Select some text on this page:</h1>

    <p>This is a paragraph.</p>
    <div>This is some text in a div element.</div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
### IX. Style cho text trong CSS.
**1. Text color**
Thuộc tính color được sử dụng để đặt màu cho văn bản. Màu sắc được chỉ định bởi:
+ Một tên màu - như "red"
+ Một giá trị HEX - như "#ff0000"
+ Một giá trị RGB - như "rgb(255,0,0)"

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        color: blue;
      }

      h1 {
        color: green;
      }
    </style>
  </head>
  <body>

    <h1>This is heading 1</h1>
    <p>This is an ordinary paragraph. Notice that this text is blue. The default text color for a page is defined in the body selector.</p>
    <p>Another paragraph.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/

**Màu văn bản và màu nền (Text Color and Background Color)**
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      body {
        background-color: lightgrey;
        color: blue;
      }

      h1 {
        background-color: black;
        color: white;
      }

      div {
        background-color: blue;
        color: white;
      }
    </style>
  </head>
  <body>

    <h1>This is a Heading</h1>
    <p>This page has a grey background color and a blue text.</p>
    <div>This is a div.</div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Chú ý**: Độ tương phản cao rất quan trọng đối với những người có vấn đề về thị lực. Vì vậy, hãy luôn đảm bảo rằng độ tương phản giữa màu chữ và màu nền (hoặc hình nền) phải tốt!
**2. Text Alignment**
Thuộc tính text-align được sử dụng để thiết lập căn lề ngang của văn bản.
Văn bản có thể được căn trái hoặc phải, căn giữa hoặc căn đều.
Ví dụ sau đây hiển thị văn bản được căn giữa và căn trái và phải (căn trái là mặc định nếu hướng văn bản là từ trái sang phải và căn phải là mặc định nếu hướng văn bản là từ phải sang trái):
```html
 <!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        text-align: center;
      }

      h2 {
        text-align: left;
      }

      h3 {
        text-align: right;
      }
    </style>
  </head>
  <body>

    <h1>Heading 1 (center)</h1>
    <h2>Heading 2 (left)</h2>
    <h3>Heading 3 (right)</h3>

    <p>The three headings above are aligned center, left and right.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/

Khi thuộc tính text-align được đặt thành "justify", mỗi dòng được kéo dài sao cho mỗi dòng có chiều rộng bằng nhau và lề trái và phải thẳng hàng (như trên báo và tạp chí)

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div {
        border: 1px solid black;
        padding: 10px;
        width: 200px;
        height: 200px;
        text-align: justify;
      }
    </style>
  </head>
  <body>

    <h1>Example text-align: justify</h1>

    <p>The text-align: justify; value stretches the lines so that each line has equal width (like in newspapers and magazines).</p>

    <div>
      In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'
    </div>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Text Align Last**
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p.a {
        text-align-last: right;
      }

      p.b {
        text-align-last: center;
      }

      p.c {
        text-align-last: justify;
      }
    </style>
  </head>
  <body>

    <h1>The text-align-last Property</h1>

    <h2>text-align-last: right:</h2>
    <p class="a">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>

    <h2>text-align-last: center:</h2>
    <p class="b">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>

    <h2>text-align-last: justify:</h2>
    <p class="c">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Text Direction**
Các thuộc tính direction và unicode-bidi có thể được sử dụng để thay đổi hướng văn bản của một phần tử:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p.ex1 {
        direction: rtl;
        unicode-bidi: bidi-override;
      }
    </style>
  </head>
  <body>

    <p>This is the default text direction.</p>

    <p class="ex1">This is right-to-left text direction.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Vertical Alignment**
Thuộc tính vertical-align đặt căn chỉnh dọc của một phần tử.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      img.a {
        vertical-align: baseline;
      }

      img.b {
        vertical-align: text-top;
      }

      img.c {
        vertical-align: text-bottom;
      }

      img.d {
        vertical-align: sub;
      }

      img.e {
        vertical-align: super;
      }
    </style>
  </head>
  <body>

    <h1>The vertical-align Property</h1>

    <h2>vertical-align: baseline (default):</h2>
    <p>An <img class="a" src="sqpurple.gif" width="9" height="9"> image with a default alignment.</p> 

    <h2>vertical-align: text-top:</h2>
    <p>An <img class="b" src="sqpurple.gif" width="9" height="9"> image with a text-top alignment.</p> 

    <h2>vertical-align: text-bottom:</h2>
    <p>An <img class="c" src="sqpurple.gif" width="9" height="9"> image with a text-bottom alignment.</p>

    <h2>vertical-align: sub:</h2>
    <p>An <img class="d" src="sqpurple.gif" width="9" height="9"> image with a sub alignment.</p> 

    <h2>vertical-align: sup:</h2>
    <p>An <img class="e" src="sqpurple.gif" width="9" height="9"> image with a super alignment.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
*Phân biệt hai giá trị thuộc tính "vertical-align" là "text-bottom" và "sub" .
+ "text-bottom": Giá trị "text-bottom" dùng để căn chỉnh đáy của văn bản trong phần tử theo đường cơ sở của chữ (baseline). Nó làm cho đáy của văn bản khớp với đường cơ sở, không quan tâm đến kích thước hay chiều cao của các phần tử lân cận. Điều này có nghĩa là văn bản sẽ căn chỉnh dọc dưới so với các phần tử khác, không cần phụ thuộc vào kích thước hay chiều cao của các phần tử đó.

+ "sub": Giá trị "sub" dùng để hiển thị văn bản dưới dạng chữ nhỏ hơn, thường được sử dụng để hiển thị các chỉ số hoặc ký hiệu hóa học. Khi áp dụng giá trị này, văn bản sẽ được hiển thị dưới đáy của dòng chữ chứa nó và có kích thước nhỏ hơn so với văn bản xung quanh.
+ 
*Phân biệt hai giá trị thuộc tính "vertical-align" là "text-bottom" và "sub" .
+ vertical-align: text-top: Giá trị này sẽ căn chỉnh đối tượng dọc theo vị trí trên của văn bản trong dòng chữ. Đối tượng sẽ được căn chỉnh theo vị trí cận trên của văn bản, không phụ thuộc vào kích thước hoặc phần tử xung quanh. Nếu có nhiều đối tượng có giá trị vertical-align: text-top trong cùng một dòng, chúng sẽ được căn chỉnh dọc theo vị trí trên của văn bản.

+ vertical-align: sup: Giá trị này sẽ căn chỉnh đối tượng dọc theo vị trí "superscript" (chữ trên) của văn bản trong dòng chữ. Đối tượng sẽ được căn chỉnh theo vị trí chữ trên của văn bản, giống như khi bạn sử dụng siêu kịch bản (superscript) trong văn bản. Thông thường, giá trị này được sử dụng cho các ký tự trên, như các ký tự mũ trong công thức toán học.
**3. Text Decoration**
**Thêm một dòng trang trí vào văn bản**
Thuộc tính text-decoration-line được sử dụng để thêm một dòng trang trí vào văn bản.
_Mẹo: Bạn có thể kết hợp nhiều giá trị, chẳng hạn như gạch chân và gạch dưới để hiển thị các dòng ở cả bên trên và bên dưới văn bản._
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        text-decoration: overline;
      }

      h2 {
        text-decoration: line-through;
      }

      h3 {
        text-decoration: underline;
      }

      p.ex {
        text-decoration: overline underline;
      }
    </style>
  </head>
  <body>

    <h1>Overline text decoration</h1>
    <h2>Line-through text decoration</h2>
    <h3>Underline text decoration</h3>
    <p class="ex">Overline and underline text decoration.</p>

    <p><strong>Note:</strong> It is not recommended to underline text that is not a link, as this often confuses 
      the reader.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Lưu ý**: Không nên gạch dưới văn bản không phải là liên kết, vì điều này thường gây nhầm lẫn cho người đọc.
**Chỉ định màu cho đường trang trí**
Thuộc tính text-decoration-color được sử dụng để đặt màu cho đường trang trí.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        text-decoration-line: overline;
        text-decoration-color: red;
      }

      h2 {
        text-decoration-line: line-through;
        text-decoration-color: blue;
      }

      h3 {
        text-decoration-line: underline;
        text-decoration-color: green;  
      }

      p {
        text-decoration-line: overline underline;
        text-decoration-color: purple;  
      }
    </style>
  </head>
  <body>

    <h1>Overline text decoration</h1>
    <h2>Line-through text decoration</h2>
    <h3>Underline text decoration</h3>
    <p>Overline and underline text decoration.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Chỉ định một kiểu cho đường trang trí**
Thuộc tính text-decoration-style được sử dụng để đặt kiểu cho đường trang trí.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        text-decoration-line: underline;
        text-decoration-style: solid; /* this is default */
      }

      h2 {
        text-decoration-line: underline;
        text-decoration-style: double;
      }

      h3 {
        text-decoration-line: underline;
        text-decoration-style: dotted;  
      }

      p.ex1 {
        text-decoration-line: underline;
        text-decoration-style: dashed;  
      }

      p.ex2 {
        text-decoration-line: underline;
        text-decoration-style: wavy;  
      }

      p.ex3 {
        text-decoration-line: underline;
        text-decoration-color: red;  
        text-decoration-style: wavy;  
      }
    </style>
  </head>
  <body>

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <p class="ex1">A paragraph.</p>
    <p class="ex2">Another paragraph.</p>
    <p class="ex3">Another paragraph.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/

**Chỉ định Độ dày cho Đường trang trí**
Thuộc tính text-decoration-thickness được sử dụng để đặt độ dày của đường trang trí.
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        text-decoration-line: underline;
        text-decoration-thickness: auto;  /* this is default */
      }

      h2 {
        text-decoration-line: underline;
        text-decoration-thickness: 5px;
      }

      h3 {
        text-decoration-line: underline;
        text-decoration-thickness: 25%;
      }

      p {
        text-decoration-line: underline;
        text-decoration-color: red;  
        text-decoration-style: double;
        text-decoration-thickness: 5px;  
      }
    </style>
  </head>
  <body>

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <p>A paragraph.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Thuộc tính Shorthand**
Thuộc tính text-decoration là thuộc tính tốc ký cho:
+ text-decoration-line (required)
+ text-decoration-color (optional)
+ text-decoration-style (optional)
+ text-decoration-thickness (optional)
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        text-decoration: underline;
      }

      h2 {
        text-decoration: underline red;
      }

      h3 {
        text-decoration: underline red double;
      }

      p {
        text-decoration: underline red double 5px;
      }
    </style>
  </head>
  <body>

    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <p>A paragraph.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Một mẹo nhỏ**
Tất cả các liên kết trong HTML được gạch chân theo mặc định. Đôi khi bạn thấy rằng các liên kết được tạo kiểu không có gạch chân. Trang trí văn bản: không có; được sử dụng để xóa phần gạch chân khỏi các liên kết, như thế này:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      a {
        text-decoration: none;
      }
    </style>
  </head>
  <body>

    <h1>Using text-decoration: none</h1>

    <p>A link with no underline: <a href="https://www.w3Aschools.com">W3Schools.com</a></p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/

**4. Text Transformation**
Thuộc tính text-transform được sử dụng để chỉ định chữ hoa và chữ thường trong văn bản.
Nó có thể được sử dụng để biến mọi thứ thành chữ hoa hoặc chữ thường, hoặc viết hoa chữ cái đầu tiên của mỗi từ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p.uppercase {
        text-transform: uppercase;
      }

      p.lowercase {
        text-transform: lowercase;
      }

      p.capitalize {
        text-transform: capitalize;
      }
    </style>
  </head>
  <body>

    <h1>Using the text-transform property</h1>

    <p class="uppercase">This text is transformed to uppercase.</p>
    <p class="lowercase">This text is transformed to lowercase.</p>
    <p class="capitalize">This text is capitalized.</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**5. Text Spacing**
**Text Indentation**
Thuộc tính text-indent được sử dụng để chỉ định thụt lề cho dòng đầu tiên của văn bản:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        text-indent: 50px;
      }
    </style>
  </head>
  <body>

    <h1>Using text-indent</h1>

    <p>In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since. 'Whenever you feel like criticizing anyone,' he told me, 'just remember that all the people in this world haven't had the advantages that you've had.'</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Letter Spacing**
Thuộc tính letter-spacing được sử dụng để xác định khoảng cách giữa các ký tự trong văn bản.
Ví dụ sau minh họa cách tăng hoặc giảm khoảng cách giữa các ký tự:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h2 {
        letter-spacing: 5px;
      }

      h3 {
        letter-spacing: -2px;
      }
    </style>
  </head>
  <body>

    <h1>Using letter-spacing</h1>

    <h2>This is heading 1</h2>
    <h3>This is heading 2</h3>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Line Height**
Thuộc tính line-height được sử dụng để xác định khoảng cách giữa các dòng:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p.small {
        line-height: 0.7;
      }

      p.big {
        line-height: 1.8;
      }
    </style>
  </head>
  <body>

    <h1>Using line-height</h1>

    <p>
      This is a paragraph with a standard line-height.<br>
      The default line height in most browsers is about 110% to 120%.<br>
    </p>

    <p class="small">
      This is a paragraph with a smaller line-height.<br>
      This is a paragraph with a smaller line-height.<br>
    </p>

    <p class="big">
      This is a paragraph with a bigger line-height.<br>
      This is a paragraph with a bigger line-height.<br>
    </p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**Word Spacing**
Thuộc tính word-spacing được sử dụng để xác định khoảng cách giữa các từ trong văn bản.
Ví dụ sau minh họa cách tăng hoặc giảm khoảng trắng giữa các từ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p.one {
        word-spacing: 10px;
      }

      p.two {
        word-spacing: -2px;
      }
    </style>
  </head>
  <body>

    <h1>Using word-spacing</h1>

    <p>This is a paragraph with normal word spacing.</p>

    <p class="one">This is a paragraph with larger word spacing.</p>

    <p class="two">This is a paragraph with smaller word spacing.</p>

  </body>
</html>
Kết quả xem tại đây: https://onecompiler.com/html/
```
**White Space**
Thuộc tính khoảng trắng chỉ định cách xử lý khoảng trắng bên trong một phần tử.
Ví dụ này minh họa cách tắt gói văn bản bên trong một phần tử:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      p {
        white-space: nowrap;
      }
    </style>
  </head>
  <body>

    <h1>Using white-space</h1>

    <p>
      This is some        text that will not wrap.
      This is some text that will not wrap.
      This is some text that will     not wrap.
      This is some text that will not wrap.
      This is some text that will not wrap.
      This is some text that will not wrap.
      This is some text that will not wrap.
      This is some text that will not wrap.
      This is some text that will not wrap.
    </p>

    <p>Try to remove the white-space property to see the difference!</p>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
**6. Text Shadow**
Thuộc tính text-shadow thêm bóng vào văn bản.
Trong cách sử dụng đơn giản nhất, bạn chỉ xác định bóng ngang (2px) và bóng dọc (2px):
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        text-shadow: 2px 2px;
      }
    </style>
  </head>
  <body>
    <h1>Text-shadow effect!</h1>
  </body>
</html>
```
Tiếp theo, thêm một màu (đỏ) vào bóng đổ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        text-shadow: 2px 2px red;
      }
    </style>
  </head>
  <body>

    <h1>Text-shadow effect!</h1>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/
Sau đó, thêm hiệu ứng làm mờ (5px) cho bóng đổ:
```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        text-shadow: 2px 2px 5px red;
      }
    </style>
  </head>
  <body>

    <h1>Text-shadow effect!</h1>

  </body>
</html>
```
Kết quả xem tại đây: https://onecompiler.com/html/

