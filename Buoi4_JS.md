## JavaScript Day 1

### I. Khai báo dữ liệu

#### 1. Cấu trúc trong JavaScript

**Viết mã JavaScript đầu tiên**

*Cách 1:* Nhúng JS trong HTML Cách thứ nhất là mã JavaScript được viết nhúng trong văn bản HTML với thẻ < script>

Thẻ < script> này có thể đặt bên trong thẻ < head> hoặc < body> của văn bản HTML
```
<html>
    <head>    
        <script >
             <!--Chỗ này viết code JavaScript-->
        </script>
    </head>
    
    <body>
        <script>
            <!--Chỗ này cũng viết được code JavaScript-->
        </script>
    </body>
</html>
```

Ví dụ: 

```
<html>
   <head> </head>
   <body>
     <script>
       alert("Đây là một thông báo!"); //hàm alert() để hiện thị một hộp thoại (popup) thông báo
     </script>
   </body>
</html> 
```

*Cách 2:* Tải JS từ file Mã JavaScript có thể không cần viết trực tiếp cùng với file văn bản HTML. 
Các mã này được viết trong một file, thường file này có đặt tên với phần mở rộng là .js sau đó tải vào HTML bằng thẻ < script> với cú pháp:
```
<script src="địa-chỉ-file-js"></script>
```

Ví dụ mã JavaScript viết trong file demo.js sau đó file đó được nhúng vào HTML bằng thẻ < script> và vị trí file chỉ ra trong thuộc tính src

***-> Chú ý ở file demo.js không có thẻ script***

Sau đó bạn muốn mã JS trong file đó chạy ở đâu trong HTML thì nhúng file JS vào đó bằn thẻ script:

```
<html>
   <head>
     <title> </title>
     <script src="demo.js"></script>
   </head>
   <body>
   </body>
</html>
```

Mã tải file ngoài trên bạn có thể đặt trong head hoặc body, bạn đặt ở vị trí nào mà mã JavaScript được chạy.

**Sử dụng cách tải JavaScript từ file ngoài có một số lợi ích**

* Phân chia độc lập giữa mã HTML và JavaScript để dễ đọc hơn
* Giúp cho mã HTML và JavaSript dễ bảo trì hơn
* Giúp trình duyệt cached file JavaScript để tăng tốc trang.

#### 2. Biến trong JavaScript

Biến dùng để lưu trữ giá trị các dữ liệu, hay các đối tượng. Giá trị của biến có thể được thay đổi, cập nhật trong quá trình ứng dụng hoạt động. Mục này trình bày các vấn đề về biến như tên biến, khai báo và khởi tạo biến ...

**Quy tắc đặt tên biến trong javascript**

Tên biến do bạn đặt và khai báo, tên biến cần đảm bảo quy tắc sau:

* Tên biến được tạo ra bởi các ký tự chữ, số, _ và $
* Tên không được phép bắt đầu bằng số (chỉ bắt đầu bằng ký tự chữ hoặc $ hoặc _)
* Không được chứa các ký hiệu đặc biệt như ký hiệu toán học, logic (như +, -, *, >, < ...)
* Không được chứa khoảng trắng
* Không được đặt tên biến trùng với các từ khóa dành riêng cho ngôn ngữ Javascript liệt kê ở dưới

```abstract    else    instanceof  super
boolean     enum    int         switch
break       export  interface   synchronized
byte        extends let         this
case        false   long        throw
catch       final   native      throws
char        finally new         transient
class       float   null        true
const       for     package     try
continue    function private    typeof
debugger    goto    protected   var
default     if      public      void
delete      implements return   volatile
do          import  short       while
double      in      static      with
```

**-> JavaScript có phân biệt chữ hoa chữ thường nên biến tên x và X là khác nhau.**


**Khai báo và khởi tạo biến**

