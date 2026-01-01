
//custom functions

function add(num1, num2) {
    return num1 + num2
}

function subtract(num1, num2) {
    return num1 - num2
}

function stringify(num) {
    return "Result:" + num
}

//Arrow functions

const addNew = (num1, num2) => {
    return num1 + num2
}

const subtractNew = (num1, num2) => {
    return num1 - num2
}

const stringifyNew = (num) => {
    return "Result:" + num
}

console.log(add(5, 10))

//commenting to see how the branches works


function double(num) {
    return num * 2
}

function transform(num, func) {
    return func(num)
}

console.log(transform(5, double))
