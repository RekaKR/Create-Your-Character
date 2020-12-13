function pageLoad() {
  
  //top pic
  document.querySelector("body").insertAdjacentHTML('afterbegin', `
  <img class="main-sign" src="../img/among-us-sign.png" alt="">
  `);


  //text bar
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
  let raceSelectValue = raceSelect.options[raceSelect.selectedIndex].value;
  let raceSelectText = raceSelect.options[raceSelect.selectedIndex].text;

  function racePrint() {
    divs[1].insertAdjacentHTML('beforeend', `
        <p>${raceSelectText}</p>
        <p>${raceSelectValue}</p>
      `);
  }

  raceSelect.addEventListener('change', racePrint);


  //gender
  let genderSelect = document.getElementById("gender-select");
  let genderSelectValue = genderSelect.options[genderSelect.selectedIndex].value;
  let genderSelectText = genderSelect.options[genderSelect.selectedIndex].text;

  function genderPrint() {
    divs[2].insertAdjacentHTML('beforeend', `
      <p>${genderSelectText}</p>
      <p>${genderSelectValue}</p>
    `);
  }

  genderSelect.addEventListener('change', genderPrint);


  //class
  let classSelect = document.getElementById("class-select");
  let classSelectValue = classSelect.options[classSelect.selectedIndex].value;
  let classSelectText = classSelect.options[classSelect.selectedIndex].text;

  function classPrint() {
    divs[3].insertAdjacentHTML('beforeend', `
      <p>${classSelectText}</p>
      <p>${classSelectValue}</p>
    `);
  }

  classSelect.addEventListener('change', classPrint);


  //submit variable
  //let submit = document.getElementById('submit');
}

window.addEventListener('load', pageLoad);