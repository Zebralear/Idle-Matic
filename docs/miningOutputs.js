/* Changelog */
var txt = "Active Changeset ";
var majorAPI = "0";
var minorChange = "0";
var patch = "74";
var fullMajor = majorAPI + ".";
var fullMinor = minorChange + ".";
document.getElementById("changeLog").innerHTML = txt + fullMajor + fullMinor + patch;

/* Does stuff */
var stoneInterval = this.setInterval(stoneDefiner, 5000);
this.setInterval(dropTimer, 1000)

/* Dynamic Definer for currentStone */
function stoneDefiner() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.stone) {
      localStorage.stone = Number(localStorage.stone)+1;
    } else {
      localStorage.stone = 1;
    }
    document.getElementById("visibleOutput").innerHTML = localStorage.stone;
    document.getElementById("uOutput").innerHTML = localStorage.getItem("stone");
  }
}

/* Tells specialDropper when to Drop Things */
  function dropTimer {

  }
  
/* Special, Shiny Loot Dropper */
  function specialDropper() {
}
  
