/* Changelog */
var txt = "Active Changeset ";
var majorAPI = "0";
var minorChange = "0";
var patch = "53";
var fullMajor = majorAPI + ".";
var fullMinor = minorChange + ".";
document.getElementById("changeLog").innerHTML = txt + fullMajor + fullMinor + patch;

window.onLoad("lSGetter");

/* Does stuff */
window.setInterval(outputDeterminer, 5000);
window.setInterval(lSetter, 1000);

/* Does the outputs */
function outputDeterminer() {
  document.getElementById("visibleOutput").innerHTML = ++currentStone;
}

/* lSetter */
function lSetter() {
  localStorage.setItem(stone, currentStone);
}

/* lSGetter */
function lSGetter() {
  currentStone = localStorage.getItem(stone);
  document.getElementById("visibleOutput").innerHTML = currentStone;
}
