
# 1. Cách thức hoạt động của một trang Web
#### Website là gì?
Website còn gọi là trang web hay trang mạng, là một tập hợp trang thông tin có chứa các dạng hình ảnh, văn bản, video, audio,... và được lưu trữ trên **web sever(máy chủ)** và người dùng có thể truy cập từ xa thông qua internet.
> Trên thực tế người ta hay gọi Website là Web, tuy nhiên nó lại khác nhau. Web là một trang cụ thể nào đó của website (Còn gọi là web page) hoặc ngắn gọn hơn là Pages, một Website bao gồm nhiều trang web như vậy.
#### Các thành phần của Website
##### Web server
- Là nơi lưu trữ mã nguồn và nội dung website
- Web server được xác định bởi địa chỉ IP
- Web server thường được dùng cho những website lớn, các website nhỏ và trung bình thì thường sử dụng một phần nhỏ tài nguyên của Web server
##### Tên miền (domain)
- Tên miền là tên thay thế cho địa chỉ IP của **máy chủ web** bởi địa chỉ IP là một dãy số rất khó nhớ.(Ví dụ : thay vì ghi nhớ địa chỉ  210.211.113.135, ta sẽ nhớ chuỗi abc.vn)
- Việc gán (ánh xạ) tên miền cho địa chỉ IP được thực hiện bởi hệ thống phân giải tên miền (DSN)
##### Dữ liệu
- Dữ liệu người dùng hay cơ sở dữ liệu: tạm hiểu là thông tin được lưu trữ về người dùng như: Tên đăng nhập, mật khẩu, nhật ký hoạt động,...
- Dữ liệu website: gọi chung cho tất cả các tập tin đa phương tiện như văn bản, âm thanh, hình ảnh, video,... được lưu trữ trên máy chủ web
##### Mã nguồn
- Là một phần mềm hoàn chỉnh được cài đặt lên web server/hosting của bạn, nó như công cụ để quản lí nội dung website
- Hiện nay mã nguồn web thường là các phần mềm quản trị nội dung như Joomla, WordPress, Drupal,…
##### Giao diện người dùng
- Là tất cả sự bố trí, trình bày nội dung trên website, bao gồm : bố cục, màu sắc, font chữ mà người truy cập website có thể thấy và tương tác
- Là những gì mà người dùng nhìn thấy sau khi các đọan mã đằng sau nó được dịch (_các đoạn mã dưới dạng ngôn ngữ HTML xen lẫn với ngôn ngữ tự nhiên_)
#### Các công cụ hỗ trợ
##### Trình duyệt web
- Một trang web là một tập tin dưới dạng ngôn ngữ đánh dấu siêu văn bản có thể là HTML. Người dùng rất khó đọc hoặc không thể đọc loại ngôn ngữ này
- Tập tin HTML sẽ chứa nhiều phần tử khác nhau và chúng được sắp xếp, định dạng theo chương trình có trong file CSS.
- Trình duyệt là phần mềm mà thông qua nó người dùng có thể đọc và tương tác với website

##### Mạng máy tính
Khi nói đến website và mạng máy tính thì mặc định mạng đó là mạng internet
#### Vậy một website hoạt động như thế nào?
    1. Đầu tiên người dùng nhập địa chỉ https://abc.vn thực ra bạn chỉ cần gõ là abc.vn thì trình duyệt sẽ tự hiểu và đổi thành đường dẫn trên
    2. Trình duyệt gửi yêu cầu đến máy chủ DSN
    3. Hệ thống DNS trả kết quả phân tích tên miền trong đường dẫn đã gửi là abc.vn, nó sẽ trả về địa chỉ IP ví dụ 210.211.113.135
    4. Sau khi nhận được địa chỉ IP, trình duyệt sẽ tìm đến địa chỉ IP đã nhận - tức máy chủ chứ nội dung website
    5. Trình duyệt "dịch" các file mà máy chủ đã gửi thành trang web mà chúng ta nhìn thấy trên màn hình
***

