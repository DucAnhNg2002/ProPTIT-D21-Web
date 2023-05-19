# HTML buổi 1

Class: WEB
Created: May 5, 2023 10:13 AM
Reviewed: No
Status: Done
Type: HTML

# Cách thức hoạt động của một trang web

![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled.png)

- Từ máy client gõ địa chỉ URL của trang web vào thanh địa chỉ của web browser, khi đó web browser sẽ dựa vào tên domain để tìm kiếm IP của web server (bằng cách dò trên DNS Server)
- Khi có IP, web browser sẽ gửi yêu cầu đến web server để lấy nội dung trang web
- Web server sẽ xử lý yêu cầu của client: lấy nội dung của website mà client yêu cầu để gửi client.
- Khi nhận được nội dung trang web thì web browser sẽ hiển thị lên cho người dùng.
- Trình duyệt web sẽ tách địa chỉ website ra làm ba phần:
- Giao thức (http)
- Máy chủ tên miền (www.webname.com)
- Tên tệp (file.htm)
- Trình duyệt web liên hệ với máy chủ tên miền (DNS server) để phân giải tên miền “www.webname.com” thành địa chỉ IP của web server
- Trình duyệt sẽ gửi tiếp 1 kết nối tới máy chủ địa chỉ IP tương ứng cổng 80.
- Dựa trên giao thức HTTP, trình duyệt gửi yêu cầu đến máy chủ, yêu cầu tệp: http://webname.com/file.htm
- Máy chủ sẽ gửi đoạn text dạng html đến trình duyệt của web client. Trình duyệt đọc các thẻ html, định dạng trang web và kết xuất ra màn hình.

# Cấu trúc của HTML và các thẻ cấu trúc

```html
	<!DOCTYPE html>// dinh nghia doc dang su dung html5
	<html> 
	<head>
	<title>Page Title</title>
	</head>
	<body>
	
	<h1>My First Heading</h1>
	<p>My first paragraph.</p>
	
	</body>
	</html>
```

- <html> thẻ gốc chứa toàn bộ cái thành phần khác xây dựng websitre
- <head> thẻ head chứa những thông tin meta như viewport, title, import font, link file
- <body> thẻ body chứa những nội dung hiển thị như heading, para, img, hyperlinks, etc

# Block-level vs inline html elements và phân biệt div vs span

1. Block-level
    - Block-level element luôn bắt đầu ở một dòng mới, trình duyệt sẽ tự động thêm khoảng trống lề ở đầu và cuối
    - block-level sẽ chiếm toàn bộ chiều rộng (width) của 1 dòng
    - 2 thẻ thường được sử dụng là : `<p>` và `<div>`
2. Inline
    - Inline element không bắt đầu ở một dòng mới và chỉ chiếm chiều rộng cần thiết
    - Thẻ `<span>` thường được sử dụng
3. <div>
    - Thẻ <div> được sử dụng để chứa các html elements khác (còn lại).
    - Thẻ <div> không yêu cầu attributes nhưng style, class, id có thể được sử dụng trong div
    - Thẻ <div> có thể sử dụng style blocks of content
    
    ```jsx
    <div style="background-color:black;color:white;padding:20px;">
      <h2>London</h2>
      <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan area of over 13 million inhabitants.</p>
    </div>
    ```
    
4. <span>
    - Thẻ span dùng để đánh dấu một đoạn text
    - Tương tự như div thì span có thể sử dụng style class id và style block
5. Phân biệt <div> và <span>
    - <div> sử dụng block-level còn span sử dụng <inline>

# Table

