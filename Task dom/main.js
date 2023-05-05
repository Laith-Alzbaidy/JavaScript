let BMI = document.querySelectorAll('input')

// let btn = document.querySelectorAll('btn')
// let div = document.querySelectorAll('div')

console.log(BMI[1])
document.getElementById('b').addEventListener('click', calc)
// exercices 1 --------------

var heigth = 10
var weight = 5

function calc() {
  heigth = BMI[0].value
  weight = BMI[1].value
  console.log(heigth)
  console.log(heigth)
  if (!heigth && !weight) {
    console.log('pleas enter heigth and weight')
  } else if (heigth === '' && weight !== '') {
    console.log('please enter heigth')
  } else if (weight === '' && heigth !== '') {
    console.log('please enter weight')
  } else {
    let result = heigth / weight
    console.log(result)
  }
}
console.log(heigth)
console.log(heigth)

// exercices 2  --------------
i = 1
function creat() {
  let div = document.createElement('div')
  let btn = document.createElement('button')
  console.log('aaaaaaaaaaaa')
  div.innerHTML = `${i}`
  btn.innerHTML = `delete `
  div.style = ` background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 150px;`
  document.querySelector('header').append(div)
  div.append(btn)

  btn.addEventListener('click', del)
  i += 1

  function del() {
    div.remove()
  }
}

// exercices 3  --------------

let imood = document.querySelector('.imood')
let btnmood = document.getElementById('btnmood')
let lab = document.querySelectorAll('label')
console.log(lab)
btnmood.addEventListener('click', function () {
  imood.classList.toggle('moodstyle')

  for (let x of lab) {
    x.classList.toggle('color_lable')
  }
})
console.log('saaaaaaaaaaaaa')
let main = document.getElementById('main')
let input = document.getElementById('input_feild')
let buttton = document.getElementById('add')
buttton.addEventListener('click', function addItem() {
  let element_value = input.value
  console.log(element_value)
  let divlist = document.createElement('div')
  let h4 = document.createElement('h4')
  let btn_creat = document.createElement('button')
  let remove = document.createElement('button')
  divlist.setAttribute('id', 'h4_btn')
  main.append(divlist)
  divlist.append(h4)
  divlist.append(btn_creat)
  divlist.append(remove)
  h4.innerHTML = element_value
  btn_creat.innerHTML = 'update'
  remove.innerHTML = 'delete'
  btn_creat.addEventListener('click', function update() {
    let newupdate = prompt('please insert your value ')
    h4.innerHTML = newupdate
  })
  remove.addEventListener('click', function remove() {
    divlist.remove()
  })
})
