## I. Cách thức một website hoạt động
### 1. Các thành phần của website
**Web server**
* Web server: Là nơi lưu trữ mã nguồn và nội dung website;
* Web server được xác định bởi địa chỉ IP;
* Web server (riêng) thường dành cho những website lớn, các website nhỏ và trung bình thì thường sử dụng một phần nhỏ tài nguyên của web server. Có thể là shared hosting hoặc máy chủ ảo VPS;


**Tên miền (domain)**

* Có thể hiểu tên miền là tên thay thế cho địa chỉ IP của máy chủ web, bởi địa chỉ IP là một dãy số rất khó nhớ. Do đó người ta gán (định danh)  địa chỉ IP thành một chuỗi ký tự và nó dễ nhớ hơn (ví dụ: thay vì ghi nhớ địa chỉ 210.211.113.135 ta sẽ nhớ chuỗi “hocban.vn” và tương tự, điều này được thực hiện  với hàng triệu website khác).

* Việc gán (ánh xạ) tên miền cho địa chỉ IP được thực hiện bởi hệ thống phân giải tên miền (DNS);


**Dữ liệu**

* Dữ liệu người dùng – hay cơ sở dữ liệu: tạm hiểu là những thông tin được lưu trữ về người dùng như:  Tên đăng nhập, mật khẩu, nhật ký hoạt động (viết, chỉnh sửa bài viết, thiết đặt website,.vv..);
* Dữ liệu website: gọi chung cho tất cả các tập tin đa phương tiện như văn bản, âm thanh, hình ảnh, video,.. được lưu trữ trên máy chủ web.


**Mã nguồn**

* Để dễ hình dung, ở đây xem như mã nguồn là một phần mềm hoàn chỉnh nó được cài đặt lên web server/hosting của bạn, nó như công cụ để tạo lập và quản lý nội dung website.
* Hiện nay mã nguồn web thường là các phần mềm quản trị nội dung như Joomla, WordPress, Drupal,…


**Giao diện người dùng**

* Giao diện người dùng là tất cả sự bố trí, trình bày nội dung trên website, bao gồm: bố cục, màu sắc, font chữ, hiệu ứng,… mà người truy cập website có thể thấy và tương tác;
* Giao diện người dùng là những gì mà người dùng nhìn thấy sau khi các đoạn mã đằng sau nó được dịch (đằng sau một website “đẹp lung linh – sinh động ” mà chúng ta nhìn thấy là những đoạn chương trình, dưới dạng ngôn ngữ HTML xen lẫn với ngôn ngữ tự nhiên).

### 2. Cách thức hoạt động

Để dễ hình dung về cách hoạt động của một website, các bạn có thể tham khảo sơ đồ dưới đây (xem như website được cài đặt trên một máy chủ riêng).