Có ba từ khóa bạn sẽ tìm hiểu khi khai báo biến javascript là: var, let và const. Từ khóa var và let sau khi khai báo bạn có thể khởi tạo giá trị ngay (thực hiện ngay phép toán gán =) hoặc trước khi sử dụng thực hiện gán (=) giá trị. Từ khóa const thì biến đó bắt buộc phải khởi tạo giá trị ngay sau khai báo và không thay đổi được (hằng số). Ví dụ khai báo và khởi tạo giá trị cho biến trong Javascript:

```
var varName1 = 10;    // khai báo và khởi tạo biến với từ khóa var

let varName2;         // khai báo và không khởi tạo giá trị ban đầu
varName2 = 10;        // gán giá trị

const varName3 = 10;  // khai báo và khởi tạo biến với từ khóa const
```

**a. Tính chất khai báo biến với var**

Khai báo biến với var áp dụng được cho biến toàn cục và cục bộ. Khi khai báo ngoài thân hàm nó là biến toàn cục (có thể truy cập bởi bất kỳ hàm nào), khi khai báo trong hàm nó chỉ có hiệu lực trong hàm đó (chú ý là nó không khóa phạm vi trong một khối nào đó của hàm - khai báo trong khối này vẫn có hiệu lực ở khối khác). Nếu biến không khởi tạo giá trị ngay thì mặc định nó tự động nhật giá trị undefined

```
// Khai báo biến với var bên ngoài hàm -> phạm vi toàn cục
var sopi = 3.14;

function dientich_hinhtron(radius) {
    // truy cập biến toàn cục (sopi) khai báo với var
    console.log(sopi*radius*radius);

    if (true)
    {
        // Biến khai báo trong một khối { ... } không bị
        // khóa truy cập trong khối đó
        var thongbao = ' (diện tích hình tròn)';
    }

    // Truy cập biến khai báo trong một khối
    console.log(thongbao);
}

dientich_hinhtron(5);
```
Ví dụ lỗi khi truy cập biến cục bộ

```
function xinchao() {
    // Biến loichao khai báo trong thân hàm, nó là biến cục bộ
    var loichao = "Xin chao cac ban";
    console.log(loichao);
}

xinchao();

// Truy cập biến cục bộ ngoài thân hàm dẫn tới lỗi
console.log(loichao);
```

Khai báo bằng var thì biến đó có thể khai báo lại, nếu có khởi tạo giá trị thì biến có giá trị mới, nếu không thì biến vẫn giữ giá trị cũ.

```
var x = 10;
//...

//Khai báo lại
if (true)
{
    var x = 15;
}
```

Biến khai báo với var được xử lý ở phần đầu của hàm: Biến khai báo với var hoạt động theo cơ chế hoisting của JS. Biến tự động được kéo lên trên cùng trong phạm vi của nó và khởi tạo với giá trị undefined

Trong JavaScript có cơ chế Hoisting, theo đó khai báo các biến và hàm được đẩy lên đầu phạm vi của chúng trước khi code thực thi.

Ví dụ, bạn viết như sau:
```
console.log (UserName);
var UserName = "xuanthulab";
```
Thì tương đương với:
```
var UserName;                   // Khai báo và không khởi tạo biến

console.log (UserName);         // in ra: undefined
var UserName = "xuanthulab";
```

*Do khai báo biến với var có thể khai báo lại, nên hãy chú ý kiểm soát một cách chặt chẽ quá trình khai báo lại, chắc chắn rằng bạn biết một biến đã từng được khai bao hay chưa để tránh bug phát sinh. Nếu có thể hãy cân nhắc sử dụng khai báo biến với let hoặc const*

**b. Tính chất khai báo biến với let**

Trong JS nên dùng từ khóa let để khai báo biến, nó tránh được một số vấn đề khó kiểm soát như với var.

Biến khai bao với let có phạm vi (vùng hiệu lực) chỉ trong khối mà biến đó khai báo. Nếu khai báo mà không khởi tạo giá trị (không gán giá trị ngay bằng toán tử gán =) thì mặc định nó cũng tự động khởi tạo với giá trị undefined.

