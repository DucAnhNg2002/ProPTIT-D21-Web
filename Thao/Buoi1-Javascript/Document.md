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
Đối tượng Function dùng để định nghĩa một hàm dưới dạng một đối tượng động. Vì hàm không có tên nên thường được gọi là hàm nặc danh và đối số của nó được truyền dưới dạng các chuỗi phân cách nhau bằng dấu phẩy. Đối số cuối cùng là thân gồm các câu lệnh sẽ được thực thi khi nó được gọi. 
Nếu hàm tạo Functio  không có đối số thì khối lệnh sẽ được truyền tới hàm tạo để định nghĩa chức năng cho hàm.
#### Thuộc tính của đối tượng Function
- length: trả vể số lượng đối số được truyền
- prototype: Cho phép đối tượng được tùy chỉnh bằng cách thêm thuộc tính và phương thức mới
- apply(): Cho phép áp dụng một phương thức giữa các hàm
- call(): cho phép gọi một phương thức giữa các đối tượng

#### Cú pháp
``` js
var Tên_hàm  = new Function(Các_đối _số, Các_câu lệnh_dạng_chuối);
var sum =   new Function("a","b","return a+b;");
```

### Vòng lặp

#### For loop
Với vòng lặp for ta sẽ khởi tạo biến đếm, kiểm tra điều kiện và tăng hoặc giảm biến được thực hiện trên cùng một dòng.
**Cú pháp**
``` js
for ([initialization];[condition];[final-expression]){
   Block of code
}
```
Ví dụ:
``` js
for(var i = 0; i < 10; i++) {
    console.log(i)
}

```

#### While loop
Câu lệnh while tạo ra một vòng lặp thực thi một khối lệnh (block of code) cho đến khi điều kiện vẫn đúng.
**Cú pháp**
``` js
while (condition) {
  Block of code
}
```
Ví dụ:
``` js
var i = 0;
while(i < 10) {
    console.log(i);
    i++;
}
```

#### Do...While
**do-while** về cơ bản khá giống với **while**, chúng chỉ khác nhau duy nhất. Đối với **Do While** dù điều kiện lặp như thế nào thì đoạn code vẫn được chạy ít nhất 1 lần còn nếu điều kiện thỏa mãn thì sẽ tương tự như **While** : tạo ra thêm vòng lặp
** Cú pháp**
``` js
do {
    Block of code
 }
while (condition);

```
#### forEach()
forEach sẽ lặp lại từng phần tử trong mảng theo thứ tự index và thực thi function được truyền vào. Lưu ý rằng forEach sẽ không thực thi function đầu vào cho các phần tử không có giá trị
``` js
arrayName.forEach(function(currentValue, index, array){
    function body
})

```
Hàm được truyền vào forEach sẽ nhận tối đa 3 đối số đầu vào
- currentValue: Giá trị đang được vòng lặp xử lý
- index: Chỉ số của giá trị (currentValue) trong mảng
- array: toàn bộ array đang gọi đến forEach

``` js
var arr=[10, 20, "hi", ,{}];

arr.forEach(function(item, index){
    console.log(index+ 'is :' + item);
});


```

``` js
0:10
1:20
2:hi
4:[object Object]


```
Lưu ý rằng bạn không nhất thiết phải truyền toàn bộ 3 đối số vào, chỉ truyền vào những đối số cần thiết.

#### Map
Tiếp tục là một hàm sẽ giúp bạn loop các phần tử của một Array. Tuy nhiên **map** sẽ tạo ra một mảng mới chứ không phải thực thi với mảng gọi đến nó như **forEach**.
``` js
var newArray= oldArray.map(function (currentValue, index, array){
    //Return element for the newArray
});

```
Ví dụn
``` js
var num = [1, 5, 10, 15];
var doubles = num.map(function(x) {
   return x * 2;
});

```
``` js
(4) [2, 10, 20, 30]

```
#### For...in
Vòng lặp này có đôi chút khác biệt với các hàm phía trên, For ... in mục đích chủ yếu được dùng để loop trong một object chứ không phải array . Số lượng vòng lặp sẽ tương ứng với số lượng thuộc tính của object
``` js
for (variableName in object) {
    Block of code
}

```
ví dụ:
``` js
var obj = {a: 1, b: 2, c: 3};    
for (var prop in obj) {
   console.log('obj.'+prop+'='+obj[prop]);
};
```

