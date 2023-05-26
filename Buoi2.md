## I. Các cách style cho file HTML
Để áp dụng mã CSS tác dụng vào các phần HTML có ba cách nhúng CSS vào HTML là ***Inline, Internal và External***

* Inline: mã CSS viết tại thuộc tính style của phần tử HTML
* Internal: mã CSS trong chính văn bản HTML, nằm trong khối thẻ **style**
* External: mã CSS ở một file riêng biệt (thường là file.css) sau đó nạp vào HTML bằng phần tử html **link** (liên kết css với html)

### 1. Nhúng CSS dạng inline - dùng thuộc tính style

Cách này là đặt mã CSS vào thẳng thuộc tính style của phần tử. Mã CSS chỉ tác động nên chính phần tử đó. Ví dụ đưa mã CSS trên áp vào phần tử **p** trong HTML sau đây:

```c
    <p style="color:white; background-color:red;">
    Đây là ví dụ về CSS dạng inline
    </p>
```

### 2. Nhúng CSS dạng Internal - CSS viết cùng HTML với thẻ ***style***

Cách này bạn sẽ dùng thẻ ***style***, tạo ra khu vực để viết CSS, bạn có thể để bất kỳ đâu trong HTML, nhưng nên đặt ***style*** trong thẻ head. Như ví dụ sau, trong khối ***style*** nó sẽ định nghĩa kiểu cho mọi phần tử ***p***, đều có màu trắng, nền đỏ.

```c
<html>
   <head>
      <style>
          /*style mở ra một khu vực để viết mã CSS*/
          p {
              color:white; background-color:red;
          }
      </style>
   </head>
   <body>
      <p>Đoạn văn 1. </p>
      <p>Đoạn văn 2. </p>
   </body>
</html>

```

### 3. Nhúng CSS dạng External, thẻ <link> nạp file CSS vào HTML

Cách link css vào html này các mã CSS bạn viết tập trung vào các file độc lập với file HTML (thường đặt phần mở rộng là .css) sau đó dùng thẻ **link** đặt ở phần ***head*** để nạp vào HTML theo cú pháp, ví dụ file ngoài là demo.css

```c
<html>
   <head> 
      <link rel="stylesheet" href="demo.css">
   </head>
   <body>
      <p>Đoạn văn 1. </p>
      <p>Đoạn văn 2. </p>
   </body>
</html>
```

Trong file demo.css bạn viết nội dung CSS (không có thẻ style), ví dụ:

```c
p {
   color:white;
   background-color:red;
}
```
Kết quả sẽ tương tự như ví dụ trên, chỉ có điều mã CSS đã tách khởi văn bản HTML, viết ra một file độc lập. Thuộc tính href trỏ đến địa chỉ URL của file CSS, ở ví dụ trên là địa chỉ dạng tương đối vì file CSS và HTML cùng thư mục.

## II. CSS selectors

### 1. Selector trong cú pháp CSS

Selector trong CSS là một phần của cú pháp CSS, nó cho biết bạn chọn phần tử nào trong HTML mà mã CSS sẽ áp dụng vào.

Ví dụ, có code CSS như sau:

```c
p.thongtin {
    border: 1px solid red;
    padding: 5px;
    background: lightskyblue;
    text-align: center;
}
```

Như đã biết các quy tắc (thuộc tính) CSS viết trong cặp ngoặc nhọn {}, những quy tắc này sẽ áp dụng cho phần tử HTML nào, đó là các phần tử ***p*** có class là thongtin. Trong cú pháp trên p.thongtin gọi là selector.

Chỉ các phần tử xác định được bởi selector mới áp dụng code CSS viết trong nó. Có nhiều phần tử ***p*** nhưng chỉ phần tử nào có class là thongtin mới áp dụng CSS trên. Ví dụ HTML sau:

```c
    <p class="thongtin">CSS Selector là chọn phần tử HTML, có nhiều cách chọn phần tử.</p>
    <p>Chọn theo class của phần tử là một cách.</p>
```

### 2. Nhóm nhiều selector

Bạn muốn áp dụng code CSS giống nhau cho nhiều loại phần tử, mà mỗi phần tử đó chỉ xác định được qua một selector. Như đoạn code trên CSS áp dụng cho thẻ ***p*** có class là thongtin bạn cũng muốn áp dụng cho thẻ ***div*** có class là infomation, thì bạn có thể viết.

```c
    p.thongtin, div.infomation {
    border: 1px solid red;
    padding: 5px;
    background: lightskyblue;
    text-align: center;
}
/* Tránh phải viết riêng cho từng selector khi CSS giống nhau
p.thongtin {
    ...
}
div.information {
    ...
}
*/
```

### 3. Chọn phần tử cơ bản - Selector cơ bản trong CSS

#### a. Chọn tất cả

Để chọn tất cả (mọi) phần tử HTML dùng ký hiệu sao *, ví dụ:

```c
    /* Tất cả phần tử trong HTML đều có font chữ sans-serif, và cỡ chữ 16px */
    * {
            font-family: sans-serif;
            font-size: 16px;
      }
```

#### b. Chọn theo tên thẻ phần tử HTML

Để chọn tất cả các phần tử cùng loại (cùng thẻ HTML) bạn chỉ cần viết tên thẻ của phần tử đó. Như div, span, p, strong, a, img ...

```c
/* Tất cả các phần tử thẻ a */
a {
    color: blue;
}
```

#### c. Chọn theo class và id của phần tử HTML

Trong các phần tử HTML đều có thể thiết lập giá trị cho thuộc tính ***class*** và ***id*** cho nó. Nếu phần tử có các thuộc tính này, nó có thể được chọn ra trong CSS.

Chọn theo class thì bạn viết **.ClassName** (dấu chấm sau đó là giá trị class), chọn theo id thì viết ***#id*** (dấu thăng sau đó là giá trị ID).

Ví dụ có HTML sau:
```c
<label class="gioithieu otherclass">Tên của bạn:</label>
<input type="text" id="username">
```
CSS để chọn theo class gioithieu và ID username có thể viết:

```c
    /* Tất cả các phần tử có class: gioithieu */
.gioithieu {
    text-color: green;
}

/* Phần tử có id là username */
#username {
    font-weight: bold;
}
```

#### d. Chọn theo thuộc tính phần tử HTML

Như bạn biết, một phần tử HTML khi viết nó có các thuộc tính ngoài thuộc tính id và class (hai thuộc này cách chọn đã nói ở trên), có các thuộc tính thuộc về đặc tính phần tử như img có thuộc tính src, a có thuộc tính href, target ... có các thuộc tính tên bất kỳ do bạn thêm vào như mydata, abc ...

