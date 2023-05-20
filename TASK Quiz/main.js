//define variables
// let timer = document.getElementById("timer");
let questionHead = document.getElementById('question')
let numberOfQuestion = document.getElementById('numToCon')
let titleQuestion = document.getElementById('titel-question')
let submitButton = document.querySelector('button')
let labels = document.querySelectorAll('label')
let welcome = document.getElementById('welcome')
let Min = document.getElementById('min')
let sec = document.getElementById('sec')
let SQ = document.getElementById('SQ')

// start.html
let username = document.getElementById('username')
let starts = document.getElementById('start')
// report.html
let score = document.getElementById('can')

// contain indexes for question that we get them randomly from questions array
var randomIndex = []

// we create object questions
let questions = [
  {
    title:
      '. Which of the following programming languages is known for its use in artificial intelligence and machine learning?',
    a: ')Java',
    b: ')Ruby',
    c: ')Python',
    d: ')C#',
    answer: 'Python',
  },
  {
    title: '. What does CSS stand for in web development?',
    a: ')Cascading Style Sheets',
    b: ')Creative Style System',
    c: ')Computed Style Structure',
    d: ')Custom Styling Syntax',
    answer: 'Cascading Style Sheets',
  },
  {
    title: '. Which of the following is NOT a fundamental data type in Python?',
    a: ')Integer',
    b: ')Boolean',
    c: ')String',
    d: ')Array',
    answer: 'Array',
  },
  {
    title:
      '. Which keyword is used to declare a variable that can be accessed and modified by all functions in a program',
    a: ')global',
    b: ')static',
    c: ')public',
    d: ')volatile',
    answer: 'global',
  },
  {
    title:
      '. Which of the following is an example of a popular front-end JavaScript framework?',
    a: ')Angular',
    b: ')Django',
    c: ')CSS',
    d: ')React',
    answer: 'Angular',
  },
  {
    title:
      '. In object-oriented programming, what is the term used to describe the process of one class inheriting properties and methods from another class?',
    a: ')Encapsulation',
    b: ')Polymorphism',
    c: ')Inheritance',
    d: ')Abstraction',
    answer: 'Inheritance',
  },
  {
    title:
      '. Which of the following is NOT a valid control structure in most programming languages?',
    a: ')if-else',
    b: ')for loop',
    c: ')repeat-until',
    d: ')make-while',
    answer: 'make-while',
  },
  {
    title:
      '. Which programming language is often used for system administration and scripting tasks in Unix-like operating systems?',
    a: ')Perl',
    b: ')Ruby',
    c: ')Lua',
    d: ')PowerShell',
    answer: 'Perl',
  },
  {
    title:
      '. What is the purpose of a constructor in object-oriented programming?',
    a: ')To destroy an object',
    b: ')To allocate memory for an object',
    c: ")To initialize an object's state",
    d: ')To define the type of an object',
    answer: "To initialize an object's state",
  },
  {
    title:
      '. Which of the following sorting algorithms has the worst-case time complexity of O(n^2)?',
    a: ')Merge sort',
    b: ')Quick sort',
    c: ')Insertion sort',
    d: ')Heap sort',
    answer: 'Insertion sort',
  },
  {
    title: '. Which of the following is NOT a valid type of database?',
    a: ')Relational database',
    b: ')NoSQL database',
    c: ')XML database',
    d: ')Binary database',
    answer: 'Binary database',
  },
  {
    title: ". What is the purpose of the 'break' statement in programming?",
    a: ')To exit a loop or switch statement',
    b: ')To execute a block of code repeatedly',
    c: ')To jump to a specific line of code',
    d: ')To display a specific error message',
    answer: 'To exit a loop or switch statement',
  },
  {
    title:
      '. Which programming language is commonly used for building Android applications?',
    a: ')Java',
    b: ')C++',
    c: ')Python',
    d: ')JavaScript',
    answer: 'Kotlin',
  },
  {
    title:
      '. What is the term used to describe a piece of code that is repeatedly executed in a loop?',
    a: ')Function',
    b: ')Procedure',
    c: ')Statement',
    d: ')Iteration',
    answer: 'Iteration',
  },
  {
    title: '. Which of the following is NOT a version control system?',
    a: ')Git',
    b: ')Subversion',
    c: ')Mercurial',
    d: ')Java',
    answer: 'Java',
  },
  {
    title: '. Which of the following is a high-level programming language?',
    a: ')Assembly',
    b: ')C',
    c: ')python',
    d: ')Machine code',
    answer: 'python',
  },
  {
    title: '. What does HTML stand for?',
    a: ')Hypertext Markup Language',
    b: ')Hyperlink and Text Markup Language',
    c: ')High-level Text Manipulation Language',
    d: ')Human-Readable Text Markup Language',
    answer: 'Hypertext Markup Language',
  },
  {
    title:
      '. Which programming language is commonly used for mobile app development?',
    a: ')All of the above',
    b: ')Java',
    c: ')C#',
    d: ')Swift',
    answer: 'All of the above',
  },
  {
    title:
      '. What is the output of the following code snippet in Python?```python print(2 + 3 * 4)```',
    a: ')14',
    b: ')20',
    c: ')24',
    d: ')9',
    answer: '14',
  },
  {
    title:
      '. Which programming paradigm focuses on breaking a program into small, reusable parts ?',
    a: ')Object-oriented programming',
    b: ')Functional programming',
    c: ')Procedural programming',
    d: ')Modular programming',
    answer: 'Modular programming',
  },
  {
    title: '. What is the file extension for a JavaScript file?',
    a: ').java',
    b: ').js',
    c: ').html',
    d: ').css',
    answer: '.js',
  },
  {
    title:
      '. Which programming language is used for statistical analysis and data manipulation?',
    a: ')R',
    b: ')C++',
    c: ')PHP',
    d: ')Ruby',
    answer: 'R',
  },
  {
    title: '. What is the purpose of the if statement in programming?',
    a: ')To define a loop',
    b: ')To declare a function',
    c: ')To make a decision based on a condition',
    d: ')To import external libraries',
    answer: 'To make a decision based on a condition',
  },
  {
    title:
      '. Which data structure follows the first-in, first-out (FIFO) principle?',
    a: ')Stack',
    b: ')Queue',
    c: ')Array',
    d: ')Linked list',
    answer: 'Queue',
  },
  {
    title:
      '. Which of the following is an example of a relational database management system?',
    a: ')MySQL',
    b: ')MongoDB',
    c: ')Redis',
    d: ')SQLite',
    answer: 'MySQL',
  },
  {
    title:
      '. Which programming language is primarily used for web development?',
    a: ')Java',
    b: ')C++',
    c: ')JavaScript',
    d: ')Swift',
    answer: 'JavaScript',
  },
  {
    title: '. What is the purpose of version control systems like Git?',
    a: ')To automatically test code for errors',
    b: ')To manage and track changes in source code',
    c: ')To convert code into executable binaries',
    d: ')To generate documentation from code comments',
    answer: 'To manage and track changes in source code',
  },
  {
    title:
      '. In object-oriented programming, what is the process of creating an instance of a class called?',
    a: ')Inheritance',
    b: ')Abstraction',
    c: ')Encapsulation',
    d: ')Instantiation',
    answer: 'Instantiation',
  },
  {
    title:
      '. Which of the following is NOT a valid variable naming convention in most programming languages?',
    a: ')camelCase',
    b: ')snake_case',
    c: ')Encapsulation',
    d: ')kebab-case',
    answer: 'kebab-case',
  },
  {
    title: '. What does API stand for?',
    a: ')Application Programming Interface',
    b: ')Advanced Program Initialization',
    c: ')Application Process Integration',
    d: ')Automated Program Invocation',
    answer: 'Application Programming Interface',
  },
]

