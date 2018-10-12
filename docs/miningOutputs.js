function outputTimer() {
  window.setInterval(outputDebug, 100);
  window.setInterval(outputDeterminer, 100);  
}
  
function outputDebug() {
  document.getElementById("debugOutput").innerHTML = output;
}

function outputDeterminer() {
  var output = new Math.floor((Math.random()*100)+1);
  if (output != 1) {
    var currentStone = currentStone + 1;
    }
  document.getElementById("visibleOutput").innerHTML = currentStone;
}
