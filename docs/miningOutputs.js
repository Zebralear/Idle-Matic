function outputLoad() {
  var output = 0;
  var currentStone = 0;

function outputTimer() {
  window.setInterval(outputDebug(), 100);
  window.setInterval(outputDeterminer(), 100);
  document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";
}

function outputDeterminer() {
  output = Math.floor((Math.random()*100)+1);
  if (output != 1) {
    currentStone = currentStone + 1;
  }
  document.getElementById("visibleOutput").innerHTML = currentStone;
  document.getElementById("debugOutput").innerHTML = output;
}
