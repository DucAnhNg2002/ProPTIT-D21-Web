# CSS

Created by: Triệu Tâm
Created time: April 29, 2023 7:39 PM
Last edited by: Triệu Tâm
Last edited time: May 13, 2023 8:31 AM
Tags: Guides

## Giới thiệu

CSS (Cascading Style Sheets) là một ngôn ngữ định kiểu được sử dụng để tạo ra các trang web đẹp và dễ đọc. Nó là một phần quan trọng trong việc thiết kế và phát triển trang web và cho phép bạn kiểm soát cách nội dung trên trang của bạn được hiển thị cho người dùng.

CSS là một phần không thể thiếu trong việc tạo ra trang web đẹp, sáng tạo và dễ sử dụng. Nó cho phép bạn biến những ý tưởng thiết kế của mình thành hiện thực trên trang web, từ việc chọn các màu sắc và phông chữ cho đến cách bố trí và sắp xếp các phần tử trên trang.

## Thuộc tính CSS cơ bản

Các thuộc tính CSS cho phép bạn kiểm soát các phần khác nhau của trang web của bạn, từ phông chữ và màu sắc cho đến kích thước và vị trí của các phần tử trên trang. Dưới đây là một số thuộc tính CSS cơ bản:

### color

Thuộc tính `color` được sử dụng để thiết lập màu sắc cho văn bản. Bạn có thể sử dụng các giá trị màu sắc khác nhau như `red`, `blue`, `green`, `yellow` hoặc mã hex như `#ff0000` để thiết lập màu chữ.

### background-color

Thuộc tính `background-color` được sử dụng để thiết lập màu nền cho phần tử. Bạn có thể sử dụng các giá trị màu sắc tương tự như `color` để thiết lập màu nền cho phần tử.

### font-size

Thuộc tính `font-size` được sử dụng để thiết lập kích thước chữ. Bạn có thể sử dụng các đơn vị đo lường khác nhau như `px`, `em`, `rem` để thiết lập kích thước chữ.

### text-align

Thuộc tính `text-align` được sử dụng để thiết lập vị trí của văn bản trong phần tử. Bạn có thể sử dụng các giá trị khác nhau như `left`, `right`, `center` hoặc `justify` để thiết lập vị trí của văn bản.

### padding

Thuộc tính `padding` được sử dụng để thiết lập khoảng cách giữa nội dung và viền của phần tử. Bạn có thể sử dụng các giá trị đơn vị đo lường khác nhau để thiết lập khoảng cách.

### margin

Thuộc tính `margin` được sử dụng để thiết lập khoảng cách giữa phần tử và các phần tử khác trên trang. Bạn có thể sử dụng các giá trị đơn vị đo lường khác nhau để thiết lập khoảng cách.

---

## CSS Selection

```css
::selection {
  color: red;
  background: yellow;
}
```

- ::selection selector: color, background, cursor, and outline.

---

## Styling table

**Table Borders**

```css
table, th, td {
  border: 1px solid;
}
```

**Full-Width Table**

```css
table {
  width: 100%;
}
```

**Double Borders**

- Các ví dụ trên đều có đường viền đôi, lý do là table và các thẻ ```<th><tr>``` đều có đường viền riêng.
- Để bỏ đường viền đôi:

```css
table {
  border-collapse: collapse;
}
```

---

### Table size

**Table Width and Height**

```css
table {
  width: 100%;
}

th {
  height: 70px;
}
```

### **Horizontal Alignment**

- mặc định nội dung của các phần tử ```<th>``` được căn giữa còn ```<td>``` được căn trái

```css
td {
  text-align: center;
}
```

### **Vertical Alignment**

- mặc định là ở giữa.

```css
td {
  height: 50px;
  vertical-align: bottom;
}
```

---

### **Table Padding**

```css
th, td {
  padding: 15px;
  text-align: left;
}
```

### **Horizontal Dividers**

```css
th, td {
  border-bottom: 1px solid #ddd;
}
```

![Untitled](CSS%2078c9749bc684466a8f278951ce18c773/Untitled.png)

### **Hoverable Table**

```css
tr:hover {background-color: coral;}
```

### **Striped Tables**

```css
tr:nth-child(even) {background-color: #f2f2f2;}
```

