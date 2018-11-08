var changeLog = "Change Notifier";
var changeLogger = "37";

document.getElementById("changeLog").innerHTML = changeLog + changeLogger;

window.localStorage.setItem(stone, 100);
var currentStone = localStorage.getItem(stone);
document.getElementById("lSDebugger").innerHTML = localStorage.getItem(stone);
var dropRate = localStorage.getItem(dropsPerSecond);

function outputTimer() {
  setInterval(outputDeterminer, 5000);
  document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";
}

function outputDeterminer() {
   ++ currentStone;
  document.getElementById("visibleOutput").innerHTML = currentStone;
  localStorage.setItem(stone, currentStone);
}