```
let isLogin = true;

if (isLogin)
{
    // Biến message chỉ có hiệu lực trong khối { ... } mà nó khai báo
    let message = 'Bạn đã đăng nhập';
    console.log(message);
}

// Lỗi: truy cập biến chưa khai báo
console.log(message);
```

Trong ví dụ trên, nếu bạn dùng var thì không có thông báo lỗi, do biến hiệu lực ngay cả bên ngoài khối khai báo biến.

Biến khai báo với let không được phép khai báo lại: trong phạm vi của nó chỉ có thể cập nhật giá trị (gán giá trị) chứ không được phép khai báo lại biến như var.

Biến khai báo với let khóa phạm vi truy cập trong khối khai báo: biến chỉ có hiệu lực (phạm vi) trong khối { ... } khai báo nó. Nếu khai báo biến trong một phạm vi khác (một block lệnh { ... }) mới thì vẫn có thể khai báo trùng tên, nhưng hai biến là khác nhau.

```
let message = 'Xin chào';
// ...
// cập nhật giá trị
message = 'Chào các bạn';

// Khai báo lại biến --> LỖI
let message = 'Chào bạn!';
```

```
let message = 'Xin chào';
// ...
// cập nhật giá trị
if (true)
{
    // Trong khối, có thể khai báo biến cùng tên message
    // Biến message trong khối là khác với message ngoài khối
    // Nếu không có khai báo message trong khối, thì truy cập là message ngoài khối
    let message;
    message = 'Chào các bạn';
}
console.log(message); // In ra: 'Xin chào'
```

Biến khai báo với let giống var cũng hoạt động theo cơ chế hoisting của JS. Biến tự động được kéo lên trên cùng trong phạm vi của nó. Tuy nhiên nó không tự động gán giá trị undefined như var, mà là biến chưa được khởi tạo, do vậy nếu cố tình truy cập trong trường hợp này thì sẽ dẫn tới lỗi Reference Error

```
console.log (UserName);  // Lỗi : Uncaught ReferenceError: Cannot access 'UserName' before initialization
let UserName = "xuanthulab";
```

***Sự khác nhau giữa var và let:***

* var cho phép khai báo lại (nhiều lần), let thì biến chỉ được khai báo 1 lần (nếu cố tình khai báo lần tiếp theo sẽ bị lỗi).
* let thì phạm vi hiệu lực trong khối {} nó khai báo, var thì hiệu lực toàn cục (xem Khối lệnh Javascript)
* Các biến đều được JS kéo lên đầu khai báo khi thực thi, nhưng khi đẩy lên đầu biến khai báo với var được khởi tạo giá trị undefined còn biến khai báo với let thì không được khởi tạo khi kéo lên

**c. Hằng số trong Javascript**

Hằng số được khai báo và phải khởi tạo ngay với từ khóa const nó có tính chất giống với khai báo bằng let ngoại trừ sau khi khai báo và gán thì giá trị không thay đổi được nữa (cố tình thay đổi sẽ lỗi).

```
const mgs = "Welcome";
mgs = "Hello!"; // Lỗi xảy ra, gán giá trị cho hằng số
```

```
const pi = 3.14;
const year = "Year of the Monkey";
```

Hằng số luôn phải gán giá trị ngay tại nơi nó khai báo

#### 3. Toán tử, kiểu dữ liệu

**a. Toán tử**

**Toán tử số học**

```
Toán tử số học

+ -> Cộng
- -> Trừ
* -> Nhân
** -> Lũy thừa
/ -> Chia
% -> Chia lấy dư
++ -> Tăng 1 đơn vị
-- -> Giảm 1 đơn vị
```

**Toán tử gán**