# 2. Cấu trúc của HTML
Cấu trúc chung cuat một trang HTML
``` html
<!DOCTYPE html>
<html>
  <head>
    <meta charset=utf-8>
    <title>Tiêu đề của trang</title>
  </head>
  <body>

  </body>
</html>
```
- Trước khi khai báo các thẻ khác, chúng ta cần khai báo dạng tài liệu <!DOCTYPE>
- Toàn bộ nội dung trong thẻ \<html> chính là nội dung siêu văn bản, bố cục gồm 2 phần
  - Phần **đầu** được khai báo bằng thẻ \<head> 
    - Tiêu đề của văn bản
    - Sử dụng bảng mã ký tự nào
  - Phần **nội dung** được khai báo bằng thẻ \<body>, đây sẽ là phần hiển thị trên trình duyệt.
***
# 3. Block, inline elements. Qua phân biệt div, span.
Các phần tử trong HTML được chia làm 2 loại : **Block elements**(Phần tử khối) và **Inline elements** (Phần tử nội tuyến)
#### Block-level Element
- Luôn bắt đầu trên một dòng mới và trình duyệt sẽ tự động thêm một số khoảng trắng(lề) ở trước và sau phần tử
![example](https://s1.o7planning.com/vi/12479/images/47581381.png)
- Hai Phần tử khối thường được sử dụng là <p> và <div>
> \<p> định nghĩa một đoạn văn trong HTML
> \<div> định nghĩa một phần trong HTML

>_**Chú ý**: Một số phần tử theo mặc định là Block-Level element, chẳng hạn \<div>, nhưng bạn có thể biến đổi nó thành Inline Element nếu áp dụng CSS: {display:inline} cho nó._

![example](https://dotnettutorials.net/wp-content/uploads/2021/11/word-image-453.png)
#### Inline Element
Các Inline element (phần tử nội tuyến) thường xuất hiện trong một đoạn văn (sentence), khi hiển thị trên trình duyệt nó không tự động thêm các ngắt dòng (line break) vào phía trước và phía sau của nó.
![example](https://s1.o7planning.com/vi/12479/images/47583171.png)
> **Chú ý**: Một số phần tử theo mặc định là Inline element, chẳng hạn \<span>, nhưng bạn có thể biến đổi nó thành Block-Level nếu áp dụng CSS: {display:block} cho nó.
#### The \<div> Element
- Là một Block-level element, là một trong những phần tử được sử dụng nhiều nhất và quan trọng nhất trong tài liệu HTML
- Được sử dụng để chứa các phần tử khác, hoặc tham gia vào việc tạo nên bố cục (Layout) của trang
- \<div> không có thuộc tính bắt buộc, nhưng _style_, _class_ và _id_ thì phổ biến
- Khi kết hợp cùng với CSS, \<div> có thể sử dụng để tạo kiểu cho các khối nội dung
***Example***

``` html
<div style="background-color:black;color:white;padding:20px;">
  <h2>London</h2>
  <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
</div>
```
#### The \<span> Element
- Là một Inline element quan trọng và được sử dụng nhiều trong tài liệu HTML
- Được sử dụng để chứa các Inline Element khác hoặc chứa các nội dung bản
- \<span> tạo ra một vùng trong suốt nhưng bạn có thể nhìn thấy nó một cách trực tiếp nếu áp dụng CSS cho nó chẳng hạn background, border,...
``` html
<p>My mother has <span style="color:blue;font-weight:bold;">blue</span> eyes and my father has
 <span style="color:darkolivegreen;font-weight:bold;">dark green</span> eyes.</p>
```
>Phần tử **\<div>** là một cấp độ khối và thường được sử dụng làm vùng chứa cho các phần tử HTML khác

>Phần tử **\<span>** là một bộ chứa nội tuyến được sử dụng để đánh dấu một phần của văn bản hoặc một phần của tài liệu
***
# 4. Các thẻ liên quan đến table trong HTML
Table trong HTML cho phép sắp xếp dữ liệu theo hàng và cột
``` html
<table>
            <thead> 
                <th>stt</th>
                <th>tên</th>
                <th>địa chỉ</th>

            </thead>

            <tbody>
                <tr>   
                    <!-- row -->
                    <td>1</td>
                    <td>Lưu Phương Thảo</td>
                    <td>Hà Nội</td>

                </tr>

                <tr>   
                    <!-- row -->
                    <td>2</td>
                    <td>Phương Thảo</td>
                    <td>Hà Nội</td>

                </tr>
            </tbody>
</table>
``` 
#### Table Cells
- Được định nghĩa bởi thẻ \<td> và \<td>
> Viết tắt của ***Table data***
- Một Table Cell có thể chứa tất cả các loại phần tử của HTML: text, image, lists, links,...
#### Table Rows
- Được định nghĩa bởi thẻ \<tr> và \<tr>
- Số lượng ô ở mỗi hàng phải là như nhau
#### Table Header
- Khi muốn các ô hiện tiêu đề của các cột
- Được định nghĩa bởi thẻ \<th>
***
# 5.Các thẻ: image, video, links, audio
#### Thẻ image
- \<img> được sử dụng để nhúng hình ảnh vào trang web
-  Chỉ chứa các thuộc tính và không có thẻ đóng
-  Thẻ \<img> yêu cầu 2 thuộc tính
   - **src** - đường dẫn đến hình ảnh
   - **alt** - văn bản chỉ định thay thế cho hình ảnh
``` html
<img src="https://qph.cf2.quoracdn.net/main-qimg-2abfac9a7a38801200315f3b4e7d7b57-lq" alt="abc">
```
- Sử dụng thuộc tính **width** và **height** hoặc CSS để thay đổi kích thước của ảnh
#### Thẻ video
- Để chèn 1 video vào trang web, sử dụng thẻ video với cấu trúc như sau:
``` html
<video width="500px" height="auto" controls >
<source src="" type="video/mp4">   
Your browser does not support the video tag.
</video>
```
- Thuộc tính controls thêm các điều khiển cho video như _play_, _pause_, _volume_
- Có ba định dạng video được hỗ trợ trong HTML: MP4, WebM và OGG.
- Văn bản giữa \<video> và \<video> chỉ hiển thị khi trình duyệt không hỗ trợ hiển thị video
#### Thẻ Links
- HTML linnks là siêu liên kết(_hyperlinks_)
- Giúp chuyển sang tài liệu khác
> Link không phải là văn bản, link có thể là hình ảnh hoặc 1 phần tử nào đó của HTML
- Thẻ \<a> định nghĩa một siêu liên kết.
> \<a href="url">link text</a>
> **Ví dụ** \<a href="https://www.facebook.com/"> Tới trang Facebook \</a>
- **herf** cho biết đích đến của liên kết
- **link text** là phần hiển thị cho người dùng, khi click vào link text sẽ gửi người đọc đến địa chỉ URL được chỉ định
> - link liên kết chưa được truy cập được gạch chân và có màu xanh lam
> - link liên kết đã truy cập được gạch chân và có màu tím
> - link active link is underlined and red
- Trang được liên kết sẽ hiển thị luôn ở cửa số hiện tại, để thay đổi thì phải sử dụng thuộc tính  **target**
  - **_self** - Default. Opens the document in the same window/tab as it was clicked
  - **_blank** - Opens the document in a new window or tab
  - **_parent** - Opens the document in the parent frame
  - **_top** - Opens the document in the full body of the window
>**absolute URL** (a full web address)
> A local link (a link to a page within the same website) is specified with a **relative URL** (without the "https://www" part)
- Sử dụng **Image** thay cho link
To use an image as a link, just put the \<img> tag inside the <a> tag:
``` html
<a href="default.asp">
<img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
</a>
```
#### Thẻ audio

``` html
<audio controls>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```
- The controls attribute adds audio controls, like play, pause, and volume.
- To start an audio file automatically, use the autoplay attribute:
``` html
<audio controls autoplay>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>
```
- Add muted after autoplay to let your audio file start playing automatically (but muted):
``` html
<audio controls autoplay muted>
  <source src="horse.ogg" type="audio/ogg">
  <source src="horse.mp3" type="audio/mpeg">
Your browser does not support the audio element.
</audio>

```
***
# 6.Section elements: div, span, header, footer, nav, main, section, articl
#### div
- The \<div> tag defines a division or a section in an HTML document.

- The \<div> tag is used as a container for HTML elements - which is then styled with CSS or manipulated with JavaScript.

- The \<div> tag is easily styled by using the class or id attribute.

> Note: By default, browsers always place a line break before and after the \<div> element.

#### span
- A \<span> element which is used to color a part of a text
``` html
<p>My mother has <span style="color:blue">blue</span> eyes.</p>
```
- The \<span> tag is much like the \<div> element, but \<div> is a block-level element and \<span> is an inline element.
#### header
Phần tử \<header> đại diện cho một vùng chứa nội dung giới thiệu hoặc một tập hợp các liên kết điều hướng
Thường chứa:
- one or more heading element
- s (\<h1> - \<h6>)
- logo or icon
- authorship information
> Note: You can have several \<header> elements in one HTML document. However, \<header> cannot be placed within a \<footer>, \<address> or another \<header> element.

#### footer
Thẻ \<footer> xác định chân trang cho tài liệu hoặc phần.
``` html
<footer>
  <p>Author: Hege Refsnes</p>
  <p><a href="mailto:hege@example.com">hege@example.com</a></p>
</footer>
```
Thường chứa:
- Thông tin tác giả
- Thông tin bản quyền
- Thôgn tin liên lạc
- Tài liệu liên quan
- Sơ đồ trang web

#### Nav
The \<nav> tag defines a set of navigation links.
The \<nav> element is intended only for major blocks of navigation links.
``` html
<nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/python/">Python</a>
</nav>
```
#### Main
Specify the main content of the document
> ***Note***: There must not be more than one \<main> element in a document. The \<main> element must NOT be a descendant of an \<article>, \<aside>, \<footer>, \<header>, or \<nav> element.
#### Section
\<section> định nghĩa một phần trong tài liệu 
Ví dụ : Có 2 phần trong tài liệu sau
``` html
<section>
<h2>WWF History</h2>
<p>The World Wide Fund for Nature (WWF) is an international organization working on issues regarding the conservation, research and restoration of the environment, formerly named the World Wildlife Fund. WWF was founded in 1961.</p>
</section>

<section>
<h2>WWF's Symbol</h2>
<p>The Panda has become the symbol of WWF. The well-known panda logo of WWF originated from a panda named Chi Chi that was transferred from the Beijing Zoo to the London Zoo in the same year of the establishment of WWF.</p>
</section>
```
#### Article
- Thẻ \<article> chỉ định nội dung độc lập
- Một article phải tự nó có ý nghĩa và có thể phân phối nó một cách độc lập với phần còn lại của trang web.
***
# 7.HTML text fundamentals
- h1->h6 element defines a large heading
- \<p> element defines a paragraph
- Thẻ \<ul> định nghĩa một danh sách không có thứ tự. Use the \<ul> tag together with the \<li> tag to create unordered lists.
``` html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```
***
# 8.Các thẻ liên quan đến form: form, input, button, label, textarea
#### form
Phần tử HTML \<form> được sử dụng để tạo biểu mẫu HTML cho đầu vào của người dùng
``` html
<form>
.
form elements
.
</form>
```
The \<form> element is a container for different types of input elements, such as: text fields, checkboxes, radio buttons, submit buttons, etc.
#### The <\input> Element
Một phần tử \<input> có thể được hiển thị theo nhiều cách, tùy thuộc vào thuộc tính type.
> \<input type="text">	Displays a single-line text input field
> \<input type="radio">	Displays a radio button (for selecting one of many choices)
> \<input type="checkbox">	Displays a checkbox (for selecting zero or more of many choices)
>\<input type="submit">	Displays a submit button (for submitting the form)
>\<input type="button">	Displays a clickable button
``` html
<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>
```
#### button
The \<button> tag defines a clickable button. You can put content like text or image within the \<button>........</button> tag.
``` html
<button name="button" type="button">Click Here</button>  
```








