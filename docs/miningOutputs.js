/* Changelog */
var txt = "Active Changeset ";
var majorAPI = "0";
var minorChange = "0";
var patch = "71";
var fullMajor = majorAPI + ".";
var fullMinor = minorChange + ".";
document.getElementById("changeLog").innerHTML = txt + fullMajor + fullMinor + patch;

/* Does stuff */
window.onLoad("stoneDefiner");
window.onLoad("lsDebugger");
window.setInterval(stoneDefiner, 5000);
window.setInterval(specialDropper, 5000);
localStorage.setItem("stone", 1);

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
/* Special, Shiny Loot Dropper */
function specialDropper() {
}
  