```
Toán tử gán

Toán tử          Ví dụ          Tương đương
 =                x = y           x = y
 +=               x += y           x = x + y
 -=               x -= y           x = x - y
 *=               x *= y           x = x * y
 /=               x /= y           x = x / y
```

**Toán tử nối chuỗi**
Ví dụ
```
 var name = 'Thiet' + 'Thao';
//output: ThietThao
```

**Toán tử so sánh**

```
Toán tử             
==           -->  Bằng
!=           -->  Khác
>=           -->  Lớn hơn hoặc bằng
<=           -->  Bé hơn hoặc bằng
>            -->  Lớn hơn
<            -->  Bé hơn
```

**Toán tử logical**

```
Toán tử logic
1. && - And
2. || - And
3. ! - Not
```

**b. Kiểu dữ liệu**

Kiểu dữ liệu trong JavaScript

1. Dữ liệu nguyên thủy

- Number
- String 
- Boolean
- Undefined
- Null
- Symbol

2. Dữ liệu phức tạp

- Function
- Object

```
// Number
var a = 1;
var b = 2;
var e = 1.5;

// String
var name = 'Thiet';
var gfName = 'Thao';

//Boolean
var isTrue = true;
var isMyBad = false;

// Undefined
var age;

// Null
var isNull = null;

//Symbol

var id = Symbol('id');

// Function
var myFunction = function(){
    var name = 'Thiet';
}
myFunction();

//Object

var myOb = {
    name: 'Thiet',
    age: 20,
    address: 'Hanoi'
    myF: function(){

    }
};

var myArray = ['Thiet','Thao'];

```

-> để kiểm tra kiểu dữ liệu: typeof < tên biến>

### II. Các đối tượng trong JavaScript

#### 1. Mảng (Array)

-> Mảng là một tập hợp các giá trị có cùng kiểu dữ liệu.

Cú pháp khai báo:

```
var array = [value1, value2, ..., valueN];
```

Truy xuất phần tử trong mảng:
```
array[index];
```

**Các phương thức của mảng**

|Phương thức|Mô tả|
|-----------|-----|
|concat()	|Nối mảng|
|join()	|Nối các phần tử của mảng thành chuỗi|
|pop()	|Xóa phần tử cuối mảng|
|push()	|Thêm phần tử vào cuối mảng|
|shift()	|Xóa phần tử đầu mảng|
|unshift()	|Thêm phần tử vào đầu mảng|
|slice()	|Cắt mảng|
|splice()	|Cắt mảng|
|reverse()	|Đảo ngược mảng|
|sort()	|Sắp xếp mảng|
|indexOf()	|Tìm kiếm phần tử trong mảng|
|lastIndexOf()	|Tìm kiếm phần tử trong mảng (bắt đầu từ cuối mảng)|
|forEach()	|Duyệt mảng|

#### 2. Object

**Khai báo đối tượng**

-> Đối tượng là một tập hợp các thuộc tính (property) và phương thức (method).

Cú pháp khai báo:

```
var object = {key1: value1, key2: value2, ..., keyN: valueN};
```
Truy xuất thuộc tính và phương thức:

```
object.key;
```
***Các phương thức của đối tượng***

|Phương thức|Mô tả|
|-----------|-----|
|Object.assign()|	Sao chép đối tượng
|Object.create()|	Tạo đối tượng mới
|Object.keys()|	Trả về một mảng chứa tất cả các key của đối tượng
|Object.values()|	Trả về một mảng chứa tất cả các value của đối tượng
|Object.entries()|	Trả về một mảng chứa tất cả các cặp key-value của đối tượng

#### 3. Function

**Khai báo hàm**

-> Hàm là một khối lệnh được đặt tên và có thể được gọi bất cứ lúc nào.

Hàm có thể nhận các tham số đầu vào và trả về một giá trị.

Cú pháp khai báo:

```
function name(parameter1, parameter2, parameter3, ...) {
    // code
}
```

Cú pháp gọi:

```
name(argument1, argument2, argument3, ...);
```