``` js
obj.a=1
obj.b=2
obj.c=3

```

#### for...of
Hàm này có thể sử dụng để duyệt phần lớn các đối tượng từ Array, String, Map, WeakMap, Set ,...
``` js
for (variable of iterable) {
  Block of code
}

```
Ví dụ
``` js
var str= 'hello';
for (var value of str) {
console.log(value);
}

```
### Call back
Callback là một hàm được truyền qua đối số sẽ được thực hiện sau khi một hàm khác đã thực hiện xong.
Trong JavaScript, hàm là đối tượng. Do đó, các hàm có thể lấy các hàm làm đối số và có thể được trả về bởi các hàm khác. Các hàm thực hiện điều này được gọi là **higher - order function** (Hàm bậc cao hơn). Bất kỳ hàm nào được truyền dưới dạng đối số được gọi là **hàm callback.**
#### Tại sao chúng ta cần hàm Callback?
Chúng ta cần hàm callback vì một lý do rất quan trọng - JavaScript là ngôn ngữ hướng sự kiện.

Điều này có nghĩa là thay vì chờ phản hồi trước khi tiếp tục, JavaScript sẽ tiếp tục thực thi trong khi lắng nghe các sự kiện khác.

### Các medthod
#### Map
Map() nó tạo ra một array mới bằng việc ta xử lý những item của array cũ bằng phương thức của chúng ta xử lý.
``` js
 const arr = [1, 2, 3, 4, 5, 6];


const oneAdded = arr.map(num => num + 1);
console.log(oneAdded); // output [2, 3, 4, 5, 6, 7]

console.log(arr); // output: [1, 2, 3, 4, 5, 6]
```
#### Reduce
**Cú pháp**
``` js
arr.reduce(reducer, initialValue);
```
> initialValue (giá trị khởi tạo) là tùy chọn. Nếu bạn truyền vào đối số khởi tạo, phương thức reducer() sử dụng nó ở lần gọi đầu tiên

**Phương thức reduce()**
- Phương thức giảm mảng xuống thành một giá trị duy nhất
- phương thức reduce() thực thi một hàm được cung cấp cho mỗi giá trị của mảng(từ trái sang phải)
- Giá trị trả về của hàm được lưu trữ trong bộ tích lũy(kết quả/tổng)

> Reduce() không thực thi hàm đối với các phần tử mảng không có giá trị
> Phương thức này không thay đổi mảng ban đầu

Reduce đi kèm với một số thuật ngữ như *reducer* và *accumulator*
- accumulator là giá trị mà chúng ta kết thúc
- reducer là hành động mà chúng ta sẽ thực hiện để đạt được một giá trị

**Hàm call back truyền vào trong reduce()**
hàm call back truyền vào trong reduce có bốn đối số
``` js
function reducer(accumulator, currentValue, currentIndex, array) {}
```
- accumulator:  Bắt buộc. Giá trị được trả về từ lần gọi trước. Nếu bạn truyền giá trị khởi tạo cho phương thức reduce(), khi hàm call back này được thực thi lần đầu tiên, accumulator bằng giá trị khởi tạo.
- currentValue: Bắt buộc. Giá trị của phần tử mảng trong lần lặp hiện tại.
- currentIndex: Tùy chọn. Chỉ số của phần tử mảng trong lần lặp hiện tại.
- arr: Tùy chọn. Mảng mà phương thức reduce() gọi và áp dụng hàm call back trên từng phần tử của nó.
Ví dụ
``` js
let tong = 0;

const mangSo = [5, 10, 15];

for (let i = 0; i < mangSo.length; i++) {
    tong += mangSo[i];
}
console.log(tong);
```
**Khi sử dụng reduce():**
``` js
// Đây là giá trị khởi tạo của chúng ta
const giaTriKhoiTao = 0;

// Mảng số
const mangSo = [5, 10, 15];

// Tạo hàm tính tổng. Hành động này lát nữa sẽ
// áp dụng lên trên mảng (hàm này sẽ được gọi lại)
const tinhTong = (boTichLuy, phanTuHienTai) => {
    return boTichLuy + phanTuHienTai;
};

// Sử dụng reduce()
const tong = mangSo.reduce(tinhTong, giaTriKhoiTao);
console.log(tong);
```

