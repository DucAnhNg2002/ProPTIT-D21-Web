# BUỔI 2 CSS
### 1. CÁC CÁCH STYLE CHO HTML
The HTML *style* attribute is used to add styles to an element such as color,font,size, and more


>**Syntax**
>\<tagname style="property:value;">
> The ***property*** is a CSS property. The ***value*** is a CSS value.
* ***Sử dụng CSS nội bộ (Inline CSS)*** : Sử dụng thuộc tính style trong các thẻ HTML để áp dụng kiểu trực tiếp cho các phần tử cụ thể
``` html
<!DOCTYPE html>
<html>
<body>
<h1 style="color: red; font-size: 24px;">Tiêu đề</h1>
<p style="font-weight: bold;">Đoạn văn bản in đậm</p>
</body>
</html>
```
![example](https://i.imgur.com/jIr6Ywo.png)
>**Fonts**
The CSS *font-family* property defines the font to be used for an HTML element:
```html
<h1 style="font-family:verdana;">This is a heading</h1>
<p style="font-family:courier;">This is a paragraph.</p>
```
>**Text size**
The CSS *font-size* property defines the text size for an HTML element:
``` html
<h1 style="font-size:300%;">This is a heading</h1>
<p style="font-size:160%;">This is a paragraph.</p>
```
>**Text Alignment**
The CSS text-align property defines the horizontal text alignment for an HTML element:
``` html
<h1 style="text-align:center;">Centered Heading</h1>
<p style="text-align:center;">Centered paragraph.</p>
```
>**Text color**
The CSS color property defines the text color for an HTML element:
``` html
<h1 style="color:blue;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>
```
>**Background color**
The CSS background-color property defines the background color for an HTML element.
``` html
<body style="background-color:powderblue;">

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>

```


* ***Sử dụng CSS trong phần đầu (Internal CSS)*** : Đặt mã CSS trong một khối ***\<style>*** nằm trong thẻ ***\<head>*** của file HTML 

The following example sets the text color of ALL the \<h1> elements (on that page) to blue, and the text color of ALL the \<p> elements to red. In addition, the page will be displayed with a "powderblue" background color: 

``` html
<!DOCTYPE html>
<html>
<head>
<style>
body {background-color: powderblue;}
h1   {color: blue;}
p    {color: red;}
</style>
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
</body>
</html>
```
![example](https://i.imgur.com/znXS4Tl.png)



* **Sử dụng CSS từ tệp bên ngoài (External CSS)**: Tạo một tệp CSS riêng và sau đó liên kết với tài liệu HTML bằng thẻ \<link>
Trong file ***style.css***
``` html
h1 {
  color: red;
  font-size: 24px;
}
p {
  font-weight: bold;
}

```
Trong file ***HTML***
``` html
<head>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Tiêu đề</h1>
  <p>Đoạn văn bản in đậm</p>
</body>
```
* **Sử dụng thư viện CSS bên ngoài** 
-----
### 2. CSS SELECTOR
CSS selector là một phần của ngôn ngữ CSS được sử dụng để xác định các phần tử HTML mà bạn muốn áp dụng kiểu (style) cho chúng. CSS selector cho phép bạn chọn các phần tử cụ thể hoặc nhóm phần tử dựa trên các thuộc tính, lớp, ID, cấu trúc và quan hệ giữa chúng.
- **Element selector** : Chọn tất cả các phần tử cùng loại
> VD: Đoạn mã trên áp dụng màu xanh (color: blue) cho tất cả các phần tử \<p> trên trang.
``` html
p {
  color: blue;
}
```
- **Class selector** : Chọn các phần tử có giá trị cùng lớp
>VD: Đoạn mã trên áp dụng màu nền vàng (background-color: yellow) cho tất cả các phần tử có lớp "highlight".
``` html
.highlight {
  background-color: yellow;
}
```
- **ID selector** : Chọn một phần tử duy nhất dựa trên giá trị ID
>VD: Đoạn mã trên áp dụng kích thước font chữ 24px cho phần tử có ID "header".
``` html
#header {
  font-size: 24px;
}
```
- **Selector phần tử con (Descendant selector)**: Chọn các phần tử con của một phần tử khác
> VD: Đoạn mã trên áp dụng margin 10px cho tất cả các phần tử <p> nằm trong phần tử có lớp "container".
``` html
.container p {
  margin: 10px;
}

```
- **Selector theo thuộc tính (Attribute selector)**: Chọn các phần tử dựa trên giá trị thuộc tính
> VD: Đoạn mã trên áp dụng đường viền 1px màu xám cho tất cả các phần tử \<input> có thuộc tính type="text".
``` html
input[type="text"] {
  border: 1px solid gray;
}

```
![example](https://i.imgur.com/2ZIPkst.png)
*****
### 3. ĐỘ ƯU TIÊN, CÁC LOẠI ĐƠN VỊ ĐỘ DÀI TRONG CSS
#### CSS Specificity
- Specificity Hierarchy
![example](https://i.imgur.com/FVdVonK.png)
- Giữa Internal và External ko có sự ưu tiên, phụ thuộc vào cái nào đc gọi sau
- Calculate Specificity
    - Inline 1000
    - #id 100
    - .class 10
    - tag 1
``` html
A: h1
B: h1#content
C: <h1 id="content" style="color: pink;">Heading</h1>
```
>The specificity of A is 1 (one element selector)
The specificity of B is 101 (one ID reference + one element selector)
The specificity of C is 1000 (inline styling)
- Equal specificity
If the same rule is written twice into the external style sheet, then the latest rule wins:
``` html
h1 {background-color: yellow;}
h1 {background-color: red;}
```
> There is one exception to this rule: if you use the **!important** rule, it will even override inline styles!
#### Các loại đơn vị độ dài
##### Absolute units
The absolute length units are fixed and a length expressed in any of these will appear as exactly that size.
![example](https://i.imgur.com/tV8gXzC.png)
- **px**: Pixels (px) are relative to the viewing device. For low-dpi devices, 1px is one device pixel (dot) of the display. For printers and high resolution screens 1px implies multiple device pixels.

##### Relative units
Relative length units specify a length relative to another length property.
![example](https://i.imgur.com/QYuVq4G.png)
>* **Viewport = the browser window size. If the viewport is 50cm wide, 1vw = 0.5cm.**
> - rem : đo kích thước dựa trên kích thước phông chữ của phần tử gốc(root element), thường là phần tử \<html>. Kích thước phần tử con sẽ tự
> - em : đo kích thước dựa trên kích thước phông chữ của phần tử cha gần nhất chứa nó.
***
### 4.FLOAT,BOX MODEL
#### Float
The float property is used for *positioning and formatting* content e.g. let an image float left to the text in a container.
The float property can have one of the following values:
> - **left** - The element floats to the left of its container
> - **right** - The element floats to the right of its container
> - **none** - The element does not float (will be displayed just where it occurs in the text). This is default
> - **inherit** - The element inherits the float value of its parent
``` html
<head>
<style>
img {
  float: right;
}
</style>
</head>
```
**Float next to each other**
Normally div elements will be displayed on top of each other. However, if we use float: left we can let elements float next to each other:
``` html
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
![example](https://i.imgur.com/a3oojmt.png)

#### Box model
Box model được sử dụng khi nói về design và layout.
The CSS box model is essentially a box that wraps around every HTML element. It consists of: **margins**, **borders**, **padding**, and the **actual content**.
![example](https://i.imgur.com/cflA42p.png)
> **Content** - The content of the box, where text and images appear
> **Padding** - Clears an area around the content. The padding is transparent
> **Border** - A border that goes around the padding and content
> **Margin** - Clears an area outside the border. The margin is transparent
``` html
<!DOCTYPE html>
<html>
<head>
<style>
div {
  background-color: lightgrey;
  width: 300px;
  border: 15px solid green;
  padding: 50px;
  margin: 20px;
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
![example](https://i.imgur.com/ds7bEi1.png)
> To calculate the full size of an element, you must also add padding, borders and margins.
``` html
div {
  width: 320px;
  padding: 10px;
  border: 5px solid gray;
  margin: 0;
}
```
  > 320px (width)
>\+ 20px (left + right padding)
>\+ 10px (left + right border)
>\+ 0px (left + right margin)
= 350px

***
### 5. CÁC LOẠI POSITION, Z-INDEX TRONG CSS
#### Position 
"Position" trong CSS là một thuộc tính dùng để xác định vị trí của một phần tử trên trang web.
There are five different position values:
- **static**
Các phần tử được định vị tĩnh theo mặc định, không có bất kỳ sự đặc biệt nào, được định vị theo quy trình bình thường của trang. Không bị ảnh hưởng bởi thuộc tính top, bottom, left, right.
``` html
div.static {
  position: static;
  border: 3px solid #73AD21;
}
```
![example](https://i.imgur.com/wW54zWt.png)
- **relative**
Khi một phần tử có giá trị **"position: relative;"**, nó sẽ được đặt dựa trên vị trí mặc định của nó trong luồng tài liệu, nhưng có thể di chuyển bằng cách sử dụng thuộc tính "top", "bottom", "left" và "right". Phần tử tương đối sẽ chiếm không gian trên trang dựa trên vị trí mới được xác định.
``` html
<!DOCTYPE html>
<html>

<head>
<style>
div.relative {
  position: relative;
  left: 30px;
  border: 3px solid #73AD21;
}
</style>
</head>

<body>
<h2>position: relative;</h2>

<p>An element with position: relative; is positioned relative to its normal position:</p>

<div class="relative">
This div element has position: relative;
</div>
</body>
</html>
```
![example](https://i.imgur.com/WGJBQc8.png)
- **fixed**
An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element. Phần tử cố định sẽ luôn hiển thị ở cùng một vị trí trên trang, thường được sử dụng cho các thành phần như thanh điều hướng, menu, hoặc thông báo pop-up.
``` html
div.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 300px;
  border: 3px solid #73AD21;
}
```
![example](https://i.imgur.com/I44AJzQ.png)
>Notice the fixed element in the lower-right corner of the page. 
- **absolute**
 phần tử sẽ được đặt dựa trên phần tử cha gần nhất có giá trị "position" khác "static". Nếu không có phần tử cha nào có giá trị vị trí khác "static", phần tử sẽ được đặt dựa trên thẻ \<body> của tài liệu HTML. Phần tử tuyệt đối sẽ không chiếm không gian trong luồng tài liệu và có thể di chuyển bằng cách sử dụng thuộc tính "top", "bottom", "left" và "right".
- **sticky**
Với giá trị "position: sticky;", phần tử sẽ hiển thị theo cách tương tự như phần tử tương đối cho đến khi nó đạt đến một điểm được xác định. Khi điểm đó được vượt qua (thông qua cuộn trang), phần tử sẽ được "dính" ở vị trí đã được định nghĩa và không di chuyển khi cuộn trang
#### z-index
The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).

An element can have a positive or negative stack order.
Các phần tử có giá trị "z-index" cao hơn sẽ được hiển thị trên các phần tử có giá trị "z-index" thấp hơn.
``` html
img {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
}
```
> **NOTE**
> z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display: flex elements).

> If two positioned elements overlap each other **without a z-index** specified, the element defined last in the HTML code will be shown on top.
***
### 6. CÁC LOẠI DISPLAY TRONG CSS
The display property is the most important CSS property for controlling layout.
The display property specifies if/how an element is displayed.
Every HTML element has a default display value depending on what type of element it is. The default display value for most elements is **block** or **inline.**
- **Block-level Elements**
A block-level element always starts on a new line and takes up the full width available (stretches out to the left and right as far as it can).
![example](https://i.imgur.com/pvCdI2q.png)
- **Inline Elements**
An inline element does not start on a new line and only takes up as much width as necessary.
![example](https://i.imgur.com/cVr2pft.png)
- **Display:none;**
display: none; is commonly used with JavaScript to hide and show elements without deleting and recreating them. Take a look at our last example on this page if you want to know how this can be achieved.

The \<script> element uses display: none; as default. 
- **Override the default display value**
As mentioned, every element has a default display value. However, you can override this.
``` html
li {
  display: inline;
}
```
- **Hide an Element - ***display:none*** or ***visibility:hidden?*****
  - Hiding an element can be done by setting the **display property to none**. The element will be hidden, and the page will *be displayed as if the element is not there*
  ``` html
  h1.hidden {
  display: none;
  }
  ```
  - **visibility:hidden;** also hides an element. However, the element will still take up the same space as before. The element will be hidden, but still affect the layout:
  ``` html
  h1.hidden {
  visibility: hidden;
  }
  ```
***
### 7.BACKGROUND STYLE
Thuộc tính background dùng để định dạng nền cho phần tử HTML.
#### CSS Multiple Background
The different background images are separated by commas, and the images are stacked on top of each other, where the first image is closest to the viewer.
The following example has two background images, the first image is a flower (aligned to the bottom and right) and the second image is a paper background (aligned to the top-left corner):
``` html
#example1 {
  background-image: url(img_flwr.gif), url(paper.gif);
  background-position: right bottom, left top;
  background-repeat: no-repeat, repeat;
}
```
![example](https://i.imgur.com/kpA8Gy2.png)
The following example uses the background shorthand property (same result as example above)
``` html
#example1 {
  background: url(img_flwr.gif) right bottom no-repeat, url(paper.gif) left top repeat;
}
```
#### CSS background size
The CSS background-size property allows you to specify the size of background images.

The size can be specified in lengths, percentages, or by using one of the two keywords: **contain or cover.**

The following example resizes a background image to much smaller than the original image (using pixels):
![example](https://i.imgur.com/hAIjgdR.png)
#### CSS background-origin Property
The CSS background-origin property specifies where the background image is positioned.
- border-box - the background image starts from the upper left corner of the border
- padding-box - (default) the background image starts from the upper left corner of the padding edge
- content-box - the background image starts from the upper left corner of the content 
#### CSS background-clip Property
- border-box - (default) the background is painted to the outside edge of the border
- padding-box - the background is painted to the outside edge of the padding
- content-box - the background is painted within the content box
***
### 8. PSEUDO CLASS và PSEUDO ELEMENT
#### PSEUDO CLASS
Một lớp giả được sử dụng để định nghĩa một trạng thái đặc biệt của một phần tử.
For example, it can be used to:
- Style an element when a user mouses over it
- Style visited and unvisited links differently
- Style an element when it gets focus
***Syntax***
``` html
selector:pseudo-class {
  property: value;
}
```
***example***
``` html
a.highlight:hover {
  color: #ff0000;
}
```
![example](https://i.imgur.com/tvVXqda.png)

####PSEUDO ELEMENT
A CSS pseudo-element is used to style specified parts of an element.
For example, it can be used to:

- Style the first letter, or line, of an element
- Insert content before, or after, the content of an element
***Syntax***
``` html
selector::pseudo-element {
  property: value;
}
```
``` html
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
```
![example](https://i.imgur.com/G94CVzn.png)
![example](https://i.imgur.com/yvoZqa9.png)
***
### 9. STYLE CHO TEXT
#### Color
The color is specified by:
- a color name - like "red"
- a HEX value - like "#ff0000"
- an RGB value - like "rgb(255,0,0)"
``` html
body {
  color: blue;
}

h1 {
  color: green;
}
```
#### Text Aligment
The text-align property is used to set the horizontal alignment of a text.
![example](https://i.imgur.com/aZhiRQc.png)
``` html
h1 {
  text-align: center;
}

h2 {
  text-align: left;
}

h3 {
  text-align: right;
}
```
Khi thuộc tính text-align được đặt thành **"justify"**, mỗi dòng được kéo dài sao cho mỗi dòng có chiều rộng bằng nhau và lề trái và phải thẳng hàng (như trên báo và tạp chí)
#### Text Align Last
The text-align-last property specifies how to align the last line of a text.
``` html
p.a {
  text-align-last: right;
}

p.b {
  text-align-last: center;
}

p.c {
  text-align-last: justify;
}
```
![example](https://i.imgur.com/xc0WBZc.png)
#### Vertical Alignment
The vertical-align property sets the vertical alignment of an element.
#### Text Decoration
Để thêm các hiệu ứng trang trí cho văn bản, bạn có thể sử dụng thuộc tính "text-decoration". Giá trị thông thường là "none" (không có), "underline" (gạch chân), "overline" (gạch trên), "line-through" (gạch ngang). Ví dụ:
``` html
a {
  text-decoration: underline;
}

```
``` html
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

```
![example](https://i.imgur.com/zP2DILw.png)
![example](https://i.imgur.com/JYf4dHQ.png)
#### font-family
font-family: Để thay đổi kiểu phông chữ, bạn có thể sử dụng thuộc tính "font-family". 
``` html
p {
  font-family: "Arial", sans-serif;
}

```
#### font-size 
``` html
p {
  font-size: 16px;
}

```
#### font-weight
 Để điều chỉnh độ đậm của văn bản, bạn có thể sử dụng thuộc tính "font-weight". Giá trị thông thường là "normal" (bình thường) hoặc "bold" (đậm). 
 ``` html
 p {
  font-weight: bold;
}

 ```











  











