# Responsive

Created by: Triệu Tâm
Created time: May 13, 2023 6:18 AM
Last edited by: Triệu Tâm
Last edited time: May 13, 2023 8:19 AM
Tags: Guides

# CSS Media Queries

**Media Query Syntax**

```css
@media not|only mediatype and (expressions) {
  CSS-Code;
}
```

Có thể sử dụng stylesheet cho từng kiểu media:

```css
<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
```

## **CSS3 Media Types**

| Value | Description |
| --- | --- |
| all | Used for all media type devices |
| print | Used for printers |
| screen | Used for computer screens, tablets, smart-phones etc. |
| speech | Used for screenreaders that "reads" the page out loud |

### **Media Queries Simple Examples**

```css
@media screen and (min-width: 480px) {
  body {
    background-color: lightgreen;
  }
}
```

## **CSS @media Rule**

Quy tắc @media được sử dụng trong các truy vấn phương tiện để áp dụng các kiểu khác nhau cho các loại/thiết bị phương tiện khác nhau.

Media queries can be used to check many things, such as:

- width and height of the viewport
- width and height of the device
- orientation (is the tablet/phone in landscape or portrait mode?)
- resolution

> meaning of the **not**, **only** and **and** keywords:
> 
> 
> **not:** Từ khóa not đảo ngược ý nghĩa của toàn bộ truy vấn phương tiện.
> 
> **only:** The only keyword prevents older browsers that do not support media queries with media features from applying the specified styles. **It has no effect on modern browsers.**
> 
> **and:** The and keyword combines a media feature with a media type or other media features.
> 
> They are all optional. However, if you use **not** or **only**, you must also specify a media type.
> 

## MQ Example

```css
/* Set the background color of body to tan */
body {
  background-color: tan;
}

/* On screens that are 992px or less, set the background color to blue */
@media screen and (max-width: 992px) {
  body {
    background-color: blue;
  }
}

/* On screens that are 600px or less, set the background color to olive */
@media screen and (max-width: 600px) {
  body {
    background-color: olive;
  }
}
```

![https://www.w3schools.com/css/mqcap.JPG](https://www.w3schools.com/css/mqcap.JPG)

### [CSS3 Media Queries - Examples (w3schools.com)](https://www.w3schools.com/css/css3_mediaqueries_ex.asp)

### **Orientation: Portrait / Landscape**

Truy vấn phương tiện cũng có thể được sử dụng để thay đổi bố cục của trang tùy thuộc vào hướng của trình duyệt.

---

# Breakpoint

Có rất nhiều màn hình và thiết bị có chiều cao và chiều rộng khác nhau, vì vậy rất khó để tạo điểm dừng chính xác cho từng thiết bị. Để giữ cho mọi thứ đơn giản, bạn có thể nhắm mục tiêu năm nhóm phổ biến:

```css
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

![https://blog.logrocket.com/wp-content/uploads/2023/03/device-breakpoints.png](https://blog.logrocket.com/wp-content/uploads/2023/03/device-breakpoints.png)

---

# Viewport

### **What is The Viewport?**

- Viewport là khu vực hiển thị của người dùng trên trang web.

### **Setting The Viewport**

```css
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Phần width=device-width đặt chiều rộng của trang theo chiều rộng màn hình của thiết bị (sẽ thay đổi tùy theo thiết bị).

Phần initial-scale=1.0 đặt mức thu phóng ban đầu khi trang được trình duyệt tải lần đầu tiên.

### **Size Content to The Viewport**

Some additional rules to follow:

**1. Do NOT use large fixed width elements -**Ví dụ: nếu một hình ảnh được hiển thị ở chiều rộng rộng hơn chế độ xem, nó có thể khiến chế độ xem cuộn theo chiều ngang. Hãy nhớ điều chỉnh nội dung này để vừa với chiều rộng của khung nhìn.

**2. Do NOT let the content rely on a particular viewport width to render well** - Vì kích thước và chiều rộng của màn hình tính bằng pixel CSS rất khác nhau giữa các thiết bị, nên nội dung không nên dựa vào chiều rộng khung nhìn cụ thể để hiển thị tốt.

**3. Use CSS media queries to apply different styling for small and large screens** - Đặt chiều rộng CSS tuyệt đối lớn cho các thành phần trang sẽ khiến thành phần này quá rộng đối với chế độ xem trên thiết bị nhỏ hơn. Thay vào đó, hãy cân nhắc sử dụng các giá trị chiều rộng tương đối, chẳng hạn như chiều rộng: 100%. Ngoài ra, hãy cẩn thận khi sử dụng các giá trị định vị tuyệt đối lớn. Nó có thể khiến phần tử nằm ngoài khung nhìn trên các thiết bị nhỏ.

## Grid View

### **What is a Grid-View?**

Nhiều trang web dựa trên chế độ xem dạng lưới, có nghĩa là trang được chia thành các cột:

![Untitled](Responsive%207a43b15e3270439caba7796b5bedb3e7/Untitled.png)

Sử dụng chế độ xem dạng lưới rất hữu ích khi thiết kế trang web. Nó làm cho việc đặt các phần tử trên trang dễ dàng hơn.

![Untitled](Responsive%207a43b15e3270439caba7796b5bedb3e7/Untitled%201.png)

Chế độ xem lưới đáp ứng thường có 12 cột và có tổng chiều rộng là 100%, đồng thời sẽ thu nhỏ và mở rộng khi bạn thay đổi kích thước cửa sổ trình duyệt.

### **Building a Responsive Grid-View**

[Responsive Web Design Grid (w3schools.com)](https://www.w3schools.com/css/css_rwd_grid.asp)

## Flexbox Responsive

![Untitled](Responsive%207a43b15e3270439caba7796b5bedb3e7/Untitled%202.png)

```css
.flex-container {
  display: flex;
  flex-direction: row;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 800px) {
  .flex-container {
    flex-direction: column;
  }
}
```

Một cách khác là thay đổi phần trăm thuộc tính flex của các mục flex để tạo các bố cục khác nhau cho các kích thước màn hình khác nhau. Lưu ý rằng chúng ta cũng phải bao gồm flex-wrap: wrap; trên bộ chứa flex để ví dụ này hoạt động:

```css
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-item-left {
  flex: 50%;
}

.flex-item-right {
  flex: 50%;
}

/* Responsive layout - makes a one column layout instead of a two-column layout */
@media (max-width: 800px) {
  .flex-item-right, .flex-item-left {
    flex: 100%;
  }
}
```