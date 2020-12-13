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
  let au = '-among-us-';
  let classes = ['fighter', 'innocent', 'noob'];
  let colorsChs = ['Pink character', 'Red character', 'Orange character', 'Yellow character', 'White character'];

  if (race === pink && class. === fighter) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[0]}${au}${classes[0]}.png" alt="${colorChs[0]} ${classes[0]}">`);
  } else if (race === pink && class. === innocent) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[0]}${au}${classes[1]}.png" alt="${colorChs[0]} ${classes[1]}">`);
  } else if (race === pink && class. === "" || race === pink && class. === noob) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[0]}${au}${classes[2]}.png" alt="${colorChs[0]} ${classes[2]}">`);
  
  } else if (race === red && class. === fighter) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[1]}${au}${classes[0]}.png" alt="${colorChs[1]} ${classes[0]}">`);
  } else if (race === red && class. === innocent) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[1]}${au}${classes[1]}.png" alt="${colorChs[1]} ${classes[1]}">`);

  } else if (race === orange && class. === fighter) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[2]}${au}${classes[0]}.png" alt="${colorChs[2]} ${classes[0]}">`);
  } else if (race === orange && class. === innocent) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[2]}${au}${classes[1]}.png" alt="${colorChs[2]} ${classes[1]}">`);
  } else if (race === orange && class. === "" || race === orange && class. === noob) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[2]}${au}${classes[2]}.png" alt="${colorChs[2]} ${classes[2]}">`);
  
  } else if (race === yellow && class. === fighter) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[3]}${au}${classes[0]}.png" alt="${colorChs[3]} ${classes[0]}">`);
  } else if (race === yellow && class. === innocent) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[3]}${au}${classes[1]}.png" alt="${colorChs[3]} ${classes[1]}">`);
  } else if (race === yellow && class. === "" || race === yellow && class. === noob) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[3]}${au}${classes[2]}.png" alt="${colorChs[3]} ${classes[2]}">`);

  } else if (race === white && class. === fighter) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[4]}${au}${classes[0]}.png" alt="${colorChs[4]} ${classes[0]}">`);
  } else if (race === white && class. === innocent) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[4]}${au}${classes[1]}.png" alt="${colorChs[4]} ${classes[1]}">`);
  } else if (race === white && class. === "" || race === white && class. === noob) {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[4]}${au}${classes[2]}.png" alt="${colorChs[4]} ${classes[2]}">`);
  } else {
    text.insertAdjacentHTML('beforebegin', `<img src="../img/${colors[1]}${au}${classes[2]}.png" alt="${colorChs[1]} ${classes[2]}">`);
  }
*/
}

window.addEventListener('load', pageLoad);