// to get questions randomly
function shuffleQuestion() {
  for (var i = 0; i < questions.length - 20; i++) {
    let indexQuestions = Math.floor(Math.random() * questions.length)
    // to prevent get question more than one time
    while (randomIndex.includes(indexQuestions)) {
      indexQuestions = Math.floor(Math.random() * questions.length)
    }
    randomIndex.push(indexQuestions)
    console.log(questions[randomIndex[i]]['title'])
  }
}

shuffleQuestion()

// call keys of object
let keys = Object.keys(questions[0])
keys.length = 5
console.log(keys)

// set answer
var count = 0
var j = 0
function nextQuestion() {
  SQ.innerHTML = 10
  titleQuestion.textContent = questions[randomIndex[j]]['title']
  for (let i = 0; i < labels.length; i++) {
    let choices = questions[randomIndex[j]][keys[i + 1]]
    console.log(choices)
    labels[i].textContent = keys[i + 1] + choices
  }
  numberOfQuestion.textContent = ++count
  j++
  if (count == 10 && SQ.innerHTML == 10) {
    submitButton.textContent = 'submit'
    submitButton.addEventListener('click', () => {
      window.open(
        './report.html?correctQuestion=' +
          JSON.stringify(correctQuestion) +
          '&lastValue=' +
          JSON.stringify(lastValue),
        '_blank',
        'noopener, noreferrer'
      )

      $('.container_card').remove()
      $('.containerTimer').remove()

      let text = document.createElement('div')
      text.style =
        '    font-size: 50px;background-color: white;border-radius: 20px; padding: 20px;'
      text.innerHTML = 'your Quiz finished'
      document.body.appendChild(text)
    })
  }
}
nextQuestion()

submitButton.addEventListener('click', function (event) {
  nextQuestion()
  event.preventDefault()
})

let user
function start(e) {
  userValidation = false
  if (username.value !== '') {
    userValidation = true
    window.open('./index.html')
    localStorage.setItem('username', username.value)
  } else {
    e.preventDefault()
  }
}

