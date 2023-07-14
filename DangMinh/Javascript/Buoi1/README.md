# Buổi 1:  Cơ bản về Javascript

## I. Khai báo dữ liệu

**a. Khai báo biến**

Chúng ta có thể khai báo biến trong Javascript theo 4 kiểu:

1. Tự động
2. Sử dụng `var`
3. Sử dụng `let`
4. Sử dụng `const`

Hiện tại `var` chỉ được sử dụng cho code viết cho các browser cũ.

```js
x = 1
var y = 1
let z = 1
const t = 1
```

> Ta có thể viết dấu ";" ở cuối mỗi câu lệnh hoặc không.

**b. Toán tử**

Tương tự như C++ ta cũng có các toán tử sau:

| Toán tử | Mô tả        |
| ------- | ------------ |
| +       | Toán tử cộng |
| -       | Toán tử trừ  |
| *       | Toán tử nhân |
| /       | Toán tử chia |
| %       | Chia lấy dư  |
| ++      | Thêm 1       |
| --      | Bớt 1        |
| =       | Toán tử gán  |

Ngoài ra ta còn có `**`, toán tử lũy thừa.

**c. Các kiểu dữ liệu**

Javascript có 8 kiểu dữ liệu:

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

Một ví dụ thú vị:

```js
let x = 16 + 4 + "Volvo";
let y = "Volvo" + 16 + 4;

console.log(x)
console.log(y)
```

Output:
```yml
20Volvo
Volvo164
```

**JavaScript Strings**

Ta có thể dùng cả nháy đơn và nháy kép khi khai báo string.

```js
let x = "John Doe";
let y = 'John Doe';
```

Để có thể sử dụng nháy đơn hay nháy kép trong string ta có thể dùng dấu `\` trước nháy đó, hoặc sử dụng kiểu nháy còn lại để khai báo biến.

```js
let x = 'It\'s alright.';
let y = "He is called \"Johnny\"";
let z = "It's alright.";
```

Ta còn có thể sử dụng `` để khai báo string, trong đó ta có thể sử dụng biến bên trong string.

```js
let name = "John";
let age = 30;
let sentence = `My name is ${name}. I am ${age} years old.`;
```

## II. Đối tượng trong Javascript

**a. Object**

Các đối tượng (Objects) trong Javascript là một tập hợp các thuộc tính (properties) và phương thức (methods).

Đối tượng được khai báo sử dụng cặp dấu ngoặc nhọn `{}`.

```js
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
```

Để truy cập vào các thuộc tính của đối tượng ta có thể sử dụng dấu `.` hoặc `[]`.

```js
let name = person.name;
let age = person["age"];
```

Đối tượng còn có thể chứa các phương thức:

```js
let person = {
    name: "John",
    age: 30,
    city: "New York",
    fullName: function() {
        return this.name + " " + this.age;
    }
};
```

> Trong đó `this` là đại diện cho đối tượng hiện tại.
> Mảng (Array) cũng là một đối tượng đặc biệt.

**b. Array**

Mảng (Array) trong Javascript là một đối tượng đặc biệt, được sử dụng để lưu trữ nhiều giá trị trong một biến duy nhất.

Mảng được khai báo sử dụng cặp dấu ngoặc vuông `[]`.

```js
let cars = ["Saab", "Volvo", "BMW"];
```

Để truy cập vào các phần tử của mảng ta có thể sử dụng chỉ số của phần tử đó.

```js
let name = cars[0];
```

Để thêm phần tử vào mảng ta có thể sử dụng phương thức `push()`.

```js
cars.push("Audi");
```

Để xóa phần tử khỏi mảng ta có thể sử dụng phương thức `pop()`.

```js
cars.pop();
```

> Mảng cũng có thể chứa các đối tượng.

**c. Function**

Một hàm (function) trong Javascript là một khối mã được thiết kế để thực hiện một tác vụ cụ thể.

Hàm được khai báo sử dụng cặp dấu ngoặc tròn `()`.

```js
function myFunction(p1, p2) {
    return p1 * p2;
}
```

Để gọi hàm ta chỉ cần sử dụng tên hàm và truyền các tham số vào trong ngoặc tròn.

```js
let x = myFunction(4, 3);
```

**d. Arrow function**

Arrow function là một cách viết hàm ngắn gọn hơn.

```js
let myFunction = (p1, p2) => {
    return p1 * p2;
}
```

Nếu hàm chỉ có một câu lệnh thì ta có thể viết như sau:

```js
let myFunction = (p1, p2) => p1 * p2;
```

Nếu hàm chỉ có một tham số thì ta có thể viết như sau:

```js
let myFunction = p1 => p1 * 2;
```

## III. Vòng lặp

**a. While - Do/While**

Vòng lặp while sẽ thực hiện một khối lệnh nếu điều kiện là true.

```js
while (condition) {
    // code block to be executed
}
```

Vòng lặp do/while sẽ thực hiện một khối lệnh ít nhất một lần, sau đó sẽ thực hiện khối lệnh nếu điều kiện là true.

```js
do {
    // code block to be executed
}
while (condition);
```

**b. for**

Vòng lặp for trong Javascript giống với vòng lặp for trong C++.

```js