**Các phương thức của hàm**
 
|Phương thức|Mô tả|
|-----------|-----|
|Function.apply()|	Gọi hàm với this là đối số đầu tiên
|Function.bind()|	Tạo một hàm mới với this được gán bằng giá trị được chỉ định và các đối số được truyền vào được cung cấp dưới dạng một mảng
|Function.call()|	Gọi hàm với this được gán bằng giá trị được chỉ định và các đối số được truyền vào được cung cấp dưới dạng danh sách các đối số đầu vào|

### III. Vòng lặp

### 1. For

Cú pháp:

```
for (var i = 0; i < 100; i++) {
    // code
}
```
#### 2. While
Cú pháp:

```
while (condition) {
    // code
}
```

### IV. Call back

***-> Call back là một hàm được truyền qua đối số và được gọi lại trong hàm nhận đối số đó.***

Ví dụ:

```
function myFunction(param1, param2, callback) {
    // code này sẽ được thực thi trước khi hàm myFunction được thực thi xong
    callback();
}

myFunction(1, 2, function() {
    // code này sẽ được thực thi sau khi hàm myFunction được thực thi xong
});
```


Call back có thể được sử dụng để xử lý bất đồng bộ trong JavaScript.

### V. Các method trong JavaScript: Map, Reduce, Filter, Some, Includes ....

#### 1. Map

***->Phương thức map() tạo ra một mảng mới với kết quả là một mảng mới có các phần tử được thay đổi từ mảng cũ.***

Cú pháp:

```
array.map(function(currentValue, index, arr), thisValue)
```
Ví dụ:
```
var numbers = [1, 2, 3, 4, 5];

var newNumbers = numbers.map(function(number) {
    return number * 2;
});
console.log(newNumbers); // [2, 4, 6, 8, 10]
```

#### 2. Reduce

***-> Phương thức reduce() thực thi một hàm reducer (cung cấp bởi bạn) trên mỗi phần tử của mảng, kết quả là một giá trị duy nhất.***
Cú pháp:

```
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

Ví dụ:
```
var numbers = [1, 2, 3, 4, 5];

var sum = numbers.reduce(function(total, number) {
    return total + number;
}, 0);

console.log(sum); // 15
```
#### 3. Filter

***-> Phương thức filter() tạo ra một mảng mới với tất cả các phần tử vượt qua kiểm tra được thực hiện bởi hàm được cung cấp.***

Cú pháp:

```
array.filter(function(currentValue, index, arr), thisValue)
```
Ví dụ:
```
var numbers = [1, 2, 3, 4, 5];

var newNumbers = numbers.filter(function(number) {
    return number > 3;
});
console.log(newNumbers); // [4, 5]
```
#### 4. Some

***-> Phương thức some() kiểm tra xem ít nhất một phần tử trong mảng có thỏa mãn điều kiện được thực hiện bởi hàm được cung cấp hay không.***

Cú pháp:

```
array.some(function(currentValue, index, arr), thisValue)
```
Ví dụ:
```
var numbers = [1, 2, 3, 4, 5];

var result = numbers.some(function(number) {
    return number > 3;
});

console.log(result); // true
```

#### 5. Every
***-> Phương thức every() kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn điều kiện được thực hiện bởi hàm được cung cấp hay không.***

Cú pháp:

```
array.every(function(currentValue, index, arr), thisValue)
```

Ví dụ:

```
var numbers = [1, 2, 3, 4, 5];
var result = numbers.every(function(number) {
    return number > 3;
});

console.log(result); // false
```
#### 6. Includes

```
-> Phương thức includes() xác định xem một mảng có chứa một phần tử cụ thể hay không, trả về true hoặc false tương ứng.
```

Cú pháp:

```
array.includes(element, start)
```
Ví dụ:
```
var numbers = [1, 2, 3, 4, 5];

var result = numbers.includes(3);

console.log(result); // true
```