Trong CSS hoàn toàn có thể chọn ra phần tử HTML căn cứ theo thuộc tính đó có hay không, hoặc thuộc tính đó có giá trị là gì. Sau đây là một số cách viết selector theo thuộc tính, giả sử thuộc tính là attrName

### 4. Kết hợp các selector

Để khoanh vùng phạm vi các phần tử được chọn chính xác hơn, thường sẽ kết hợp nhiều selector. Dưới đây là một số cách kết hợp:

#### a. Chọn phần tử con

Bạn có thể kết hợp 2 selector lại bằng ký hiệu lớn hơn > (ví dụ ***select1 > selector2***) để cho biết chọn phần tử con selector2, phải có cha là phần tử xác đinh bởi selector1. Lưu ý là phần tử con nằm trực tiếp trong phần tử cha và quy tắc viết được cho nhiều selector

Ví dụ:

```c
    /* Chọn phần tử a, a phải là con của p (những phần tử a không nằm trực tiếp
    trong p sẽ không được chọn */
p > a {
    ...
}

/* chọn phần tử a có class là linkout, a phải là con của p, p đó phải là con của
    phần từ có class là .cardinfo */
.cardinfo > p > a .linkout {
    ...
}
```

#### b. Chọn phần tử cùng cha phía sau

Sử dụng dấu cộng + để kết hợp 2 selector. Ví dụ ***selector1 + selector2***, thì quy tắc đó là selector1 xác định các phần tử thứ nhất (1), selector2 xác định các phần tử thứ (2), nếu phần các phần tử thứ (2) nằm ngay sau phần tử thứ nhất (1), đồng thời (1) và (2) cùng cha thì các phần từ (2) được chọn.

Ví dụ:

```c
/* chọn các phần tử span nằm ngay sau strong, cùng cha với strong */
strong + span {color: red;}
```
Áp dụng cho HTML sau, xem kết quả phía dưới. (span2 và 4 được chọn).
```c
    <div>
    <span>Span 1</span>
    <strong>Strong 1</strong>
    <span>Span 2</span>
    <em>Em</em>
    <span>Span 3</span>
    <strong>Strong 2</strong>
    <em>Em</em>
    <strong>Strong 3</strong>
    <span>Span 4</span>
</div>
```

#### c. Chọn dải phần tử cùng cha phía sau

Sử dụng dấu ~ để kết hợp 2 selector. Ví dụ ***selector1 ~ selector2***, quy tắc đó là selector1 xác định các phần tử thứ nhất (1), selector2 xác định các phần tử thứ (2), nếu phần các phần tử thứ (2) nằm sau phần tử thứ nhất (1), đồng thời (1) và (2) cùng cha thì các phần từ (2) được chọn.

Ví dụ:

```c
/* chọn các span cùng cha với strong, nằm phía sau strong*/
strong ~ span {
    color: red;
}
<div>
    <span>Span 1</span>
    <strong>Strong 1</strong>
    <em>Em</em>
    <span>Span 2</span>
    <span>Span 3</span>
    <em>Em</em>
    <span>Span 4</span>
</div>
```

#### d. Chọn các phần tử con, cháu ... (hậu duệ)

Bạn có thể viết nhiều selector liên tiếp cách nhau bởi khoảng trắng (" ") để hình thành nên một selector mới.

```c
    selector1 selector2 {
    ...
    }
```

Các phần tử được chọn bởi selector2 và các phần tử này phải nằm trong cấu trúc của phần tử xác định bởi selector1. Nói cách khác phần tử chọn bởi selector2 có tổ tiên là phần tử xác định bởi selector1 (phần tử cha trực tiếp, hoặc ngược lên cấp cao hơn trong cấu trúc DOM). Bạn có thể viết nhiều selector với cú pháp này.

```c
    selector1 selector2 selector3 {
}
```
Ví dụ: 
```c
/* Chọn tất cả các phần tử a, nó phải nằm trong cấu trúc của div */
div a { color: red;}
```


Ví dụ tiếp, kết hợp phức tạp hơn

```c
    .container div a .linkout [href^='https://abc.com'] { color: red;}

```

=> Chọn tất cả thẻ a, có class là linkout, thẻ a phải có thuộc tính href với tiền tố bằng https://abc.com, thẻ a phải trong cấu trúc thẻ div, thẻ div đó phải trong cấu trúc phần tử HTML có class là container.

