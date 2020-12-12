function pageLoad () {

  //character name
  let nameSelect = document.getElementById("name-select");
  
  //race
  let raceSelect = document.getElementById("race-select");
  let raceSelectValue = raceSelect.options[recaSelect.selectedIndex].value;
  let raceSelectText = raceSelect.options[raceSelect.selectedIndex].text;
  
  /*
  let raceChoose = document.getElementById("race-choose");
  let pink = document.getElementById("pink");
  let red = document.getElementById("red");
  let orange = document.getElementById("orange");
  let yellow = document.getElementById("yellow");
  let white = document.getElementById("white");
  */

  //gender
  let genderSelect = document.getElementById("gender-select");
  let genderSelectValue = raceSelect.options[genderSelect.selectedIndex].value;
  let genderSelectText = raceSelect.options[genderSelect.selectedIndex].text;
  
  /*
  let genderChoose = document.getElementById("gender-choose");
  let female = document.getElementById("female");
  let male = document.getElementById("male");
  */

  //class
  let classSelect = document.getElementById("class-select");
  let classSelectValue = raceSelect.options[classSelect.selectedIndex].value;
  let classSelectText = raceSelect.options[classSelect.selectedIndex].text;
  
  /*
  let classChoose = document.getElementById("class-choose");
  let fighter = document.getElementById("fighter");
  let noob = document.getElementById("noob");
  let innocent = document.getElementById("innocent");
  */
  

  /*
  document.getElementById("#id").addEventListener('esemény', function());
  */


}


window.addEventListener('load', pageLoad)