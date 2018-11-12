// Changelog
var txt = "Active Changeset ";
var majorAPI = "0";
var minorChange = "0";
var patch = "44";
var fullMajor = majorAPI + ".";
var fullMinor = minorChange + ".";
document.getElementById("changeLog").innerHTML = txt + fullMajor + fullMinor + patch;

// Does stuff 
localStorage.setItem(stone, 100);
document.getElementById("lSDebugger").innerHTML = localStorage.getItem(stone);
window.setInterval(outputDeterminer, 5000);
// document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";

// Sets the output interval
function outputTimer() {
  setInterval(outputDeterminer, 5000);
  document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";
}

// Actually does the outputing
function outputDeterminer() {
  document.getElementById("visibleOutput").innerHTML = ++currentStone;
  localStorage.setItem(stone, ++currentStone);
}
