/* Changelog */
var txt = "Active Changeset ";
var majorAPI = "0";
var minorChange = "0";
var patch = "46";
var fullMajor = majorAPI + ".";
var fullMinor = minorChange + ".";
var currentStone = 0;
document.getElementById("changeLog").innerHTML = txt + fullMajor + fullMinor + patch;

/* Does stuff */
setInterval(outputDeterminer, 5000);


/* Does the outputs */
function outputDeterminer() {
  document.getElementById("visibleOutput").innerHTML = ++currentStone;
}
