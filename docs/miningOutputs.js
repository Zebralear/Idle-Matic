var output = 0;
var currentStone = 0;
var dropRate = localStorage.getItem(dropsPerSecond);

function outputTimer() {
  setInterval(outputDeterminer, 1000/dropRate);
  document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";
}

function outputDeterminer() {
   ++ currentStone 
  document.getElementById("visibleOutput").innerHTML = currentStone;
}
