# [Buổi 1 - JavaScript]
##1. Khai báo dữ liệu
### Cấu trúc trong Javascript
```js
console.log('Hello World')
```
Câu lệnh dùng để in ra giá trị nào đó(biến, hằng, chuỗi , hàm) trong màn hình console 
### Biến trong JavaScript
#### Khai báo biến
Để khai báo biến, ta sử dụng từ khóa **const, let, var**
**const** được sử dụng để khai báo 1 hằng số, và giá trị của nó không thay đổi trong suốt chương trình
**let** khao báo biến chỉ có thể truy cập được trong block bao quanh nó được xác định bằng cặp {}
**var** khai báo biến có thể truy cập ở phạm vi hàm số hoặc bên ngoài hàm số
*Một số quy tắc đặt tên biến*
> Tên biến phải là các chữ không dấu viết hoa hoặc viết thường, các chữ số từ 0-9 và dấu gạch dưới () và kí hiệu $.
> Tên biến bắt đầu phải là chữ hoặc dấu gạch dưới (_), nếu bắt đầu bằng số là sai.
> Không thể sử dụng các từ dành riêng (như từ khóa JavaScript) làm tên.
> Các tên có phân biệt chữ hoa chữ thường

ví dụ
``` js
var age = 18
var name = 'Thao'
```
#### Kiểu dữ liệu của biến
Khi khai báo biến, ta không cần phải khai báo kiểu của biến đó trước khi dùng. Kiểu sẽ được tự động xác định trong lúc chương trình được thực thi. Điều đó cũng có nghĩa là một biến có thể chứa giá trị của các kiểu dữ liệu khác nhau

``` js
var a = 123 ; // a là một số
var a = 'hello' ; // a là một chuối
var a = true; // a là một boolean

```
#### Phạm vi của biến
- Biến cục bộ (local scope) : được lưu khai báo bên trong một hàm, chỉ có thể được truy cập bên trong hàm (Nên với cùng một tên biến, ta có thể khai báo ở những hàm khác nhau)
- Biến toàn cục (global scope): được khai báo ngoài hàm, có thể được truy cập từ bên ngoài của hàm cũng như bên trong của hàm
``` js
var a = 10; // biến toàn cục

function test(){
    var b = 11; // biến cục bộ
}
```
### Toán Tử
- **Toán tử số học(+,-,*,/,%)**

Các toán tử số học được sử dụng để thực hiện các phép tính toán số học trong JavaScript
``` js
var a = 10;
var b = 5;
console.log(a+b) 
console.log(a-b)
```

- **Toán tử gán**

Toán tử gán được sử dụng để gán giá trị cho một biến. Toán tử gán bao gồm toán tử bằng (=) và các toán tử gán khác như: cộng và gán (+=), trừ và gán (-=), nhân và gán (*=), chia và gán (/=) và chia lấy dư và gán (%=).

``` js
var a = 10
var b = 5
a+=b;
console.log(a);//15
```
- **Toán tử so sánh**
``` js
var a = 10;
var b = 5;
console.log(a == b); // false
console.log(a != b); // true
console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false
```
- **Toán tử logic**
Toán tử logic bao gồm toán tử AND (&&), OR (||) và NOT (!).

```js
var a = 10;
var b = 5;
var c = 20;
console.log((a > b) && (c > a)); // true
console.log((a < b) || (c < a)); // false
console.log(!(a > b)); // false
```

- **Toán tử ba ngôi**
Toán tử ba ngôi là một toán tử rẽ nhánh, được sử dụng để thay thế cho một cấu trúc if/else trong một số trường hợp đơn giản. Toán tử ba ngôi có cú pháp như sau

``` js
var a = 10;
var b = 5;
var max = (a > b) ? a : b;
console.log(max); // 10
```

## 2. Các đối tượng trong JavaScript
### Object
> Object trong JavaScript là một khái niệm trừu tượng dùng để biểu diễn một vật thể. Trong đó các thuộc tính dùng để miêu tả đặc điểm, tính chất của đối tượng
> Về bản chất, object là tập hợp của các **key** và **value**

**Để tạo ra 1 đối tượng:**
Cách 1: Sử dụng từ khóa new Object()
``` js
var car = new Object();
```
Cách 2: Sử dụng từ khóa {}
``` js
var car={

}
```

**Thuộc tính và phương thức**

- Cách 1:
``` js
var car = new Object(); // Khởi tạo

// Thêm thuộc tính
car.type ='1';
car.model='2';
car.color='3';
// Thêm phương thức
Car.addCar = function(){
  console.log("This function add car");
};
```
- Cách 2: Sử dụng từ khóa {} và thêm thuộc tính và phương thức ngay lúc khai báo
``` js
// Khởi tạo
var Car = {
    type : "",
    model : "",
    color : "",
    addCar : function(){
        console.log("This function add car");
    },
};
```

- Cách 3:Sử dụng từ khóa {} , thêm thuộc tính và phương thức sau đó
``` js
// Khởi tạo
var Car = {};

// Thêm thuộc tính
Car.type = '';
Car.model = '';
Car.color = '';

// Thêm phương thức
Car.addCar = function(){
   console.log("This function add car");
};
``` 
**Lấy giá trị của một thuộc tính**
Có 2 cách:
- Sử dụng toán tử chấm . theo sau là tên thuộc tính.
``` js
console.log(car.type);
```
- Sử dụng toán tử ngoặc vuông[]
``` js
console.log(car["type"]);
```
**Xóa một thuộc tính của Object**
``` js
delete Car.type;
```

### Array
Trong JavaScript mảng là đối tượng được xây dựng sẵn và có sẵn thuộc tính, phương thức để thao tác mảng. Mảng đa chiều không được JavaScript hỗ trợ

**Khai báo một mảng**
``` js
var array_name = new Array(); // mảng có tên là array_name và không khởi tạo kích thước

var array_name = new Array(10); // tạo mảng có kích thước 10 phần tử

var array_name = new Array("red", "green", "yellow"); // các phần tử trong mảng được khởi tạo giá trị
```

**Các phương thức của mảng**
- Truy cập một phần tử trong mảng
``` js
console.log(array_name[0]);
//Nếu truy cập vào một phần tử không tồn tại sẽ trả về undefined
```
- Thêm phần tử vào mảng
``` js
array_name.push('blue');
```
- Xóa phần tử ra khỏi mảng
``` js
array_name.splice(0,2)
// Trong phương thức splice (), tham số đầu tiên là vị trí index phần tử cần loại bỏ (trong trường hợp này là 0) và tham số thứ hai là số lượng phần tử bạn muốn xóa

array_name.pop(); // xóa phần tử cuối cùng trong mảng

array_name.shift(); // xóa phần tử đầu tiên trong mảng
```

### Function