### Filter
Hàm Filter để lọc các phần tử trong mảng
``` js
let sinhViens=[
    {ten:"a",tuoi:18}
     { ten: "b", tuoi: 20 },
    { ten: "c", tuoi: 27 },
    { ten: "d", tuoi: 18 },
    { ten: "e", tuoi: 22 }
];
```
Để tìm kiếm sinh viên có tuổi lớn hơn 18, bạn thường sử dụng vòng lặp for lặp qua các phần tử và kiểm tra thuộc tính tuoi.
``` js
let sv = [];

for (let i = 0; i < sinhViens.length; i++) {
    if (sinhViens[i].tuoi > 18) {

        // Thêm phần tử vào cuối mảng mới
        sv.push(sinhViens[i]);
    }
}

console.log(sv);
```
Kết quả được:
``` js
[
  { ten: 'b', tuoi: 20 },
  { ten: 'c', tuoi: 27 },
  { ten: 'e', tuoi: 22 }
]
```

``` js
// Lọc phần tử sử dụng filter()
let sv = sinhViens.filter(function(e) {
    return e.tuoi > 18;
});
console.log(sv);
```
``` js
//ví dụ:
const arr = [1, 2, 3, 4, 5, 6];

const filtered = arr.filter(num => num > 2);
console.log(filtered); // output: [3, 4, 5, 6]
```

**Cú pháp**
``` js
arrayObject.filter(callback, contextObject);
```
Bên trong, phương thức filter() lặp qua từng phần tử của mảng và truyền từng phần tử vào hàm callback để kiểm tra.Nếu hàm callback trả về true, nó bao gồm phần tử trong mảng trả về.
Phương thức filter() chấp nhận hai đối số được đặt tên:
- Một hàm callback
- Và một đối tượng tùy chọn.

Hàm **callback** có dạng:
``` js
function callback(currentElement, index, array) {
    // ...
}
```
- currentElement: là phần tử hiện tại trong mảng đang được xử lý bởi hàm callback.
- index: Tùy chọn. Là chỉ mục của currentElement đang được xử lý bởi hàm callback.
- array: Tùy chọn. Là đối tượng mảng đang được duyệt qua.

### Some
Hàm some trong js có nhiệm vụ lặp qua tất cả các phần tử của mảng, mỗi lần lặp nó sẽ truyền giá trị của phần tử đang lặp vào hàm callback. Chỉ cần hàm callback return true là hàm some sẽ return true. Ngược lại, nếu duyệt hết mảng mà không có return true nào thì hàm some sẽ return false.

Nói đơn giản, nếu một phần tử nào đó thỏa với chương trình trong hàm callback thì hàm some sẽ return true. Ngược lại nếu tất cả các phần tử đều không thỏa thì nó sẽ return false.
Cú pháp:
``` js
// Arrow function
some((element) => { ... } )
some((element, index) => { ... } )
some((element, index, array) => { ... } )
 
// Callback function
some(callbackFn)
some(callbackFn, thisArg)
 
// Inline callback function
some(function callbackFn(element) { ... })
some(function callbackFn(element, index) { ... })
some(function callbackFn(element, index, array){ ... })
some(function callbackFn(element, index, array) { ... }, thisArg)
```
- element là biến chứa giá trị của phần tử đang lặp.
- index là key của phần tử đang lặp.
- array là mảng gốc mà phần tử đang thuộc về.
- thisArg là tham số không bắt buộc. Nếu được truyền vào thì thisArg sẽ được sử dụng làm giá trị "this", nếu không được truyền vào thì giá trị "this" là "undefined".

Ví dụ: Kiểm tra xem trong mảng numbers có số nào lớn hơn 10 hay không.
``` js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
 
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

``` js
// arrow function
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true
```
### Include
Giúp kiểm tra sự tồn tại của item nào đó trong mảng
``` js
const arr = ['Nam', 2, 3, 4, 5, 6];

arr.includes('Nam'); // output: true
arr.includes(7); // output: false
```










