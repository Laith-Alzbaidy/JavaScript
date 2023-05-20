let c = 7;
let w = 8;
document.getElementById("can").textContent = c;
document.getElementById("wan").textContent = w;
let arr = [
  {
    question:
      "Which of the following programming languages is known for its use in artificial intelligence and machine learning?",
    ans1: "java",
    ans2: "Ruby",
    ans3: "Java",
    corect: "paython"
  },
  {
    question:
      "Which of the following is NOT a fundamental data type in Python?",
    ans1: "Boolean",
    ans2: "Integer",
    ans3: "Array",
    corect: "paython"
  },
  {
    question: "JALLAAS?",
    ans1: "Boolean",
    ans2: "Integer",
    ans3: "Array",
    corect: "paython"
  }
];
let arrkey = Object.keys(arr[0]);

let x = document.getElementsByClassName("Questions")[0];
for (let i = 0; i < arr.length; i++) {
  let divAns = document.createElement("div");
  let q = document.createElement("h4");
  q.innerHTML = arr[i][arrkey[0]];
  x.appendChild(divAns);
  divAns.appendChild(q);
  for (let j = 1; j <= 4; j++) {
    let ans = document.createElement("p");
    ans.innerHTML = arr[i][arrkey[j]];
    console.log(ans);
    if (arr[i][arrkey[j]] === arr[i].corect) {
      ans.style.background = "green";
    }
    divAns.appendChild(ans);
  }
}

// /**3. Which of the following is NOT a fundamental data type in Python?
//    a) Integer
//    b) Boolean
//    c) String
//    d) Array

//  */
