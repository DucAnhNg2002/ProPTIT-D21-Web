## I. Grid

Hệ thống Grid Layout của CSS cung cấp một hệ thống bố cục dạng lưới, với cột và hàng (Khá giống với col và row của Bootstrap) mà không còn cần sử dụng đến **float** hay **position**

Đầu tiên, cái chúng ta cần quan tâm nhất là nó có thể sử dụng ở gần như tất cả các trình duyệt hiện đại.

![example](https://images.viblo.asia/34ce8f5d-55f4-4bdc-9967-c35a2e398524.png)

**Thuộc tính display**

Một layout dạng lưới này phải có một element cha với display được set là **grid** hay **inline-grid**.

Khi dùng display: grid;, chúng ta sẽ được một container chứa grid dưới dạng block

<div style="display: grid;
  grid-template-columns: auto auto;
  background-color: #3e2723;
  padding: 10px;
  border-radius: 10px;" class="container">
    <div style="background-color: #80cbc4;
  border: 1px solid #fff;
  padding: 20px;
  font-size: 30px;
  text-align: center;" class="item">1</div>
      <div style="background-color: #80cbc4;
  border: 1px solid #fff;
  padding: 20px;
  font-size: 30px;
  text-align: center;" class="item">2</div>
      <div style="background-color: #80cbc4;
  border: 1px solid #fff;
  padding: 20px;
  font-size: 30px;
  text-align: center;" class="item">3</div>
      <div style="background-color: #80cbc4;
  border: 1px solid #fff;
  padding: 20px;
  font-size: 30px;
  text-align: center;" class="item">4</div>
  <div style="background-color: #80cbc4;
  border: 1px solid #fff;
  padding: 20px;
  font-size: 30px;
  text-align: center;" class="item">5</div>
      <div style="background-color: #80cbc4;
  border: 1px solid #fff;
  padding: 20px;
  font-size: 30px;
  text-align: center;" class="item">6</div>
</div>


**Đường lưới**

Các đường lưới là các đường kẻ ngang dọc (ẩn, không nhìn thấy) để tạo ra cấu trúc lưới gồm các ô lưới. Các đường lưới để định vị các phần tử con bên trong phần tử chứa. Các đường lưới có chỉ số bắt đầu bằng 1. Chỉ số cũng nhận giá trị âm, -1 tương đương đường lưới cuối cùng, -2 trước đường lưới cuối cùng ...

Để tạo lưới bạn có thể dùng hai thuộc tính: grid-template-columns thiết lập các cột và grid-template-rows thiết lập các dòng.

Ví dụ: 
```
    <style>
    .gridcontainer1 {
        display: grid;                              /* kích hoạt grid container              */
        grid-template-columns: 100px 120px 140px;   /* có ba cột với độ rộng theo tham số    */
        grid-template-rows:    50px  100px 50px;    /* có ba dòng với chiều cao theo tham số */
        
        background: #e91e633d;
    }
    .item1 {
        /* phần tử con từ đường lưới đứng 2 đến 4 (chiếm cột 2 đến 3) */
        grid-column-start: 2;
        grid-column-end: 4;
        /* phần tử con đường ngang 2 đến 3 (chiếm dòng 2) */
        grid-row-start: 2;
        grid-row-end: 3;
        
        background: #ff5722d1;
    }
</style>

<div class="gridcontainer1">
    <div class="item1"></div>
</div>
```
<style>
    .gridcontainer1 {
        display: grid;                              /* kích hoạt grid container              */
        grid-template-columns: 100px 120px 140px;   /* có ba cột với độ rộng theo tham số    */
        grid-template-rows:    50px  100px 50px;    /* có ba dòng với chiều cao theo tham số */
        
        background: #e91e633d;
    }
    .item1 {
        /* phần tử con từ đường lưới đứng 2 đến 4 (chiếm cột 2 đến 3) */
        grid-column-start: 2;
        grid-column-end: 4;
        /* phần tử con đường ngang 2 đến 3 (chiếm dòng 2) */
        grid-row-start: 2;
        grid-row-end: 3;
        
        background: #ff5722d1;
    }
</style>

<div class="gridcontainer1">
    <div class="item1"></div>
</div>

Kết quả là tạo ra được lưới gồm ba hàng, ba cột

Trong lưới Grid các đường lưới (cột và hàng) thể hiện chỉ số như hình dưới.

![example](https://xuanthulab.net/photo/screen-shot-2022-11-13-at-11-32-03-4518.png)

**Định vị phần tử trong lưới**

Bên trong lưới ở ví dụ trên có một phần tử được định vị ở vị trí với đoạn mã CSS.
```
    grid-column-start: 2;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 3;
```

Các thuộc tính grid-**column-start, grid-column-end, grid-row-start, grid-row-end** để định vị phần tử trong Grid, nó cũng thiết lập luôn kích thước phần tử.

**Vùng lưới: thuộc tính grid-template-areas và grid-area**

Một vùng lưới được tạo ra bởi một hoặc nhiều ô lưới, sao cho chúng tao ra một vùng ô chữ nhật liên tục trong lưới. Nếu có vùng lưới bạn có thể định vị phần tử nằm trong vùng lưới này. Để tạo ra vùng lưới sử dụng thuộc tính grid-template-areas và điền tên vùng lưới trong các chuỗi.

Nếu có vùng lưới, phần tử định vị trong lưới có thể thiết lập qua tên vùng với thuộc tính grid-area

```
<style>
    .gridarea-container {
        display: grid;  
        grid-template-columns: 100px 120px 140px; /* ba cột   */
        grid-template-rows:    50px  100px 50px;  /* ba hàng */
        grid-template-areas: "vung1 vung2 vung2"
                             "...   vung2 vung2"
                             "vung3 vung4 vung4"; 
/*
            Lưới trên có ba cột, ba hàng:
            - Các giá trị viết trong chuỗi grid-template-areas, mỗi chuỗi tương
              ứng cho mỗi hàng, trong chuỗi chứa tên vùng, viết như dưới thì:
            - vung1: chiếm ô thuộc dòng 1, cột 1
            - vung2: chiếm ô2 và ô ba dòng 1 và chiếm ô 2 và ô 3 của dòng 2
            - vung3: chiếm ô1 của dòng 3
            - vung4: chiếm ô 2 và 3 của dòng 3
            - Nếu môt ô nào đó không đưa vào vùng thì dùng ký hiệu ...
                                           
*/                             
        background: #e91e633d;
    }
    .item-vung1 {
        grid-area: vung1;
        background: rgba(54,196,87,0.82);
    }
    .item-vung2 {
        grid-area: vung2;
        background: #ff5722d1;
    }
    .item-vung3 {
        grid-area: vung3;
        background: rgba(255,34,192,0.82);
    }
    .item-vung4 {
        grid-area: vung4;
        background: rgba(34,163,255,0.82);
    }
 
</style>

<div class="gridarea-container">
    <div class="item-vung1">Vung1</div>
    <div class="item-vung4">Dung4</div>
    <div class="item-vung3">Dung3</div>
    <div class="item-vung2">Vung2</div>
</div>
```

<style>
    .gridarea-container {
        display: grid;  
        grid-template-columns: 100px 120px 140px; /* ba cột   */
        grid-template-rows:    50px  100px 50px;  /* ba hàng */
        grid-template-areas: "vung1 vung2 vung2"
                             "...   vung2 vung2"
                             "vung3 vung4 vung4"; 
/*
            Lưới trên có ba cột, ba hàng:
            - Các giá trị viết trong chuỗi grid-template-areas, mỗi chuỗi tương
              ứng cho mỗi hàng, trong chuỗi chứa tên vùng, viết như dưới thì:
            - vung1: chiếm ô thuộc dòng 1, cột 1
            - vung2: chiếm ô2 và ô ba dòng 1 và chiếm ô 2 và ô 3 của dòng 2
            - vung3: chiếm ô1 của dòng 3
            - vung4: chiếm ô 2 và 3 của dòng 3
            - Nếu môt ô nào đó không đưa vào vùng thì dùng ký hiệu ...
                                           
*/                             
        background: #e91e633d;
    }
    .item-vung1 {
        grid-area: vung1;
        background: rgba(54,196,87,0.82);
    }
    .item-vung2 {
        grid-area: vung2;
        background: #ff5722d1;
    }
    .item-vung3 {
        grid-area: vung3;
        background: rgba(255,34,192,0.82);
    }
    .item-vung4 {
        grid-area: vung4;
        background: rgba(34,163,255,0.82);
    }
 
</style>

<div class="gridarea-container">
    <div class="item-vung1">Vung1</div>
    <div class="item-vung4">Dung4</div>
    <div class="item-vung3">Dung3</div>
    <div class="item-vung2">Vung2</div>
</div>



**Làn lưới và ô lưới thuộc tính grid-row-gap, grid-column-gap**

Làn lưới (track) là khoảng không gian giữa hai đường lưới liên tục. Làn lưới chính là cột hoặc là hàng. Giữa các làn lưới nếu muốn có thể thiết lập khoảng cách giữa chúng bởi đường rãnh phân chia với thuộc tính *grid-row-gap* và *grid-column-gap*

Ô lưới là không gian giao nhau giữa hai làn lưới cột và hàng, nó hoàn toàn giống ô trong bảng.

```
    .gridcontainer2 {
        display: grid;                               
        grid-template-columns: 100px 120px 140px;   
        grid-template-rows:    50px  100px 50px; 
          
        /* khoảng cách giữa các làn (cột cách nhau 10px dòng 20px)*/  
        grid-row-gap: 20px; 
        grid-column-gap: 10px;
        
        background: #e91e633d;
    }
    .item2 {
        grid-column-start: 1;
        grid-column-end: 2;        
        grid-row-start: 2;
        grid-row-end: 3;
        
        background: #ff5722d1;
    }
    .item3 {
        grid-column-start: 2;
        grid-column-end: 3;        
        grid-row-start: 2;
        grid-row-end: 3;
        
        background: #ff5722d1;
    }
    .item4 {
        grid-column-start: 2;
        grid-column-end: 3;        
        grid-row-start: 3;
        grid-row-end: 4;
        
        background: #ff5722d1;
    }
</style>

<div class="gridcontainer2">
    <div class="item2"></div>
    <div class="item3"></div>
    <div class="item4"></div>
</div>

```
<style>
    .gridcontainer2 {
        display: grid;                               
        grid-template-columns: 100px 120px 140px;   
        grid-template-rows:    50px  100px 50px; 
          
        /* khoảng cách giữa các làn (cột cách nhau 10px dòng 20px)*/  
        grid-row-gap: 20px; 
        grid-column-gap: 10px;
        
        background: #e91e633d;
    }
    .item2 {
        grid-column-start: 1;
        grid-column-end: 2;        
        grid-row-start: 2;
        grid-row-end: 3;
        
        background: #ff5722d1;
    }
    .item3 {
        grid-column-start: 2;
        grid-column-end: 3;        
        grid-row-start: 2;
        grid-row-end: 3;
        
        background: #ff5722d1;
    }
    .item4 {
        grid-column-start: 2;
        grid-column-end: 3;        
        grid-row-start: 3;
        grid-row-end: 4;
        
        background: #ff5722d1;
    }
</style>

<div class="gridcontainer2">
    <div class="item2"></div>
    <div class="item3"></div>
    <div class="item4"></div>
</div>


## II. Flexbox

**Thiết lập phần tử chứa - kích hoạt flex**

Để sử dụng flexbox cần có một phần tử chính thiết lập là phần tử chứa, sau đó là các phần tử con bên trong phần tử chứa. Muốn kích hoạt phần tử chứa có tính năng flexbox chỉ cần thiết lập cho nó thuộc tính **display: flex;** hoặc **display: inline-flex;**. Ví dụ ở dưới thiết lập lớp .containerflex có kích hoạt flexbox, sau đó triển khai HTML áp dụng nó

Khi phần tử đã kích hoạt flexbox thì điều khiển các phần tử con bằng các thuộc tính: `flex-direction` `flex-wrap` `justify-content` `align-items` `align-content`

```
<style>
.containerflex {
    display: flex;                  /* Kích hoạt flexbox cho phần tử chứa */

    flex-direction: row;            /* Thiết lập hướng chính */
    flex-wrap: nowrap;              /* Thiết lập chế độ wrap, khi các phần tử vượt qua kích thước hướng chính*/
    justify-content: flex-end;      /* Căn chỉnh nội dung bên trong container có flexbox*/
    align-items: stretch;           /* Căn chỉnh phần tử con theo hướng vuông góc hướng chính*/
    align-content: stretch;         /* Căn chỉnh hàng (cột) theo hướng vuông góc (chỉ hiệu lực khi nhiều hàng hoặc cột)*/

    padding:    5px;
    background: #9C27B0;
    min-width:  320px;
    min-height: 320px;
    margin:     auto;
}

.flexitem {
    padding: 20px;
    background: lightblue;
    margin: 1px;
    font-weight: bold;
}
<div class="containerflex">
    <div class="flexitem">1</div>
    <div class="flexitem">2</div>
    <div class="flexitem">3</div>
    <div class="flexitem">4</div>
    <div class="flexitem">5</div>
    <div class="flexitem">6</div>
</div>
```

<style>
.containerflex {
    display: flex;                  /* Kích hoạt flexbox cho phần tử chứa */

    flex-direction: row;            /* Thiết lập hướng chính */
    flex-wrap: nowrap;              /* Thiết lập chế độ wrap, khi các phần tử vượt qua kích thước hướng chính*/
    justify-content: flex-end;      /* Căn chỉnh nội dung bên trong container có flexbox*/
    align-items: stretch;           /* Căn chỉnh phần tử con theo hướng vuông góc hướng chính*/
    align-content: stretch;         /* Căn chỉnh hàng (cột) theo hướng vuông góc (chỉ hiệu lực khi nhiều hàng hoặc cột)*/

    padding:    5px;
    background: #9C27B0;
    min-width:  320px;
    min-height: 320px;
    margin:     auto;
}

.flexitem {
    padding: 20px;
    background: lightblue;
    margin: 1px;
    font-weight: bold;
}

</style>
<div class="containerflex">
    <div class="flexitem">1</div>
    <div class="flexitem">2</div>
    <div class="flexitem">3</div>
    <div class="flexitem">4</div>
    <div class="flexitem">5</div>
    <div class="flexitem">6</div>
</div>


**Thuộc tính flex-direction**

Khi kích hoạt flex cho một phần tử, thì các phần tử con chứa trong nó sẽ được bố trí liên tục theo một hướng được gọi là hướng chính. Hướng chính được thiết lập bằng thuộc tính flex-direction - khi đã có hướng chính thì hướng thứ hai sử dụng đến là hướng vuông góc với hướng chính (từ sau gọi là hướng vuông góc), flex-direction nó nhận các giá trị:

- **row (mặc định) :** Hướng chính nằm ngang, phần tử sắp xếp từ trái qua phải
- **row-reverse:** Hướng chính nằm ngang, phần tử sắp xếp từ phải qua trái
- **column:** Hướng chính thẳng đứng, phần tử xếp từ trên xuống
- **column-reverse:** Hướng chính thẳng đứng, phần tử xếp từ dưới lên

**Thuộc tính flex-wrap**
Nó nhận các giá trị
- **nowrap (mặc định):** Các phần tử cứ xếp theo hướng chính, kể cả vượt ngoài khung container
- **wrap:** Các phần tử xếp theo hướng chính, nếu vượt qua kích thước khung chứa theo hướng chính sẽ ngắt tạo ra luồng xếp tiếp theo (hàng tiếp theo hoặc cột tiếp theo tùy thuộc đang là hướng chính nào).
- **wrap-reverse:** Tương tự wrap nhưng hàng (cột) cữ bị đẩy xuống để tạo hàng mới


**Thuộc tính justify-content**

Nó nhận các giá trị để đẩy các phần tử trôi về phía nào đó của hướng chính

- **flex-start (mặc định):** đẩy các phần tử con trôi về khu vực bắt đầu hướng chính
- **flex-end:** đẩy các phần tử về khu vực cuối hướng chính
- **center:** đẩy các phần tử vào giữa hướng chính
- **space-around:** không gian thừa theo hướng chính chia đều cho khoảng cách các phần tử
- **space-between:** không gian thừa theo hướng chính chia đều cho khoảng cách các phần tử (phần tử đầu và cuối sát mép khung)


**Thuộc tính align-content**

Nó điều chỉnh vị trí các hàng (các cột) trong khung, nó nhận các giá trị như stretch, center, flex-end ...

Chỉ có hiệu lực khi có nhiều hàng hoặc nhiều cột

**Thuộc tính align-items**

Nó nhận các giá trị để điều khiển phần tử con theo hướng vuông góc hướng chính

```
    align-items: flex-start | flex-end | center | baseline | stretch
```
- **stretch (mặc định)** : phần tử con mở rộng kích thước tối đa (bằng với chiều cao hàng hoặc chiều rộng cột) của phần tử theo hướng vuông góc hướng chính
- **baseline** các phần tử con bám theo đường baseline của hàng (cột)
- **center** phần tử đẩy vào giữa hàng (cột)
- **space-around** không gian thừa theo hướng chính chia đều cho khoảng cách các phần tử
- **space-between** không gian thừa theo hướng chính chia đều cho khoảng cách các phần tử (phần tử đầu và cuối sát mép khung)

**Thiết lập các phần tử con**

Tính năng liên quan đến flex ngoài thiết lập với các thuộc tính từ phần tử chứa (cha - container), còn có thể thiết lập trực tiếp đến từng phần tử con, xem xét các thuộc tính

- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self

**Thuộc tính flex-grow**

flex-grow gán các giá trị bằng số, nó cho biết phần tử này chiếm bao nhiêu phần trong không gian còn lại (trừ đi phần đã chiếm bởi các phần tử có flex-grow bằng 0) khung chứa theo hướng chính.

```
    <div class="exam-container" id="flex-grow">
                <div class="exam-element flex-grow-ele1" style="flex-grow: 1">1</div>
                <div class="exam-element flex-grow-ele2" style="flex-grow: 2">2</div>
                <div class="exam-element flex-grow-ele3" style="flex-grow: 3">3</div>
            </div>
```
<style>
    .exam-container {
    display: flex;
    background: #ab7bb0;
    padding: 4px;
}
.exam-element {
    background-color: orangered;
    margin: 1px;
    color: white;
    min-height: 40px;
    justify-content:center;
    display: flex;
    align-items: center;

}
</style>
<div class="exam-container" id="flex-grow">
                <div class="exam-element flex-grow-ele1" style="flex-grow: 1">1</div>
                <div class="exam-element flex-grow-ele2" style="flex-grow: 2">2</div>
                <div class="exam-element flex-grow-ele3" style="flex-grow: 3">3</div>
            </div>



**Thuộc tính flex-shrink**

Thuộc tính flex-shrink nhận giá trị là số, cho biết phần tử có thể co lại bao nhiêu phần khi cần thiết

**Thuộc tính flex-basis**

Thuộc tính gán chiều dài khởi tạo cho phần tử trong hệ thống flex, ví dụ flex-basis:100px

**Thuộc tính flex**

Thuộc tính này là cách viết tổng hợp cả ba thuộc tính flex-grow, flex-shrink, flex-basic trên một dòng

Ví dụ: flex: 1 0 100px


## III. Media query

Trong phần này chủ yếu nói về quy tắc @media trong CSS, tuy nhiên cũng đề cập các vấn đề cơ bản về thiết kế trang đảm bảo responsive bằng CSS. Một trang web thiết kế mà đảm bảo tính chất responsive (dựa trên HTML, CSS hoặc Javascript) có nghĩa là trang đó đó được thiết kế để hiện thị tốt trên tất cả các loại kích thước màn hình và độ phân giải (từ điện thoại, máy tính bảng, destop, máy in, tv)


**Hãy dùng thẻ meta viewport**

Khung nhìn - viewport của browser là phần diện tích của sổ tại đó nội dung trang web được hiện thị. Rất nhiều trường hợp khung nhìn trình duyệt và kích thước nội dung của trang là không giống nhau, khi đó sẽ xuất hiện thanh cuộn để bạn cuộn nội dung.

Trên các trang của bạn nên có thẻ meta với nội dung sau:

```
    <meta name="viewport" content="width=device-width,initial-scale=1" />

```

Thiết lập width=device-width cho trình duyệt biết (đặc biệt là trình duyệt trên điện thoại) khung nhìn hiện thị trang bằng kích thước màn hình (không xuất hiện thanh cuộn đứng). initial-scale=1 tỉ lệ thu phóng (đơn vị pixel) của trang khi mới tải hoặc khi xoay màn hình, với giá trị bàng 1 nghĩa là thu phóng 100% - màn hình xoay ngang dọc đều cùng tỉ lệ thu phóng.

**Quy tắc @media**

Quy tắc @media cho phép bạn viết một tập hợp các quy tắc CSS nó chỉ có hiệu lực tùy thuộc vào thông số cụ thể của cửa sổ, màn hình ...

Cú pháp:

```
    @media media-types [and media-query-conditions]? {
    /* các đoạn mã CSS */
}
```

**media query**

Trong quy tắc @media còn có thể chứa các truy vấn media, là các thông số cụ thể hơn về khung nhìn, màn hình ... các kiểu media (media type) hay các truy vấn media (media query) có thể kết hợp với nhau bởi các toán tử ký hiệu: và and, hoặc or, phủ định not

Dưới đây là một một số loại query media

**Chiều rộng width** của khung nhìn với vấn **width, min-width và max-width**

* min-width: leng; chiều rộng tối thiểu của cửa sổ
* max-width: leng; chiều rộng tối đa

```
    @media (min-width: 1200px) {
  /* các CSS hiệu lực khi màn hình từ 1200px trở đi*/
}

@mdia print and (min-width: 25cm)
{
    /* các CSS hiệu lực khi in ấn, và chiều rộng thiết bị từ 25cm trở lên */
}

@media screen and (min-width: 400px) and (max-width: 700px)
{
    /* Các CSS khi màn hình từ 400px đến 700px */
}
```
Chiều cao khung nhìn với vấn **height, min-height và max-height** các dùng tương tự như chiều rộng.

Chiều rộng của thiết bị với các truy vấn **device-width, min-device-width và max-device-width**

```
    @media screen and (device-width: 800px)
    {
    /* các CSS hiệu lực khi là màn hình, màn có chiều rộng 800px */
    }
```

## IV. Break point

Điểm ngắt CSS (CSS breakpoint) là điểm mà tại đó nội dung của website phản hồi theo chiều rộng thiết bị (device width), cho phép bạn hiển thị bố cục (layout) tốt nhất có thể cho người dùng.

Điểm ngắt CSS (CSS breakpoint) còn được gọi là media query breakpoint vì chúng được sử dụng với media query.

Ví dụ với thiết bị kích thước lớn như máy tính ta sẽ hiện thị layout với hai cột nhưng với thiết bị có kích thước nhỏ ta sẽ hiện thị layout với một cột. Điểm mà tại đó ta thay đổi layout hai cột và một cột được gọi là điểm ngắt CSS (CSS breakpoint).

Có hai cách tiếp cận để thiết lập điểm ngắt CSS (CSS breakpoint):

- Điểm ngắt dựa trên thiết bị.
- Điểm ngắt dựa trên nội dung.
Dưới đây là một ví dụ về các điểm ngắt dành riêng cho thiết bị:

```
/* Portrait */

@media only screen

and (min-device-width: 375px)

and (max-device-width: 667px)

and (-webkit-min-device-pixel-ratio: 2)

and (orientation: portrait) {

}

/* Landscape */

@media only screen

and (min-device-width: 375px)

and (max-device-width: 667px)

and (-webkit-min-device-pixel-ratio: 2)

and (orientation: landscape) {

}

/* ----------- Google Pixel ----------- */

/* Portrait */

@media screen

and (device-width: 360px)

and (device-height: 640px)

and (-webkit-device-pixel-ratio: 3)

and (orientation: portrait) {

}

/* Landscape */

@media screen

and (device-width: 360px)

and (device-height: 640px)

and (-webkit-device-pixel-ratio: 3)

and (orientation: landscape) {

}
```

Tùy chọn lý tưởng để quyết định điểm ngắt là dựa trên nội dung trang web của bạn. Phương pháp này cho phép bạn chỉ cần thêm các điểm ngắt mà nội dung của bạn cần điều chỉnh bố cục. Điều này sẽ làm cho media query của bạn đơn giản và dễ quản lý hơn rất nhiều. Điểm ngắt bên dưới có nghĩa là CSS sẽ áp dụng khi chiều rộng thiết bị từ 768px trở lên.
```
@media only screen (min-width: 768px){

...

}
```

## V. Viewport

![example](https://hocban.vn/wp-content/uploads/2019/11/Viewport-la-gi-va-minh-hoa-giua-viec-co-va-khong-su-dung-Viewport-meta-tag.jpg)

**Viewport là gì ?**

Viewport là khu vực mà người dùng có thể dòm thấy nội dung của trang web. Có thể tạm dịch là KHUNG NHÌN.

Viewport sẽ khác nhau với các thiết bị khác nhau, Viewport của điện thoại sẽ nhỏ hơn kha khá nhiều so với của Desktop, TV,…

**Cách thiết lập Viewport trong Responsive Web Design**

HTML5 giới thiệu một phương pháp để cho phép các nhà thiết kế web kiểm soát viewport, thông qua thẻ **< meta>**. Bạn có thể thiết lập meta viewport bằng cách đặt vào trong cặp thẻ **< head>** như sau:

```
    <meta name="viewport" content="width=device-width, initial-scale=1">
```
- Thẻ **< meta>** viewport thiết lập cho trang web hiển thị tương ứng với kích thước của từng thiết bị khác nhau.
- Thuộc tính width=device-width đặt chiều rộng của trang web theo chiều rộng màn hình của thiết bị.
- Thuộc tính initial-scale=1.0 thiết lập mức độ phóng ban đầu khi trang được trình duyệt tải lần đầu tiên, người dùng sẽ không thể zoom khi thuộc tính này có giá trị bằng 1.

Lưu ý: Bạn cần phải thiết lập Viewport trong Responsive Web Design vì nếu không làm nó sẽ như cái ảnh minh họa cở đầu bài đấy nhé !

**Một số quy tắc bổ sung cần tuân thủ với kích thước nội dung Viewport**

Nội dung web phải luôn nằm trong giới hạn kích thước của chiều ngang màn hình, người dùng chỉ cần cuộn dọc từ trên xuống để xem được hết nội dung của trang web dễ dàng. Vì vây, nếu để người dùng phải cuộn ngang hoặc zoom trang web mới xem được toàn bộ nội dung sẽ dẫn đến trải nghiệm người dùng kém.

1. **Không sử dụng các HTML element có chiều rộng cố định quá lớn** – Ví dụ: Một hình ảnh có chiều rộng quá lớn so với chiều rộng của các thiết bị nhỏ thì khi hiển thị trên các thiết bị này hình ảnh sẽ bị tràn ra ngoài và cần phải cuộn ngang để xem được toàn bộ ảnh. Vì vậy, cần phải điều chỉnh hỉnh ảnh sao cho phù hợp với chiều rộng của từng thiết bị.
2. **KHÔNG để thiết lập Responsive dựa vào chiều rộng cụ thể mà thay vào đó là từ kích thước nào đến kích thước nào nó sẽ hiển thị giống nhau**. Ví dụ từ 240px lên 420px sẽ hiển thị giống nhau, lên trên 420px đến 720px nó giống nhau chẳng hạn.


**Sử dụng các giá trị chiều rộng tương đối** cho đối tượng trong một số trường hợp nhằm tránh bị tràn ra khi xem trên màn hình nhỏ mà lại quá bé khi xem trên màn hình lớn. Thường thì ta có thế thiết lập độ rộng auto hoặc giá trị là 100% .

## VI. GridView

Grid-View là gì ? Nhiều trang web dựa trên chế độ xem dạng lưới, có nghĩa là trang được chia thành các cột: Sử dụng chế độ xem dạng lưới rất hữu ích khi thiết kế trang web. Nó làm cho việc đặt các phần tử trên trang dễ dàng hơn. Xây dựng Responsive Grid-View Hãy bắt đầu xây dựng chế độ xem lưới đáp ứng. Trước tiên, hãy đảm bảo rằng tất cả các thành phần HTML đều có thuộc tính box-sizing được đặt thành border-box. Điều này đảm bảo rằng phần đệm và đường viền được bao gồm trong tổng chiều rộng và chiều cao của các phần tử. Thêm đoạn mã sau vào CSS của bạn:

```c
* {
  box-sizing: border-box;
}
```
Ví dụ sau đây cho thấy một trang web đáp ứng đơn giản, với hai cột

```
<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      * {
        box-sizing: border-box;
      }

      .header {
        border: 1px solid red;
        padding: 15px;
      }

      .menu {
        width: 25%;
        float: left;
        padding: 15px;
        border: 1px solid red;
      }

      .main {
        width: 75%;
        float: left;
        padding: 15px;
        border: 1px solid red;
      }
    </style>
  </head>
  <body>

    <div class="header">
      <h1>Chania</h1>
    </div>

    <div class="menu">
      <ul>
        <li>The Flight</li>
        <li>The City</li>
        <li>The Island</li>
        <li>The Food</li>
      </ul>
    </div>

    <div class="main">
      <h1>The City</h1>
      <p>Chania is the capital of the Chania region on the island of Crete. The city can be divided in two parts, the old town and the modern city.</p>
      <p>Resize the browser window to see how the content respond to the resizing.</p>
    </div>

  </body>
</html>
```

## VII.  Flexible Media

Cuối cùng nhưng không kém phần quan trọng chính là flexible media. Khi mà viewport thay đổi kích thước thì các đa phương tiện (ảnh, video,..) cũng cần có khả năng thay đổi sao cho phù hợp. Một cách thông dụng là set width là 100% cùng với height: auto. Khi đó ảnh hoặc video sẽ thay đổi chiều rộng và chiều cao sao cho phù hợp với độ dãn của màn hình.
```
img {
  width: 100%;
  height: auto;
}
```

Nếu muốn ảnh hoặc video thay đổi theo viewport nhưng không quá kích thước gốc của nó ta có thể sử dụng thuộc tính max-width:

```
img {
  max-width: 100%;
  height: auto;
}
```

## VII. SASS

Sass là viết tắt của Syntactally Awesome Stylesheet Sass là một phần mở rộng của CSS Sass là một bộ tiền xử lý CSS Sass hoàn toàn tương thích với tất cả các phiên bản CSS Sass giảm sự lặp lại của CSS và do đó tiết kiệm thời gian Sass được thiết kế bởi Hampton Catlin và được phát triển bởi Natalie Weizenbaum vào năm 2006

### 1. Sass Variables


Biến là một cách để lưu trữ thông tin mà bạn có thể sử dụng lại sau này. Với Sass, bạn có thể lưu trữ thông tin trong các biến, như:

- strings
- numbers
- colors
- booleans
- lists
- nulls

Sass sử dụng ký hiệu $, theo sau là tên, để khai báo các biến: **Sass Variable Syntax**:

```
$variablename: value;
```

VD:
```
$myFont: Helvetica, sans-serif;
$myColor: red;
$myFontSize: 18px;
$myWidth: 680px;

body {
  font-family: $myFont;
  font-size: $myFontSize;
  color: $myColor;
}

#container {
  width: $myWidth;
}                  
```
Vì vậy, khi tệp Sass được dịch mã, nó sẽ lấy các biến (myFont, myColor, v.v.) và xuất CSS bình thường với các giá trị biến được đặt trong CSS

Phạm vi biến Sass Các biến Sass chỉ khả dụng ở cấp độ lồng nhau nơi chúng được xác định. Nhìn vào ví dụ sau:
```
$myColor: red;

h1 {
  $myColor: green;
  color: $myColor;
}

p {
  color: $myColor;
}    
```

Vì vậy, đầu ra CSS sẽ là:
```
h1 {
  color: green;
}

p {
  color: red;
}
```

### 2. Sass Nesting
Sass cho phép bạn lồng các bộ chọn CSS theo cách tương tự như HTML. Xem ví dụ về một số mã Sass cho điều hướng của trang web

```
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
Lưu ý rằng trong Sass, bộ chọn ul, li và a được lồng bên trong bộ chọn điều hướng. Trong CSS, các quy tắc được xác định từng cái một (không lồng nhau):
```
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
nav li {
  display: inline-block;
}
nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```


Vì bạn có thể lồng các thuộc tính trong Sass, nên nó sạch hơn và dễ đọc hơn CSS tiêu chuẩn. Sass Nested Properties Nhiều thuộc tính CSS có cùng một tiền tố, như họ phông chữ, cỡ chữ và trọng lượng phông chữ hoặc căn chỉnh văn bản, chuyển đổi văn bản và tràn văn bản. Với Sass, bạn có thể viết chúng dưới dạng các thuộc tính lồng nhau:
```
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
Trình biên dịch Sass sẽ chuyển đổi phần trên thành CSS bình thường:
```
font-family: Helvetica, sans-serif;
font-size: 18px;
font-weight: bold;

text-align: center;
text-transform: lowercase;
text-overflow: hidden;
```

### 3. Sass @import and Partials
a. **Sass Importing Files** Cũng giống như CSS, Sass cũng hỗ trợ chỉ thị @import. Chỉ thị @import cho phép bạn đưa nội dung của tệp này vào tệp khác. Chỉ thị CSS @import có một nhược điểm lớn do các vấn đề về hiệu năng; nó tạo thêm một yêu cầu HTTP mỗi khi bạn gọi nó. Tuy nhiên, chỉ thị Sass @import bao gồm tệp trong CSS; vì vậy không cần thêm cuộc gọi HTTP nào trong thời gian chạy! Sass Import Syntax:

```
@import filename;
```

Mẹo: Bạn không cần chỉ định phần mở rộng tệp, Sass sẽ tự động giả định rằng bạn muốn nói đến tệp .sass hoặc .scss. Bạn cũng có thể nhập tệp CSS. Chỉ thị @import nhập tệp và mọi biến hoặc mixin được xác định trong tệp đã nhập sau đó có thể được sử dụng trong tệp chính. Bạn có thể nhập bao nhiêu tệp tùy thích vào tệp chính: SCSS Syntax (reset.scss):

```
@import "variables";
@import "colors";
@import "reset";
```

Hãy xem một ví dụ: Giả sử chúng ta có một tệp đặt lại tên là "reset.scss", trông giống như sau: SCSS Syntax (reset.scss):

```
html,
body,
ul,
ol {
  margin: 0;
  padding: 0;
}
```

và bây giờ chúng tôi muốn nhập tệp "reset.scss" vào một tệp khác có tên "standard.scss". Đây là cách chúng tôi thực hiện: Việc thêm chỉ thị @import ở đầu tệp là điều bình thường; theo cách này, nội dung của nó sẽ có phạm vi toàn cầu: SCSS Syntax (standard.scss):
```
@import "reset";

body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: red;
}
```
Vì vậy, khi tệp "chuẩn.css" được dịch mã, CSS sẽ trông như thế này:

```
html, body, ul, ol {
  margin: 0;
  padding: 0;
}

body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: red;
}
```

b. **Sass Partials Theo mặc định**, Sass phiên mã trực tiếp tất cả các tệp .scss. Tuy nhiên, khi bạn muốn nhập một tệp, bạn không cần phải phiên mã tệp trực tiếp. Sass có một cơ chế cho việc này: Nếu bạn bắt đầu tên tệp bằng dấu gạch dưới, Sass sẽ không phiên mã nó. Các tệp được đặt tên theo cách này được gọi là partials trong Sass. Vì vậy, một phần tệp Sass được đặt tên với dấu gạch dưới hàng đầu: Sass Partial Syntax:

`_filename;`

Ví dụ sau hiển thị một phần tệp Sass có tên "_colors.scss". (Tệp này sẽ không được dịch trực tiếp sang "colors.css"): Ví dụ: "_colors.scss":

```
$myPink: #EE82EE;
$myBlue: #4169E1;
$myGreen: #8FBC8F;
```
Bây giờ, nếu bạn nhập tệp một phần, hãy bỏ qua dấu gạch dưới. Sass hiểu rằng nó nên nhập tệp "_colors.scss":

```
@import "colors";
```

```
body {
  font-family: Helvetica, sans-serif;
  font-size: 18px;
  color: $myBlue;
}
```
### 4. Sass @mixin and @include
a. **Sass Mixins Lệnh @mixin** cho phép bạn tạo mã CSS để sử dụng lại trên toàn bộ trang web. Chỉ thị @include được tạo để cho phép bạn sử dụng (bao gồm) mixin.
 **Định nghĩa Mixin** Một mixin được xác định bằng chỉ thị @mixin. Sass @mixin Syntax:

```
@mixin name { property: value; property: value; ... }
```

Ví dụ sau tạo một mixin có tên là "văn bản quan trọng":
```
@mixin important-text {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}
```
Mẹo: Mẹo về dấu gạch nối và dấu gạch dưới trong Sass: Dấu gạch nối và dấu gạch dưới được coi là giống nhau. Điều này có nghĩa là @mixin important-text { } và @mixin important_text { } được coi là cùng một mixin! Using a Mixin Chỉ thị @include được sử dụng để bao gồm một mixin.

`selector {
  @include mixin-name;
}`

Vì vậy, để bao gồm mixin văn bản quan trọng được tạo ở trên:

```
.danger {
  @include important-text;
  background-color: green;
}
```
Trình biên dịch Sass sẽ chuyển đổi phần trên thành CSS bình thường:

```
.danger {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
  background-color: green;
}
```
Một mixin cũng có thể bao gồm các mixin khác:

```
@mixin special-text {
  @include important-text;
  @include link;
  @include special-border;
}
```
Truyền biến cho Mixin Mixins chấp nhận đối số. Bằng cách này, bạn có thể chuyển các biến vào một mixin. Đây là cách xác định một mixin với các đối số: Ví dụ;

```
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
Kết quả:

```
.myArticle {
  border: 1px solid blue;
}

.myNotes {
  border: 2px solid red;
}  
```
Giá trị mặc định cho **Mixin** Cũng có thể xác định các giá trị mặc định cho các biến mixin: **SCSS Syntax:**

``@mixin bordered($color: blue, $width: 1px) { border: $width solid $color; } Sau đó, bạn chỉ cần chỉ định các giá trị thay đổi khi bạn bao gồm mixin:``

```
.myTips {
  @include bordered($color: orange);
}
```
Sử dụng Mixin cho tiền tố nhà cung cấp Một cách sử dụng tốt khác của mixin là dành cho các tiền tố của nhà cung cấp. Đây là một ví dụ cho chuyển đổi:

```
@mixin transform($property) {
  -webkit-transform: $property;
  -ms-transform: $property;
  transform: $property;
}

.myBox {
  @include transform(rotate(20deg));
}
```
Sau khi biên dịch, CSS sẽ trông như thế này:

```
.myBox {
  -webkit-transform: rotate(20deg);
  -ms-transform: rotate(20deg);
  transform: rotate(20deg);
}
```

### 5. Sass @extend and Inheritance
Chỉ thị @extend cho phép bạn chia sẻ một tập hợp các thuộc tính CSS từ bộ chọn này sang bộ chọn khác.

Chỉ thị @extend rất hữu ích nếu bạn có các phần tử được tạo kiểu gần như giống hệt nhau chỉ khác nhau ở một số chi tiết nhỏ.

Ví dụ Sass sau trước tiên tạo một kiểu cơ bản cho các nút (kiểu này sẽ được sử dụng cho hầu hết các nút). Sau đó, chúng tôi tạo một kiểu cho nút "Báo cáo" và một kiểu cho nút "Gửi". Cả nút "Báo cáo" và "Gửi" đều kế thừa tất cả các thuộc tính CSS từ lớp .button-basic, thông qua chỉ thị @extend. Ngoài ra, chúng có màu sắc riêng được xác định:
```
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
Sau khi biên dịch, CSS sẽ trông như thế này:

```
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