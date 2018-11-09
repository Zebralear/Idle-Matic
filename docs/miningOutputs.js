// Changelog
var changeLog = "Active Changeset 0.0.";
var changeLogger = "40";

// Does stuff
document.cookie = "stone=currentStone";
localStorage.setItem(stone, 100);
document.getElementById("changeLog").innerHTML = changeLog + changeLogger;
window.onLoad = function() {storageSetter()};
var dropRate = localStorage.getItem(dropsPerSecond);
document.getElementById("lSDebugger").innerHTML = localStorage.getItem(stone);
  
// Does stuff
function storageSetter() {
  localStorage.setItem(stone, 100);
  var currentStone = localStorage.getItem(stone);
  document.getElementById("lSDebugger").innerHTML = localStorage.getItem(stone);
}

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
