# Display

Created by: Triệu Tâm <br>
Created time: May 12, 2023 12:29 PM <br>
Last edited by: Triệu Tâm <br>
Last edited time: May 17, 2023 6:38 AM <br>
Tags: Guides

The `display` property specifies the display behavior (the type of rendering box) of an element.

# CSS Syntax

```css
display: *value*;
```

### **Property Values**

| Value | Description | Play it |
| --- | --- | --- |
| inline | Displays an element as an inline element (like `<span>`). Any height and width properties will have no effect | https://www.w3schools.com/cssref/playdemo.php?filename=playcss_display&preval=inline |
| block | Displays an element as a block element (like `<p>`). It starts on a new line, and takes up the whole width | https://www.w3schools.com/cssref/playdemo.php?filename=playcss_display&preval=block |
| contents | Makes the container disappear, making the child elements children of the element the next level up in the DOM |  |
| flex | Displays an element as a block-level flex container |  |
| grid | Displays an element as a block-level grid container |  |
| inline-block | Displays an element as an inline-level block container. The element itself is formatted as an inline element, but you can apply height and width values |  |
| inline-flex | Displays an element as an inline-level flex container |  |
| inline-grid | Displays an element as an inline-level grid container |  |
| inline-table | The element is displayed as an inline-level table |  |
| list-item | Let the element behave like a `<li>` element | https://www.w3schools.com/cssref/playdemo.php?filename=playcss_display&preval=list-item |
| run-in | Displays an element as either block or inline, depending on context |  |
| table | Let the element behave like a `<table>` element |  |
| table-caption | Let the element behave like a `<caption>` element |  |
| table-column-group | Let the element behave like a `<colgroup>` element |  |
| table-header-group | Let the element behave like a `<thead>` element |  |
| table-footer-group | Let the element behave like a `<tfoot>` element |  |
| table-row-group | Let the element behave like a `<tbody>` element |  |
| table-cell | Let the element behave like a `<td>` element |  |
| table-column | Let the element behave like a `<col>` element |  |
| table-row | Let the element behave like a `<tr>` element |  |
| none | The element is completely removed |  |
| initial | Sets this property to its default value. https://www.w3schools.com/cssref/css_initial.phphttps://www.w3schools.com/cssref/css_initial.php |  |
| inherit | Inherits this property from its parent element. https://www.w3schools.com/cssref/css_inherit.phphttps://www.w3schools.com/cssref/css_inherit.php |  |

---

## Gird

