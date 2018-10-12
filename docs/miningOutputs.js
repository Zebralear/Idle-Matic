function outputTimer() {
  window.setInterval(outputDebug, 100);
  window.setInterval(outputDeterminer, 100);  
}

function outputDeterminer() {
  var output = new Math.floor((Math.random()*100)+1);
  /*
  if (output != 1) {
    var currentStone = currentStone + 1;
    } */
  //document.getElementById("visibleOutput").innerHTML = currentStone;
  document.getElementById("debugOutput").innerHTML = output;
}
