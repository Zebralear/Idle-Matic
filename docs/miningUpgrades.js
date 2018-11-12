var drillNumber = localStorage.getItem(drillNumber);
var drillSpeed = 1;
var drillRarity = 1; 
var drillDoubleDrops= 0;
var unlockedSpeed = 0;
var unlockedRarity = 0;
var unlockedDoubleDrops = 0;
var money = 100000000;


localStorage.setItem(dropsPerSecond, drillNumber*(drillSpeed+1));

// Changelog
var txt = "Active Changeset";
var majorAPI = "0";
var minorFeature = "0";
var patch = "4";
var fullAPI = majorAPI + ".";
var fullFeature = minorFeature + ".";

// Runs the function "loadSet" on page load
window.onLoad = function() {loadSet()};

// Responsible for shit being done when the page loads.
function loadSet() {
  document.getElementById("drillTracker").innerHTML = drillNumber;
  document.getElementById("changeLog").innerHTML = fullAPI + fullFeature + patch;
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
// Responsible for the space-time anomalies that dilate time around your drills.
function buySpeed() {
}