let counterSecond = setInterval(second, 1000)
function second() {
  if (Min.innerHTML == 0 && sec.innerHTML == 0) {
    clearInterval(counterSecond)
  } else if (sec.innerHTML == 0) {
    Min.innerHTML -= 1
    sec.innerHTML = 60
  } else {
    sec.innerHTML -= 1
  }
}

let counter1 = setInterval(secondQuestion, 1000)
function secondQuestion() {
  SQ.innerHTML -= 1
  if (SQ.innerHTML <= 0 && count < 10) {
    disable()
    SQ.innerHTML = 0
  } else if (count == 10 && SQ.innerHTML == 0) {
    // window.open("./showResult.html");
    clearInterval(counter1)
  } else {
    enable()
  }
}

// for welcome page
welcome.textContent = `Welcome ${localStorage.getItem('username')}`
window.setTimeout(settime, 4000)
function settime() {
welcome.innerHTML = ''
}
// check answer
// let z = 0
// let scoreCorrect = 0
// let scoreInCorrect = 0
// function correctAnswer(){
//     for(let i =0 ;i<labels.length ;i++){
//       labels[i].addEventListener("click", function(){
//         if(questions[randomIndex[z]]["answer"] === labels[i].innerHTML.slice(2).trim()){
//           console.log("done");
//           scoreCorrect +=1
//           console.log(`scoreCorrect ${scoreCorrect} ${questions[randomIndex[z]]["title"]}`)
//         }
//         else{
//           console.log("false")
//           scoreInCorrect +=1
//           console.log(`scoreInCorrect ${scoreInCorrect} ${questions[randomIndex[z]]["title"]}`)
//         }
//         z++
//     })
//   }
//   changeColor();
// }

// correctAnswer()

// change color and get last hit and return if correct or not
var correctQuestion = []
var wrongQuestion = []
var lastValue = []
let z = 0
function changeColorGetLastValue() {
  var selected_item = ''
  for (let i = 0; i < labels.length; i++) {
    labels[i].addEventListener('click', function () {
      // Remove 'selected' class from previously selected item
      if (selected_item !== '') {
        selected_item.classList.remove('change-color')
      }
      // Add 'selected' class to newly clicked item
      labels[i].classList.add('change-color')
      if (
        labels[i].innerHTML.slice(2).trim() ==
        questions[randomIndex[z]]['answer']
      ) {
        if (!correctQuestion.includes(labels[i].innerHTML.slice(2))) {
          correctQuestion.push(labels[i].innerHTML.slice(2))
          console.log(correctQuestion)
          console.log('correct')
        }
      } else if (!wrongQuestion.includes(labels[i].innerHTML.slice(2).trim())) {
        console.log('wrong')
        wrongQuestion.push(labels[i].innerHTML.slice(2))
        console.log(wrongQuestion)
      }
      // Store reference to newly clicked item
      selected_item = labels[i]
    })
    submitButton.addEventListener('click', function () {
      labels[i].classList.remove('change-color')
    })
  }
  submitButton.addEventListener('click', function () {
    z++
    console.log(z)
    lastValue.push(wrongQuestion[wrongQuestion.length - 1])
    if (lastValue.includes(undefined)) {
      lastValue.pop()
    } else {
      console.log(lastValue)
      console.log(questions[randomIndex[z]]['title'])
    }
  })
}
// score.innerHTML = correctQuestion.length;
changeColorGetLastValue()

// flag to check if the question is enable or not
let IsEnable = true
// enable question
function enable() {
  if (IsEnable === false) {
    for (let i = 0; i < 4; i++) {
      IsEnable = true
      labels[i].style.pointerEvents = 'auto'
      labels[i].style.opacity = 1
    }
  }
}
// disable question
function disable() {
  if (IsEnable === true) {
    for (let i = 0; i < 4; i++) {
      IsEnable = false
      labels[i].style.pointerEvents = 'none'
      labels[i].style.opacity = 0.5
    }
  }
}

// --------------------------------------------------------------
//  version 2 to change color
// function changeColor(){
//   var selected_item = null;
// // Add event listener to each list item
// // var items = document.querySelectorAll('li');
// labels.forEach(function(labels) {
//   labels.addEventListener('click', function() {
//     // Remove 'selected' class from previously selected item
//     if (selected_item !== null) {
//       selected_item.classList.remove('change-color');
//     }
//     // Add 'selected' class to newly clicked item
//     labels.classList.add('change-color');
//     // Store reference to newly clicked item
//     selected_item = labels;
//   });
// });
// }

// changeColor();

// ----------------------------------------------------------------------------------------------------------------------------------------------
// set question and answer to the page
// let count = 0;//1 2 3 4 5 6 7 8 9 10
// let countQuestion = 1;
// function assignQuestion(){
//   for(let i = 0; i<randomIndex.length;i++){
//         let valueQuestion = questions[randomIndex[count]]["title"];
//         titleQuestion.textContent = valueQuestion;
//         numberOfQuestion.textContent = ++count;
//         break;
//     }
//   }
// assignQuestion()

// setAnswer();

// submit function
// submitButton.addEventListener("click",function(event){
//   setAnswer()
// })
