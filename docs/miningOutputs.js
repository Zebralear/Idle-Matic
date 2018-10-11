function outputTimer() {
  window.setInterval(RNG(), 100);
  window.setInterval(debug(), 100);
  window.setInterval(outputDeterminer(), 100);  
}
  
function RNG() {
  var output = new Math.floor((Math.random()*100)+1);
}

function debug() {
  document.getElementById("debugOutput").innerHTML = "output";
}

function outputDeterminer() {
  if (output != 1) {
    var currentStone = currentStone + 1;
    }
  document.getElementById("visibleOutput").innerHTML = "currentStone";
}