![example](https://hocban.vn/wp-content/uploads/2016/09/website-hoat-dong-nhu-the-nao.jpg)
1. Đầu tiên người dùng nhập vào trình duyệt một địa chỉ có dạng: https://hocban.vn, thực ra bạn chỉ cần gõ “hocban.vn” là trình duyệt sẽ tự hiểu và đổi thành đường dẫn ở trên.
Trình duyệt gửi yêu cầu đến máy chủ DNS.

2. Hệ thống DNS trả kết quả phân tích tên miền trong đường dẫn đã gửi là hocban.vn, nó có địa chỉ máy chủ là 210.211.113.135 (cái này lúc đăng ký người ta đã gán sẵn, máy chủ DNS chỉ cần nhớ thôi).
3. Sau khi nhận được địa chỉ IP – nơi lấy dữ liệu, trình duyệt sẽ tìm đến địa chỉ IP đã nhận – tức máy chủ chứa nội dung website.
4. Máy chủ web nhận được yêu cầu truy xuất nội dung website và nó gửi một tập hợp các file bao gồm HTML, CSS , các tập tin đa phương tiện khác như âm thanh, hình ảnh (nếu có) cho trình duyệt;
5. Trình duyệt “dịch” các file mà máy chủ đã gửi thành trang web mà chúng ta nhìn thấy trên màn hình.

## II. Cấu trúc của HTML

Cấu trúc cơ bản của trang HTML có dạng như sau, thường gồm 3 phần:

* !Doctype: Phần khai báo chuẩn của html hay xhtml.
* head: Phần khai báo ban đầu, khai báo về meta, title, css, javascript…
* body: Phần chứa nội dung của trang web, nơi hiển thị nội dung.
```c
<!DOCTYPE html>
<html>
<head>
<title>Tiêu đề trang web</title>
</head>

<body>
...Phần thân viết ở đây...
</body>
</html>
```

## III. Block, inline elements

### 1. Block elements

Các Block element (phần tử khối) khi hiển thị trên trình duyệt chúng sẽ tự động thêm các ngắt dòng (line break) vào phía trước và phía sau nó. Hiểu một cách đơn giản là khi gọi 2 block elements ra thì mỗi element sẽ chiếm 1 dòng và width của các element này sẽ full luôn dòng đó.

![example](https://images.viblo.asia/97f72cee-1ab1-4a11-b6cb-7bdd6f39ada6.png)

Danh sách tất cả các Block element (theo mặc định) 

```c
<li></li>
<form>
<h1></h1> - <h6></h6>	
<nav>
<ol></ol>	
<p></p>
<div>	
<section></section>
<table></table>
<header></header>
<ul></ul>		
```

Vậy nếu muốn các block element này nằm song song nhau trên cùng 1 row thì làm thế nào? Câu trả lời vô cùng đơn giản. Bạn có thể sử dụng các properties display sau nhé:

```c
- display: inline
- display: inine-block
- display: flex
- display: grid
- display: table
- display: table-cell
```

### 2. Inline Elements

Trái ngược với **Block Elements** thì ta lại có **Inline Elements**. Các **Inline element** (phần tử nội tuyến) thường xuất hiện trong một đoạn văn (sentence), khi hiển thị trên trình duyệt nó không tự động thêm các ngắt dòng (line break) vào phía trước và phía sau của nó.

![example](https://images.viblo.asia/full/a5311183-c5d2-4a6c-9b56-6fec227808b1.png)

Danh sách tất cả các Inline element thường dùng:

```c
<a>	
<b>	
<button>
<cite>	
<code>	
<i>	
<img>	
<input>
<label>	
<script>	
<select>
<span>	
<strong>				
```
Cũng tương tự như block element, nếu như muốn các block inline này có bản chất giống như block element thì chỉ cần thêm 1 dòng css như dưới là xong.

```c
    display: block
```

### 3. Phân biệt thẻ div và thẻ span

Trong HTML, thẻ **div** và **span** là hai thẻ phổ biến được sử dụng để tạo cấu trúc và định dạng nội dung trên trang web. Dưới đây là sự khác biệt chính giữa chúng:

1. **div**: Thẻ **div** được sử dụng để tạo một khối hoặc một khu vực trên trang web. Nó thường được sử dụng để nhóm các phần tử HTML lại với nhau và tạo ra các phần tử phức tạp hơn như các khu vực chính trên trang web (header, sidebar, footer) hoặc nhóm các phần tử liên quan vào một khối. Mặc định, thẻ div sẽ xuống dòng sau mỗi khối nếu không được định dạng bằng CSS.

Ví dụ:
```c
<div>
  <h1>Tiêu đề</h1>
  <p>Nội dung...</p>
</div>
```


2.  *span*: Thẻ **span** được sử dụng để định dạng một phần nhỏ của văn bản hoặc một phần nhỏ của một phần tử HTML. Nó thường được sử dụng để áp dụng các kiểu chữ, màu sắc, hoặc CSS nhất định cho một phần cụ thể của văn bản. Mặc định, thẻ span không tạo ra bất kỳ thay đổi nào trong việc xuống dòng hoặc hiển thị về mặt giao diện.

Ví dụ:

```c
<p>Đây là một đoạn văn bản bình thường và <span style="color: red;">đây là một phần được tô đỏ</span>.</p>

```

Tóm lại, **div** thường được sử dụng để tạo cấu trúc lớn hơn trên trang web, trong khi **span** được sử dụng để định dạng nhỏ hơn và chỉnh sửa một phần nhỏ của nội dung.

## IV. các thẻ liên quan đến table

**Table trong HTML**

Thẻ table trong HTML được sử dụng để hiển thị dữ liệu ở dạng bảng (hàng * cột). Có thể có nhiều cột trong một hàng.

Các thẻ table trong HTML được sử dụng để quản lý việc bố cục trang web. Ví dụ: Phần tiêu đề, thanh điều hướng, nội dung trang, phần chân trang... Nhưng bạn nên sử dụng thẻ div thay vì table để quản lý bố cục của trang.

**Các thẻ định nghĩa bảng trong HTML**

|Thẻ|Mô tả|
|---|-----|
|table|Định nghĩa bảng|
|tr|Định nghĩa một hàng trong một bảng.|
|th|Định nghĩa phần header (dòng đầu tiên) của bảng.|
|td|Định nghĩa 1 ô của bảng.|
|caption|Định nghĩa phụ đề bảng.|
|colgroup|Chỉ định một nhóm của một hoặc nhiều cột trong một bảng để định dạng.|
|col|Được sử dụng với thẻ colgroup để chỉ định thuộc tính cột cho mỗi cột.|
|tbody|Được sử dụng để nhóm nội dung body trong một bảng.|
|thead|Được sử dụng để nhóm nội dung header trong một bảng.|
|tfooter|Được sử dụng để nhóm nội dung footer trong một bảng.|

Ví dụ: 
```c
<table>  
<tr><th>First_Name</th><th>Last_Name</th><th>Marks</th></tr>  
<tr><td>Sonoo</td><td>Jaiswal</td><td>60</td></tr>
<tr><td>James</td><td>William</td><td>80</td></tr>
<tr><td>Swati</td><td>Sironi</td><td>82</td></tr>
<tr><td>Chetna</td><td>Singh</td><td>72</td></tr>
</table>
```
Output:

|First_Name|Last_Name|Marks|
|----------|---------|-----|
|Sonoo|	    Jaiswal|	  60|
|James|    William|	     80|
|Swati|	    Sironi|	     82|
|Chetna|	    Singh|	     72|


## V. Các thẻ: image, video, links, audio

### 1. Thẻ hiển thị hình ảnh img

Trong HTML, hình ảnh được định nghĩa bởi thẻ ***img*** có cấu trúc như sau:

```c
<img src="liên kết" alt="nội dung thay thế" >
```

Thuộc tính `src` xác định đường dẫn đến hình ảnh và thuộc tính `alt` là xác định một đoạn nội dung thay thế khi hình ảnh không được hiển thị do đường dẫn lỗi hoặc tải không được ảnh.


Các thuộc tính của ***img***
* src: liên kết đến file hình ảnh.
* alt: nội dung thay thế nếu không tải được ảnh.
* width: độ rộng của ảnh (px, %).
* height: độ cao của ảnh (px, %).

### 2. Thẻ phát âm thanh ***audio***

Trước khi HTML5 ra đời để chơi audio phải sử dụng plug-in thêm vào trình duyệt web như Flash, hiện tại HTML5 hỗ trợ chơi audio thông qua thẻ **audio**.

```c
<audio controls>
  <source src="liên kết" type="media type">
  Nội dung hiển thị nếu trình duyệt web không hỗ trợ thẻ audio
</audio>
```

Các thuộc tính của ***audio***
* controls: công cụ dùng để chơi nhạc như play, pause, volume.
* autoplay: tự động chơi nhạc sau khi tải xong.
Trong ***audio*** có thể có nhiều source, hỗ trợ nhiều loại định dạng cho trình duyệt, trình duyệt web sẽ lựa chọn source để phát.

### 3. Thẻ trình chiếu phim

Sử dụng thẻ ***video*** để trình chiếu video clip với cấu trúc như sau:

```c
<video controls height="value" width="value">
  <source src="liên kết" type="media type">
  Nội dung hiển thị nếu trình duyệt web không hỗ trợ thẻ video
</video>
```

**Các thuộc tính của video**

* controls: công cụ dùng để hỗ trợ trình chiếu như play, pause, volume.
* width: độ rộng hiển thị (px, %).
* height: độ cao hiển thị (px, %).
Trong ***video*** có thể có nhiều ***source***, hỗ trợ nhiều loại định dạng cho trình duyệt, trình duyệt web sẽ lựa chọn ***source*** để chiếu.

## VI. Section elements

### 1. Thẻ div

Thẻ ***div*** (viết tắt của division - chia) là phần tử cấp độ block dùng để phân nội dung thành các phân đoạn, chứa các phần tử HTML khác. Thẻ ***div*** thường dùng CSS để thiết lập các đặc tính của nó (thông qua thiết lập class và id).

Ví dụ:

```c
<div class="divparent">
    <div class="div1">
        <p>Nội dung trong thẻ div 1</p>
    </div>
    <div class="div2">
        <p>Nội dung trong thẻ div 2</p>
    </div>
</div>
```

### 2. Thẻ span

Thẻ ***span*** thì lại là loại thẻ cấp độ inline với mục đích dùng tổng quát, thường nó được dùng để chứa dữ liệu (văn bản), chứa phần tử inline khác. Tương tự div, span cũng thường dùng CSS để định dạng trình bày:

```c
<h4>Học <span style="color:red">HTML</span> cơ bản</h4>
```

Tóm lại:
Thẻ ***div*** dùng để tạo khối block, phân chia nội dung trong HTML. Thẻ ***span*** tạo các phần tử dạng inline, phần văn bản dạng inline không ngắt dòng.

### 3. Thẻ header

Trước đây trong HTML4, thành phần header của trang được định nghĩa thông qua thẻ ***div*** như:

```c
<div id="header">
```

Trong HTML5 có phần tử ***header*** để làm việc này. Phần tử ***header*** thích hợp nằm trong thẻ ***body***

```c
<!DOCTYPE html>
<html>
   <head></head>
   <body>
      <header>
        <h1> Phần tiêu đề quan trọng </h1>
        <h3> Tiêu đề ít quan trọng</h3>
      </header>
   </body>
</html>
```


***Lưu ý thẻ header là khác hoàn toàn với head***

### 4. Thẻ footer

Thẻ ***footer*** sử dụng khá rộng rãi với nhiều mục đích. Thông thường ***footer*** sử dụng ám chỉ đền phần chân trang.

```c
<footer>…</footer>
```
Các thông tin đặt trong phần <footer> thường là:

* Thông tin liên hệ
* Chính sách
* Icon mạng xã hội
* Các quy định sử dụng dịch vụ
* Thông tin bản quyền
* Sitemap và các liên quan đến trang

### 5. Thẻ nav

Thẻ này trình bày một phân đoạn của trang nó chứa các liên kết để điều hướng đến các trang của website. Đây là ví dụ về tạo một khối điều hướng:

```c
<nav>
   <ul>
      <li><a href="#">Trang chủ</a></li>
      <li><a href="#">Dịch vụ</a></li>
      <li><a href="#">Giới thiệu</a></li>
   </ul>
</nav>
```
***Lưu ý không phải tất cả các link đều nằm trong thẻ nav, các link trong thẻ nav là phần điều hướng chính. Ví dụ, trong thẻ footer cũng chứa các link nhưng không cần thiết phải dùng nav ở đây.***

### 6. Thẻ main

- Thẻ ***main*** xác định phần thân của trang, nó thường được dùng để chứa các nội dung chính của trang web.

Ví dụ:

```c
<main>
    <h2>HỌC LÀM WEBSITE BẮT ĐẦU TỪ ĐÂU?</h2>
    <p>- Có thể bạn không phải là một lập trình viên nhưng lại rất thích làm website. Bạn muốn học làm, nhưng không biết phải bắt đầu từ đâu và liệu mình có thể học được hay không !?</p>
    <p>- Chúng tôi khẳng định với bạn rằng: "Bạn hoàn toàn có thể học và làm được website" nếu kiên trì mỗi ngày dành ra một vài giờ để học. Tùy vào mức độ chăm chỉ, tuy nhiên tối đa không quá sáu tháng bạn sẽ có thể bắt đầu tự làm được website.</p>
</main>
```

### 7. Thẻ acticle

article là phần tử để bao bọc nội dung độc lập, nó có thể là một bài post của diễn đàn, một bài viết của trang, một bài báo, một bình luận ... hoặc bất kỳ một nội dung độc lập nào.

Thẻ ***article*** trong HTML5 được dùng thay thế cho thẻ ***div*** của HTML4.

```c
<article> 
   <h1>Tiêu đề bài viết</h1> 
   <p>Các nội dung bài viết</p>
</article>
```

Phần tử ***article*** có thể chứa các ***article*** khác. Các ***article*** bên trong trình bày các nội dung liên quan đến ***article*** bên ngoài.

### 8. Thẻ section

Thẻ ***section*** dùng để phân chia một cách logic một trang, một ***article***. Vậy Thẻ section dùng để chia nội dung trong một ***article***. Ví dụ như trang chủ có thể có một ***section*** chứa thông tin giới thiệu về công ty, ***section*** khá
c chứa mục tin tức, ***section*** khác chứa thông tin liên hệ ...

```c
<article>
   <h1>Chào mừng</h1>
   <section>
      <h1>Tiêu đề</h1>
      <p>Nội dung, hình ảnh ...</p>
   </section>
</article>
```

## VII. HTML text fundamentals

### 1. Các thẻ heading h1 - h6 của HTML

Tạo tiêu đề, đề mục tài liệu trong cấu trúc trang web HTML với các thẻ heading h1 đến h6. Thẻ H1 tạo đề mục toàn trang, sử dụng một lần

**Sử dụng thẻ h1 - h6 trong HTML**
Trong một trang HTML (tài liệu) có thể phân chia ra thành nhiều đề mục (heading) với cấp độ khác nhau, như văn bản thông thường có mục I, II ..., 1, 2, ... a, b .... HTML cung cấp sáu cấp độ tương ứng với thẻ h1 đến thẻ h6, với thẻ h1 có cấp độ cao nhất (đề mục lớn nhất) và h6 là cấp độ thấp nhất.

Sử dụng các thẻ tạo đề mục (heading) có thể giúp cho người đọc (hoặc Search Engine) nhanh chóng nắm bắt được cấu trúc nội dung chính của bài viết (tài liệu HTML).

Ví dụ sau xem cách hiện thị các thẻ heading mặc định:

```c
<html>
   <head>
      <title>Kiểm tra thẻ Heading</title>
      <meta charset="UTF-8">
   </head>
   <body>
      <h1>This is heading 1</h1>
      <h2>This is heading 2</h2>
      <h3>This is heading 3</h3>
      <h4>This is heading 4</h4>
      <h5>This is heading 5</h5>
      <h6>This is heading 6</h6>
   </body>
</html>
```

Kết quả:

![example](https://xuanthulab.net/photo/heading-4196.jpg)

Lưu ý sử dụng thẻ heading không chỉ với mục đích định dạng chữ to hơn, đậm hơn mà nó thể hiện cấu trúc phần quan trọng của trang, đây là nội dung mà Searchi Engine chỉ mục trang web

***Một số lưu ý về h1 - h6***
Phân chia đề mục phù hợp: Khi sử dụng cần sử dụng theo dúng cấp độ của đề mục - không bỏ qua đề mục (ví dụ có dùng thẻ h3 mà không có thẻ h2).

Không dùng h1 - h6 để định dạng văn bản: Thẻ h1 có cỡ chỡ to nhất, thẻ h6 nhỏ nhất nhưng không vì thể cố tình sử dụng nó để định dạng văn bản thông thường: như đoạn văn bản không phải là đề mục, chỉ vì muốn chữ to hơn mà dùng h1, h2 ... là sai.

### 2. Thẻ p và br

Thẻ p tạo ra một đoạn văn bản (paragraph).

Thẻ **p** để tạo ra một đoạn văn bản (paragraph), cú pháp là:

```c
<p>Nội dung trong thẻ ... </p>
```

Với thẻ p, trình duyệt tạo ra một khối (chữ nhật) để hiện thị nội dung văn bản, khối này phân cách bởi các dòng trống. Trong thẻ p chỉ nên chứa văn bản và các phần tử dạng inline, chủ yếu là các phần tử định dạng như i em strong ... 

Thẻ ***p*** là loại thẻ dạng block (xem phần tử dạng block và inline), về nguyên tắc thẻ ***p*** không được chứa một thẻ cấp độ block trong nó, nếu cố tình làm vậy - thẻ ***p*** này tự động đóng thẻ khi gặp block khác bên trong nó.
unordered list
### 3. Thẻ ul, li

Thẻ ***ul*** (ordered list) dùng để tạo danh sách không có thứ tự, mỗi phần tử trong danh sách được định nghĩa bằng thẻ ***li***.

Đây là một ví dụ về danh sách không có thứ tự:

```c
<ul type="circle">
    <li>HTML</li>
    <li>CSS</li>
    <li>Javascript</li>
    <li>C#</li>
</ul>
```
Kết quả:
* HTML
* CSS
* Javascript
* C#

Các phần tử trong danhh sách ul mặc định được đánh dấu đầu dòng bằng ký hiệu hình tròn. Thuộc tính type của ul cho phép thay đổi ký hiệu này bằng các giá trị: circle, disc hoặc square

## VIII Các thẻ liên quan đến form

### 1. Thẻ form
Để tạo ra HTML Form thì dùng đến thẻ form, sau đó nội dung trong thẻ trình bày các HTML và các phần tử là điều khiển (control) có trong form.

```c
<form action="http://xuanthulab.net/" method="post">
  <!--Các mã HTML, các phần tử trong form -->
</form>
Thẻ <form> cơ b
```

Thẻ ***form*** cơ bản có hai thuộc tính cần lưu tâm là action và method:

* Thuộc tính action trong form: thuộc tính để thiết lập URL sẽ nhận dữ liệu, là địa chỉ mà dữ liệu của form gửi đến (submit đến, post đến). Thiếu tham số này thì action bằng URL đang truy cập (tức gửi thông tin form đến server theo địa chỉ đang truy cập). Web server nhận được dữ liệu, xử lý và trả về nội dung nào đó.
* Thuộc tính method trong form: thuộc tính để thiết lập HTTP Method, xem thêm HTTP Request Message thường có giá trị bằng get hoặc post. Nếu không viết thuộc tính này thì method mặc định của form là get

### 2. Thẻ label và thẻ input trong HTML

Sử dụng thẻ label để tạo nhãn và liên kết với control trong FORM HTML, thẻ input để tạo ra các control phổ biến trong FORM HTML như: TextBox, Radio, CheckBox, Chọn File, Nhập Email, nhập URL, nhập số điện thoại ...

***Thẻ input***
```
TextBox
Nhập Password
Submit và Reset
Radio
CheckBox
Chọn màu Color
Chọn ngày Date
Nhập Email
Hộp tìm kiếm
Nhập số điện thoại
Hộp nhập số
Thanh trượt
Chọn file
Nhập địa chỉ URL
```

***Thẻ label trong form HTML***

Thẻ label dùng để tạo nhãn (title, label, caption) cho các thành phần HTML, chủ yếu là các điều khiển trong FORM HTML. Mặc dù tạo nhãn cho điều khiển bạn có thể tùy thích sử dụng các phần tử HTML khác, tuy nhiên sử dụng label thì khi bấm vào nó, phần tử điều khiển (control) liên kết với nó tự kích hoạt focus.

Thẻ label và control liên kết với nhau bởi thuộc tính id của control. Ví dụ, phần tử input thiết lập id là là myinput, thì label liên kết với nó bằng cách cho thêm thuộc tính for="myinput"

```c
<label for="myinput">Hãy nhập dữ liệu</label>
<input id="myinput" name="mynameinput">
```

***Thẻ input trong HTML***
Thẻ input là thẻ cơ bản hay sử dụng trong form, thẻ này tạo ra các loại điều khiển tùy vào giá trị thiết lập bởi thuộc tính type. Thẻ input trong html là thẻ rỗng (không có đóng thẻ), nó chỉ thiết lập qua các thuộc tính. Cú pháp cơ bản:
```c
<input name="nameofcontrol" value="default_value" type="typeofcontrol" id="controlid"/>
```
Tùy thuộc vào giá trị thuộc tính type mà nó tạo ra các control khác nhau, ví dụ type="text" tạo ra hộp nhập một dòng chữ. Ngoài ra cũng tùy thuộc type mà nó có thêm các thuộc tính khác, sau đây là một số thuộc tính chung trước khi tìm hiểu từng kiểu control.

|Thuộc tính|Ý nghĩa|
|----------|-------|
|name|Đặt tên control, cần có thuộc tính này mới tạo ra được trường dữ liệu gửi đi|
|value|Tùy chọn, chứa giá trị dữ liệu mặc định ban đầu|
|name|	Thiết lập loại control sẽ tạo ra như text, radio, file ..., chi tiết từng loại xem phía dưới.|
|id|Thuộc tính tùy chọn, thiết lập id của control, id giúp làm việc với JS, CSS và liên kết với label|
|placeholder|Trong các kiểu tạo ra hộp để nhập, khi dữ liệu rỗng sẽ xuất hiện dòng chữ thiết lập bởi placeholder|
|disabled|Điều khiển có thuộc tính này sẽ không nhập dữ liệu nữa (tương tác với chuột, bàn phím ...), nó hiện thị ở dạng bị mờ, sám.|


Sau đây là một số type hay dùng trong thẻ input:
|Loại(type)|Ý nghĩa|
|--------- |-------|
|type="text"|TextBox: Hộp nhập liệu một dòng|
|type="password"|Hộp nhập password|
|type="submit"|Tạo nút bấm để gửi hoặc reset dữ liệu|
|type="radio"|Tạo lựa chọn radio (chọn một giá trị trong nhóm). Các radio cùng tên tạo thành một nhóm (như gioitinh, noisinh). Khi submit giá trị trong radio được lựa chọn sẽ gửi đi (giá trị này lưu trong value).Một radio có thuộc tính checked thì mặc định nó là lựa chọn ban đầu của nhóm.|
|type="checkbox"|Tạo lựa chọn hộp kiểm (chọn nhiều phương án). Các checkbox cùng tên tạo thành một nhóm, nếu có nhiều lựa chọn một mảng các giá trị theo tên nhóm sẽ được gửi đi.|
|type="color"|Tạo điều khiển chọn màu sắc, giá trị là mã màu lựa chọn|
|type="date"|Tạo điều khiển chọn ngày|
|type="email"|Tạo điều khiển nhập email, nó sẽ kiểm tra dữ liệu đúng là email mới được submit|
|type="search"|Tạo hộp tìm kiếm|
|type="tel"|Tạo hộp nhập số điện thoại: (trên di động nó kích hoạt bàn phím bấm số)|


### 3. Thẻ textarea

Sử dụng thẻ ***textarea*** tạo ra điều hiển là hộp cho phép nhập văn bản text nhiều dòng trong FORM HTML
Thẻ ***textarea*** dùng để tạo ra phần tử HTML cho phép nhập nhiều dòng chữ (nhấn Enter xuống dòng). Sử dụng thẻ này, khi cần nhập dữ liệu dài như nhận các phản hồi, viết nội dung ...

```
<form action="https://httpbin.org/anything" method="post">
    <label for="content">Nhập nội dung cần tư vấn:</label><br>
    <textarea id="content" name="content" rows="5" cols="20">
        TextArea là phần tử ...
        <p>Đây là thẻ P</p>
    </textarea><br>
    <input type="submit" value="Gửi">
</form>
```

Thẻ ***textarea*** khác với ***input*** nó không có thuộc tính giá trị value, toàn bộ nội dung giữa đóng và mở thẻ ***textarea*** là dữ liệu của phần tử.

Kể cả mã HTML trong thẻ ***textarea*** đều được coi là dữ liệu text của nó. Ví dụ trên, viết thẻ p trong nội dung

***Các thuộc tính textarea***
Tương tự như các control khác trong FORM, có thuộc tính name và value, kể cả disabled, placeholder giống như thẻ ***input***, ngoài ra có các thuộc tính riêng sau:

cols : Thuộc tính thiết lập độ rộng của control, theo độ rộng ký tự trung bình. Mặc định cols="20"

