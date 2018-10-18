var output = 0;
var currentStone = 0;
var dropRate = localStorage.getItem(dropsPerSecond);
window.onload(stoneGetter) {
  currentStone = localStorage.getItem(stone);
}

function outputTimer() {
  setInterval(outputDeterminer, 10000/dropRate+1);
  document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";
}

function outputDeterminer() {
   ++ currentStone
  document.getElementById("visibleOutput").innerHTML = currentStone;
  localStorage.setItem(stone, currentStone);
}
