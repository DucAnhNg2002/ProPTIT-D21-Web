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