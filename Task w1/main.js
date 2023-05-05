console.log('helow')

//------------------------ Task 1 -------------------------
let cash = 1000
let liabilities = 500
let total = cash / liabilities
console.log('total:' + total)
//------------------------ Task 1 -------------------------

//------------------------ Task 2 -------------------------
let revenues = 1000
let expenses = 500
let net_incom = revenues - expenses
console.log(net_incom)

//------------------------ Task 2 -------------------------

//------------------------ Task 3 -------------------------
let liabilities2 = 1000
let equity = 500
let assets = liabilities2 + equity
console.log('assets:' + assets)

//------------------------ Task 3 -------------------------

//------------------------ Task 5 -------------------------
let profit = 1000
let sales = 500
let gain = profit * sales
console.log('gain:' + gain)
//------------------------ Task 5 -------------------------

//------------------------ Task 5 -------------------------

let num1 = 7,
  num2 = 9,
  num3 = 2

let average = (num1 + num2 + num3) / 3
console.log('average:' + average)

//------------------------ Task 5 -------------------------

//------------------------ Task 6 -------------------------
let price = 150,
  discount = 30 / 100

let Discount = price - price * discount
console.log('discount:' + Discount)

//------------------------ Task 6 -------------------------

//------------------------ Task 7-------------------------

let age = 20
console.log(age >= 18 && age <= 30)

//------------------------ Task 7 -------------------------

//------------------------ Task 8 -------------------------
let number1 = 2,
  number2 = 3

let power = Math.pow(number1, number2)
console.log(power)
//------------------------ Task 8 -------------------------

//------------------------ Task 9 -------------------------

let Number1 = 10,
  Number2 = 4

let mode = 10 % 4
console.log(mode)

//------------------------ Task 9 -------------------------

typeof 100 //'number'
typeof 73.9 //'number'
typeof NaN //'number'
typeof 'Water' //'string'
typeof false //'boolean'
typeof (9 != 11) //'boolean'
'Orang' + 'e' // 'Orange'
'Orange' - 's' //NaN
'name' + 3 //'name3'
'name' - 3 //NaN
82 * 'word' //NaN
1 + 'hello' //'1hello'
'hello' + 1 //'hello1'
1 + true // 2
'hello' + true //'hellotrue'
typeof Infinity //'number'
1 == '1' // true
1 === '1' //false

let full_name = 'lathalzbaidy'
let length = full_name.length
console.log(length)

let text = 'We are the so-called \\Vikings\\ from the north.'
console.log(text)
let text2 = 'We are\b   \n the so-called  "Vikings" from the north.'
console.log(text2)
let text3 = "We are the so-called 'Vikings' from the north."
console.log(text3)
//we cant use duble"" then use inside duble""

let text4 = 'AppleBananaKiwi'
let part = text4.slice(7, 13)
console.log(part)

//------------------------ Task 10 -------------------------
let orange = 'Welcome to Orange'

console.log(orange.toUpperCase())
console.log(orange.slice(6, 9))
console.log(orange.replace(/WELCOME/i, 'hellow'))
console.log('Welcome to "Orange"')

console.log(orange.padEnd(25, ' jordan'))
console.log(orange.concat(' jordan'))

//------------------------ Task 10 -------------------------
//------------------------ Task 11 -------------------------

let cactus = 'cactus'
let first_char = cactus[0]

//in replace
cactus = cactus.replaceAll(first_char, '*')
console.log(cactus.replace('*', first_char))

// in slice & contact &replace
console.log('c' + cactus.slice(1).replace('c', '*'))

//in padStart
console.log(cactus.slice(1).replace('c', '*').padStart(6, 'c'))

// console.log(cactus.split(''))
//------------------------ Task 12-------------------------

let ByOrange = ['Coding', 'Academy', 'By', 'Orange']
// ByOrange[ByOrange.length - 1] = 'Jordnan'
// ByOrange.push('Jordnan')
// console.log(ByOrange)

// ByOrange = new Array('Coding', 'Academy')
// console.log(ByOrange)

// console.log(ByOrange.slice(1,3))

// ByOrange.unshift('Welcome')
// console.log(ByOrange)

// ByOrange.shift()
// console.log(ByOrange)

// let join = ByOrange.join(' ')
// console.log(join)

// ByOrange.splice(1, 2)
// console.log(ByOrange)

//------------------------ Task 12-------------------------

var fruit = ['banana', 'apple', 'orange', 'watermelon']
var vegetables = ['carrot', 'tpmato', 'pepper', 'lettuce']

// vegetables.pop()
// console.log(vegetables)

// fruit.shift()
// console.log(fruit)

// console.log(fruit.indexOf('orange'))

// fruit.push('5')
// console.log(fruit)

// console.log(vegetables.length)
// vegetables.push('5')
// console.log(vegetables)

let food = fruit.concat(vegetables)
console.log(food)

// food.splice(4, 2)
// console.log(food)

food.reverse()
console.log(food)

food = food.join(' ')
console.log(food)