1. Table
    - Table chứa các ô nội dung bên trong hàng và cột
    
    ```jsx
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
    
2. <td>
    - td viết tắt cho table data, td chứa nội dung của các ô
    
    ```jsx
    <table>
      <tr>
        <td>Emil</td>
        <td>Tobias</td>
        <td>Linus</td>
      </tr>
    </table>
    ```
    
3. <tr>
    - stand for table row, tr chứa các ô nội dung của từng hàng và header của từng hàng, là chứa những thẻ td và th
4. <th>
    - stand for table header, chứa nội dung header của từng hàng
5. Nội dung bonus về table
    1. Border
        
        ```jsx
        table, th, td {
          border: 1px solid black;
        }
        ```
        
        - Sử dụng style để add border cho table nếu không sẽ chỉ hiện thị bảng mà không border
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%201.png)
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%202.png)
        
        - Cách để tránh bị có 2 border là sử dụng border-collapse: collapse
        
        ```jsx
        table, th, td {
          border: 1px solid black;
          border-collapse: collapse;
        }
        ```
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%203.png)
        
        Ngoài ra thì có thể thêm background-color và border-radius cho table
        
    2. Table size
        - Có thể chỉnh sửa size bằng cách sử dụng style thêm kích thước bằng pixel cụ thể hoặc percent
        
        ```jsx
        <table style="width:100%">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr style="height:200px">
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </table>
        ```
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%204.png)
        
    3. Table header
        - Có thể tạo ra vertical table header thay vì horizontal table header
        
        ```jsx
        <table>
          <tr>
            <th>Firstname</th>
            <td>Jill</td>
            <td>Eve</td>
          </tr>
          <tr>
            <th>Lastname</th>
            <td>Smith</td>
            <td>Jackson</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>94</td>
            <td>50</td>
          </tr>
        </table>
        ```
        
        Bằng cách trong mỗi table row thì chúng ta thêm table header 
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%205.png)
        
        - Có thể align header
        
        ```html
        th {
          text-align: left;
        }
        
        th {
        	text-align: center;
        }
        ```
        
        - header cho nhiều cột (header for multiple col) bằng cách sử dụng `colspan`
        
        ```html
        <table>
          <tr>
            <th colspan="2">Name</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>50</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>94</td>
          </tr>
        </table>
        ```
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%206.png)
        
        - Có thể sử dụng thẻ caption để thêm caption cho table (lưu ý: thêm caption sau thẻ table mở
        
        ```html
        <table style="width:100%">
          <caption>Monthly savings</caption>
          <tr>
            <th>Month</th>
            <th>Savings</th>
          </tr>
          <tr>
            <td>January</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February</td>
            <td>$50</td>
          </tr>
        </table>
        ```
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%207.png)
        
    4. padding và spacing
        - Có thể thêm padding cho content ở trong cell
        - Thêm padding cho 4 phía
        
        ```html
        th, td {
          padding: 15px;
        }
        ```
        
        - padding cho từng phía
        
        ```html
        th, td {
          padding-top: 10px;
          padding-bottom: 20px;
          padding-left: 30px;
          padding-right: 40px;
        }
        ```
        
        - Chúng ta có thể thêm space giữa các cell
        
        ```html
        table {
          border-spacing: 30px;
        }
        ```
        
    5. table styling 
        - Zebra-stripes
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%208.png)
        
        Để tạo ra bảng như trên thì sử dụng selector là `:nth-child(even || odd)`
        
        ```html
        tr:nth-child(even) {
          background-color: #D6EEEE;
        }
        ```
        

# Image and Link

1. Image
    - Sử dụng <img> để đính kèm một ảnh hoặc 1 gif
    - Ảnh sẽ không trực tiếp được chèn vào web page mà sẽ được linked tới web page
    - <img> chứa 2 attributes là: src và alt
        - src: đường dẫn tới img
        - alt: text thay thế khi ảnh bị lỗi đường dẫn
    - Có thể thêm style cho img như height width bằng đơn vị px hoặc percent
    
    ```html
    <img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">
    ```
    
    - Có thể sử dụng source ảnh từ website khác thay vì folder
    
    ```html
    <!DOCTYPE html>
    <html>
    <body>
    
    <h2>Images on Another Server</h2>
    
    <img src="https://www.w3schools.com/images/w3schools_green.jpg" alt="W3Schools.com" style="width:104px;height:142px;">
    
    </body>
    </html>
    ```
    
    - Có thể sử dụng ảnh như 1 link dẫn bằng cách sử dụng href trong block
    
    ```html
    <a href="default.asp">
      <img src="smiley.gif" alt="HTML tutorial" style="width:42px;height:42px;">
    </a>
    ```
    
2. map
    - image map là img có thể clickable ở một vài vị trị được set
    
    ```html
    <!DOCTYPE html>
    <html>
    <body>
    
    <h2>Image Maps</h2>
    <p>Click on the computer, the phone, or the cup of coffee to go to a new page and read more about the topic:</p>
    
    <img src="workplace.jpg" alt="Workplace" usemap="#workmap" width="400" height="379">
    
    <map name="workmap">
      <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
      <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
      <area shape="circle" coords="337,300,44" alt="Cup of coffee" href="coffee.htm">
    </map>
    
    </body>
    </html>
    ```
    
    `usemap="#workmap"`  sử dụng để khai báo mối qhe giữa map và img 
    
    rect thì coord có 2 attributes đầu toạ độ góc trái trên còn 2 attributes sau toạ độ phải dưới của hình chữ nhật 
    
    circle thì coord có 2 atb đầu là toạ độ tâm còn atb còn lại là bán kính 
    
    *Ngoài ra còn poly thì sẽ khai báo nhiều toạ độ nối với nhau như vector*
    
3. Có thể sử dụng img như background
    
    ```html
    <style>
    p {
      background-image: url('img_girl.jpg');
    }
    </style>
    ```
    
    - Xảy ra trường hợp img có size nhỏ hơn element nên sẽ bị repeat nhiều lần. Để tránh điều này xảy ra thì set `background-repeat: no-repeat`
    
    ```html
    <style>
    body {
      background-image: url('example_img_girl.jpg');
      background-repeat: no-repeat;
    }
    </style>
    ```
    
    - Bên cạnh đó nếu muốn img cover toàn bộ element thì set `background-size: cover`
    
    ```html
    <style>
    body {
      background-image: url('img_girl.jpg');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
    }
    </style>
    ```
    
4. Picture
    - Thẻ picture giúp linh hoạt hơn trong việc sử dụng source ảnh trên web page
    - Thẻ picture có thể chứa 1 hoặc nhiều source ảnh với các điều kiện view khác nhau
    
     
    
    ```html
    <picture>
      <source media="(min-width: 650px)" srcset="img_food.jpg">
      <source media="(min-width: 465px)" srcset="img_car.jpg">
      <img src="img_girl.jpg">
    </picture>
    ```
    

# Section element

1. <div> và <span> đã được để cập ở phần trên
2. <header>
    - <header> chứa 1 hoặc nhiều heading elements(<h1> - <h6>)
    - logo hoặc icon
    - authorship information
    - có thể có nhiều <header> trong 1 document
    - <header> không thể đặt trong <footer> <address> hay 1 <header> khác
3. <footer>
    - Chứa authorship information
    - Chứa thông tin bản quyển
    - Chứa thông tin liên hệ
    - Chứa các thông tin liên quan tới document
    - Bấm để back to top mà ko cần scroll
    - Có thể có nhiều <footer> trong 1 document
4. <nav>
    - Chứa những link đường dẫn
    
    ```html
    <nav>
      <a href="/html/">HTML</a> |
      <a href="/css/">CSS</a> |
      <a href="/js/">JavaScript</a> |
      <a href="/python/">Python</a>
    </nav>
    ```
    
5. <main>
    - Sử dụng để chứa những nội dung chính trong document
    - Chỉ nên có 1 <main> trong document và <main> không nên là con của <article>, <aside>, <footer>, <header>
    - Nội dung trong <main> nên là độc nhất với document
6. <section>
    - Chứa nội dung từng phần của document

# Text content

1. h1 to h6 tag
    - <h1> to <h6> định nghĩa mức độ quan trọng của các heading, mức độ quan trọng giảm dần từ 1 tới 6
2. <p>
    - Dùng để chứa 1 đoạn văn
    - Browser tự động thêm 1 dòng trống trước khi display đoạn text
3. <ul> 
    - Dùng để chứa 1 bulleted list, sử dụng <li> trong <ul> để chứa nội dung của từng đoạn trong list
4. <ol>
    - Dùng để chứa 1 orderlist. List đó có thể là alpha hoặc số thứ tự
    - Có thể set bắt đầu bằng `start="2"`
    
    ```html
    <ol start="50">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ol>
    ```
    
    - Có thể sử dụng style bằng `list-style-type:`  để set list là chữ hoặc số hoặc số la mã
    
    ```html
    <ol style="list-style-type:upper-roman">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
    </ol>
    
    <ol style="list-style-type:lower-alpha">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
    </ol>
    ```
    
5. <li>
    - Sử dụng để chứa các list item, được sử dụng trong các thẻ <ul> <ol> <menu>

# Forms

html form dùng để thu thập thông tin từ user nhập vào

1. <form>
    - dùng để tạo form cho user input
    - <form> chứa nhiều loại input như text fields, checkboxes, radio buttons, submit buttons, etc.
2. <input>
    - <input> thường được sử dụng trong <form> như 1 element
    - Có thể biểu diễn bằng nhiều cách khác nhau bằng cách sử dụng `type` attribue
        - type=”text”: biểu diễn mỗi dòng dưới dạng text
        
        ```html
        <form>
          <label for="fname">First name:</label><br>
          <input type="text" id="fname" name="fname"><br>
          <label for="lname">Last name:</label><br>
          <input type="text" id="lname" name="lname">
        </form>
        
        ```
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%209.png)
        
        - type=”radio”: biểu diễn các nút radio button có thể click vào chọn 1  trong những lựa chọn
        
        ```html
        <p>Choose your favorite Web language:</p>
        
        <form>
          <input type="radio" id="html" name="fav_language" value="HTML">
          <label for="html">HTML</label><br>
          <input type="radio" id="css" name="fav_language" value="CSS">
          <label for="css">CSS</label><br>
          <input type="radio" id="javascript" name="fav_language" value="JavaScript">
          <label for="javascript">JavaScript</label>
        </form>
        ```
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%2010.png)
        
        - type=”checkbox”: biểu diễn checkbox
        
        ```html
        <form>
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
          <label for="vehicle1"> I have a bike</label><br>
          <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
          <label for="vehicle2"> I have a car</label><br>
          <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
          <label for="vehicle3"> I have a boat</label>
        </form>
        ```
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%2011.png)
        
        - type=”submit”: biểu diễn nút submit để gửi data để xử lí
        
        ```html
        <form action="/action_page.php">
          <label for="fname">First name:</label><br>
          <input type="text" id="fname" name="fname" value="John"><br>
          <label for="lname">Last name:</label><br>
          <input type="text" id="lname" name="lname" value="Doe"><br><br>
          <input type="submit" value="Submit">
        </form>
        ```
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%2012.png)
        
        - type=”button” biểu diễn nút bấm có thể bấm
3. <label>
    - Được sử dụng để chứa label cho mỗi form elements
4. Form Attribute
    1. action
        - biểu diễn hành động được thực hiện khi form được submit
        - nếu action bị fail thì nó sẽ set về page hiện tại
        
        ```html
        <form action="/action_page.php">
          <label for="fname">First name:</label><br>
          <input type="text" id="fname" name="fname" value="John"><br>
          <label for="lname">Last name:</label><br>
          <input type="text" id="lname" name="lname" value="Doe"><br><br>
          <input type="submit" value="Submit">
        </form>
        
        ```
        
    2. target
        - dùng để cụ thể vị trị hiển thị sau khi nhận được phản hồi sau khi submitting
        - Những giá trị có thể gán:
            - _blank: display ở cửa sổ mới hoặc tab mới
            - _self: display ở web hiện tại
            - _parent: display ở web cha
            - _top:  display ở toàn bộ cửa sổ
    3. method
        - 
    4. autocomplete
        - on: tự động điền dựa trên giá trị được điền trước đó của user
5. Một số form element khác
    1. <select>
        - display drop-down list
        
        ```html
        <label for="cars">Choose a car:</label>
        <select id="cars" name="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        ```
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%2013.png)
        
        - `option` định nghĩa các option có thể được chọn trong select
        - có thể gán option được chọn trước bằng cách set `selected`
        
        ```html
        <option value="fiat" selected>Fiat</option>
        ```
        
        - `size`  có thể cụ thể số lựa chọn có thể thấy
        
        ```html
        <label for="cars">Choose a car:</label>
        <select id="cars" name="cars" size="3">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        ```
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%2014.png)
        
        ![Untitled](HTML%20buo%CC%82%CC%89i%201%20c23fcfcfc5084f58b9f397cccbf6153c/Untitled%2015.png)
        
        - `multiple` cho phép user lựa chọn nhiều lựa chọn hơn 1
        
        ```html
        <label for="cars">Choose a car:</label>
        <select id="cars" name="cars" size="4" multiple>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        ```
        
    2. <textarea>
        - dùng để biểu diễn nhiều dòng input, có các attribute để hiện thị số hàng cột, nếu nhiều hơn thì có thể scroll để hiện thị
        
        ```html
        <textarea name="message" rows="10" cols="30">
        The cat was playing in the garden.
        </textarea>
        ```
        
        - rows và cols biểu diễn số hàng và cột có thể nhìn thấy trong một textarea