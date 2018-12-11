/* Changelog */
var txt = "Active Changeset ";
var majorAPI = "0";
var minorChange = "0";
var patch = "45";
var fullMajor = majorAPI + ".";
var fullMinor = minorChange + ".";
document.getElementById("changeLog").innerHTML = txt + fullMajor + fullMinor + patch;

/* Does stuff */
localStorage.setItem(stone, 100);
window.setInterval(outputDeterminer, 5000);

/* Does the outputs */
function outputDeterminer() {
  document.getElementById("visibleOutput").innerHTML = ++currentStone;
  localStorage.setItem(stone, currentStone);
}
