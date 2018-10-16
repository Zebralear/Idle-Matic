function outputLoad() {
  var output = 0;
  var currentStone = 0;
}

function outputTimer() {
  setInterval(outputDeterminer, 100);
  document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";
}

function outputDeterminer() {
  var output = new Math.floor((Math.random()*100)+1);
  if (output != 1) {
   var currentStone = new currentStone + 1;
  }
  document.getElementById("visibleOutput").innerHTML = currentStone;
  document.getElementById("debugOutput").innerHTML = output;
}
