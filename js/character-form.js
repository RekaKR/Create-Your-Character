function pageLoad() {
  
  //top pic
  document.querySelector("body").insertAdjacentHTML('afterbegin', `
  <img class="main-sign" src="../img/among-us-sign.png" alt="">
  `);


  //ch text bar
  let text = document.getElementById("text");

  for (let i = 0; i < 4; i++) {
    text.insertAdjacentHTML('beforeend', `<div></div>`);
  }

  let divs = text.querySelectorAll("div");


  //ch img
  text.insertAdjacentHTML('beforebegin', `<img src="../img/red-among-us-noob.png" alt="Red character noob">`);

  
  //ch name
  let chName = document.getElementById("ch-name");

  function showChName() {
    divs[0].textContent = chName.value;
  }

  chName.addEventListener('input', showChName);


  //race
  let raceSelect = document.getElementById("race-select");

  function racePrint() {
    divs[1].textContent = raceSelect.value;
  }

  raceSelect.addEventListener('change', racePrint);


  //gender
  let genderSelect = document.getElementById("gender-select");

  function genderPrint() {
    divs[2].textContent = genderSelect.value;
  }

  genderSelect.addEventListener('change', genderPrint);


  //class
  let classSelect = document.getElementById("class-select");

  function classPrint() {
    divs[3].textContent = classSelect.value;
  }

  classSelect.addEventListener('change', classPrint);


  //submit variable
  //let submit = document.getElementById('submit');
}

window.addEventListener('load', pageLoad);