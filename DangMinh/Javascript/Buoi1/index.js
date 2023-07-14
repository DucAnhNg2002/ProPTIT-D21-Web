const numbers = [175, 50, 25];

console.log(numbers.reduce(myFunc, 0));

function myFunc(total, num) {
    return total - num;
}