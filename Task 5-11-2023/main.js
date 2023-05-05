// 1 -- Write a function that makes each word in a string an element of an array.
function ase(a) {
  a = a.split(' ')
  return a
}
console.log(ase('Orange Jordan'))
// Sample Input: “Orange Jordan”
// Sample Output: [“Orange”, “Jordan”]

// 2-- Write a function that converts the first seven digits of a mobile phone number to a hidden form.
console.log('-------------------------------')

function hiddenNumber(number) {
  let star = '*'
  number = number.split('')
  for (i = 0; i < number.length; i++) {
    if (i < 7) {
      number[i] = star
      continue
    }
    number = number.join('')
    return number
  }
}
console.log(hiddenNumber('0776807777'))
// Sample Input: 0776807777
// Sample Output: *******777

// 3-- Write a function that converts an email address to a hidden form.
console.log('-------------------------------')

function hiddenEmail(email) {
  //slice part in email
  let userName = email.slice(email.indexOf(email.charAt(0)), 6)
  let Mail = email.slice(email.indexOf('@'), email.lastIndexOf('.'))
  let dot = '.'
  userName += dot.repeat(3)
  email = `${userName}${Mail}.com`
  return email
}
console.log(hiddenEmail('orange_academy@orange.jo'))
// Sample Input: orange_academy@orange.jo
// Sample Output: orange…@orange.com

// 4-- Write a function that turns the first letter of every word in a string to the upper case.
console.log('-------------------------------')

function firstCapital(string) {
  string = string.split('')
  string[0] = string[0].toUpperCase()
  string = string.join('')
  return string
}
console.log(firstCapital('coding academy by orange'))
// Sample Input: “coding academy by orange”
// Sample Output: “Coding academy by orange”

// 5. Write a function that turns the first letter of every word in a string to the upper case.
console.log('-------------------------------')

function firtAllCapital(string) {
  string = string.split(' ')
  for (let i = 0; i < string.length; i++) {
    string[i] = `${string[i].charAt(0).toUpperCase()}${string[i].slice(1)}`
    console.log(string[i])
  }
  string = string.join(' ')
  return string
}

console.log(firtAllCapital('coding academy by orange”'))
// Sample Input: “coding academy by orange”
// Sample Output: “Coding Academy By Orang

// 6. Write a function that flips a number.
console.log('-------------------------------')

function sort(number) {
  let reverse = []
  for (let i = number.length - 1; i >= 0; i--) {
    reverse.push(number[i])
  }
  return reverse
}
console.log(sort('92485'))
// Sample Input: 92485
// Sample Output: 58429

// 7-- Write a function that swaps the value of 2 variables in at least three ways.
console.log('-------------------------------')

function swaps(a, b) {
  let x = a
  a = b
  b = x
  result = ` a ${a} ; b = ${b}`
  return result
}
console.log(swaps(3, 4))
// Sample Input: a=3, b=4
// Sample Output: a=4, b=3

//8. Write a function that removes an indexed character from a string.
console.log('-------------------------------')

function removes_letter(string, char) {
  let after = string.substring(0, char)
  console.log(after)
  let before = string.substring(char + 1, string.length)
  console.log(before)
  string = `${after}${before}`
  return string
}
console.log(removes_letter('Orange', 3))
// Sample Input: (“Orange”, 3)
// Sample Output: Orage

// 9. Write a function that merges two strings after removing the first character of each one.
console.log('-------------------------------')

function removeFirstLetter(...string) {
  let concat = []
  for (let i = 0; i < string.length; i++) {
    concat.push(`${string[i].slice(1)}`)
  }
  return concat
}
console.log(removeFirstLetter('lora', 'inge'))
// Sample Input: (“lora”, “inge”)
// Sample Output: orange

// 10-- Write a function that ensures a specific character appears in a string's first or last position.
console.log('-------------------------------')

