  // let flip_card = document.getElementById("flip");
  let section = document.querySelector("section");
  let card = document.querySelectorAll(".card");
  console.log(typeof card);

  for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", function () {
      card[i].classList.toggle("cardd");
    });
  }

  window.onload = shaffl;
  function shaffl() {
    for (let i = 0; i < card.length; i++) {
      let ran = Math.floor(Math.random() * card.length);
      section.append(card[ran]);
    }
  }