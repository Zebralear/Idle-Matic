var currentStone = 0;
// var currentStone = localStorage.getItem(stone);
var dropRate = localStorage.getItem(dropsPerSecond);

function outputTimer() {
  setInterval(outputDeterminer, 10000-dropRate);
  document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";
}

function outputDeterminer() {
   ++ currentStone
  document.getElementById("visibleOutput").innerHTML = currentStone;
  localStorage.setItem(stone, currentStone);
}
