var drillNumber = localStorage.getItem(drillNumber);
var drillSpeed = 1;
var drillRarity = 1; 
var drillDoubleDrops= 0;
var unlockedSpeed = 0;
var unlockedRarity = 0;
var unlockedDoubleDrops = 0;
var money = 100000000;

localStorage.setItem(dropsPerSecond, drillNumber*(drillSpeed+1));
window.onLoad = function() {loadSet()};

// Respnsible for the annoying changelog
var changeLogStart = "Active Changeset 0.0.";
var changeLogEnd = "4";
document.getElementById("changeLog").innerHTML = changeLogStart + changeLogEnd;

// Responsible for the numbers remembering to display themselves so you don't have to buy another drill to see how many you have.
function loadSet() {
  document.getElementById("drillTracker").innerHTML = drillNumber;
}

// Responsible for the extra drills being suddenly created from nothing.
function buyExtra() {
  if (money >= 1000*drillNumber) {
    ++ drillNumber;
    money = money-(1000*( -- drillNumber));
    localStorage.setItem(drillNumber, drillNumber);
  }
  if (drillNumber == 2) {
    unlockedSpeed = 1;
    localStorage.setItem(unlockedSpeed, 1);
    document.getElementById("drillSpeed").style.display = "block";
  }  
  document.getElementById("drillTracker").innerHTML = drillNumber;
  document.getElementById("moneyTracker").innerHTML = money;
}
// Responsible for the space-time anomalies that dilate time around your drills, making them work faster.
function buySpeed() {
}