function character(char, string) {
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(char) === string.charAt(string.length - 1)) {
      return true
    } else {
      return false
    }
  }
}
console.log(character('o', 'orango'))
// Sample Input: (“o”, “orange”)
// Sample Output: true
// Sample Input: (“z”, “orange”)
// Sample Output: false

/*11-- Write a function that takes a string and returns every word in the string as an array element.
 Sample Input: “Coding Academy by Orange”*/
console.log('-------------------------------')

function stringToArr(...string) {
  string = string.join(' ').split(' ')
  return string
}

console.log(stringToArr('Coding Academy by Orange'))
// Sample Input: “Coding Academy by Orange”
// Sample Output: [“Coding”, “Academy”, “By”, “Orange”]

// 12-- Write a function that takes a string and reorders the characters alphabetically.

function alphabetically(string) {
  string = string.toLowerCase().split('').sort().join('')
  return string
}
console.log(alphabetically('Orange'))
// Sample Input: “Orange”
// Sample Output: “aegnor”

// Conditionals Duration: 1 hour

console.log('-------------------------------')
// 1. If someone is applying to the academy’s website, create the conditional to cover these situations:
// ● If the candidate is older than 30, print out: “You are not eligible. You may join other programs.”
// ● If the candidate is between 18 and 30, print out: “You are eligible. Start your application.”
// ● If the candidate is younger than 18, print out: “You may join the kids' program.”
// ● If the candidate is older than 60, print out: “You may join the seniors’ program.”
// ● Calculate the age using the year of birth dynamically.

function applying(age) {
  let date = new Date()
  let year = date.getFullYear()
  age = `birthday ${year - age}`
  console.log(age)
  if (age >= 60) {
    return 'You may join the seniors’ program.'
  } else if (age >= 18 && age <= 30) {
    return 'You are eligible. Start your application.'
  } else if (age < 18) {
    return "You may join the kids' program."
  } else {
    return 'You may join other programs.'
  }
}
console.log(applying(30))

// 2. Write a function that takes a string and switches the letters' case from upper to lower and vice
console.log('-------------------------------')

function toUppLow(string) {
  let start = 0
  let result = ''
  for (let i = start; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      result += string[i].toLowerCase()
    } else if (string[i] === string[i].toLowerCase()) {
      result += string[i].toUpperCase()
    }
    console.log(result)
  }
}
toUppLow('OrAnGe')
// versa.
// Sample Input: “OrAnGe”
// Sample Output: “oRaNgE”

// 3. Write a function that takes a string, capitalizes each word's first letter, and removes all spaces
console.log('-------------------------------')

function CamelCase(string) {
  string = string.split(' ').join('')
  return string
}
console.log(CamelCase('Coding Academy By Orange'))

// (Camel Case).
// Sample Input: “Coding Academy By Orange”
// Sample Output: “CodingAcademybyOrange”

// 4. Write a function that removes a specific element in an array.
console.log('-------------------------------')
function removesElm(arr, string) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === string) {
      arr.splice(arr.indexOf(string), 1)
    }
  }
  return arr
}
function removesElm(arr, string) {
  const index = arr.indexOf(string)
  if (index !== -1) {
    arr.splice(index, 1)
  }
  return arr
}

console.log(removesElm(['Coding', 'Academy', 'By', 'Orange'], 'Orange'))

// 5-- Write a function that checks if a number is odd or even.
console.log('-------------------------------')

function oddEven(number) {
  //   console.log(number)
  let odd = ''
  let even = ''

  if (number % 2 === 0) {
    even += number
    return `Even number : ${even}`
  } else {
    odd += number
    return `Odd number : ${odd}`
  }
}

console.log(oddEven(10))

// 6-- Write a function that checks whether an input variable is a number
console.log('-------------------------------')

function number(num) {
  if (Number.isInteger(num)) {
    return `this is number : ${num}`
  } else {
    return `please enter number`
  }
}
console.log(number('10'))

