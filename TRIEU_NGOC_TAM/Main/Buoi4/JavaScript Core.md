# JavaScript Core

Owner: Triệu Tâm
Tags: Codebase, Guides and Processes

# 1. Biến và Toán tử

Khai báo biến : 

```jsx
var variable_name; // khai bao bien toan cuc 
let variable_name; // khai bao bien cuc bo (ES6)
// vd : 
var name; // name = undefinded
name = 'TAM';
let age = 18;
age = '18'; // co the nhung ko khuyen khich su dung
const PI = 3.14 // khai bao hang so
```

Nếu không gán giá trị cho biến thì giá trị mặc định của nó là undefinded

JS là loại ngôn ngữ runtime cp lên không cần gán kiểu dữ liệu cho biến

Dấu ‘ ; ‘ trong JS là tùy chọn, nó thể hiện cho việc kết thúc câu lệnh. Tuy nhiên nên sử dụng nó để hạn chế lỗi.

Kiểu dữ liệu : 

Các loại kiểu dữ liệu cơ bản trong JavaScript : 

- null
- undefinded
- boolean
- number
- string
- symbol
- bigint

and object.

![https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-data-types.svg](https://www.javascripttutorial.net/wp-content/uploads/2022/01/JavaScript-data-types.svg)

Trong JS thì data được truyền theo giá trị giống như Java.

Toán tử : 

Toán tử số học : 

| Operator | Sign |
| --- | --- |
| Addition | + |
| Subtraction | - |
| Multiplication | * |
| Division | / |
| Remainder | % |

Nếu cộng 1 số với 1 xâu, js sẽ chuyển số sang xâu.

Nếu nhân, chia một xâu với một số, js sẽ chuyển xâu sang số.

Toán tử gán : 

| Operator | Meaning | Description |
| --- | --- | --- |
| a = b | a = b | Assigns the value of b to a. |
| a += b | a = a + b | Assigns the result of a plus b to a. |
| a -= b | a = a - b | Assigns the result of a minus b to a. |
| a *= b | a = a * b | Assigns the result of a times b to a. |
| a /= b | a = a / b | Assigns the result of a divided by b to a. |
| a %= b | a = a % b | Assigns the result of a modulo b to a. |
| a &=b | a = a & b | Assigns the result of a AND b to a. |
| a |=b | a = a | b | Assigns the result of a OR b to a. |
| a ^=b | a = a ^ b | Assigns the result of a XOR b to a. |
| a <<= b | a = a << b | Assigns the result of a shifted left by b to a. |
| a >>= b | a = a >> b | Assigns the result of a shifted right (sign preserved) by b to a. |
| a >>>= b | a = a >>> b | Assigns the result of a shifted right by b to a. |

Toán tử một ngôi :

| Unary Operators | Name | Meaning |
| --- | --- | --- |
| +x | Unary Plus | Convert a value into a number |
| -x | Unary Minus | Convert a value into a number and negate it |
| ++x | Increment Operator (Prefix) | Add one to the value |
| -–x | Decrement Operator (Prefix) | Subtract one from the value |
| x++ | Increment Operator (Postfix) | Add one to the value |
| x–- | Decrement Operator (Postfix) | Subtract one from the value |

Toán tử so sánh :

| Operator | Meaning |
| --- | --- |
| < | less than |
| > | greater than |
| <= | less than or equal to |
| >= | greater than or equal to |
| == | equal to |
| != | not equal to |

| Operator | Meaning |
| --- | --- |
| === | strict equal |
| !== | not strict equal |

Toán tử Logic :

- ! (Logical NOT)
- || (Logical OR)
- && (Logical AND)

Nullish : 

```jsx
value1 ?? value2 : 

//const result = value1;
//if(result === null || result === undefined) {
//   result = value2;
//}

//=> 
const name = null ?? 'John';
console.log(name); // 'John'
```

Mũ :

```jsx
x**n
```

---

# 2. JS OOP

Array : 

Mảng là một dánh sách các giá trị được sắp xếp theo thứ tự. Mỗi giá trị trong mảng là một phần tử được xác định bởi index.

![https://www.javascripttutorial.net/wp-content/uploads/2022/08/JavaScript-Array.svg](https://www.javascripttutorial.net/wp-content/uploads/2022/08/JavaScript-Array.svg)

Mảng có thể chứa các giá trị thuộc kiểu dữ liệu khác nhau.

Kích thước của mảng là dynamic và tự động tăng.

Cách khởi tạo mảng :

```jsx
let arr = new Array(); // Array() : contructor
// tham so truyen vao contructor 
// 0 : tao 1 mang rong
// 1 (number) :  tao 1 mang voi so luong phan tu
// ... : tao 1 mang voi cac phan tu cho truoc

// Cach khac de khoi tao mang ; 
let nArr = [];
```

Cách truy cập vào phần tử trong mảng :

```jsx
array_name[index]
// index bat dau tu 0
```

Object : 

Obj là một tập hợp các key/value (properties) or function (method).

```jsx
let person = {
    firstName: 'John',
    lastName: 'Doe',
    greet: function () {
        console.log('Hello, World!');
    }
		// in es6 :
		//greet(){
		//	...
		//}
};
```

this value : tham chiếu đến đối tượng gọi nó.

Constructor : 

```jsx
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

let person = new Person('John','Doe');

// no co chuc nang nhu : 

function Person(firstName, lastName) {
    // this = {};

    // add properties to this
    this.firstName = firstName;
    this.lastName = lastName;

    // return this;
}
```

Prototypes : 

- Các obj có thể kế thừa các tính năng của nhau thông qua prototypes.
- Mỗi obj có một thuộc tính gọi là prototypes.
- Prototypes  cũng là một object với thuộc tính riêng của nó.
- Mỗi khi truy cập một thuộc tính nào đó, js engine sẽ tìm thuộc tính trên obj, nếu obj không có thuộc tính đó, js engine sẽ tìm đến các thuộc tính của prototype của obj, cuối cùng là tìm đến prototype của prototype.

![https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype.svg](https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype.svg)

![https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype-Person-prototype.svg](https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype-Person-prototype.svg)

thêm prototype cho obj : 

```jsx
Person.prototype.greet = function() {
    return "Hi, I'm " + this.name + "!";
}
let p1 = new Person('John');
```

![https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype-Person-object.svg](https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype-Person-object.svg)

![https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype-calling-a-method.svg](https://www.javascripttutorial.net/wp-content/uploads/2022/01/JS-prototype-calling-a-method.svg)

Class : 

```jsx
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
```

setter and getter : 

```jsx
class Person {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        newName = newName.trim();
        if (newName === '') {
            throw 'The name cannot be empty';
        }
        this._name = newName;
    }
}
```

inheritance :

```jsx
class Animal {
    constructor(legs) {
        this.legs = legs;
    }
    walk() {
        console.log('walking on ' + this.legs + ' legs');
    }
}

class Bird extends Animal {
    constructor(legs) {
        super(legs);
    }
    fly() {
        console.log('flying');
    }
}

let bird = new Bird(2);

bird.walk();
bird.fly();
```

private  : 

```jsx
class Person {
  #firstName;
  #lastName;
  constructor(firstName, lastName) {
    this.#firstName = Person.#validate(firstName);
    this.#lastName = Person.#validate(lastName);
  }
  getFullName(format = true) {
    return format ? this.#firstLast() : this.#lastFirst();
  }
  static #validate(name) {
    if (typeof name === 'string') {
      let str = name.trim();
      if (str.length >= 3) {
        return str;
      }
    }
    throw 'The name must be a string with at least 3 characters';
  }

  #firstLast() {
    return `${this.#firstName} ${this.#lastName}`;
  }
  #lastFirst() {
    return `${this.#lastName}, ${this.#firstName}`;
  }
}

let person = new Person('John', 'Doe');
console.log(person.getFullName());
```

# 3. Vòng lặp

for loop :

```jsx
for (initializer; condition; iterator) {
    // statements
}

for (let it in arr){
		// statements
		// it : index
}

for (let x of arr){
	// statements
	// x : value
}
```

while :

```jsx
while (expression) {
    // statement
}
```

do while :

```jsx
do {
  statement;
} while(expression);
```

# 4. CallBack

Là cách truyền một function vào một function khác.

Với hàm tìm số lẻ sau : 

```jsx
function filter(numbers) {
  let results = [];
  for (const number of numbers) {
    if (number % 2 != 0) {
      results.push(number);
    }
  }
  return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];
console.log(filter(numbers));
```

Nhận thấy việc kiểm tra xem số chẵn hay lẻ chỉ giới hạn tại câu lệnh number % 2 ≠ 0.

Khi ta muốn thay đổi sang tìm số chẵn và để tối ưu code :

```jsx
function isOdd(number) {
  return number % 2 != 0;
}
function isEven(number) {
  return number % 2 == 0;
}

function filter(numbers, fn) {
  let results = [];
  for (const number of numbers) {
    if (fn(number)) {
      results.push(number);
    }
  }
  return results;
}
let numbers = [1, 2, 4, 7, 3, 5, 6];

console.log(filter(numbers, isOdd));
console.log(filter(numbers, isEven));
```

# 5. Array Method

Map : 

Tạo một mảng mới với các phần tử là kết quả của hàm được cung cấp trước trên mọi phần tử của mảng.

```jsx
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

syntax :

```jsx
array.map(function(currentValue, index, arr), thisValue)
```

# Parameters

| Parameter | Description |
| --- | --- |
| function() | Required.A function to be run for each array element. |
| currentValue | Required.The value of the current element. |
| index | Optional.The index of the current element. |
| arr | Optional.The array of the current element. |
| thisValue | Optional.Default value undefined.A value passed to the function to be used as its this value. |

# Return Value

| Type | Description |
| --- | --- |
| An array | The results of a function for each array element. |

Reduce : 

syntax :

```jsx
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

# Parameters

| Parameter | Description |
| --- | --- |
| function() | Required.A function to be run for each element in the array. |
| Reducer function parameters: | total Required.The initialValue, or the previously returned value of the  function.
currentValue Required.The value of the current element.
currentIndex Optional. The index of the current 
element.arr Optional.The array the current element belongs to. |
| initialValue | Optional.A value to be passed to the function as the initial value. |

nếu initinalValue không được chỉ định total = arr[0], và curentValue bắt đầu từ a[1].

# Return Value

The accumulated result from the last call of the callback function.

```jsx
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
```

Filter : 

Tạo một mảng mới gồm những phần tử thỏa mãn điều kiện của hàm.

syntax : 

```jsx
array.filter(function(currentValue, index, arr), thisValue)
```

```jsx
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]
```

Includes : 

Trả về True nếu mảng chứa một giá trị được chỉ định.

Trả về False nếu không tìm thấy giá trị.

Không phân biệt chữ hoa thường.

syntax : 

```jsx
array.includes(element, start)
```

# Parameters

| Parameter | Description |
| --- | --- |
| element | Required.The value to search for. |
| start | Optional.Start position. Default is 0. |

# Return Value

| Type | Description |
| --- | --- |
| A boolean | true if the value is found, otherwise false. |

```jsx
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false
```

Group : 

Nhóm các giá trị trong mảng theo các string được trả về bởi hàm kiểm tra.

```jsx
group(callbackFn)
group(callbackFn, thisArg)
```

```jsx
function myCallback({ quantity }) {
  return quantity > 5 ? "ok" : "restock";
}

const result2 = inventory.group(myCallback);

/* Result is:
{
  restock: [
    { name: "asparagus", type: "vegetables", quantity: 5 },
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  ok: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/
```

Some : 

Kiểm tra xem có bất kỳ phần tử nào vượt qua hàm kiểm tra hay không.

Nếu có bất kỳ phần tử nào vượt qua ⇒ true, ngược lại false.

```jsx
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
```

every : 

Thực thi một hàm cho tất cả phần tử của mảng.

Trả về true nếu tất cả phần tử trả về true, ngược lại trả về false.

```jsx
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];
const array2 = [1, 30, 39, 49, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true

console.log(array2.every(isBelowThreshold));
// Expected output: false
```

Orther : 

length : return length(size) of array.

```jsx
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
```

toString : convert array to string

join : Nối tất cả các phân tử mảng thành chuỗi, ngoài ra còn có thể chỉ định dấu phân cách.

```jsx
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.join(' * '));
//Banana * Orange * Apple * Mango
```

pop() : remove the last element and return the popout element.

push(x) : add the element x to array.

shift() : remove the first element.

unshift(x) :  add element x to array 

---