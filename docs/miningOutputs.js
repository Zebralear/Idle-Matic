/* Changelog */
var txt = "Active Changeset ";
var majorAPI = "0";
var minorChange = "1";
var patch = "8";
var fullMajor = majorAPI + ".";
var fullMinor = minorChange + ".";
document.getElementById("changeLog").innerHTML = txt + fullMajor + fullMinor + patch;

/* Does stuff */
var stoneInterval = window.setInterval(stoneDefiner, 5000);
window.setInterval(dropTimer, 1000);

/* Dynamic Definer for currentStone */
function stoneDefiner() {
  if (localStorage.stone !== "undefined") {
      localStorage.stone = Number(localStorage.stone)+1;
    } else {
        Number(localStorage.stone) = 1;
    }
    document.getElementById("visibleOutput").innerHTML = localStorage.stone;
    document.getElementById("uOutput").innerHTML = localStorage.getItem("stone");
}


/* Tells specialDropper when to Drop Things */
  function dropTimer() {
    var dropCheck = Math.floor((Math.random() * 100) + 1);
    document.getElementById("uOutput").innerHTML = dropCheck;
    if (dropCheck = 100) {
      return specialDropper();
    }
  }

/* Special, Shiny Loot Dropper */
  function specialDropper() {
    document.getElementById("uOutput").innerHTML = "special item dropped!";
}
  