// 7-- Write a function that finds the largest of two numbers
console.log('-------------------------------')
/*function largest(...number) {
  console.log(number)
  for (let i = 1; i < number.length; i++) {
    for (let j = 0; j < number.length; j++) {
      if (number[i] < number[j]) {
        let x = number[i]
        number[i] = number[j]
        number[j] = x
      }
    }
  }
  console.log(number)
}*/

function largest(...number) {
  console.log(number)
  max = number[0]
  max2 = number[0] // 4
  for (let j = 0; j < number.length; j++) {
    if (number[j] > max) {
      max = number[j]
    }
  }
  console.log(max)
  for (i = 0; i < number.length; i++) {
    if (max2 < max && max2 < number[i]) {
      max2 = number[i]
      console.log(max2)
    }
  }
  return max2
}

console.log(largest(4, 5, 13, 7, 6, 30, 20))

// . Write a function that checks if a triangle is equilateral, scalene, or isosceles.
console.log('-------------------------------')

function triangle(s1, s2, s3) {
  if (s1 == s2 && s2 == s3) {
    return 'equilateral'
  } else if (s1 != s2 && s2 != s3 && s3 != s1) {
    return 'scalene'
  } else {
    return 'isosceles'
  }
}
console.log(triangle(4, 4, 4))
console.log(triangle(1, 4, 4))
console.log(triangle(4, 3, 5))

// 9-- Write a function that finds if a number is present in a given range.
console.log('-------------------------------')

function range(number) {
  let range =
    number < 100 && number > 50 ? console.log('done') : console.log('reject')
}

range(100)
// 10. Write a function that checks whether a year is a leap year.
console.log('-------------------------------')

function leapYear(years) {
  if (years % 4 === 0 && years % 100 === 0 && years % 400 === 0) {
    console.log('this is leapYear ')
  } else {
    console.log('not leapYear')
  }
}
leapYear(2000)

// 1800
// 1900
// 2100
// 2200
// 2500
// Loops Duration: 2 hours
console.log('---------------------------')
// 1--- Write a script to print out all even numbers between 1 and 50, twice.
// Use 1 for loop and 1 while loop.
// 2---- Try solving the previous exercise using a single for loop.
// 3----  Resolve Exercise 1 so that one loop prints out even numbers and the second prints out the odd
console.log('Using while loop:')
// Using while loop 1

let counter = 1
while (counter < 50) {
  if (counter % 2 === 0) {
    console.log(`this even ${counter}`)
  } else {
    console.log(`this odd ${counter}`)
  }
  counter += 1
}
// Using while loop 2
console.log('Using while loop:')
let j = 2
while (j <= 50) {
  console.log(j)
  j += 2
}

console.log('Using for loop:')
// Using for loop   1
for (let i = 1; i < 50; i++) {
  if (i % 2 !== 0) {
    console.log(`this odd ${i}`)
  } else {
    console.log(`this even ${i}`)
  }
}
// Using for loop 2
console.log('Using for loop:')
for (let i = 2; i <= 50; i += 2) {
  console.log(i)
}
// evenLoop(20, 30, 40, 60)

console.log('----------------------------------')

// Fizz-Buzz! Write a script that does the following:
// ● Counts from 1 to 100 and prints out something for each number:

function FizzBuzz() {
  let result = []
  for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('Fizz Buzz')
    } else if (i % 3 === 0) {
      result.push('fizz')
    } else if (i % 5 === 0) {
      result.push('Buzz')
    } else {
      result.push(i)
    }
  }
  return result
}
console.log(FizzBuzz())

// ○ If the number is divisible by 3, print "Fizz"
// ○ If the number is divisible by 5, print "Buzz"
// ○ If the number is divisible by both 3 and 5, print "FizzBuzz"
// ○ If the number does not meet any of the above conditions, just print the number
// Output:
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz,
// 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz,
// Fizz, ...

// 5. Rewrite the script with a function so that each iteration will trigger a function call.
// Sample Input: fizzBuzz(1)
// Sample Output: 1
console.log('------------------------------------')
function FizzBuzz2(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('Fizz Buzz')
  } else if (num % 3 === 0) {
    console.log('fizz')
  } else if (num % 5 === 0) {
    console.log('Buzz ')
  } else {
    console.log(num)
  }
}
FizzBuzz2(10)

