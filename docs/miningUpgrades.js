/* Changelog */
var txt = "Active Changeset";
var majorAPI = "0";
var minorFeature = "0";
var patch = "10";
var fullAPI = majorAPI + ".";
var fullFeature = minorFeature + ".";
document.getElementById("changeLog").innerHTML = txt + fullAPI + fullFeature + patch;


/* YAY, Variables!! and sarcasm */
var drillNumber = 0;
var drillSpeed = 1;
var drillRarity = 1; 
var drillDoubleDrops= 0;
var unlockedSpeed = 0;
var unlockedRarity = 0;
var unlockedDoubleDrops = 0;
var money = 100000000;


/* Responsible for shit being done when the page loads. */
localStorage.setItem("dropsPerSecond", (drillNumber*(drillSpeed+1)));
localStorage.setItem("drills", drillNumber);

function getDrillNumber() {
  document.getElementById("uOutput").innerHTML = localStorage.drills;
}

function getDPS() {
  document.getElementByIs("uOutput").innerHTML = localStoage.dropsPerSecond;
}

/* Responsible for the extra drills being suddenly created from nothing. */
function buyExtra() {
  if (money >= 1000*localStorage.drills) {
    money = money-(1000*localStorage.drills);
    ++ localStorage.drills;
    document.getElementById("moneyTracker").innerHTML = money;
  }
  if (drillNumber == 2) {
    unlockedSpeed = 1;
    localStorage.setItem("unlockedSpeed", 1);
    document.getElementById("drillSpeed").style.display = "block";
  }  
  document.getElementById("drillTracker").innerHTML = localStorage.drills;
}
/* Responsible for the space-time anomalies that dilate time around your drills. */
function buySpeed() {
}
