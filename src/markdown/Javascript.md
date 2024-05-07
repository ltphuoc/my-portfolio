---
slug: Javascript
title: Javascript Data Types
author: Phuoclt
author_title:
author_url:
author_image_url:
image:
tags: [Javascript, tsx]
---



<!-- truncate-->


### Data Types

#### String
```js
const name = 'I\'m a developer'

'THANH PHUOC'.length; // 11 (read-only)
```

```js
// String is immutable
let myName = 'Phuoc'
myName[0] = 'Thanh P' // expected: 'Thanh Phuoc'
console.log(myName) // 'Phuoc'
```

```js
'Phuoc'.charAt(0) // P <=> 'Phuoc'[0]

''.concat('Phuoc') // 'Phuoc'
''.concat('Thanh', ' ', 'Phuoc') // 'Thanh Phuoc'

'PHUOC'.padStart(7, '*') // '**PHUOC'
'PHUOC'.padEnd(7, '*') // 'PHUOC**'

'PHUOC'.repeat(3) // 'PHUOCPHUOCPHUOC'

'    PHUOC    '.trim() // 'PHUOC'

'phuoc'.toUpperCase() // 'PHUOC'
'PHUOC'.toLowerCase() // 'phuoc'

// Tìm kiếm và kiểm tra
const fullName = 'Le Thanh Phuoc'

fullName.indexOf('h') // 4
fullName.lastIndexOf('h') // 10

fullName.startsWith('Le') // true
fullName.endsWith('Le') // false

fullName.includes('Thanh') // true
fullName.includes('Le') // true

fullName.match(regexp)
fullName.matchAll(regexp)
```

```js
// substring
// slice
const fullName = 'Thanh Phuoc'

fullName.slice(0, 5) // 'Thanh'
fullName.slice(2) // 'anh Phuoc' 2 -> end

fullName.slice(-3) // 'uoc'
fullName.slice(-3, -1) // 'uo' length - 3 -> length - 1
```

```js
// Find and replace
'Thanh Phuoc'.replace(' ', '-') // 'Thanh-Phuoc'
// replace the first match only
'Thanh Thanh Phuoc'.replace('Thanh', 'Le') // 'Le Thanh Phuoc'

'Thanh Thanh Phuoc'.replaceAll('Thanh', '') // 'Phuoc'
'Thanh Thanh Phuoc'.replaceAll(regExp, '')
```

```js
// split and join
'Thanh Phuoc'.split(' ') // ['Thanh', 'Phuoc']
'Phuoc'.split('') // ['P', 'h', 'u', 'o', 'c']

const arr = ['P', 'h', 'u', 'o', 'c']
arr.join() // 'P,h,u,o,c'
arr.join('') // 'Phuoc'
```

```js
// String
const str = 'FrontEnd'

// for of (recommended)
for (const char of str) {
}

// for i
for (let i = 0; i < str.length; i++) {
  const element = str[i]
}

// forEach
;[...str].forEach((char) => {})
```

#### Number
```js
const number = 1000000
const number = 1_000_000
const number = 1e6 // 1000000

const number = 0.0001
const number = 1e-4
```

```js
// Constants
Number.NaN // Not a number
Number.EPSILON // Độ chênh lệch nhỏ nhất của 2 con số
```

```js
// Convert to number
Number('123') // 123
Number.parseInt('1.5') // 1
Number.parseFloat('1.5') // 1.5

Number('123.5a') // NaN
Number.parseInt('123.5a') // 123
Number.parseFloat('123.5a') // 123.5

Number(null) // 0
Number(undefined) // NaN

Number(true) // 1
Number(false) // 0
```