[CSS Grid Layout (w3schools.com)](https://www.w3schools.com/csS/css_grid.asp)

Grid cho phép sắp xếp các thành phần trên một trang theo các vùng.

****1. Columns (Cột)****

Bạn có thể điều chỉnh cột dựa theo thuộc tính sau:

`grid-template-columns`

```css
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
```

1. **3 cột tự động cân bằng**

```css
.grid-container {display: grid; grid-template-columns: auto auto auto;}
```

![https://images.viblo.asia/042faca1-60e0-47b1-92cc-cd521b72f555.PNG](https://images.viblo.asia/042faca1-60e0-47b1-92cc-cd521b72f555.PNG)

1. **3 cột tùy chỉnh tỉ lệ**

```css
.grid-container {display: grid; grid-template-columns: 20% 30% 50%;}
```

![https://images.viblo.asia/78ece6d5-35f3-41c7-acc7-56d80627bd66.PNG](https://images.viblo.asia/78ece6d5-35f3-41c7-acc7-56d80627bd66.PNG)

## ****2. Rows (Hàng)****

Bạn có thể điều chỉnh hàng dựa theo thuộc tính sau (tương tự như cột):

`grid-template-rows`

## ****3. Gaps (Khoảng trống)****

- Khoảng cách giữa mỗi cột / hàng được gọi là khoảng trống.

![https://images.viblo.asia/e8900a40-4394-4bd8-87d0-55ea6d783654.PNG](https://images.viblo.asia/e8900a40-4394-4bd8-87d0-55ea6d783654.PNG)

```css
grid-column-gap
grid-row-gap
grid-gap
```

![Untitled](Display%20cce84ca3fb624e0793a5fa0aa2c1a508/Untitled.png)

## ****4. Lines****

- Viền nằm giữa các cột và hàng.

Bạn có thể tùy chỉnh gộp cột bằng cách css ở từng ô (cell) theo các thuộc tính sau :

![https://images.viblo.asia/98cf6563-5188-43fd-8494-db973ab29cf6.PNG](https://images.viblo.asia/98cf6563-5188-43fd-8494-db973ab29cf6.PNG)

```css
grid-columns-start: [Line bắt đầu]
grid-columns-end: [Line kết thúc]
grid-row-start: [Line bắt đầu]
grid-row-end: [Line kết thúc]
```

```css
grid-columns: [Line bắt đầu]/[Line kết thúc]
grid-row: [Line bắt đầu]/[Line kết thúc]
```

![Untitled](Display%20cce84ca3fb624e0793a5fa0aa2c1a508/Untitled%201.png)

• Ngoài ra bạn cũng có thể tùy chỉnh theo vùng bằng thuộc tính:

```css
grid-area: grid-row-start / grid-column-start / grid-row-end / grid-column-end;
```

```css
.item8 {
  grid-area: 1 / 2 / 5 / 6;
}
```

![https://images.viblo.asia/11d184b8-9935-46ca-9a55-37d1e8202bfc.PNG](https://images.viblo.asia/11d184b8-9935-46ca-9a55-37d1e8202bfc.PNG)

---

---

## Flexbox

Before the Flexbox Layout module, there were four layout modes:

- Block, for sections in a webpage
- Inline, for text
- Table, for two-dimensional table data
- Positioned, for explicit position of an element

The Flexible Box Layout Module, makes it easier to design flexible responsive layout structure without using float or positioning.

1. Để sử dụng flexbox model trước tiên cần xác định một flexbox container.

```css
.flex-container {
  display: flex;
}
```

The flex container properties are:

- `[flex-direction](https://www.w3schools.com/csS/css3_flexbox_container.asp#flex-direction)`
- `[flex-wrap](https://www.w3schools.com/csS/css3_flexbox_container.asp#flex-wrap)`
- `[flex-flow](https://www.w3schools.com/csS/css3_flexbox_container.asp#flex-flow)`
- `[justify-content](https://www.w3schools.com/csS/css3_flexbox_container.asp#justify-content)`
- `[align-items](https://www.w3schools.com/csS/css3_flexbox_container.asp#align-items)`
- `[align-content](https://www.w3schools.com/csS/css3_flexbox_container.asp#align-content)`

### **The flex-direction Property**

- xác định hướng mà container muốn xếp chồng các items.

### **The flex-wrap Property**

- Chỉ định xem mục flex có nên bọc hay không.

### **The flex-flow Property**

- là thuộc tính để đặt nhanh các giá trị của flex-direction và flex-wrap.

### **The justify-content Property**

- để căn chỉnh theo chiều ngang các mục flex.

### **The align-items Property**

- để căn chỉnh theo chiều dọc các flex items.

### **The align-content Property**

- Dùng để căn chỉnh các dòng flex.

### **Perfect Centering**

- Set justify-content và align-items thành center.

```css
.flex-container {
  display: flex;
  height: 300px;
  justify-content: center;
  align-items: center;
}
```

### **Child Elements (Items)**

Phân tử con trực tiếp của flex-container tự động trở thành các flex-items.

The flex item properties are:

- `[order](https://www.w3schools.com/csS/css3_flexbox_items.asp#order)`
- `[flex-grow](https://www.w3schools.com/csS/css3_flexbox_items.asp#flex-grow)`
- `[flex-shrink](https://www.w3schools.com/csS/css3_flexbox_items.asp#flex-shrink)`
- `[flex-basis](https://www.w3schools.com/csS/css3_flexbox_items.asp#flex-basis)`
- `[flex](https://www.w3schools.com/csS/css3_flexbox_items.asp#flex)`
- `[align-self](https://www.w3schools.com/csS/css3_flexbox_items.asp#align-self)`

### **The order Property**

- chỉ định thứ tự của các flex-items.

```css
<div class="flex-container">
  <div style="order: 3">1</div>
  <div style="order: 2">2</div>
  <div style="order: 4">3</div>
  <div style="order: 1">4</div>
</div>
```

### **The flex-grow Property**

- chỉ định mức độ tăng trưởng so với các mục còn lại.
- mặc định là 0.

```css
<div class="flex-container">
  <div style="flex-grow: 1">1</div>
  <div style="flex-grow: 1">2</div>
  <div style="flex-grow: 8">3</div>
</div>
```

![Untitled](Display%20cce84ca3fb624e0793a5fa0aa2c1a508/Untitled%202.png)

### **The flex-shrink Property**

- chỉ định một phần tử sẽ co lại bao nhiêu so với cac phân tử còn lại.
- giá trị mặc định là 1.

```css
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
```

![Untitled](Display%20cce84ca3fb624e0793a5fa0aa2c1a508/Untitled%203.png)

### **The flex-basis Property**

- chỉ định độ dài ban đầu của các mục

### **The flex Property**

- là cách đặt nhanh các thuộc tính flex-grow, flex-shrink, flex-basis

### **The align-self Property**

- căn chỉnh cho mục đã chọn trong vùng chứa.
- align-self ghi đè align-items.

```css
<div class="flex-container">
  <div>1</div>
  <div>2</div>
  <div style="align-self: center">3</div>
  <div>4</div>
</div>
```

![Untitled](Display%20cce84ca3fb624e0793a5fa0aa2c1a508/Untitled%204.png)

## **CSS Flex Responsive**

- learn Media Query.

---

# CSS Sass

## What is Sass ?

- Sass viết tắt của Syntactically Awesome Stylesheet

- Sass là một extension của CSS

- Sass giảm sự lặp lại code của CSS

## Why use Sass ? 

- Stylesheet thường lớn hơn trong quá trình phát triển, trở lên phức tạp và khó bảo trì hơn. Lúc này một bộ tiền sử lý CSS có thể hỗ trợ chúng ta.

- Sass cho phép cho ta sử dụng những tính năng không có trong CSS như variables, quy tắc lồng nhau, imports, inheritance, built-in functions, ....

## Sass work ?

- A browser không hiểu các Sass code. Cho nên, ta cần một trình tiền sử lý Sass để chuyển đổi Sass code sang CSS.

- Ta cần cung cấp cho trình biên dịch code Sass và nhận về code CSS 

### Sass file type

Sass files : có đuôi là ".scss"

## Syntax 

#### Comments

- /* comment */  : block comments

- // comment : inline comment

#### Variables

- Là cách để lưu trữ thông tin là ta sử dụng lại sau này.

> Các dạng thông tin có thể lưu trư : 
 
- Strings
- numbers
- colors
- booleans
- lists
- nulls

> Sass sử dụng ký tự : $name_variable để khai báo biến.

$variablename: value;

Phạm vi biến : Sass variable chỉ khả dụng trong phạm vi chúng được xác định.

* Sass !global : chỉ định một biến là toàn cục.

#### Sass Nested Rules

- Cho phép lồng các CSS selectors như trong HTML.

```css
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
- Giúp code clean hơn.

- Nhiều thuộc tính có phần tiền tố giống nhau , ta có thể viết chúng lồng vào nhau : 

```css
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
#### Sass Importing Files

@import : cho phép đưa nội dung của tệp này vào tệp khác.

> CSS @import có một vấn đề lớn về hiệu năng, nó tạo thêm một yêu cầu HTTP mỗi khi gọi nó. Tuy >nhiên Sass @import bao gồm tệp trong CSS, vì vậy không cần gọi HTTP trong thời gian chạy.

@import filename;

* Không cần thiết nhập phần đuôi của tệp.
```
@import "variables";
@import "colors";
@import "reset";
```
#### Sass Partials

- Mặc định, Sass sẽ dịch mã tất cả các tệp .scss. Tuy nhiên, khi ta muốn import một tệp, ta không cần phải dịch trực tiếp.

- Sass có một cơ chế cho việc này : thêm dấu gạch dưới đầu tên tệp, Sass sẽ không phiên mã nó.

_filename;

#### Sass Mixins

@mixin cho phép tạo mã để sử dụng lại.

@include được dùng để khai báo mixin.

```scss
@mixin name {
  property: value;
  property: value;
  ...
}
```
> Trong Sass dấu gạch dưới và dấu gạch nối được cho là giống nhau.

##### Using mixin

@include được dùng để khai báo một mixin.

```scss
selector {
  @include mixin-name;
}
```
##### Passing Variables to a Mixin

Mixin chấp nhận tham số, bạn có thể chuyển các biến vào mixin.

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
##### Default Values for a Mixin

```scss
@mixin bordered($color: blue, $width: 1px) {
  border: $width solid $color;
}

scss 
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}

.myBox {
  @include transform(rotate(20deg));
}
```
### Sass @extend

Cho phép chia sẻ các thuộc tính từ bộ CSS này qua bộ khác.

ex : 

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

convert to CSS : 

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

Bằng cách này ta không cần khai báo nhiều class cho mỗi phần tử.

## Sass Functions

### String functions 

- được dùng để thao tác lấy thông tin về một chuỗi

<div class="w3-responsive">
<table class="ws-table-all notranslate">
  <tr>
    <th>Function</th>
    <th>Description &amp; Example</th>
  </tr>
  <tr>
    <td>quote(<em>string</em>)</td>
    <td>Adds quotes to <em>string</em>, and returns the result.<br><br>
    <strong>Example:</strong><br>quote(Hello world!)<br>Result: &quot;Hello world!&quot;</td>
  </tr>
  <tr>
    <td>str-index(<em>string</em>,<em> substring</em>)</td>
    <td>Returns the index of the first occurrence of the <em>substring</em> within 
    <em>string</em>.<br><br>
    <strong>Example:</strong><br>str-index(&quot;Hello world!&quot;, &quot;H&quot;)<br>Result: 1</td>
  </tr>
  <tr>
    <td>str-insert(<em>string</em>, <em>insert</em>, <em>index</em>)</td>
    <td>Returns <em>string</em> with <em>insert</em> inserted at the specified 
    <em>index</em> position.<br><br>
    <strong>Example:</strong><br>str-insert(&quot;Hello world!&quot;, &quot; wonderful&quot;, 6)<br>Result: &quot;Hello 
    wonderful world!&quot;</td>
  </tr>
  <tr>
    <td>str-length(<em>string</em>)</td>
    <td>Returns the length of <em>string</em> (in characters).<br><br>
    <strong>Example:</strong><br>str-length(&quot;Hello world!&quot;)<br>Result: 12</td>
  </tr>
  <tr>
    <td>str-slice(<em>string</em>, <em>start</em>, <em>end</em>)</td>
    <td>Extracts characters from <em>string</em>; start at <em>start</em> 
    and end at <em>end</em>, and returns the slice.<br><br>
    <strong>Example:</strong><br>str-slice(&quot;Hello world!&quot;, 2, 
    5)<br>Result: &quot;ello&quot;</td>
  </tr>
  <tr>
    <td>to-lower-case(<em>string</em>)</td>
    <td>Returns a copy of <em>string</em> converted to lower case.<br><br>
    <strong>Example:</strong><br>to-lower-case(&quot;Hello 
    World!&quot;)<br>Result: &quot;hello world!&quot;</td>
  </tr>
  <tr>
    <td>to-upper-case(<em>string</em>)</td>
    <td>Returns a copy of <em>string</em> converted to upper case.<br><br>
    <strong>Example:</strong><br>to-upper-case(&quot;Hello 
    World!&quot;)<br>Result: &quot;HELLO WORLD!&quot;</td>
  </tr>
  <tr>
    <td>unique-id()</td>
    <td>Returns a unique randomly generated unquoted string (guaranteed to be 
    unique within the current sass session).<br><br>
    <strong>Example:</strong><br>unique-id()<br>Result: 
    tyghefnsv</td>
  </tr>
  <tr>
    <td>unquote(<em>string</em>)</td>
    <td>Removes quotes around <em>string</em> (if any), and returns the result.<br>
    <br>
    <strong>Example:</strong><br>unquote(&quot;Hello world!&quot;)<br>Result: Hello world!</td>
  </tr>
  </table>
</div>

### Numeric Functions 

Thao tác giá trị các số.

<div class="w3-responsive">
<table class="ws-table-all notranslate">
  <tr>
    <th>Function</th>
    <th>Description &amp; Example</th>
  </tr>
  <tr>
    <td>abs(<em>number</em>)</td>
    <td>Returns the absolute value of <em>number</em>.<br><br>
    <strong>Example:</strong><br>abs(15)<br>Result: 15<br>abs(-15)<br>Result: 15</td>
  </tr>
  <tr>
    <td>ceil(<em>number</em>)</td>
    <td>Rounds <em>number</em> up to the nearest integer.<br><br>
    <strong>Example:</strong><br>ceil(15.20)<br>Result: 16</td>
  </tr>
  <tr>
    <td>comparable(<em>num1</em>, <em>num2</em>)</td>
    <td>Returns whether <em>num1</em> and <em>num2</em> are comparable.<br><br>
    <strong>Example:</strong><br>comparable(15px, 10px)<br>Result: true<br>comparable(20mm, 1cm)<br>Result: 
    true<br>comparable(35px, 2em)<br>Result: false</td>
  </tr>
  <tr>
    <td>floor(<em>number</em>)</td>
    <td>Rounds <em>number</em> down to the nearest integer.<br><br>
    <strong>Example:</strong><br>floor(15.80)<br>Result: 15</td>
  </tr>
  <tr>
    <td>max(<em>number...</em>)</td>
    <td>Returns the highest value of several numbers.<br><br>
    <strong>Example:</strong><br>max(5, 7, 9, 0, -3, -7)<br>Result: 9</td>
  </tr>
  <tr>
    <td>min(<em>number...</em>)</td>
    <td>Returns the lowest value of several numbers.<br><br>
    <strong>Example:</strong><br>min(5, 7, 9, 0, -3, -7)<br>Result: -7</td>
  </tr>
  <tr>
    <td>percentage(<em>number</em>)</td>
    <td>Converts <em>number</em> to a percentage (multiplies the number with 100).<br>
    <br>
    <strong>Example:</strong><br>percentage(1.2)<br>Result: 120</td>
  </tr>
  <tr>
    <td>random()</td>
    <td>Returns a random number between 0 and 1.<br><br>
    <strong>Example:</strong><br>random()<br>Result: 0.45673</td>
  </tr>
  <tr>
    <td>random(<em>number</em>)</td>
    <td>Returns a random integer between 1 and <em>number</em>.<br><br>
    <strong>Example:</strong><br>random(6)<br>Result: 4</td>
  </tr>
  <tr>
    <td>round(<em>number</em>)</td>
    <td>Rounds <em>number</em> to the nearest integer.<br><br>
    <strong>Example:</strong><br>round(15.20)<br>Result: 15<br>round(15.80)<br>Result: 16</td>
  </tr>
  </table>
</div>

### List Functions

- Thao tác trên một danh sách.

<div class="w3-responsive">
<table class="ws-table-all notranslate">
  <tr>
    <th>Function</th>
    <th>Description &amp; Example</th>
  </tr>
  <tr>
    <td>append(<em>list</em>, <em>value</em>, [<em>separator</em>])</td>
    <td>Adds a single <em>value</em> to the end of the list. <em>separator</em> 
    can be auto, comma, or space. auto is default.<br><br>
    <strong>Example:<br></strong>append((a b c), d)<br>Result: a b c d<br>append((a b c), (d), comma)<br>
    Result: a, b, c, d</td>
  </tr>
  <tr>
    <td>index(<em>list</em>, <em>value</em>)</td>
    <td>Returns the index position for the <em>value</em> in list.<br><br>
    <strong>Example:</strong><br>index(a b c, b)<br>Result: 2<br>index(a b c, f)<br>Result: null</td>
  </tr>
  <tr>
    <td>is-bracketed(<em>list</em>)</td>
    <td>Checks whether the list has square brackets.<br><br>
    <strong>Example:</strong><br>is-bracketed([a b c])<br>Result: true <br>is-bracketed(a b c)<br>Result: 
    false</td>
  </tr>
  <tr>
    <td>join(<em>list1</em>, <em>list2</em>, [<em>separator, bracketed</em>])</td>
    <td>Appends <em>list2</em> to the end of <em>list1</em>. <em>separator</em> 
    can be auto, comma, or space. auto is default (will use the separator in the 
    first list). <em>bracketed</em> can be auto, true, or false. auto is default.<br>
    <br>
    <strong>Example:</strong><br>join(a b c, d e f)<br>Result: a b c d e f<br>join((a b c), (d e f), 
    comma)<br>Result: a, b, c, d, e, f<br>join(a b c, d e f, $bracketed: true)<br>Result: 
    [a b c d e f]</td>
  </tr>
  <tr>
    <td>length(<em>list</em>)</td>
    <td>Returns the length of the list.<br><br>
    <strong>Example:</strong><br>length(a b c)<br>Result: 3</td>
  </tr>
  <tr>
    <td>list-separator(<em>list</em>)</td>
    <td>Returns the list separator used, as a string. Can be either space or 
    comma.<br><br>
    <strong>Example:</strong><br>list-separator(a b c)<br>Result: &quot;space&quot;<br>list-separator(a, b, c)<br>
    Result: &quot;comma&quot;</td>
  </tr>
  <tr>
    <td>nth(<em>list</em>, <em>n</em>)</td>
    <td>Returns the <em>n</em>th element in the list.<br><br>
    <strong>Example:</strong><br>nth(a b c, 3)<br>Result: c</td>
  </tr>
  <tr>
    <td>set-nth(<em>list</em>, <em>n</em>, <em>value</em>)</td>
    <td>Sets the <em>n</em>th list element to the <em>value</em> specified.<br>
    <br>
    <strong>Example:</strong><br>set-nth(a b c, 2, x)<br>Result: a x c</td>
  </tr>
  <tr>
    <td>zip(<em>lists</em>)</td>
    <td>Combines lists into a single multidimensional list.<br><br>
    <strong>Example:</strong><br>zip(1px 2px 3px, solid dashed dotted, red green blue)<br>Result: 1px 
    solid red, 2px dashed green, 3px dotted blue</td>
  </tr>
  </table>
</div>

### Map functions

Map đại diện cho các cặp {key, value}

<div class="w3-responsive">
<table class="ws-table-all notranslate">
  <tr>
    <th>Function</th>
    <th>Description &amp; Example</th>
  </tr>
  <tr>
    <td>map-get(<em>map</em>, <em>key</em>)</td>
    <td>Returns the value for the specified <em>key </em>in the map.<br><br>
    <strong>Example:</strong><br>$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)<br>map-get($font-sizes, 
    &quot;small&quot;)<br>Result: 12px</td>
  </tr>
  <tr>
    <td>map-has-key(<em>map</em>, <em>key</em>)</td>
    <td>Checks whether <em>map</em> has the specified <em>key</em>. Returns true or 
    false.<br><br><strong>Example:</strong><br>$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)<br>map-has-key($font-sizes, 
    &quot;big&quot;)<br>Result: false</td>
  </tr>
  <tr>
    <td>map-keys(<em>map</em>)</td>
    <td>Returns a list of all keys in <em>map</em>.<br><br><strong>Example:</strong><br>
    $font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)<br>map-keys($font-sizes)<br>Result: 
    &quot;small&quot;, &quot;normal, &quot;large&quot;</td>
  </tr>
  <tr>
    <td>map-merge(<em>map1</em>, <em>map2</em>)</td>
    <td>Appends <em>map2</em> to the end of <em>map1</em>.<br><br><strong>
    Example:</strong><br>$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)<br>
    $font-sizes2: (&quot;x-large&quot;: 30px, &quot;xx-large&quot;: 36px)<br>map-merge($font-sizes, 
    $font-sizes2)<br>Result: &quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px, 
    &quot;x-large&quot;: 30px, &quot;xx-large&quot;: 36px</td>
  </tr>
  <tr>
    <td>map-remove(<em>map</em>, <em>keys...</em>)</td>
    <td>Removes the specified keys from <em>map</em>.<br><br><strong>Example:</strong><br>$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)<br>map-remove($font-sizes, 
    &quot;small&quot;)<br>Result: (&quot;normal&quot;: 18px, &quot;large&quot;: 24px)<br>map-remove($font-sizes, 
    &quot;small&quot;, &quot;large&quot;)<br>Result: (&quot;normal&quot;: 18px)</td>
  </tr>
  <tr>
    <td>map-values(<em>map</em>)</td>
    <td>Returns a list of all values in <em>map</em>.<br><br><strong>Example:</strong><br>$font-sizes: (&quot;small&quot;: 12px, &quot;normal&quot;: 18px, &quot;large&quot;: 24px)<br>map-values($font-sizes)<br>Result: 
    12px, 18px, 24px</td>
  </tr>
  </table>
</div>

### Selector Functions

Dùng để kiểm tra và thao tác các selectors.

<div class="w3-responsive">
<table class="ws-table-all notranslate">
  <tr>
    <th>Function</th>
    <th>Description &amp; Example</th>
  </tr>
  <tr>
    <td>is-superselector(<em>super</em>, <em>sub</em>)</td>
    <td>Checks whether the <em>super</em> selector matches all the elements that
    <em>sub</em> matches.<br><br>
    <strong>Example:</strong><br>is-superselector(&quot;div&quot;, &quot;div.myInput&quot;)<br>Result: true<br>is-superselector(&quot;div.myInput&quot;, 
    &quot;div&quot;)<br>Result: false<br>is-superselector(&quot;div&quot;, 
    &quot;div&quot;)<br>Result: true</td>
  </tr>
  <tr>
    <td>selector-append(<em>selectors</em>)</td>
    <td>Appends the second (and third/fourth etc.) selector to the first 
    selector.<br><br>
    <strong>Example:</strong><br>selector-append(&quot;div&quot;, &quot;.myInput&quot;)<br>Result: div.myInput<br>selector-append(&quot;.warning&quot;, 
    &quot;__a&quot;)<br>Result: .warning__a</td>
  </tr>
  <tr>
    <td>selector-extend(<em>selector</em>, <em>extendee</em>, <em>extender</em>)</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td>selector-nest(<em>selectors</em>)</td>
    <td>Returns a new selector containing a nested list of CSS selectors based 
    on the list provided.<br><br>
    <strong>Example:</strong><br>selector-nest(&quot;ul&quot;, &quot;li&quot;)<br>Result: ul li<br>selector-nest(&quot;.warning&quot;, 
    &quot;alert&quot;, &quot;div&quot;)<br>Result: .warning div, alert div</td>
  </tr>
  <tr>
    <td>selector-parse(<em>selector</em>)</td>
    <td>Returns a list of strings contained in <em>selector</em> using the same 
    format as the parent selector.<br><br>
    <strong>Example:<br></strong>selector-parse(&quot;h1 .myInput .warning&quot;)<br>Result: ('h1' '.myInput' 
    '.warning')</td>
  </tr>
  <tr>
    <td>selector-replace(<em>selector</em>, <em>original</em>, <em>replacement</em>)</td>
    <td>Returns a new selector with the selectors specified in <em>replacement</em> 
    in place of selectors specified in <em>original</em>.<br><br>
    <strong>Example:</strong><br>selector-replace(&quot;p.warning&quot;, &quot;p&quot;, &quot;div&quot;)<br>Result: div.warning</td>
  </tr>
  <tr>
    <td>selector-unify(<em>selector1</em>, <em>selector2</em>)</td>
    <td>Returns a new selector that matches only elements matched by both <em>
    selector1</em> and <em>selector2</em>.<br><br>
    <strong>Example:</strong><br>selector-unify(&quot;myInput&quot;, &quot;.disabled&quot;)<br>Result: myInput.disabled<br>
    selector-unify(&quot;p&quot;, &quot;h1&quot;)<br>Result: null</td>
  </tr>
  <tr>
    <td>simple-selectors(<em>selectors</em>)</td>
    <td>Returns a list of the individual selectors in <em>selectors</em>.<br>
    <br>
    <strong>Example:</strong><br>simple-selectors(&quot;div.myInput&quot;)<br>Result: div, .myInput<br>
    simple-selectors(&quot;div.myInput:before&quot;)<br>Result: div, .myInput, 
    :before</td>
  </tr>
  </table>
</div>

### Color Functions

#### Sass Set Color Functions

<div class="w3-responsive">
<table class="ws-table-all notranslate">
  <tr>
    <th>Function</th>
    <th>Description &amp; Example</th>
  </tr>
  <tr>
    <td>rgb(<em>red</em>, <em>green</em>, <em>blue</em>)</td>
    <td>Sets a color using the Red-Green-Blue (RGB) model. An RGB color value is 
    specified with: rgb(red, green, blue). Each parameter defines the intensity 
    of that color and can be an integer between 0 and 255, or a percentage value 
    (from 0% to 100%).<br><br>
    <strong>Example:</strong><br>rgb(0, 0, 255); // rendered as blue because the 
    blue parameter is set to its highest value (255) and the others are set to 0</td>
  </tr>
  <tr>
    <td>rgba(<em>red</em>, <em>green</em>, <em>blue</em>, <em>alpha</em>)</td>
    <td>Sets a color using the Red-Green-Blue-Alpha (RGBA) model. RGBA color 
    values are an extension of RGB color values with an alpha channel - which 
    specifies the opacity of the color. The alpha parameter is a number between 
    0.0 (fully transparent) and 1.0 (fully opaque).<br><br>
    <strong>Example:</strong><br>rgba(0, 0, 255, 0.3); // rendered as blue with 
    opacity</td>
  </tr>
  <tr>
    <td>hsl(<em>hue</em>, <em>saturation</em>, <em>lightness</em>)</td>
    <td>Sets a color using the Hue-Saturation-Lightness (HSL) model - and 
    represents a cylindrical-coordinate representation of colors. Hue is a 
    degree on the color wheel (from 0 to 360) - 0 or 360 is red, 120 is green, 
    240 is blue. Saturation is a percentage value; 0% means a shade of gray and 
    100% is the full color. Lightness is also a percentage; 0% is black, 100% is 
    white.<br><br>
    <strong>Example:</strong><br>hsl(120, 100%, 50%); // green<br>hsl(120, 100%, 
    75%); // light green<br>hsl(120, 100%, 25%); // dark green<br>hsl(120, 60%, 
    70%); // pastel green <br></td>
  </tr>
  <tr>
    <td>hsla(<em>hue</em>, <em>saturation</em>, <em>lightness</em>, <em>alpha</em>)</td>
    <td>Sets a color using the Hue-Saturation-Lightness-Alpha (HSLA) model. HSLA 
    color values are an extension of HSL color values with an alpha channel - 
    which specifies the opacity of the color. The alpha parameter is a number 
    between 0.0 (fully transparent) and 1.0 (fully opaque).<br><br>
    <strong>Example:</strong><br>hsl(120, 100%, 50%, 0.3); // green with opacity<br>
    hsl(120, 100%, 75%, 0.3); // light green with opacity</td>
  </tr>
  <tr>
    <td>grayscale(<em>color</em>)</td>
    <td>Sets a gray color with the same lightness as <em>color</em>.<br><br>
    <strong>Example:</strong><br>grayscale(#7fffd4);<br>Result: #c6c6c6</td>
  </tr>
  <tr>
    <td>complement(<em>color</em>)</td>
    <td>Sets a color that is the complementary color of <em>color</em>.<br><br>
    <strong>Example:</strong><br>complement(#7fffd4);<br>Result: #ff7faa</td>
  </tr>
  <tr>
    <td>invert(<em>color</em>, <em>weight</em>)</td>
    <td>Sets a color that is the inverse or negative color of <em>color</em>. 
    The <em>weight</em> parameter is optional and must be a number between 0% 
    and 100%. Default is 100%.<br><br>
    <strong>Example:</strong><br>invert(white);<br>Result: black</td>
  </tr>
  </table>
</div>

#### Sass Get Color Functions

<div class="w3-responsive">
<table class="ws-table-all notranslate">
  <tr>
    <th>Function</th>
    <th>Description &amp; Example</th>
  </tr>
  <tr>
    <td>red(<em>color</em>)</td>
    <td>Returns the red value of <em>color</em> as a number between 0 and 255.<br><br>
    <strong>Example:</strong><br>red(#7fffd4);<br>Result: 127<br>red(red);<br>Result: 
    255</td>
  </tr>
  <tr>
    <td>green(<em>color</em>)</td>
    <td>Returns the green value of <em>color</em> as a number between 0 and 255.<br><br>
    <strong>Example:</strong><br>green(#7fffd4);<br>Result: 255<br>green(blue);<br>Result: 
    0</td>
  </tr>
  <tr>
    <td>blue(<em>color</em>)</td>
    <td>Returns the blue value of <em>color</em> as a number between 0 and 255.<br><br>
    <strong>Example:</strong><br>blue(#7fffd4);<br>Result: 212<br>blue(blue);<br>Result: 255</td>
  </tr>
  <tr>
    <td>hue(<em>color</em>)</td>
    <td>Returns the hue of <em>color</em> as a number between 0deg and 360deg.<br><br>
    <strong>Example:</strong><br>hue(#7fffd4);<br>Result: 160deg</td>
  </tr>
  <tr>
    <td>saturation(<em>color</em>)</td>
    <td>Returns the HSL saturation of <em>color</em> as a number between 0% and 
    100%.<br><br>
    <strong>Example:</strong><br>saturation(#7fffd4);<br>Result: 100%</td>
  </tr>
  <tr>
    <td>lightness(<em>color</em>)</td>
    <td>Returns the HSL lightness of <em>color</em> as a number between 0% and 
    100%.<br><br>
    <strong>Example:</strong><br>lightness(#7fffd4);<br>Result: 74.9%</td>
  </tr>
  <tr>
    <td>alpha(<em>color</em>)</td>
    <td>Returns the alpha channel of <em>color</em> as a number between 0 and 1.<br><br>
    <strong>Example:</strong><br>alpha(#7fffd4);<br>Result: 1</td>
  </tr>
  <tr>
    <td>opacity(<em>color</em>)</td>
    <td>Returns the alpha channel of <em>color</em> as a number between 0 and 1.<br><br>
    <strong>Example:</strong><br>opacity(rgba(127, 255, 212, 0.5));<br>Result: 
    0.5</td>
  </tr>
  </table>
</div>

#### Sass Manipulate Color Functions

<div class="w3-responsive">
<table class="ws-table-all notranslate">
  <tr>
    <th>Function</th>
    <th>Description &amp; Example</th>
  </tr>
  <tr>
    <td>mix(<em>color1</em>, <em>color2</em>, <em>weight</em>)</td>
    <td>Creates a color that is a mix of <em>color1</em> and <em>color2</em>. 
    The <em>weight</em> parameter must be between 0% and 100%. A larger weight 
    means that more of color1 should be used. A smaller weight means that more 
    of color2 should be used. Default is 50%.</td>
  </tr>
  <tr>
    <td>adjust-hue(<em>color</em>, <em>degrees</em>)</td>
    <td>Adjusts the <em>color</em>'s hue with a degree from -360deg to 360deg.<br><br>
    <strong>Example:</strong><br>adjust-hue(#7fffd4, 80deg);<br>Result: #8080ff</td>
  </tr>
  <tr>
    <td>adjust-color(<em>color</em>, <em>red</em>, <em>green</em>, <em>blue</em>,
    <em>hue</em>, <em>saturation</em>, <em>lightness</em>, <em>alpha</em>)</td>
    <td>Adjusts one or more parameters by the specified amount. This function 
    adds or subtracts the specified amount to/from the existing color value.<br>
    <br>
    <strong>Example:</strong><br>adjust-color(#7fffd4, blue: 25);<br>Result:</td>
  </tr>
  <tr>
    <td>change-color(<em>color</em>, <em>red</em>, <em>green</em>, <em>blue</em>,
    <em>hue</em>, <em>saturation</em>, <em>lightness</em>, <em>alpha</em>)</td>
    <td>Sets one or more parameters of a <em>color</em> to new values.<br><br>
    <strong>Example:</strong><br>change-color(#7fffd4, red: 255);<br>Result: 
    #ffffd4</td>
  </tr>
  <tr>
    <td>scale-color(<em>color</em>, <em>red</em>, <em>green</em>, <em>blue</em>,&nbsp;
    <em>saturation</em>, <em>lightness</em>, <em>alpha</em>)</td>
    <td>Scales one or more parameters of <em>color</em>.</td>
  </tr>
  <tr>
    <td>rgba(<em>color</em>, <em>alpha</em>)</td>
    <td>Creates a new color of <em>color</em> with the given <em>alpha</em> 
    channel.<br><br><strong>Example:</strong><br>rgba(#7fffd4, 30%);<br>Result: 
    rgba(127, 255, 212, 0.3)</td>
  </tr>
  <tr>
    <td>lighten(<em>color</em>, <em>amount</em>)</td>
    <td>Creates a lighter color of <em>color</em> with an <em>amount</em> 
    between 0% and 100%. The amount parameter increases the HSL lightness by 
    that percent.</td>
  </tr>
  <tr>
    <td>darken(<em>color</em>, <em>amount</em>)</td>
    <td>Creates a darker color of <em>color</em> with an <em>amount</em> between 
    0% and 100%. The amount parameter decreases the HSL lightness by that 
    percent.</td>
  </tr>
  <tr>
    <td>saturate(<em>color</em>, <em>amount</em>)</td>
    <td>Creates a more saturated color of <em>color</em> with an <em>amount</em> 
    between 0% and 100%. The amount parameter increases the HSL saturation by 
    that percent.</td>
  </tr>
  <tr>
    <td>desaturate(<em>color</em>, <em>amount</em>)</td>
    <td>Creates a less saturated color of <em>color</em> with an <em>amount</em> 
    between 0% and 100%. The amount parameter decreases the HSL saturation by 
    that percent.</td>
  </tr>
  <tr>
    <td>opacify(<em>color</em>, <em>amount</em>)</td>
    <td>Creates a more opaque color of <em>color</em> with an <em>amount</em> 
    between 0 and 1. The amount parameter increases the alpha channel by that 
    amount.</td>
  </tr>
  <tr>
    <td>fade-in(<em>color</em>, <em>amount</em>)</td>
    <td>Creates a more opaque color of <em>color</em> with an <em>amount</em> 
    between 0 and 1. The amount parameter increases the alpha channel by that 
    amount.</td>
  </tr>
  <tr>
    <td>transparentize(<em>color</em>, <em>amount</em>)</td>
    <td>Creates a more transparent color of <em>color</em> with an <em>amount</em> 
    between 0 and 1. The amount parameter decreases the alpha channel by that 
    amount.</td>
  </tr>
  <tr>
    <td>fade-out(<em>color</em>, <em>amount</em>)</td>
    <td>Creates a more transparent color of <em>color</em> with an <em>amount</em> 
    between 0 and 1. The amount parameter decreases the alpha channel by that 
    amount.</td>
  </tr>
  </table>
</div>

### Introspection Functions

<div class="w3-responsive">
<table class="ws-table-all notranslate">
  <tr>
    <th>Function</th>
    <th>Description &amp; Example</th>
  </tr>
  <tr>
    <td>call(<em>function</em>, <em>arguments</em>...)</td>
    <td>Calls a function with arguments, and returns the result.</td>
  </tr>
  <tr>
    <td>content-exists()</td>
    <td>Checks whether the current mixin was passed a @content block.</td>
  </tr>
  <tr>
    <td>feature-exists(<em>feature</em>)</td>
    <td>Checks whether <em>feature</em> is supported by the current Sass 
    implementation.<br><br>
    <strong>Example:</strong><br>feature-exists(&quot;at-error&quot;);<br>Result: true</td>
  </tr>
  <tr>
    <td>function-exists(<em>functionname</em>)</td>
    <td>Checks whether the specified function exists.<br><br>
    <strong>Example:</strong><br>function-exists(&quot;nonsense&quot;)<br>Result: false</td>
  </tr>
  <tr>
    <td>get-function(<em>functionname</em>, css: false)</td>
    <td>Returns the specified function. If css is true, it returns a plain CSS 
    function instead.</td>
  </tr>
  <tr>
    <td>global-variable-exists(<em>variablename</em>)</td>
    <td>Checks whether the specified global variable exists.<br><br>
    <strong>Example:</strong><br>variable-exists(a)<br>Result: true</td>
  </tr>
  <tr>
    <td>inspect(<em>value</em>)</td>
    <td>Returns a string representation of <em>value</em>.</td>
  </tr>
  <tr>
    <td>mixin-exists(<em>mixinname</em>)</td>
    <td>Checks whether the specified mixin exists.<br><br>
    <strong>Example:</strong><br>mixin-exists(&quot;important-text&quot;)<br>Result: true</td>
  </tr>
  <tr>
    <td>type-of(<em>value</em>)</td>
    <td>Returns the type of <em>value</em>. Can be number, string, color, list, 
    map, bool, null, function, arglist.<br><br>
    <strong>Example:</strong><br>type-of(15px)<br>Result: number<br>type-of(#ff0000)<br>Result: color</td>
  </tr>
  <tr>
    <td>unit(<em>number</em>)</td>
    <td>Returns the unit associated with a number.<br><br>
    <strong>Example:</strong><br>unit(15px)<br>Result: px</td>
  </tr>
  <tr>
    <td>unitless(<em>number</em>)</td>
    <td>Checks whether the specified number has a unit associated with it.<br>
    <br>
    <strong>Example:</strong><br>unitless(15px)<br>Result: false<br>unitless(15)<br>Result: true</td>
  </tr>
  <tr>
    <td>variable-exists(<em>variablename</em>)</td>
    <td>Checks whether the specified variable exists in the current scope.<br>
    <br>
    <strong>Example:</strong><br>variable-exists(b)<br>Result: true</td>
  </tr>
  </table>
</div>