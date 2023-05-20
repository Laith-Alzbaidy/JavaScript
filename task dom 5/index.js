let section = document.querySelector('section')
let card = document.querySelectorAll('.card')

for (let i = 0; i < card.length; i++) {
  card[i].addEventListener('click', function () {
    card[i].classList.toggle('cardd')
  })
}

window.onload = shuffle()
function shuffle() {
  let arr = []
  for (let i = 0; i < card.length; i++) {
    let ran = Math.floor(Math.random() * card.length)
    section.append(card[ran])
    console.log(card[ran])
    while (arr.includes(ran)) {
      ran = Math.floor(Math.random() * card.length)
    }
    arr.push(ran)
    console.log(ran)
  }
}


