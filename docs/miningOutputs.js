// Changelog
var txt = "Active Changeset ";
var majorAPI = "0";
var minorChange = "0";
var patch = "42";
var fullMajor = majorAPI + ".";
var fullMinor = minorChange + ".";

// Does stuff
localStorage.setItem(stone, 100);
document.getElementById("changeLog").innerHTML = txt + fullMajor + fullMinor + patch;
var dropRate = localStorage.getItem(dropsPerSecond);
document.getElementById("lSDebugger").innerHTML = localStorage.getItem(stone);
window.setInterval(outputDeterminer, 5000);
document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";

// Sets the output interval
function outputTimer() {
  setInterval(outputDeterminer, 5000);
  document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";
}

// Actually does the outputing
function outputDeterminer() {
   ++ currentStone;
  document.getElementById("visibleOutput").innerHTML = currentStone;
  localStorage.setItem(stone, currentStone);
}
