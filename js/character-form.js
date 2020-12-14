function pageLoad() {
  
  //Among us sign
  document.querySelector("body").insertAdjacentHTML('afterbegin', `
  <img id="among-us-sign" class="main-sign" src="../img/among-us-sign.png" alt="Among us">
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


  //ch img
  let colors = ['pink', 'red', 'orange', 'yellow', 'white'];
  let classes = ['fighter', 'innocent', 'noob'];


  text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[1]}-among-us-${classes[2]}.png" alt="Red character ${classes[2]}">`);

  function reLoad() {
    let imgs = document.querySelectorAll("#img");
    let raceIndex = colors.indexOf(raceSelect.value);
    let classIndex = classes.indexOf(classSelect.value);
    imgs[0].remove();
    
    if (raceIndex === -1) {
      raceIndex = 0;
    }

    if (classIndex === -1) {
      classIndex = 0;
    }

    text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[raceIndex]}-among-us-${classes[classIndex]}.png"> alt="character-image`);
  }

/*
  function reLoad() {
    let imgs = document.querySelectorAll("#img");

    if (raceSelect.value === `${colors[0]}` && classSelect.value === `${classes[0]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[0]}-among-us-${classes[0]}.png" alt="Pink character ${classes[0]}">`);
    } else if (raceSelect.value === `${colors[0]}` && classSelect.value === `${classes[1]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[0]}-among-us-${classes[1]}.png" alt="Pink character ${classes[1]}">`);
    } else if (raceSelect.value === `${colors[0]}` && classSelect.value === "" || raceSelect.value === `${colors[0]}` && classSelect.value === `${classes[2]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[0]}-among-us-${classes[2]}.png" alt="Pink character ${classes[2]}">`);
    
    } else if (raceSelect.value === `${colors[1]}` && classSelect.value === `${classes[0]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[1]}-among-us-${classes[0]}.png" alt="Red character ${classes[0]}">`);
    } else if (raceSelect.value === `${colors[1]}` && classSelect.value === `${classes[1]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[1]}-among-us-${classes[1]}.png" alt="Red character ${classes[1]}">`);

    } else if (raceSelect.value === `${colors[2]}` && classSelect.value === `${classes[0]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[2]}-among-us-${classes[0]}.png" alt="Orange character ${classes[0]}">`);
    } else if (raceSelect.value === `${colors[2]}` && classSelect.value === `${classes[1]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[2]}-among-us-${classes[1]}.png" alt="Orange character ${classes[1]}">`);
    } else if (raceSelect.value === `${colors[2]}` && classSelect.value === "" || raceSelect.value === `${colors[2]}` && classSelect.value === `${classes[2]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[2]}-among-us-${classes[2]}.png" alt="Orange character ${classes[2]}">`);
    
    } else if (raceSelect.value === `${colors[3]}` && classSelect.value === `${classes[0]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[3]}-among-us-${classes[0]}.png" alt="Yellow character} ${classes[0]}">`);
    } else if (raceSelect.value === `${colors[3]}` && classSelect.value === `${classes[1]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[3]}-among-us-${classes[1]}.png" alt="Yellow character} ${classes[1]}">`);
    } else if (raceSelect.value === `${colors[3]}` && classSelect.value === "" || raceSelect.value === `${colors[3]}` && classSelect.value === `${classes[2]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[3]}-among-us-${classes[2]}.png" alt="Yellow character} ${classes[2]}">`);

    } else if (raceSelect.value === `${colors[4]}` && classSelect.value === `${classes[0]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[4]}-among-us-${classes[0]}.png" alt="White character} ${classes[0]}">`);
    } else if (raceSelect.value === `${colors[4]}` && classSelect.value === `${classes[1]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[4]}-among-us-${classes[1]}.png" alt="White character} ${classes[1]}">`);
    } else if (raceSelect.value === `${colors[4]}` && classSelect.value === "" || raceSelect.value === `${colors[4]}` && classSelect.value === `${classes[2]}`) {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[4]}-among-us-${classes[2]}.png" alt="White character} ${classes[2]}">`);
    
    } else {
      imgs[0].remove();
      text.insertAdjacentHTML('beforebegin', `<img id="img" src="../img/${colors[1]}-among-us-${classes[2]}.png" alt="Red character ${classes[2]}">`);
    }
  }
*/

 raceSelect.addEventListener('change', reLoad);
 classSelect.addEventListener('change', reLoad);
}

window.addEventListener('load', pageLoad);