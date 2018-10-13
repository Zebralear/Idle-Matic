function outputTimer() {
  object.setInterval(outputDebug(), 100);
  object.setInterval(outputDeterminer(), 100);
}

function outputDeterminer() {
  var output = Math.floor((Math.random()*100)+1);
  if (output != 1) {
    var currentStone = currentStone + 1;
    }
  document.getElementById("visibleOutput").innerHTML = currentStone;
  document.getElementById("debugOutput").innerHTML = output;
}

window.onload = function() {
 var currentStone = 0;
}
  