console.log('------------------aaaaaaaaaa------------------')

// 6. Create a recursive solution. A FizzBuzz function
// calls itself to continue the series.

console.log('---------------aaa---------------------')
function call(num) {
  if (num === 0) {
    return
  }
  if (num % 3 === 0 && num % 5 === 0) {
    console.log('Fizz Buzz')
  } else if (num % 3 === 0) {
    console.log('fizz')
  } else if (num % 5 === 0) {
    console.log('Buzz ')
  } else {
    console.log(num)
  }
  call(num - 1)
}
call(100)

console.log('---------------------------')

// 8---- Write a function that counts the existence of a specific character within a string, despite the case.

function existence_char(string, char) {
  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) === char) {
      console.log(i + 1)
    }
  }
}
existence_char('Coding Academy by Orange', 'o')

console.log('---------------------------')
// 9---- Write for loops that accomplish the following tasks:

// a----Print the numbers 0 - 20, one number per line.

function printNum() {
  for (let i = 0; i <= 20; i++) {
    console.log(i)
  }
}

printNum()

// b---- Print only the ODD values from 3 - 29, one number per line.

function printOdd() {
  for (let i = 3; i <= 29; i++) {
    if (i % 2 === 1) {
      console.log(i)
    }
  }
}

printOdd()

// c---- Print the EVEN numbers 12 down to -14 in descending order, one number per line.
function printEven() {
  for (let i = 12; i >= -14; i--) {
    if (i % 2 === 0) {
      console.log(i + ' --')
    }
  }
}

printEven()

// d--- Print the numbers 50 down to 20 in descending order, but only if the numbers are multiples of 3.

console.log('---------------')
// 10 --- Initialize two variables to hold the string 'CodingAcademy' and the
// array [7, 500, 'KH404', 'black', 36], then construct for loops to accomplish the following tasks:

// e--- Print each element of the array to a new line.
string = 'CodingAcademy'
array = [7, 500, 'KH404', 'black', 36]

function printElement(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}
printElement(array)
console.log('----------------')
// f--- Print each string character in reverse order to a new line.

// soulution 1
function reverseChar(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i])
  }
}
reverseChar(string)

//soulution 2
// function reverseChar(str) {
//   str = str.split('').reverse()
//   for (elm of str) {
//     console.log(elm)
//   }
// }
// reverseChar(string)

// 11---- Construct a for loop that sorts the array [7, 23, 18, 9, -13, 38, -10, 12, 0, 124] into two new arrays:
// Define an empty evens array to hold the even numbers and an odds array for the odd numbers.
// In the loop, determine if each number is even or odd, then put that number into evens or odds, as
// appropriate.

console.log('----------------')

array = [7, 23, 18, 9, -13, 38, -10, 12, 0]

function Odd_Even(arr) {
  let Odd = []
  let Even = []
  for (elm of arr) {
    if (elm % 2 === 0) {
      Even.push(elm)
    } else {
      Odd.push(elm)
    }
  }
  console.log('even number :' + Even)
  console.log('odd number : ' + Odd)
}
Odd_Even(array)
console.log('-------------')
// 12----- Write the code to create meals using elements from these arrays, ensuring the rules below.

var Protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans']
let Grain = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']
let Vegetable = [
  'peas',
  'green beans',
  'kale',
  'edamame',
  'broccoli',
  'asparagus',
  'asdasd',
  'asdasd',
]
let Beverage = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']
let Dessert = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']
let layth

let numMeal = 4
for (let j = 0; j < numMeal; j++) {
  function meal(num, ...array) {
    layth = []
    for (let i = 0; i < num; i++) {
      layth.push(array[i][Math.floor(Math.random() * num)])
    }
    console.log(layth)
  }
}
meal(5, Protein, Grain, Vegetable, Beverage, Dessert)
