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



  //NEM MŰKÖDIK MÉG
  //ch img
  if (raceSelect.value === "") {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/red-among-us-noob.png" alt="Red character noob">`);
  }

 /*
  let colors = ['pink', 'red', 'orange', 'yellow', 'white'];
  let classes = ['fighter', 'innocent', 'noob'];

  if (race === pink && class. === fighter) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[0]}-among-us-${classes[0]}.png" alt="Pink character fighter">`);
  } else if (race === pink && class. === innocent) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[0]}-among-us-${classes[1]}.png" alt="Pink character ${classes[1]}">`);
  } else if (race === pink && class. === "" || race === pink && class. === noob) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[0]}-among-us-${classes[2]}.png" alt="Pink character ${classes[2]}">`);
  
  } else if (race === red && class. === fighter) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[1]}-among-us-${classes[0]}.png" alt="Red character fighter">`);
  } else if (race === red && class. === innocent) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[1]}-among-us-${classes[1]}.png" alt="Red character ${classes[1]}">`);

  } else if (race === orange && class. === fighter) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[2]}-among-us-${classes[0]}.png" alt="Orange character fighter">`);
  } else if (race === orange && class. === innocent) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[2]}-among-us-${classes[1]}.png" alt="Orange character ${classes[1]}">`);
  } else if (race === orange && class. === "" || race === orange && class. === noob) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[2]}-among-us-${classes[2]}.png" alt="Orange character ${classes[2]}">`);
  
  } else if (race === yellow && class. === fighter) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[3]}-among-us-${classes[0]}.png" alt="Yellow character fighter">`);
  } else if (race === yellow && class. === innocent) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[3]}-among-us-${classes[1]}.png" alt="Yellow character ${classes[1]}">`);
  } else if (race === yellow && class. === "" || race === yellow && class. === noob) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[3]}-among-us-${classes[2]}.png" alt="Yellow character ${classes[2]}">`);

  } else if (race === white && class. === fighter) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[4]}-among-us-${classes[0]}.png" alt="White character fighter">`);
  } else if (race === white && class. === innocent) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[4]}-among-us-${classes[1]}.png" alt="White character ${classes[1]}">`);
  } else if (race === white && class. === "" || race === white && class. === noob) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[4]}-among-us-${classes[2]}.png" alt="White character ${classes[2]}">`);
  } else {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[1]}-among-us-${classes[2]}.png" alt="Red character ${classes[2]}">`);
  }
*/

  //submit variable
  //let submit = document.getElementById('submit');
}

window.addEventListener('load', pageLoad);