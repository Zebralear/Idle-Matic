var drillNumber = 0;
var drillSpeed = 1;
var drillRarity = 1; 
var drillDoubleDrops= 0;
var unlockedSpeed = 0;
var unlockedRarity = 0;
var unlockedDoubleDrops = 0;
var money = 100000000;


localStorage.setItem(dropsPerSecond, (drillNumber*(drillSpeed+1)));

// Changelog
var txt = "Active Changeset";
var majorAPI = "0";
var minorFeature = "0";
var patch = "6";
var fullAPI = majorAPI + ".";
var fullFeature = minorFeature + ".";
document.getElementById("changeLog").innerHTML = fullAPI + fullFeature + patch;

// Responsible for shit being done when the page loads.
  document.getElementById("drillTracker").innerHTML = localStorage.getItem(drillNumber);

// Responsible for the extra drills being suddenly created from nothing.
function buyExtra() {
  if (money >= 1000*drillNumber) {
    money = money-(1000*drillNumber);
    ++ drillNumber;
    localStorage.setItem(drills, drillNumber);
    document.getElementById("moneyTracker").innerHTML = money;
  }
  if (drillNumber == 2) {
    unlockedSpeed = 1;
    localStorage.setItem(unlockedSpeed, 1);
    document.getElementById("drillSpeed").style.display = "block";
  }  
  document.getElementById("drillTracker").innerHTML = drillNumber;
}
// Responsible for the space-time anomalies that dilate time around your drills.
function buySpeed() {
}
