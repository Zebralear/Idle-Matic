var output = 0;
 if (localStorage.getItem(stone) !== NaN) {
   var currentStone = localStorage.getItem(stone);
 } else {
   var currentStone = 0;
 }
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
