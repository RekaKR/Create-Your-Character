function pageLoad () {
  
  //content variable
  let text = document.getElementById("text");
  let divs = text.querySelectorAll("div");

  //ch name variable
  let chName = document.getElementById("ch-name");  

  //race variable
  let raceSelect = document.getElementById("race-select");
  let raceSelectValue = raceSelect.options[raceSelect.selectedIndex].value;
  let raceSelectText = raceSelect.options[raceSelect.selectedIndex].text;

  //gender variable
  let genderSelect = document.getElementById("gender-select");
  let genderSelectValue = genderSelect.options[genderSelect.selectedIndex].value;
  let genderSelectText = genderSelect.options[genderSelect.selectedIndex].text;

  //class variable
  let classSelect = document.getElementById("class-select");
  let classSelectValue = classSelect.options[classSelect.selectedIndex].value;
  let classSelectText = classSelect.options[classSelect.selectedIndex].text;
  
  //submit variable
  //let submit = document.getElementById('submit');


  //ch name func.
  function showChName() {
    divs[0].textContent = chName.value;
  }
  
  //race func.
  function racePrint() {
    divs[1].insertAdjacentHTML('beforeend', `
      <p>${raceSelectText}</p>
      <p>${raceSelectValue}</p>
    `);
  }

  //gender func.
  function genderPrint() {
    divs[2].insertAdjacentHTML('beforeend', `
      <p>${genderSelectText}</p>
      <p>${genderSelectValue}</p>
    `);
  }

  //class func.
  function classPrint() {
    divs[3].insertAdjacentHTML('beforeend', `
      <p>${classSelectText}</p>
      <p>${classSelectValue}</p>
    `);
  }

  //ch name invite
  chName.addEventListener('input', showChName);
  //race invite
  raceSelect.addEventListener('change', racePrint);
  //gender invite
  genderSelect.addEventListener('change', genderPrint);
  //class invite
  classSelect.addEventListener('change', classPrint);
}

window.addEventListener('load', pageLoad);