```js
// toFixed()
const n = 123.525
n.toFixed() // 124
n.toFixed(0) // 124
n.toFixed(1) // 123.5
n.toFixed(2) // 123.53
n.toFixed(3) // 123.525
n.toFixed(4) // 123.5250
n.toFixed(5) // 123.52500

// toPrecision()
const n = 123.525
n.toPrecision() // 123.525 similar to n.toString()
n.toString() // 123.525
n.toPrecision(0) // error argument must be between 1 and 100
n.toPrecision(1) // 100
n.toPrecision(2) // 120
n.toPrecision(3) // 124
n.toPrecision(4) // 123.5
n.toPrecision(5) // 123.53
n.toPrecision(6) // 123.525
n.toPrecision(7) // 123.5250
n.toPrecision(8) // 123.52500
```

```js
// Math bult-in
// Constants
Math.PI
Math.SQRT2 // căn bậc 2 của 2
```

```js
// Methods
Math.random() // random 0 --> 1
Math.abs(x) // Giá trị tuyệt đối
Math.pow(x, y) // Hàm lũy thừa x^y
Math.sqrt(x) // Hàm căn bậc 2
```

```js
// Rounding number
Math.floor(x) // Làm tròn lên số nguyên gần nhất
Math.ceil(x) // Làm tròn xuống số nguyên gần nhất
Math.round(x) // Làm tròn tới số nguyên gần nhất
Math.trunc(x) // Hàm lấy phần nguyên, bỏ phần thập phân
```

| Value | Math.floor | Math.ceil | Math.round | Math.trunc |
| ----- | ---------- | --------- | ---------- | ---------- |
| 3.2   | 3          | 4         | 3          | 3          |
| 2.5   | 2          | 3         | 3          | 2          |
| -1.1  | -2         | -1        | -1         | -1         |
| -1.6  | -2         | -1        | -2         | -1         |


#### Boolean

Falsy value:
- false
- 0
- -0
- "", '', \`\`
- null
- undefined
- NaN
- 0n (bigInt)

#### Null (Unknown values), Undefined (Unassigned values)

The `null` is an assignment value. It can be assigned to a variable as a representation of no value. But the `undefined` is a primitive value that represents the absence of a value, or a variable that has not been assigned a value.

#### Object

```js
const key = 'Power'
const student = {
  id: 1,
  name: 'Thanh Phuoc',
  'hero type': 'iron man', // key with spaces

  [key]: 50,
  [`get${key}`]: function () {
    return 100
  },

  sayHello() {
    console.log('Hello world')
  },
}
student.id // 1
student['hero type'] // 'iron man'
student.Power // 50
student[key] // 50
student.getPower() // 100

// update value
student.name = 'Van A'
// set new key
student.gender = 'Male'
// remove key
delete student.gender

'name' in student // true
'age' in student // false
```

```js
// Destructuring
// object destructuring
const student = {
 id: 1,
 name: 'Thanh Phuoc',
}
const { id, name } = student;

// rename prop
// destructuring value
const student = {
 id: 1,
 name: 'Thanh Phuoc',
}
const { id: studentId, name, age = 18 } = student;
console.log(studentId); // 1
console.log(age); // 18
console.log(id); // ReferenceError: id is not defined
```

```js
// Clone object (shallow copy)
// v1
const clonedObjectV1 = Object.assign({}, object1, object2)
// v2 (recommend)
const clonedObjectV2 = {
  ...object1,
  ...object2,
}

// Deep clone object (1 )
const clonedObject = {
  ...object1,
  key: {
    ...object1.key,
  },
}
```

```js
// Object
const obj = {
  key1: 'value1',
  key2: 'value2',
}

// for in (recommended)
for (let key in obj) {
  console.log('key:', key)
  console.log('value:', obj[key])
}

// for i
const keyList = Object.keys(obj)
for (let i = 0; i < keyList.length; i++) {
  const key = keyList[i]
  const value = obj[key]
}

// for each
Object.keys(obj).forEach((key) => {
  const value = obj[key]
})

// for of
for (const [key, value] of Object.entries(obj)) {
}
```
#### Array

```js
const numberList = [1, 2, 3]

numberList.length // 3
numberList[0] // 1

// 2D Array
const board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 9, 9],
]

board[0][1] // 2
board[1][2] // 6
```

```js
const numberList = [1, 2, 3, 4, 5]