### **Table Color**

```css
th {
  background-color: #04AA6D;
  color: white;
}
```

### **CSS Responsive Table**

```css
<div style="overflow-x:auto;">

	<table>
	... table content ...
	</table>

</div>
```

---

## ****CSS Position & các thuộc tính Helper****

Có 5 giá trị chính của `position`:

| static | relative | absolute | fixed | sticky |
| --- | --- | --- | --- | --- |

và các thuộc tính có nhiệm vụ căn chỉnh vị trí của element : 

| top | right | bottom | left | z-index |
| --- | --- | --- | --- | --- |

> Các helper ko hoạt động nếu như ko khai báo position hoặc position : static.
> 

### Z-index là gì ?

![https://images.viblo.asia/e058e977-6e29-4409-bc98-fa67bceaa851.png](https://images.viblo.asia/e058e977-6e29-4409-bc98-fa67bceaa851.png)

- không hoạt động nếu ko set position và position : static.

```css
<body>
   <div class="box-orange"></div>
   <div class="box-blue"></div>
</body>
```

### 1. Static

- position: static là giá trị mặc định.
- sắp xếp vị trí một cách bình thường.

![https://images.viblo.asia/3797bca1-4f1a-4bf5-a471-5b8ea6e9b734.png](https://images.viblo.asia/3797bca1-4f1a-4bf5-a471-5b8ea6e9b734.png)

### 2. Relative

`position: relative`: Vị trí mới của một element tương quan/ liên hệ tới vị trí mặc định của nó.

```css
.box-orange {
  position: relative;  // chúng ta có thể di chuyển được element
  background: orange;
  width: 100px;
  height: 100px;
  top: 100px;         // dịch chuyển xuống 100px từ vị trí ban đầu của nó 
  left: 100px;        // dịch chuyển sang phải 100px
}
```

![https://images.viblo.asia/54bde066-a10f-47c6-8a2b-fca09c0510f1.png](https://images.viblo.asia/54bde066-a10f-47c6-8a2b-fca09c0510f1.png)

> Note: Sử dụng `position: relative` cho một element thì sẽ không ảnh hưởng tới vị trí của các element khác.
> 

### 3. Absolute

- `position: relative`, một element được dịch chuyển tới một vị trí mới dựa trên ví trí bình thường của chính nó.
- Tuy nhiên, `position: absolute` sẽ dịch chuyển vị trí của nó tương ứng với thẻ cha của nó.
- Một element được khai báo với thuộc tính `position: absolute` sẽ được loại bỏ khỏi luồng document (document flow).

```css
<body>
   <div class="container">
       <div class="box-orange"></div>
       <div class="box-blue"></div>
   </div>
</body>
```

```css
.box-orange {
  position: absolute;
  background: orange;
  width: 100px;
  height: 100px;
}
```

![https://images.viblo.asia/ddb8d063-5eff-406d-8468-67fd2785f2b4.png](https://images.viblo.asia/ddb8d063-5eff-406d-8468-67fd2785f2b4.png)

- `position: absolute` đưa element về vị trí top-left của cha nó.

```css
.container {
  position: relative;
  background: lightgray;
}
.box-orange {
  position: absolute;
  background: orange;
  width: 100px;
  height: 100px;
  right: 5px;    // dịch 5px so với cạnh phải của thẻ cha
}
```

![https://images.viblo.asia/c6305ce0-0503-47ad-91c9-86a400036dba.png](https://images.viblo.asia/c6305ce0-0503-47ad-91c9-86a400036dba.png)

### 4. Fixed

- Giống như `position: absolute`, các element được khai báo với `position` này sẽ được loại bỏ khỏi document flow
- Chỉ khác là:
    - Vị trí của chúng **CHỈ** tương quan với thẻ `<html>`
    - Chúng không bị ảnh hưởng bới scroll

```css
.box-orange {
  background: orange;
  width: 100px;
  height: 100px;
  position: fixed;
  right: 5px;
}
```

![Untitled](CSS%2078c9749bc684466a8f278951ce18c773/Untitled%201.png)

### 5. Sticky

- `position: sticky` có thể hiểu đơn giản là sự kết hợp của `position: relative` và `position: fixed`

---

## Display

### ****`display: inline`****

- Với kiểu này thì các item sẽ nằm trên cùng một dòng
- Các item có kiểu display này **không thể set width và height**.
- Các inline item sẽ chỉ có thể điều chỉnh margin và padding **left and right**

### ****`display: block`****

- các item có kiểu `display: block` luôn được xuống dòng và chiếm toàn bộ width nếu width không được set.
- Các item có kiểu `display: block` sẽ set được width, height, margin, padding đầy đủ 4 hướng (top, bottom, right, left).

### ****`display: inline-block`****

- Kiểu `display: inline-block` sẽ được sắp xếp giống với kiểu `display: inline`, nghĩa là các items sẽ được xếp cùng nhau trên một dòng
- Tuy nhiên các items sẽ có thuộc tính của `display: block` như là có set width, height, margin, padding đủ 4 hướng.

### ****`display: flex`****

- Justify-content
- align-items
- css cho block bao quanh các khối

---

## Style for image

[<image> - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/image)

[CSS Styling Images - GeeksforGeeks](https://www.geeksforgeeks.org/css-styling-images/)

[CSS Styling Images (w3schools.com)](https://www.w3schools.com/css/css3_images.asp)

---

## Float and Box model

- Dùng để định vị và định dạng nội dung.
- Có 1 trong 4 giá trị :
    - left - phần tử nổi bên trái vùng chứa nó.
    - right - phân tử nổi bên phải vùng chưa nó.
    - none -  phần tử không nổi, được hiển thị ngay tại vị trí nó xuất hiện,
    - inherit - kế thừa giá trị float của cha.
- Có thể dùng để warp 1 ảnh.

```css
img {
  float: right;
}
```

### Clear and clearfix

- clear chỉ định điều gì xảy ra với phân tử bên cạnh phân tử nổi.
- Có 5 giá trị :
    - `none` - Phần tử không được đẩy xuống dưới các phần tử được đặt float trái hoặc phải. Đây là giá trị mặc định.
    - `left` - Phần tử được đẩy xuống dưới các phần tử được trôi sang trái
    - `right` - Phần tử được đẩy xuống dưới các phần tử được trôi sang phải
    - `both` - Phần tử được đẩy xuống dưới cả hai phần tử được trôi sang trái và phải
    - `inherit` - Phần tử thừa hưởng giá trị clear của phần tử cha của nó

### Clearfix hack

```css
.clearfix {
  overflow: auto;
}
```

- khi phân tử nổi tràn khỏi vùng chưa và vượt qua vùng chưa.

### Box model

- Cơ bản thì nó là một box bao quanh mọi phân tử HTML.

![Untitled](CSS%2078c9749bc684466a8f278951ce18c773/Untitled%202.png)

- Chứa các phân khác nhau :
    - **Content** - Nội dung của hộp, nơi mà văn bản và hình ảnh xuất hiện
    - **Padding** - Xóa một khu vực xung quanh nội dung. Khoảng cách đệm là trong suốt
    - **Border** - Một đường viền bao quanh khoảng cách đệm và nội dung
    - **Margin** - Xóa một khu vực bên ngoài đường viền. Khoảng cách lề là trong suốt
    
    ```css
    div {
      width: 300px;
      border: 15px solid green;
      padding: 50px;
      margin: 20px;
    }
    ```
    
    ### **Width and Height of an Element**
    
    ```css
    div {
      width: 320px;
      padding: 10px;
      border: 5px solid gray;
      margin: 0;
    }
    ```
    
    Tổng diện tích : 
    
    ```css
    320px (width)
    + 20px (left + right padding)
    + 10px (left + right border)
    + 0px (left + right margin)
    = 350px
    ```
    
    ---
    
    ## Styling Form
    
    ### **Styling Input Fields**
    
- Dùng width để xác định chiều rộng của input.
- Dùng padding để thêm khoảng trống bên trong văn bản,
- Dùng margin để thêm lề, không gian cho input.

```css
input[type=text] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}
```

### Box-sizing

- thuộc tính box-sizing cho phép khai báo padding và margin trong tổng chiều dài và chiều cao của phần tử.

```css
* {
  box-sizing: border-box;
}
```

---

- Sử dụng thuộc tính border  để thêm kích thước , kiểu và màu của viền.
- dùng border-radius để bo tròn các góc.

```css
input[type=text] {
  border: 2px solid red;
  border-radius: 4px;
}
```

- Nếu muốn có đường viền ở dưới , sử dụng border-bottom.
- Dùng background-color để thay màu nền, color để đổi màu văn bản

---

---

```css
input[type=text]:focus {
  background-color: lightblue;
}
```

- Thay đổi input khi nó được nhấn vào.
- Sử dụng background-image để thêm icon.

```css
input[type=text] {
  background-color: white;
  background-image: url('searchicon.png');
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 40px;
}
```

- Tạo hiệu ứng chuyển động cho input

```css
input[type=text] {
  transition: width 0.4s ease-in-out;
}

input[type=text]:focus {
  width: 100%;
}
```

---

## Styling Text

### **Text Color**

Thuộc tính `color` được sử dụng để đặt màu cho chữ. Màu được chỉ định bằng cách:

- tên màu - ví dụ như "red"
- giá trị HEX - ví dụ như "#ff0000"
- giá trị RGB - ví dụ như "rgb(255,0,0)"

### **Text Alignment and Text Direction**

- Thuộc tính `text-align` được sử dụng để thiết lập căn chỉnh ngang của văn bản.
- Thuộc tính `text-align-last` xác định cách căn chỉnh dòng cuối cùng của văn bản.
- Thuộc tính `direction` và `unicode-bidi` có thể được sử dụng để thay đổi hướng văn bản của một phần tử:

```css
p {
  direction: rtl;
  unicode-bidi: bidi-override;
}
```

![Untitled](CSS%2078c9749bc684466a8f278951ce18c773/Untitled%203.png)

- Thuộc tính `vertical-align` đặt giá trị căn chỉnh dọc của một phần tử.

### **Text Decoration**

- `text-decoration-line`
- `text-decoration-color`
- `text-decoration-style`
- `text-decoration-thickness`
- `text-decoration`
- Thuộc tính `text-decoration-line` được sử dụng để thêm một đường trang trí vào văn bản.

```css
h1 {
  text-decoration-line: overline;
}

h2 {
  text-decoration-line: line-through;
}

h3 {
  text-decoration-line: underline;
}

p {
  text-decoration-line: overline underline;
}
```

- Các liên kết được gạch chân mặc định, để bỏ gạch chân :

```css
a {
  text-decoration: none;
}
```

### **Text Transformation**

- Thuộc tính `text-transform` được sử dụng để chỉ định chữ in hoa và chữ thường trong một đoạn văn bản.

### **Text Spacing**

- `text-indent`
- `letter-spacing`
- `line-height`
- `word-spacing`
- `white-space`
    - Thuộc tính `text-indent` được sử dụng để chỉ định thụt đầu dòng của văn bản:
    - Thuộc tính `letter-spacing` được sử dụng để chỉ định khoảng cách giữa các ký tự trong văn bản.
    - Thuộc tính `line-height` được sử dụng để chỉ định khoảng cách giữa các dòng:
    - Thuộc tính `line-height` được sử dụng để chỉ định khoảng cách giữa các dòng:
    - Thuộc tính `word-spacing` được sử dụng để chỉ định khoảng cách giữa các từ trong văn bản.
    - Thuộc tính `white-space` chỉ định cách xử lý khoảng trắng bên trong một phần tử.

### **Text Shadow**

- Thuộc tính `text-shadow` thêm bóng cho văn bản.

```css
h1 {
  color: white;
  text-shadow: 2px 2px 4px #000000;
}
```

---

## Đơn vị

### **Độ dài tuyệt đối – Absolute Lengths**

- Các đơn vị độ dài tuyệt đối là cố định và độ dài được biểu thị bằng bất kỳ đơn vị nào trong số này sẽ xuất hiện chính xác như kích thước đó.

| Unit(đơn vị) | Mô tả |
| --- | --- |
| cm | centimeters |
| mm | millimeters |
| in | inches (1in = 96px = 2.54cm) |
| px * | pixels (1px = 1/96th of 1in) |
| pt | points (1pt = 1/72 of 1in) |
| pc | picas (1pc = 12 pt) |

→ không khuyến khích đc sử dụng vì màn hình thay đổi rất nhiều.

### **Độ dài tương đối – Relative Lengths**

- Đơn vị độ dài tương đối chỉ định độ dài liên quan đến thuộc tính độ dài khác. Các đơn vị độ dài tương đối chia tỷ lệ tốt hơn giữa các phương tiện kết xuất khác nhau.

| Unit | Mô tả |
| --- | --- |
| em | Liên quan đến kích thước phông chữ của phần tử (2em có nghĩa là 2 lần kích thước của phông chữ hiện tại) |
| ex | Liên quan đến chiều cao x của phông chữ hiện tại (hiếm khi được sử dụng) |
| ch | Tương đối với chiều rộng của “0” (không) |
| rem | Liên quan đến kích thước phông chữ của phần tử gốc |
| vw | Tương đối với 1% chiều rộng của viewport * |
| vh | Tương đối với 1% chiều cao của viewport * |
| vmin | Tương đối với 1% kích thước nhỏ hơn của viewport * |
| vmax. | Tương đối với 1% kích thước lớn hơn của viewport * |
| % | Liên quan đến phần tử cha |
- Các đơn vị em và rem rất thiết thực trong việc tạo bố cục có thể mở rộng hoàn hảo!
- *Viewport = kích thước cửa sổ trình duyệt. Nếu khung nhìn rộng 50cm, 1vw = 0,5cm.

---

## **CSS transform Property**

| Giá trị | Mô tả |
| --- | --- |
| none | Xác định không có chuyển đổi nào |
| matrix(n,n,n,n,n,n) | Xác định chuyển đổi 2D, sử dụng ma trận 6 giá trị |
| matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n) | Xác định chuyển đổi 3D, sử dụng ma trận 4x4 gồm 16 giá trị |
| translate(x,y) | Xác định phép dịch chuyển 2D |
| translate3d(x,y,z) | Xác định phép dịch chuyển 3D |
| translateX(x) | Xác định phép dịch chuyển, sử dụng chỉ giá trị cho trục X |
| translateY(y) | Xác định phép dịch chuyển, sử dụng chỉ giá trị cho trục Y |
| translateZ(z) | Xác định phép dịch chuyển 3D, sử dụng chỉ giá trị cho trục Z |
| scale(x,y) | Xác định phép tỉ lệ chuyển đổi 2D |
| scale3d(x,y,z) | Xác định phép tỉ lệ chuyển đổi 3D |
| scaleX(x) | Xác định phép tỉ lệ chuyển đổi bằng cách chỉ định giá trị cho trục X |
| scaleY(y) | Xác định phép tỉ lệ chuyển đổi bằng cách chỉ định giá trị cho trục Y |
| scaleZ(z) | Xác định phép tỉ lệ chuyển đổi 3D bằng cách chỉ định giá trị cho trục Z |
| rotate(angle) | Xác định phép quay 2D, góc được chỉ định trong tham số |
| rotate3d(x,y,z,angle) | Xác định phép quay 3D |
| rotateX(angle) | Xác định phép quay 3D theo trục X |
| rotateY(angle) | Xác định phép quay 3D theo trục Y |
| rotateZ(angle) | Xác định phép quay 3D theo trục Z |
| skew(x-angle,y-angle) | Xác định phép nghiêng 2D theo trục X và trục Y |
| skewX(angle) | Xác định phép nghiêng 2D theo trục X |
| skewY(angle) | Xác định phép nghiêng 2D theo trục Y |
| perspective(n) | Xác định góc nhìn phối cảnh cho một phần tử được chuyển đổi 3D |
| initial | Đặt thuộc tính này về giá trị mặc định của nó. https://www.w3schools.com/cssref/css_initial.php |
| inherit | Kế thừa thuộc tính này từ phần tử cha của nó. https://www.w3schools.com/cssref/css_inherit.php |

---

Để tạo hiệu ứng chuyển tiếp, bạn phải chỉ định hai điều:

- thuộc tính CSS mà bạn muốn thêm hiệu ứng vào
- thời lượng của hiệu ứng

[CSS Transitions (w3schools.com)](https://www.w3schools.com/css/css3_transitions.asp)

---

## CSS Pseudo class

- sử dụng để định nghĩa một trạng thái đặc biệt của một phần tử.

https://www.w3schools.com/css/css_pseudo_classes.asp