for (statement 1; statement 2; statement 3) {
    // code block to be executed
}

for (let x = 0; x < 10; x++) {
    console.log(x);
}
```

**c. for/In**

Vòng lặp for/in trong Javascript sẽ lặp qua các thuộc tính của một đối tượng.

```js
let person = {
    fname: "John",
    lname: "Doe",
    age: 25
};
for (x in person) {
    console.log(person[x]);
}
```

Output:
```yml
John
Doe
25
```

**d. for/Of**

Vòng lặp for/of trong Javascript sẽ lặp qua các phần tử của một mảng.

```js
let cars = ["BMW", "Volvo", "Mini"];
for (x of cars) {
    console.log(x);
}
```

Output:
```yml
BMW
Volvo
Mini
```

## IV. Callback

Callback function là một hàm được truyền vào một hàm khác như một tham số, và được gọi lại sau đó.

```js
function myDisplayer(some) {
    console.log(some);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```

### V. Các phương thức của Array

**a. forEach**

Vòng lặp forEach trong Javascript sẽ lặp qua các phần tử của một mảng.

```js
//array.forEach(function(currentValue, index, array), thisValue)

let cars = ["BMW", "Volvo", "Mini"];
cars.forEach(function(item, index, array) {
    console.log(item, index);
});
```

Output:
```yml
BMW 0
Volvo 1
Mini 2
```

> Trong đó `item` là phần tử hiện tại, `index` là chỉ số của phần tử hiện tại, `array` là mảng hiện tại.
> Các biến `index` và `array` là tùy chọn.
> Các phương thức khác như `map()` và `filter()` cũng có thể sử dụng các biến này.
> `thisValue` 

Ví dụ sử dụng `thisValue` trong `forEach()`:

```js
const myObj = {
  name: 'John',
  age: 30,
  printInfo() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
};

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 },
  { name: 'Charlie', age: 45 }
];

people.forEach(function(person) {
  this.printInfo.call(person);
}, myObj);

```

Output:
```yml
Alice is 25 years old.
Bob is 35 years old.
Charlie is 45 years old.
```

**b. map**

Phương thức map() sẽ tạo ra một mảng mới bằng cách gọi một hàm được cung cấp trên từng phần tử của mảng.

```js
let numbers = [4, 9, 16, 25];
let x = numbers.map(Math.sqrt);
console.log(x);
```

Output:
```yml
[ 2, 3, 4, 5 ]
```

Ta cũng có thể tự định nghĩa hàm để sử dụng.

```js
let numbers = [4, 9, 16, 25];
let x = numbers.map((val)=> {
    return val * 2
});

console.log(x);
```

Output:
```yml
[ 8, 18, 32, 50 ]
```

**c. filter**

Phương thức filter() sẽ tạo ra một mảng mới với các phần tử được lọc ra từ mảng ban đầu.

```js
let numbers = [4, 9, 16, 25];
let over18 = numbers.filter(val=>val > 18);

console.log(over18);
```

Output:
```yml
[ 25 ]
```

**d. reduce**

Phương thức reduce() sẽ lặp qua từng phần tử của mảng và trả về một giá trị duy nhất.

```js
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

let numbers = [4, 9, 16, 25];
let sum = numbers.reduce((total, currentValue)=> {
    return total + currentValue
}, );

console.log(sum);
```

Output:
```yml
54
```
> `total` lúc đầu sẽ bằng giá trị khởi tạo (initialValue), nếu không được định nghĩa, thì sẽ bằng phần tử đầu tiên của mảng.
> `currentIndex` và `arr` là tùy chọn.

Ví dụ khởi tạo giá trị ban đầu:

```js
const numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc, 0);

function myFunc(total, num) {
  return total - num;
}
```

Output:
```yml
-250
```

**e. some**

Phương thức some() sẽ kiểm tra xem có phần tử nào trong mảng thỏa mãn điều kiện hay không.

```js
let numbers = [4, 9, 16, 25];
let over18 = numbers.some(val=>val > 18);

console.log(over18);
```

Output:
```yml
true
```

> Phương thức some sẽ trả về `true` hoặc `false`.








