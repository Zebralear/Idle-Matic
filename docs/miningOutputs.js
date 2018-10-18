localStorage.setItem(stone, 100);
if (localStorage.getItem(stone) === "null") {
  var currentStone = 0;
} else {
  var currentStone = localStorage.getItem(stone);
}
var dropRate = localStorage.getItem(dropsPerSecond);

function outputTimer() {
  setInterval(outputDeterminer, 5000);
  document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";
}

function outputDeterminer() {
   ++ currentStone
  document.getElementById("visibleOutput").innerHTML = currentStone;
  localStorage.setItem(stone, currentStone);
}
