var output = 0;
var currentStone = 0;
var currentDrills = localStorage.getItem(currentDrills);
var drillSpeed = localStorage.getItem(drillSpeed);

function outputTimer() {
  setInterval(outputDeterminer, 11000-100*(currentDrills+100*(drillSpeed+1)));
  document.getElementById("debugTimerOutput").innerHTML = "output timer is functioning";
}

function outputDeterminer() {
   ++ currentStone 
  document.getElementById("visibleOutput").innerHTML = currentStone;
}
