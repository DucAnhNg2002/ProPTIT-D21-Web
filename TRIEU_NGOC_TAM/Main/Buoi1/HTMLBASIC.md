# HTML BASIC

Created by: Triệu Tâm<br>
Created time: April 28, 2023 10:45 PM<br>
Last edited by: Triệu Tâm<br>
Last edited time: April 29, 2023 7:22 PM
Tags: Guides

---

# **HTML Block and Inline Elements**

---

Mội phần tử HTML có giá trị hiển thị mặc định, tùy thuộc vào loại phần tử đó.

Có 2 kiểu giá trị hiển thị chính : block và inline.

- Block-level elements :
    - Một block-elements luôn bắt đầu trên một dòng mới và Browser tự động thêm khoảng trắng (margin) và trước và sau phần tử đó.
    - Nó luôn chiếm toàn bộ chiều rộng có sẵn.
    - 2 block-elements thường dùng là : ```<p>``` và ```<div>```.
- Inline elements :
    - Một Inline elements không bắt đầu trên một dòng mới.
    - Nó chỉ chiếm chiều rộng cần thiết.
    - Một phần tử inline không thể chưa phần tử block.

## The ```<div>``` elements

- thường được dùng để chứa các phần tử HTML khác.
- Nó là block-level elements

## The ```<span>``` elements

- Là một inline container dùng để đánh dấu một phần của văn bản hoặc tài liệu.

---

# Table

HTML table cho phép sắp xếp dữ liệu vào các cột và hàng.

```html
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
```

## Table Cell

Mỗi ô của bảng được xác định bởi thẻ : ```<td> </td>``` (td : table data)

## Table Row

Mỗi hàng được xác định bởi thẻ :  ```<tr> </tr>```  (tr : table row)

## Table headers

Tiêu đề của mỗi cột : ```<th> </th>``` 

# HTML Table Tags

| Tag | Description |
| --- | --- |
| table | Defines a table |
| th | Defines a header cell in a table |
| tr | Defines a row in a table |
| td | Defines a cell in a table |
| caption | Defines a table caption |
| colgroup | Specifies a group of one or more columns in a table for formatting |
| col | Specifies column properties for each column within a <colgroup> element |
| thead | Groups the header content in a table |
| tbody | Groups the body content in a table |
| tfoot | Groups the footer content in a table |

---

# Image and Link

## HTML Images

- Thẻ ```<img>``` được sử dụng nhúng một hình ảnh vào web.
- nó có 2 attributes :
    - src : đường dẫn đến img.
    - alt : văn bản thay thế cho hình ảnh.

```html
<img src="url" alt="alternatetext">
```

- Size - width and height

## HTML Links

Thẻ ```<a> </a>``` khai báo một link.

```html
<a href="url">link text</a>
```

- attributes quan trọng nhất của thẻ là “href”, nó cho biết đích đến của link.
- Target attribute :
    - _self : mở tài liệu cùng cửa sổ khi nhấn link.
    - _blank : mở tài liệu ở cửa sổ mới.
    - _parent : mở tài liệu trong khung chính.
    - _top : mở tài liệu trong toàn bộ cửa sổ.

 

---

# HTML Semantic Elements

semantic elements = elements with a meaning.

![https://www.w3schools.com/html/img_sem_elements.gif](https://www.w3schools.com/html/img_sem_elements.gif)

## HTML ```<section>``` elements

- Thẻ khai báo một phần trong document

## **HTML ```<article>``` Element**

- Thẻ chỉ định một nội dung độc lập, khép kín.

## **HTML ```<header>``` Element**

- thẻ ```<header>``` đại diện cho một vùng chứa nội dung giới thiệu hoặc tập các link điều hướng
- Nó thường chưa :
    - heading elements
    - logo or icon
    - Thông tin tác giả.

## **HTML ```<footer>``` Element**

- Thẻ xác định chân trang cho document hoặc section.
- Chứa :
    - thông tin tác giả.
    - thông tin bản quyền.
    - thông tin liên hệ.
    - Sơ đồ web.
    - …

## **HTML ```<nav>``` Element**

- Thẻ xác định một tập hợp các liên kết link.

## HTML ```<main>``` Element

- Thẻ chỉ định phần nội dung chính của web.

---

# Text content

## HTML Heading

- Tiêu đề được xác định bằng các thẻ ```<h1> → <h6>```.
- ```<h1>``` là tiêu đề quan trọng nhất, ```<h6>``` ít quan trọng nhất.

## HTML ```<p>```

- Thẻ ```<p>``` xác định một văn bản.
- ```<pre>``` xác định một đoạn văn được định dạng sẵn.

## HTML Lists

### **Unordered HTML List**

- một unordered list được bắt đầu bằng thẻ ```<ul>```, mỗi mục được bắt đầu bằng thẻ ```<li>```.
- các mục sẽ được đánh dấu bằng dấu chấm.

### **Ordered HTML List**

- một ordered list được bắt đầu bằng thẻ ```<ol>```, mỗi mục được bắt đầu bằng thẻ ```<li>```.
- các mục sẽ được đánh dấu bằng số.

---

# HTML Forms

## The ```<form>``` element

- thẻ ```<form>``` trong HTML được sử dụng để tạo form điền cho người dùng.

```html
<form>

form elements

</form>
```

- ```<form>``` chứa nhiều phần tử input khác nhau : text fields, checkboxes, button….

## The ```<input>``` Element

- Thẻ được hiển thị theo nhiều cách, tùy thuộc vào thuộc tính của attributes.

| Type | Description |
| --- | --- |
| ```<input type="text">``` | Displays a single-line text input field |
| ```<input type="radio">``` | Displays a radio button (for selecting one of many choices) |
| ```<input type="checkbox">``` | Displays a checkbox (for selecting zero or more of many choices) |
| ```<input type="submit">``` | Displays a submit button (for submitting the form) |
| ```<input type="button">``` | Displays a clickable button |

### **Text Fields**

- Xác định trường để nhập văn bản.

```html
<input type="text">
```

### **The ```<label>``` Element**

- thẻ ```<lable>``` xác định nhãn chõ nhiều phần tử
- thuộc tính “for” của ```<lable>``` phải bằng “id” của input để liên kết với nhau.

### **Radio Buttons**

- thẻ xác định một radius button.
- Dùng để chọn 1 trong số các lựa chọn.

### **Checkboxes**

- Xác định checkbox
- Chọn 0 hoặc nhiều.

### **The Submit Button**

- Để gửi form đến trình xử lý form.

## **The Name Attribute for ```<input>```**

- input phải có “name”  mới được gửi.

## Action Attribute

- Xác định hành động khi form được gửi
- Nếu action trống, hành động sẽ ở trang hiện tại.

## **HTML ```<textarea>``` Tag**

- Thẻ xác định một vùng nhập văn bản nhiều dòng.
- Attributes :
    - cols.
    - rows.

---

# Một số thẻ khác :

- ```<br>``` : xuống dòng.
- ```<hr>``` : ngắt dòng.
- ```<i></i>``` : in nghiêng.

---