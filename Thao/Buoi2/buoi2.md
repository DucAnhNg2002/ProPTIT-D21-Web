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
### 2. CSS selector
CSS selector là một phần của ngôn ngữ CSS được sử dụng để xác định các phần tử HTML mà bạn muốn áp dụng kiểu (style) cho chúng. CSS selector cho phép bạn chọn các phần tử cụ thể hoặc nhóm phần tử dựa trên các thuộc tính, lớp, ID, cấu trúc và quan hệ giữa chúng.





