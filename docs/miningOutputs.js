localStorage.setItem(stone, 100);
var currentStone = 0;
var currentStone = localStorage.getItem(stone);
var dropRate = localStorage.getItem(dropsPerSecond);

function outputTimer() {
  setInterval(outputDeterminer, 5000);
  document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";
  localStorage.setItem(stone, currentStone);
}

function outputDeterminer() {
   ++ currentStone
  document.getElementById("visibleOutput").innerHTML = currentStone;
  localStorage.setItem(stone, currentStone);
}
