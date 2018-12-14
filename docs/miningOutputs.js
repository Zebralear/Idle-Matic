/* Changelog */
var txt = "Active Changeset ";
var majorAPI = "0";
var minorChange = "0";
var patch = "69";
var fullMajor = majorAPI + ".";
var fullMinor = minorChange + ".";
document.getElementById("changeLog").innerHTML = txt + fullMajor + fullMinor + patch;

/* Does stuff */
window.onLoad("stoneDefiner");
window.onLoad("lsDebugger");
window.setInterval(outputDeterminer, 5000);
localStorage.setItem("stone", 1)

/* Dynamic Definer for currentStone */
function stoneDefiner() {
  if (typeof(Storage) !== "undefined") {
    if (localStorage.stone) {
      localStorage.stone = Number(localStorage.stone)+1;
    } else {
      localStorage.stone = 1;
    }
    document.getElementById("visibleOutput").innerHTML = localStorage.stone;
    document.getElementById("uOutput").innerHTML = localStorage.stone;
  }
}



/* lsDebugger */
function lsDebugger() {
  document.getElementById("visibleOutput").innerHTML = localStorage.getItem("stone");
  document.getElementById("uOutput").innerHTML = localStorage.getItem("stone");
}
