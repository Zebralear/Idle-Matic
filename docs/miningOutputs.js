var changeLog = "Changeset 0.0.";
var changeLogger = "37";

document.getElementById("changeLog").innerHTML = changeLog + changeLogger;
window.onLoad = function() {storageSetter()};
document.getElementById("lSDebugger").innerHTML = localStorage.getItem(stone);
var dropRate = localStorage.getItem(dropsPerSecond);
                 
function storageSetter() {
  window.localStorage.setItem(stone, 100);
  var currentStone = localStorage.getItem(stone);
}

function outputTimer() {
  setInterval(outputDeterminer, 5000);
  document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";
}

function outputDeterminer() {
   ++ currentStone;
  document.getElementById("visibleOutput").innerHTML = currentStone;
  localStorage.setItem(stone, currentStone);
}