Chú ý khi viết kết hợp như vậy khoảng trắng trước . và [ có thể bỏ.

```c
    .container div a.linkout[href^='https://abc.com'] { color: red;}
```
## III. Độ ưu tiên, các loại đơn vị độ dài trong CSS

### 1. Độ ưu tiên

Có thể xem như có 4 dạng rule trong CSS: inline, thẻ, class, id.

Thứ tự ưu tiên của CSS từ cao đến thấp như sau: **inline -> id -> class -> thẻ**.
Phạm vi tác động giảm dần: ***inline <- id <- class <- thẻ***, tức là với các loại bộ chọn CSS, bộ chọn thẻ có phạm vi tác động rộng nhất là trên toàn bộ trang mà có thẻ đó, sau đó mới đến thẻ có thuộc tính class, v.v.

* inline: 1000
* id: 100
* class: 10
* tag: 1
* {*}:0

### 2. Các đơn vị độ dài trong CSS

#### a. Đơn vị kích thước tuyệt đối trong CSS

Những loại đơn vị này thì giá trị của nó độc lập không liên quan đến các phần tử thành phần khác, dùng đơn vị này ở trong HTML thì kích cỡ đo được đều giống nhau. Dưới đây là những đơn vị tuyệt đối hay dùng:
|Ký hiệu Đơn vị|Diễn giải|
|--------------|---------|
|cm|centimet (dài bằng 1/100 m)|
|mm|milimét (dài bằng 1/1000 m)|
|in|Inche: 1in = 2.54cm = 96px|
|px|Điểm ảnh (10px là 10 điểm ảnh màn hình)|
|pt|Điểm (point), đây là đơn vị phổ biến dùng biểu diễn kích thước font chữ (72pt = 1inch = 25.4mm) hay 1pt = (1/72)in|

Bạn có quyền sử dụng bất kỳ đơn vị nào, tuy nhiên phổ biến để thể hiện trên màn hình là đơn vị px, các đơn vị tuyệt đối khác như cm phù hợp để thể hiện trang in.

#### b. Đơn vị kích thước tương đối trong CSS

Khi dùng các đơn vị tương đối thì độ lớn thực tế phụ thuộc vào thành phần khác, thường là phụ thuộc vào thuộc tính phần tử cha trong HTML hoặc phụ thuộc vào kích thước viewport (kích thước cửa sổ hiện tại của trình duyệt). Lợi ích của đơn vị này là nó tự động thu phóng độ lớn (chiều dài, font chữ) theo phần tử cha

* ***em***

Bằng cỡ font của phần tử cha. Có nghĩa phần tử cha có cỡ (font-size) là 14px, thì 1em là 14px - nếu cỡ font phần tử cha là 10pt thì 2em là 20px.

```c
<div style="font-size: 20px">
    font-size phần tử cha 20px
    <div style="font-size: 0.5em">
        Cỡ font thiết lập 0.5em (bằng nửa phần tử cha)
    </div>
</div>         
```

* ***rem***

Bằng cỡ font của phần tử gốc - root, trong CSS để thiết lập các thuộc tính của root thì dùng ký hiệu :root, rồi định nghĩa các thuộc tính giống class:
```c
    :root {
        font-size: 16px;
        color: #333;
    }
```

* ***lh***

Bằng chiều cao dòng phần tử cha

* ***vw***

Bằng 1% chiều rộng cửa sổ

* ***vh***

Bằng 1% chiều cao cửa sổ

## IV. Float, Box model trong CSS

### 1. Thuộc tính float trong CSS

Sử dụng thuộc tính float thiết lập phần tử HTML trôi về trái, về phải, ứng dụng để dàn trang tạo layout bố cục trang web, tìm hiểu cách loại bỏ hiệu ứng phụ ảnh hưởng đến chiều cao phần tử chứa bên trong có float với lớp clearfix

**Thuộc tính float**

Thuộc tính ***float*** được sử dụng để thay đổi vị trí của phần tử trong luồng dàn trang, dàn phần tử thông thường (luồng dàn phần tử trong browser khi không dùng CSS hay CSS nhận các giá trị mặc định). Thuộc tính này sẽ đẩy phần tử trôi về trái hoặc phải của phẩn tử chứa.

Cú pháp:

```c
    float: left | right | none | inherit;
```

* **left:** phần tử được trôi về phía bên trái. Luồng nội dung thông thường sẽ giữ ở bên phải, bắt đầu ở phần đỉnh của phần tử. Luồng nội dung xung quanh box thay đổi tùy thuộc vào giá trị của thuộc tính clear .
* **right:** phần tử được trôi về phía bên phải
* none: phần tử không bị đẩy về phía nào, vị trí của nó theo luồng dựng thông thường.
* **inherit:** giá trị float kế thừa từ phần tử cha.

### 2. Box model

#### a. Mô hình dạng hộp trong CSS

Các phần tử HTML được xem như các hộp chữ nhật (box), đây là mô hình để CSS bố cục, dàn trang. Một hộp box có các thành phần: ***margin, border, padding, nội dung phần tử***.

![example](https://xuanthulab.net/photo/boxcss-4515.png)

Như vậy mọi phần tử trong web là các hộp box, CSS sử dụng mô hình này để xác định độ lớn của box và box có vị trí như thế nào.

Cần nắm rõ về mô hình này để trình bày các thành phần trong HTML được chính xác. Các thành phần của phần tử qua đó xác định không gian phần tử chiếm chỗ gồm:

|STT|Mô tả|
|---|-----|
|1|***Phần nội dung:*** đây là phần hiện thị nội dung của phần tử (text, image, hay các phần tử HTML khác). Kích thước phần này có thể thiết lập thông qua một số thuộc tính css như: width và height|
|2|***Phần padding:*** Là một khoảng không gian bao quanh phần hình hộp nội dung (content), mặc định khoảng padding này là 0 (không có). Để thiết lập khoảng padding dùng các thuộc tính: padding, padding-left, padding-right, padding-bottom, padding-top.|
|3|***Phần border:*** (bo viền) - là đường viền bao quanh phần nội dung và paddinng. Chiều dày đường viền, kiểu đường viền thiết lập bằng các thuộc tính về border như border, border-left, border-width, border-style ...|
|4|***Phần margin:*** - Lớp ngoài cùng nó bao quanh phần nội dung, padding, border - phần này nó là khoảng trắng phân cách giữa phần tử này và phần tử khác. Để thiết lập sử dụng các thuộc tính margin, margin-top, margin-left ...|

Như vậy kích thước của phần tử theo chiều ngang (đứng) là tổng kích thước theo chiều ngang (đứng) của các thành phần content, padding, margin, margin

Kích thước này xác định được nhờ các thuộc tính: width, height, padding-(top|left|bottom|right), border-(top|left|bottom|right), margin-(top|left|bottom|right). Cách tính cụ thể lại còn tuỳ thuộc vào thuộc tính ***box-sizing***

### b. Thuộc tính box-sizing và xác định kích thước thực tế

Thuộc tính box-sizing để thiết lập cách thay đổi kích thước của phần nội dung (content) trong mô hình box. Cú pháp:

```c
box-sizing: content-box | padding-box | border-box
```

***content-box***
Đây là giá trị mặc định của box phần tử. Khi box phần tử là content-box thì khi bạn thiết lập chiều rộng cao cho phần tử với thuộc tính width và height : Thì đây chính là chiều rộng và cao của phần content, các phần padding, border, margin bị đẩy ra bên ngoài kích thước này.

**Nếu box-sizing có giá trị content-box thì khi thiết lập thuộc tính width và height của phần tử CSS có nghĩa là thiết lập chiều rộng và cao cho vùng nội dung.**

***border-box***
```c
box-sizing: border-box;
```

Khi box phần tử có thiết lập **box-sizing** với giá trị ***border-box***, thì khi bạn thiết lập chiều rộng, cao với thuộc tính width và height thì đây chính là chiều rộng và cao thực tế của phần tử. Chiều rộng và cao phần nội dung được browser tính toán với công thức:

**width = Chiều rộng phần nội dung + padding-left + padding-right + border-left  + boder-right**

**height = Chiều cao phần nội dung + padding-top + padding-bottom + border-top  + boder-bottom**

***padding-box***

Khi box phần tử có thiết lập box-sizing với giá trị padding-box, thì khi bạn thiết lập chiều rộng, cao với thuộc tính width và height thì nó gồm kích thước phần padding và nội dung (không có phần border).

## V. Các loại position, z-index trong CSS

### 1. Định vị phần tử với CSS bằng thuộc tính position

Thuộc tính **position** được dùng để thiết lập định vị vị trí của phần tử trong trang. Sử dụng thuộc tính này giúp bạn chọn tùy chọn cách thức xác định vị trí của phần tử trong luồng trình bày, bạn có thay đổi như như vị trí phần tử có liên hệ tương đối với phần tử khác hay vị trí liên quan đến khung nhìn (viewport) ...

Mặc định các phần tử có giá trị mặc định để định vị là vị trí tĩnh trên trang, đây là cách xác định vị trị theo luồng mặc định ở trên trang. Khi một phần tử được định vị khác với mặc định (gọi là phần tử được định vị) thì thuộc tính position của nó thay đổi từ giá trị mặc định static sang một trong các giá trị. **relative, absolute, fixed, sticky**
#### a. position có giá trị relative

Vị trí của box (hình hộp) phần tử đầu tiên được tính toán theo luồng dàn phần tử mặc định. Sau đó hình hộp được bù (lệch đi) so với vị trí ở luồng mặc định (căn cứ vào giá trị top, left, right hoặc bottom), mặc dù bị dịch đi như vậy nhưng nó không ảnh hưởng tới các phần tử khác trong luồng mặc định.

#### b. position có giá trị absolute

Định vị tuyệt đối. Phần tử này bị tách ra khỏi luồng dàn phần tử thông thường của trình duyệt (trong luồng thông thường coi như không có phần tử này). Vị trí của box (hộp phần tử) và có thể là kích thước phần tử nữa hoàn được xác định bởi các thuộc tính top, left, right, bottom những vị trí lệch offset với phần tử chứa (hoặc tổ tiên gần nhất) có thuộc tính postion là relative. Những thuộc tính này là độ lệch cạnh phần tử tương ứng với cạnh phần tử chứa. Ví dụ left : 0px thì cạnh trái trùng cạnh trái phần tử chứa, right: 20px thì cạnh phải cách cạnh phải (khoảng bù) phần tử chứa 20px.

***Định vị tuyệt đối ở đây là phần tử bị tách khỏi luồng mặc định, vị trí và kích thước của nó xác định bởi top, left, right, bottom và so sánh với phần tử cha (tổ tiên gần nhất) có thuộc tính position là relative. Nếu ngược hết DOM không có phần tử tổ tiên nào có postion relative thì vị trí là tương ứng với cửa sổ trình duyệt.***

#### c. position có giá trị fixed

Ý nghĩa tương tự như khi nhận absolute - phần tử cũng bị tách khỏi luồng dàn phần tử thông thường của trình duyệt, tuy nhiên vị trí xác định liên hệ với viewport (cửa sổ nhìn hiện tại của trình duyệt, chứ không phải phần tử chứa), điều này làm cho vị trí phần tử luôn cố định dù bạn cuộn trình duyệt.

### d. position có giá trị sticky

Trường hợp này là lai giữa relative và fixed. Ví dụ, một giá trị cố định là 50px, nếu vị trí trong viewport (top) trên 50px thì nó ứng sử như relative, nếu nhỏ hơn thì nó sẽ giữ cố định là 50px. 

### 2. z-index trong CSS

Thiết lập z-index trong CSS điều khiển thứ tự hiện thị các box HTML khi chúng xếp chồng lên nhau, hiểu về ngữ cảnh xếp chồng và ảnh hưởng của z-index

Thuộc tính z-index để điều khiển thứ tự hiện thị các phần tử khi chúng bị đè lên nhau (xếp chồng lên nhau). Có nghĩa trong trường hợp các phần tử đè lên nhau (như khi bạn áp dụng các thuộc tính position, left, top ...), thì bạn có thể chỉ định phần tử nào là phía trước (nằm trên) phần tử nào phía sau (nằm dưới).

Thuộc tính z-order là xếp thứ tự phần tử theo trục z. Một phần tử có giá trị z-order cao hơn thì nó sẽ nằm trên (đè lên) phần tử có z-order thấp hơn.

Để hiểu rõ về z-index cũng cần tìm hiểu về ngữ cảnh xếp chồng các phần tử, nghĩa là ảnh hưởng của z-index tùy thuộc vào ngữ cảnh của nó nữa.

Cú pháp:

```c
z-index: auto | int
```

z-index có giá trị nhận là auto thì trong ngữ ảnh xếp chồng của nó nó có giá trị index là 0. Còn lại muốn thiết lập thứ tự z-index của nó thì chỉ ra giá trị là một số nguyên


## VI. Các loại display

Thuộc tính display được dùng để chỉ rõ cách phát sinh ra hình hộp cho phần tử trong trang HTML.

Như đã biết mọi phần tử trên trang HTML đều có dạng hình chữ nhật (xem mô hình hộp chữ nhật phần tử trong CSS). Kiểu hình hộp sẽ ảnh hưởng tới định dạng của nó trên trang.

### 1. Định dạng Inline

Định dạng inline (phần tử cấp độ inline), thì hộp phần tử đi theo luồng của dòng, nó không tạo ra ngắt dòng. Những phần tử mặc định box của nó định dạng ban đầu là inline như: **strong, i, span, em, img ...** Các phần tử này như là một phần của dòng.

Để thiết lập phần tử về dạng inline bằng cú pháp CSS
```c
    display: inline;
```

***Phần tử định dạng inline có thể thiết lập có padding, margin nhưng không thiết lập được width và height (dù có thiết lập thì cũng không tác dụng gì). Cũng chú ý, padding và margin nếu thiết lập nó sẽ đẩy các phần tử khác giãn ra theo chiều ngang và không tác dụng đẩy các phần tử theo chiều đứng.***

### 2. Định dạng inline-block

Định dạng một phần tử giống dạng inline, tuy nhiên cho phép thiết lập chiều rộng và cao phần content, nó đẩy giãn các phần tử ngang, dọc phù hợp với kích thước của nó: Đó là phần tử dạng inline-block. Cú pháp:
```c
    display: inline-block;
```

### 3. Định dạng block

Cú pháp CSS:
```c
    display: block;
```

Phần tử định dạng cấp độ block là những phần tử không đứng cùng hàng với phần tử khác, nó ngắt dòng để tạo dòng mới và chiều ngang mở rộng tối đa có thể (tối đa theo kích thước phần tử chứa). Phần tử block có thể thiết lập chiều rộng, cao cho nó. Hãy chú ý nguyên tắc: phần tử block có thể chứa phần tử block khác, chứa phần tử inline, block-inline. Còn phần tử inline thì không nên chứa block (có một số ngoại lệ như phần tử ***a***). Phần tử mặc định đã là block như: *** p ul h1 ...***   

### 4. Ẩn phần tử - display: none
Cú pháp CSS:
```c 
display: none;
```

Phần tử sẽ bị ẩn đi, bị loại bỏ hoàn toàn khỏi hiện thị của trang, trình duyệt không dựng nội dung phần tử - mà sẽ có nó như không có. Thuộc tính này hữu ích khi sử dụng với Javascript hoặc viết CSS responsive (ẩn/hiện tùy thuộc vào kích cỡ màn hình).

## VII. Background style trong CSS

### 1. background-color

Thuộc tính background-color dùng để đặt màu nền cho một thành phần. Nó chấp nhận tất cả giá trị các mã màu hoặc thuộc tính transparent

```c
vd:
.left { background-color: #ffdb3a; }
.middle { background-color: #67b3dd; }
.right { background-color: transparent; }
```

![example](https://images.viblo.asia/251eff8d-987f-4be5-b4e8-13fea362fcb6.png)

Màu nền được xác định trong các ô được xác định bởi thuộc tính background-clip. Nếu có hình nền được đặt cùng thì lớp màu sẽ được đặt ở dưới. Không giống như các lớp hình ảnh có thể sử dụng nhiều lớp, chúng chỉ có thể dùng được một lớp màu cho một thành phần.

### 2. background-image

Thuộc tính background-image định nghĩa cho hình nền của một thành phần. Nó là giá trị được định nghĩa bằng một đường dẫn hình ảnh với ký hiệu url(). Giá trị non có thể được sử dụng, nó được tính là một lớp.

```c
    vd:
.left { background-image: url('ire.png'); }
.right { background-image: none; }
```

![example](https://images.viblo.asia/d0c86207-0bc8-4451-847b-f46b8a31e2a8.png)

Chúng ta có thể sử dụng nhiều hình nền, mỗi giá trị được cách nhau bởi một dấu phẩy. Mỗi hình ảnh tiếp theo sẽ được đặt trước trên trục z.

```c
    vd:
.middle { 
  background-image: url('khaled.png'), url('ire.png');

  /* Other styles */
  background-repeat: no-repeat; 
  background-size: 100px;
}
```

![example](https://images.viblo.asia/eaecd7f4-2c19-49a8-ab3c-0c9eed0a7fda.png)

### 3. background-repeat

Thuộc tính background-repeat kiểm soát cách hình nền sau khi nó được đặt kích thước (bởi thuộc tính background-size) và vị trí (bởi thuộc tính background-position). Giá trị của của thuộc tính này có thể là một trong những từ khóa sau: repeat-x, repeat-y, repeat, space, round, no-repeat. Bên cạnh hai thuộc tính repeat-x và repeat-y, các giá trị khác có thể được định nghĩa một lần cho cả hai trục x và trục y hoặc mỗi chiều riêng biệt.
```c
    vd: 
.top-outer-left { background-repeat: repeat-x; }
.top-inner-left { background-repeat: repeat-y; }
.top-inner-right { background-repeat: repeat; }
.top-outer-right { background-repeat: space; }

.bottom-outer-left { background-repeat: round; }
.bottom-inner-left { background-repeat: no-repeat; }
.bottom-inner-right { background-repeat: space repeat; }
.bottom-outer-right { background-repeat: round space; }
```

![example](https://images.viblo.asia/e7fc37e6-38b5-4c59-b07f-3f58ab393ea7.png)

### 4. background-size

Thuộc tính background-size định nghĩa kích thước của hình nền. Giá trị của nó có thể là kích thước chiều dài và rộng hoặc là tỉ lệ phần trăm. Từ khóa có sẵn cho thuộc tính là contain và cover. Giá trị contain sẽ co dãn hình ảnh để phù hợp với khung. giá trị cover, ở một mặt khác nó sẽ kéo dãn hình ảnh sao cho vừa với khung mà ko gây sai lệch tỉ lệ.

Thuộc tính background-size định nghĩa kích thước của hình nền. Giá trị của nó có thể là kích thước chiều dài và rộng hoặc là tỉ lệ phần trăm. Từ khóa có sẵn cho thuộc tính là contain và cover. Giá trị contain sẽ co dãn hình ảnh để phù hợp với khung. giá trị cover, ở một mặt khác nó sẽ kéo dãn hình ảnh sao cho vừa với khung mà ko gây sai lệch tỉ lệ.

```c
    vd: 
    .left { 
        background-size: contain;
        background-image: url('ire.png'); 
        background-repeat: no-repeat;
    }
    .right { background-size: cover; /* Other styles same as .left */ }
```

![example](https://images.viblo.asia/78b5574c-644e-416c-9185-a4a7fefc36ae.png)

Đối với các giá trị chiều dài và giá trị phần trăm, chúng ta có thể xác định cả chiều rộng và chiều cao của ảnh nền. Tỷ lệ phần trăm giá trị được tính toán liên quan đến kích thước của phần tử.
```c
    vd:
    .left { background-size: 50px; /* Other styles same as .left */ }
    .right { background-size: 50% 80%; /* Other styles same as .left */ }
```

![example](https://images.viblo.asia/7316f7ec-57cc-4f7c-be36-feabf5bb2bcc.png)

### 5. background-position

Thuộc tính này là sự kết hợp với thuộc tính background-origin, xác định nơi các vị trí bắt đầu cho hình nền nên được. Đó là giá trị có thể là một từ khóa, chiều dài, hoặc một tỷ lệ phần trăm, và chúng tôi có thể xác định vị trí dọc theo trục x cũng như các trục y. Từ khóa có sẵn: top, right, bottom, left và center. Chúng ta có thể sử dụng các từ khóa trong bất kỳ sự kết hợp, và nếu chỉ có một từ khóa được quy định.

```c
    vd:
.top-left { 
  background-position: top;
  background-size: 50%;
  background-image: url('ire.png'); 
  background-repeat: no-repeat;
}
.top-middle { background-position: right;  /* Other styles same as .top-left */ }
.top-right { background-position: bottom;  /* Other styles same as .top-left */ }
.bottom-left { background-position: left;  /* Other styles same as .top-left */ }
.bottom-right { background-position: center;  /* Other styles same as .top-left */ }
```

![example](https://images.viblo.asia/24c2cf18-0abe-4e43-8f05-420ae20b15b4.png)

Đối với chiều dài và tỷ lệ phần trăm giá trị, chúng ta cũng có thể xác định vị trí dọc theo trục x và trục y. Tỷ lệ phần trăm giá trị là liên quan đến các yếu tố có chứa.
```c
    vd:
.left { background-position: 20px 70px; /* Others same as .top-left */ }
.right { background-position: 50%; /* Others same as .top-left */ }
```

![example](https://images.viblo.asia/dc9c85eb-c253-4204-93b8-72eda77d2ca9.png)

### 6. background-origin

Thuộc tính background-origin quy định cụ thể trong đó diện tích các mô hình hộp hình nền phải được bố trí theo. Giá trị mặc định là border-box, khi mà vị trí hình ảnh ở sát viền của khung, padding-box khi mà hình ảnh ở trong viền của khung và content-box khi mà hình ảnh ở trong khung

```c
    vd: 
.left { 
  background-origin: border-box;
  background-size: 50%;
  background-image: url('ire.png'); 
  background-repeat: no-repeat;
  background-position: top left; 
  border: 10px dotted black; 
  padding: 20px;
}
.middle { background-origin: padding-box;  /* Other styles same as .left*/ }
.right { background-origin: content-box;  /* Other styles same as .left*/ }
```
![example](https://images.viblo.asia/094c2981-51f5-40dc-9926-3ef43ed0ef50.png)

### 7. background-clip

Thuộc tính background-clip xác định khu vực sơn nền, đó là khu vực mà nền có thể sơn lên, giống như background-origin, nó được dựa trên các lĩnh vực mô hình hộp.
```c
    vd:
.left{ 
  background-clip: border-box;
  background-size: 50%;
  background-color: #ffdb3a; 
  background-repeat: no-repeat;
  background-position: top left; 
  border: 10px dotted black; 
  padding: 20px;
}
.middle { background-clip: padding-box;  /* Other styles same as .left*/ }
.right { background-clip: content-box;  /* Other styles same as .left*/ }
```
![example](https://images.viblo.asia/f9a6b8a2-f86d-4273-bcf6-368a1c69a007.png)

## VIII. Pseudo class và pseudo element

### 1. Pseudo class

#### a. Khái niệm

Hiểu một cách đơn giản thì peseudo-classes được dùng để xác định 1 trạng thái đặc biệt nào đó của 1 element. Ví dụ, trạng thái chúng ta hay sử dụng nhất đó là **:hover, :check**

Cú pháp để viết như sau:

```c
    selector:pseudo-class {
        thuộc tính: giá trị;
    }
```
Ví dụ: 
```c
    a {
        color: blue;
        transition: color 0.2s;
    }

    a:hover {
        color: red;
    }
```

#### b. Cách sử dụng pseudo-classes

|pseudo-classes|Ví dụ|Mô tả chi tiết|
|--------------|-----|--------------|
|:link|a:link|Chọn tất cả các liên kết chưa được click|
|:hover|a:hover|Thay đổi trạng thái khi rê chuột qua a|
|:active|	a:active|Thay đổi trạnh thái của a khi click vào nó|
|:visited|a:visited|Chọn tất cả link đã truy cập|
|:checked|input:checked|Chọn mỗi phần tử **input** đã kiểm tra.|
|:empty|li:empty|Chọn mỗi phần tử li không có con|
|:first-child|li:first-child|Chọn tất cả các phần tử **li** đó là con đầu tiên của parent của nó|
|:first-of-type|li:first-of-type|Chọn phần tử p đầu tiên trong những phần tử **li** có trong 1 element|
|:focus|	input:focus|Thay đổi trạng thái của **input** khi vừa lựa chọn **input** đó|
|:last-child|li:last-child|Chọn mỗi phần tử **li** là con cuối cùng của parent. Ngược lại với :first-child|
|:nth-child(n)	|li:nth-child(2)|Chọn mỗi phần tử **li** là con thứ hai của parent. Tức là phần tử thứ 2 từ trên xuống|
|:nth-child(2n), :nth-child(even)|li:nth-child(2n), li:nth-child(even)|Lựa chọn tất cả các phần tử **li** có chỉ số chẵn|
|:nth-child(2n+1), :nth-child(odd)|li:nth-child(2n+1), li::nth-child(odd)|Lựa chọn tất cả các phần tử **li** có chỉ số lẻ|
|:nth-last-child(n)|li:nth-last-child(2)|Chọn mỗi phần tử **li** là con thứ hai của cha / mẹ nó, kể từ con cuối cùng. Tức là phần tử thứ 2 từ dưới lên|
|:only-child|li:only-child|Chọn mỗi phần tử **li** là con duy nhất của parent của nó|

#### c. Pseudo-classes tác động lên link

Trong nhóm này chúng ta sẽ có 4 pseudo-class chính đó là (**:link, :visited, :hover và :activ**).
```c
    /* unvisited link */
a:link {
color: #FF0000;
}

/* visited link */
a:visited {
color: #00FF00;
}

/* mouse over link */
a:hover {
color: #FF00FF;
}

/* selected link */
a:active {
color: #0000FF;
}
```

Một điều chú ý ở đây là các bạn phải viết theo đúng thứ tự như trên thì css mới nhận do độ ưu tiên trong css. Nếu khi chúng ta tráo đổi vị trí như đưa a:hover lên trước a:link và a:visited thì khi ta rê chuột vào link nó sẽ không đổi màu, tương tự với việc nếu chúng ta đảo vị trí của a:active với a:hover.

Thực chất pseudo-class **:hover ** có thể sử dụng có các element khác chứ không chỉ sử dụng riêng cho a như 2 pseudo-classes a:link và a:visited.

### 2. Pseudo-Elements

#### a. Pseudo-Elements là gì?

Pseudo-Elements có thể dịch nôm na là ***phần tử giả*** , được sử dụng để tạo một số style đặc biệt của element được chọn.

Ví dụ, nó có thể được sử dụng để:

***- Style cho chữ cái đầu tiên, hoặc dòng đầu tiên của phần tử.***

***- Chèn nội dung trước hoặc sau nội dung của phần tử.***

#### b. Cú pháp

```c
    selector::pseudo-element {
        property:value;
    }
```

#### c. ví dụ về Pseudo-Elements

##### ::before pseudo-element

Đây có lẽ là pseudo-element được sử dụng nhiều và thông dụng nhất. pseudo-element thường được sử dụng để thêm text, hình ảnh hay bất kỳ nội dung gì phía trước nội dung của phần tử được chọn.

##### ::after pseudo-element

Tương tự như ::before, ::after cũng được sử dụng để thêm nội dung nhưng là vào phía sau phần tử được chọn.

##### ::selection pseudo-element
Pseudo-element này được dùng để style cho một vùng văn bản được người dùng chọn (hay còn gọi là "bôi đen"). Chỉ có một số thuộc tính css khả dụng với ::selection là color, background, curso, và outline.

##### ::first-line pseudo-element
Như đã nói ở phần giới thiệu của bài viết, Pseudo-Elements được sử dụng để tạo style một số phần đặc biệt của element được chọn.. Và pseudo-element ::first-line dùng để style cho dòng đầu tiên của phần tử được chọn

###### ::first-letter pseudo-element

::first-letter được sử dụng để thêmstyle đặc biệt vào chữ cái đầu tiên của văn bản

## IX. Style cho text trong CSS

### 1. Color

Sử dụng thuộc tính color thiết lập màu chữ cho phần tử HTML bằng css, màu chữ css với các giá trị màu theo tên, theo giá trị hex (mã màu hex css) và trộn màu RGB

**Thuộc tính color trong CSS**
```c
    color: tên-mã-màu-sắc;
```

Thuộc tính color dùng để thiết lập màu chữ trong CSS. giá trị màu có thể nhận là tên các màu quy định trước mà trình duyệt có thể hiểu như red, blue, green ... hoặc mã hex của màu, hoặc tự trọn màu bằng hàm RGB.

**Thiết lập mã màu Hex cho thuộc tính color**
Cách thứ hai là gán giá trị màu dạng hex (bắt đầu bởi # và có có các số dạng hex phía sau - cặp 3 số tương ứng với màu Red - Green - Blue (RGB) được phai trộn để tạo màu). Xem màu sắc html để biết về mã màu dạng hex trong HTML, CSS và chọn màu hex tuỳ ý.

Ví dụ màu green (xanh lá) nếu viết dạng hex thì là #008000, bạn có thể gán giá trị này cho thuộc tính color
```c
    .mycolor {
    color: #008000; /* tương đương giá trị theo tên green */
}
```
**Gán mã màu RGB cho thuộc tính color**
Trong CSS có cung cấp sẵn hàm rgb(red, green, blue) để pha trộn ba màu cơ bản thành màu mới. Bạn có thể thiết lập thuộc tính color nhận giá trị của hàm này. Ví dụ trộn ba màu đỏ cường độ 0 (thấp nhất - không có màu đỏ), green cường độ 255 (cao nhất), không màu blue (0) thì viết rgb(0,255,0), kết quả chính là màu green.
```c
    .mycolor {
    color: rgb(0,255,0); /* tương đương giá trị theo tên green */
}
```

***Trong CSS còn có hàm rgba(r,g,b,a) sử dụng giống rgb, nhưng nó có thêm tham số a (alpha) để cho biết độ mờ (trong suốt) của, a nhận giá trị 0 - 1 với 0 là hoàn toàn trong suốt.***

### 2. Font-family

Sử dụng thuộc tính font-family trong CSS để thiết lập font chữ hiện thị cho các phần tử HTML, phân biệt các nhóm font chữ generic như Serif, Sans-serif, Monospace, Cursive, Fantasy

```
    font-family: serif;
    font-family: namefont1, namefont2;
```

Thuộc tính font-family được dùng để chỉ ra font chữ (có thể là một danh sách font chữ) cho phần tử. Nếu thiết lập nhiều font chữ thì các font được liệt kê cách nhau bởi dấu phảy (,)

Khi một phần tử thiết lập nhiều font chữ bởi thuộc tính css font-family, trình duyệt sẽ tìm các font đó trên hệ thống đang chạy (ưu tiên từ trái qua phải), thấy font chữ nào thì dùng font chữ đó, điều này đảm bảo trang web có thể hiện thị phù hợp trên nhiều loại máy (Windows, mac, Android ...) khi hệ thống font chữ nó khác nhau tuỳ theo hệ thống. Ví dụ:

```c
    p {
        font-family: Arial, Helvetica, sans-serif;
    }
/*
    Font chữ cho phần tử <p> là: Arial nếu thấy có trong hệ thống, nếu không có
    thì dùng Helvetica, nếu cũng không có Helvetica
    thì dùng font dạng generic : sans-serif
*/
```

### 3. Font-size

Thuộc tính font-size trong CSS để thiết lập cỡ chữ.

```
    font-size: size;
```

Trong đó size là cỡ font chữ, giá trị này có thể là:

- Cỡ chữ tuyệt đối so với cỡ chữ mặc định (medium), gồm các giá trị: xx-small, x-small, small, medium, large, x-large, xx-large, xxx-large.
- Chỉ ra kích thước theo đơn vị mong muốn như 14px, 12pt, 1em ... 
- Số phần trăm, ví dụ 80% - là cỡ font chữ so với phần tử cha

font-size với cỡ chữ chỉ rõ theo đơn vị ***px, em, rem ...***
Bạn có thể chỉ ra cụ thể cỡ chữ cụ thể kèm đơn vị (đơn vị tuyệt đối như mm, cm, px, in, px và đơn vị tương đối như em, rem ...)

```
    h1 {
    font-size: 20px;
    }
```
### 4. Font-style

Thuộc tính **font-style** trong css dùng để thiết lập kiểu chữ. Với các giá trị:

- **normal** kiểu chữ bình thường (chuyển từ nghiêng sang bình thường)
- **italic** chữ nghiêng - in nghiêng css (font phải có hỗ trợ phiên bản in nghiêng)
- **oblique** nghiêng (có thể thiết lập độ nghiêng tuy nhiên tùy thuộc vảo font chữ có thiết lập được không)

```
    <style>
        .normal { font-style: normal; }
        .italic { font-style: italic;}
        .oblique { font-style: oblique;}
    </style>

    <p class="normal">Đoạn văn bình thường.</p>
    <p class="italic">Đoạn văn chữ nghiêng 1.</p>
    <p class="oblique">Đoạn văn chữ nghiêng 2.</p>     
```

### 5. Font-weight

Thuộc tính ***font-weight*** trong CSS thiết lập độ dày mỏng (đậm, nhạt) của chữ, nó có thể nhận các giá trị như normal, bold, bolder, lighter hoặc nhận giá trị số từ 1 đến 1000. (400 tương tương normal, 700 tương đương bold - in đậm css). Cũng tuỳ thuộc loại font chữ nạp vào, mà những thiết lập này có tác dụng hay không.

```
    <style>
        .light    { font-weight: lighter;}
        .bold     {  font-weight: bold;}
        .fontw600 { font-weight: 600;}
    </style>

    <p class="light">Font chữ cỡ "lighter".</p>
    <p class="bold">Font chữ  "bold" .</p>
    <p class="fontw600">Font chữ có độ đậm 600.</p>
```

### 6. Text-transform

Thuộc tính CSS ***text-transform*** để chuyển đổi chữ in thường thành in hoa hoặc ngược lại. Thuộc tính này nhận các giá trị, trong cú pháp sau:

```
    text-transform: none | capitalize | uppercase | lowercase | full-width;
```

- none : Tắt các tác dụng chuyển đổi
- capitalize : Mỗi chữ đầu tiên của từ được chuyển thành in hoa
- uppercase : Tất cả các chữ chuyển thành in hoa
- lowercase : Tất cả các chữ chuyển thành in thường

### 7. Text-shadow

Thuộc tính text-shadow để tạo bóng đổ của chữ. Nó chấp nhận một danh sách các bóng đổ cùng cáp dụng vào văn bản của phẩn tử.

Mỗi hiệu ứng bóng đổ shadow được tạo ra bởi hai (hoặc ba) giá trị chiều dài và một giá trị tuỳ chọn màu sắc (nếu thiếu tham số này thì là màu đen). Cụ thể xem cú pháp sau để tạo một shadow - bóng đổ:
```
    .test-text-shadow {
        text-shadow: x y br color;
    }
```

Trong đó:

- x giá trị chiều dài đầu tiên, là khoảng cách theo chiều ngang (bóng chữ dịch ngang)
- y giá trị chiều dài thứ hai, là khoảng cách theo chiều đứng
- br bán kính mờ (tô mờ đường biên), tham số này tuỳ chọn, nếu thiếu thì bán kính mờ bằng 0, nút chữ bóng mờ sắc nét nhất.
Đổ bóng chữ bằng cách sử dụng thuộc tính text-shadow, thuộc tính này thiết lập cùng lúc một số giá trị. Đầu tiên là khoảng bóng đổ theo x, tiếp theo khoảng bóng đổ theo hướng y, tham số thứ 3 là bán kính bóng mờ, cuối cùng là màu bóng đổ.

### 8. Text-decoration

Thuộc tính text-decoration trong CSS đưa thêm các định dạng trang trí cho chữ (các dòng kẻ qua chữ, gạch chân css)

Có 3 thuộc tính:
- ***text-decoration-line:***	thiết lập có đường kẻ qua chữ, nó có thể nhận các giá trị:
        + none : hủy kẻ qua chữ
        + underline: gạch chân, gạch dưới css
        + overline: gạch trên đầu chữ
        + line-through: gạch qua chữ
- ***text-decoration-color:*** Đặt màu đường trang trí mà loại đường thì thiết lập ở text-decoration-line, nó nhận giá trị là các mã màu CSS
- ***text-decoration-style:*** thuộc tính thiết lập kiểu đường trang trí, nhận các giá trị:
        + solid : đường liền
        + double: đường đôi
        + dotted: đường chấm chấm
        + dashed: đường gạch gạch
        + wavy: lượn sóng

Bằng cách dùng text-decoration bạn có thể viết gộp ba thuộc tính trên cùng một dòng, với cú pháp dạng:
```c
    text-decoration: line color style;
```

Trong đó bạn có thể không cần chỉ ra cả ba tham số, ví dụ thiếu style, thiếu color ..., thành phần thiếu sẽ sử dụng thiết lập mặc định của trình duyệt.

### 9. Text-align

Thuộc tính text-align để căn chỉnh vị trí của chữ hoặc các phần tử dạng inline theo chiều ngang trong phần tử HTML chứa dạng block. Mặc định là căn lề trái, tuy nhiên bạn có thể chỉ ra các giá trị:

- left hoặc start: căn lề trái
- right hoặc end: căn lề phải
- center: căn giữa
- justify: dãn đều chữ

Chú ý: Thuộc tính text-align chỉ áp dụng cho những phần tử HTML chứa dạng khối block như ***p div p h1 ...*** và tác động đến các phần tử bên trong nếu phần tử đó là dạng inline như ***span a img ...*** Cũng lưu ý nếu bên phần tử chứa có phần tử dạng block, phần tử này không có thuộc tính text-align riêng, thì nó sẽ kế thừa từ phần tử cha thuộc tính này.

### 10. Line-height
Sử dụng thuộc tính line-height để thiết lập chiều cao box từng dòng chữ, qua đó thiết lập khoảng cách giữa các dòng chữ (giãn dòng) trong CSS

Thuộc tính text-height thiết lập chiều cao của dòng chữ (hình hộp từng dòng chứa chữ).

Cú pháp:
```
    line-height: normal | number | length | percentage | inherit
```

Các giá trị text-height:

* normal: Giá trị khởi tạo tuỳ thuộc vào trình duyệt. Thường nó tương đương với giá trị số trong khoảng 1 - 1.2
* number: một giá trị số (như 1, 1.2, 2, 3 ...)
Chiều cao của dòng được xác định bằng số đó nhân với giá trị font-size.
```
    .my-height {
        font-size: 14px;    /* cỡ chữ 14px */
        line-height: 1.2;   /* chiều cao dòng = 1.2 * 14 = 16.8px */
    }
```

* length: một giá trị chiều dài (như 14px, 1.2em, 20rem ...)
Chiều cao của dòng được xác định bằng chính giá trị thiết lập, độc lập với font-size.

```.my-height {
        font-size: 14px;     /* cỡ chữ 14px */
        line-height: 150%;   /* chiều cao dòng = 150 * 14 / 100= 21px */
}
```
* percentage: một giá trị phần trăm (như 120%, 200% ...)
Chiều cao dòng chính là tính theo phần trăm của font-size.

```.my-height {
    line-height: 20px; /* chiều cao dòng là 20px, không phụ thuộc vào cỡ chữ của nó */
}
```
* inherit: Chiều cao dòng kế thừa từ phần tử cha.


### 11. Letter-spacing và word-spacing

letter-spacing là thuộc tính dùng để thiết lập khoảng cách giữa các ký tự (các chữ) trong từ. word-spacing thiết lập khoảng cách giữa các từ (word) hoặc giữa các phần tử HTML

***Khoảng cách các từ với thuộc tính word-spacing trong CSS***
Thuộc tính word-spacing thiết lập khoảng cách giữa các từ của văn bản text, hoặc giữa các phần tử HTML, nó nhận giá trị chiều dài hoặc normal.

Cú pháp:

```
word-spacing: normal | length | inherit
```

***Khoảng cách các chữ (ký tự) với thuộc tính letter-spacing***
Thuộc tính letter-spacing thiết lập khoảng cách giữa các ký tự trong từ (khoảng cách giữa các ký tự cạnh nhau)

Cú pháp:

```
letter-spacing: normal | length | inherit
```

### 12. white-space

Thuộc tính white-space để điều khiển cách hiện thị khoảng trắng (các ký tự space, xuống dòng, tab ...) trong một phần tử. Nó có thể nhận các giá trị như:

* **normal** : thiết lập về mặc định. Các khoảng trắng liên tục nếu có sẽ thu gọn về một khoảng trắng
* **nowrap** ứng xử giống normal, nhưng các dòng chữ (inline) không tự xuống dòng nếu vượt quá chiều rộng phần tử chứa.
* **pre** giữ nguyên các khoảng trắng liên tục, và chỉ xuống dòng khi gặp ký tự xuồng dòng \n hoặc phần tử br
* pre-line các khoảng trắng liên tục cũng thu gon về 1, văn bản tự xuống dòng khi vượt chiều rộng phần tử chứa
* **pre-wrap** khoảng trắng liên tục giữ nguyên. Tự xuống dòng khi vượt chiều rộng phần tử chứa.
* **inherit**: kế thừa thuộc tính white-space của phần tử cha.