Array.isArray(numberList) // true

Array.from({ length: 5 }, (_, i) => i + 1) // [1, 2, 3, 4, 5]

numberList.reverse() // [5, 4, 3, 2, 1]

numberList.fill(1) // [1, 1, 1, 1, 1]

const nameList = ['Thanh', 'Phuoc']
nameList.join('-') // Thanh-Phuoc
```

```js
// Destructuring
const numberList = [1, 2, 3, 4, 5]
const [a, b, ...rest] = numberList // a = 1, b = 2, rest = [3, 4, 5]
// swap
let x = 10
let y = 20
[y, x] = [x, y] // swap x = 20, y = 10
```

```js
// Clone array (shallow copy)
const numberList = [1, 2, 3, 4, 5]
const numberList2 = [...numberList]
```

```js
// Array check existing item
const numberList = [1, 2, 3, 4, 5]

// every(callbackFn) - return true if all item is true
numberList.every((item) => item > 0) // true
numberList.every((item) => item === 0) // false

// some(callbackFn) - return true if any item is true
numberList.some((item) => item === 4) // true

// indexOf(searchElement) - return index
numberList.indexOf(3) // 2

// lastIndexOf(searchElement) - return index
numberList.lastIndexOf(3) // 2

// includes(searchElement) - return true
numberList.includes(3) // true
```

```js
// CRUD
// push - add to end - returns new length
;[1, 2, 3, 4, 5].push('orange') // [1, 2, 3, 4, 5, 'orange']

// pop - remove from end - returns removed item
;[1, 2, 3, 4, 5].pop() // [1, 2, 3, 4]

// unshift - add to start - returns new length
;[1, 2, 3, 4, 5].unshift('strawberry') // ['strawberry', 1, 2, 3, 4, 5]

// shift - remove from start - returns removed item
;[1, 2, 3, 4, 5].shift() // [2, 3, 4, 5]

// splice - remove and add
// splice(start, deleteCount, ...items)
;[1, 2, 3, 4, 5].splice(1, 2, 'banana') // [1, 'banana', 4, 5]
```

```js
// Find item
const numberList = [1, 2, 3, 4, 5]
// find(callbackFn) - return first item or undefined
numberList.find((item) => item === 4) // 4

// findIndex(callbackFn) - return first item index or -1
numberList.findIndex((item) => item === 4) // 3

// findLast, findLastIndex (ES2023)
```

```js
// map
const numberList = [1, 2, 3, 4, 5]
numberList.map((item) => item + 1) // [2, 3, 4, 5, 6]

// myMap using for i
Array.prototype.myMap = function (callback) {
  const newArray = []

  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this))
  }

  return newArray
}
```

```js
// filter
const numberList = [1, 2, 3, 4, 5]
numberList.filter((item) => item > 3) // [4, 5]

// myFilter - using for i
Array.prototype.myFilter = function (callback) {
  const newArray = []
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  return newArray
}

```

```js
// reduce - loop and return result
const numberList = [1, 2, 3, 4, 5]
numberList.reduce((a, b) => a + b, 0) //  15

// myReduce
Array.prototype.myReduce = function (callback, initialValue) {
  const hasInitialValue = initialValue !== undefined
  const startIndex = hasInitialValue ? 0 : 1
  let accumulator = hasInitialValue ? initialValue : this[0]

  for (let i = startIndex; i < this.length; i++) {
    accumulator = callback(accumulator, this[i], i, this)
  }
  return accumulator
}
```

```js
// sort
const numberList = [2, 4, 1, 3, 5]
numberList.sort((a, b) => a - b) // [1, 2, 3, 4, 5]
```

```js
// Array
const arr = [1, 2, 3, 4, 5]

// for of (recommended)
for (const element of arr) {
}

// forEach (use if need foreach)
arr.forEach((element, index) => {})

// for i
for (let i = 0; i < arr.length; i++) {
  const element = arr[i]
}
```
