/* Changelog */
var txt = "Active Changeset ";
var majorAPI = "0";
var minorChange = "0";
var patch = "57";
var fullMajor = majorAPI + ".";
var fullMinor = minorChange + ".";
document.getElementById("changeLog").innerHTML = txt + fullMajor + fullMinor + patch;

/* Does stuff */
window.onLoad("stoneDefiner");
window.onLoad("lSGetter");
window.setInterval(outputDeterminer, 5000);
window.setInterval(lSetter, 1000);

/* Does the outputs */
function outputDeterminer() {
  document.getElementById("visibleOutput").innerHTML = ++currentStone;
}

/* Dynamic Definer for currentStone */
function stoneDefiner() {
  if (typeof(Storage !== "undefined") {
      currentStone = localStorage.getItem("stone");
} else { currentStone = 0; }}
      
/* lSetter */
function lSetter() {
  localStorage.setItem("stone", currentStone);
}

/* lSGetter */
function lSGetter() {
  currentStone = localStorage.getItem("stone");
  document.getElementById("visibleOutput").innerHTML = localStorage.getItem("stone");
}
