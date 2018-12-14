/* Changelog */
var txt = "Active Changeset ";
var majorAPI = "0";
var minorFeature = "0";
var patch = "15";
var fullAPI = majorAPI + ".";
var fullFeature = minorFeature + ".";
document.getElementById("changeLog").innerHTML = txt + fullAPI + fullFeature + patch;


/* YAY, Variables!! and sarcasm */
var drillNumber = 0;
var drillSpeed = 1;
var drillRarity = 1; 
var drillDoubleDrops= 0;
var money = 100000000;


/* Responsible for shit being done when the page loads. */
localStorage.setItem("dropsPerSecond", (drillNumber*(drillSpeed+1)));


    document.getElementById("visibleOutput").innerHTML = localStorage.drills;
  }
}

function getDPS() {
  document.getElementByIs("uOutput").innerHTML = localStoage.dropsPerSecond;
}

/* Responsible for the extra drills being suddenly created from nothing. */
function buyExtra() {
  if (money >= 1000*localStorage.drills) {
    money = money-(1000*localStorage.drills);
    if (typeof(Storage) !== "undefined") {
      if (localStorage.drills) {
        localStorage.drills = Number(localStorage.drills)+1;
      } else {
        localStorage.drills = 1;
      }
      document.getElementById("moneyTracker").innerHTML = money;
    }
  if (localstorage.drills == 2) {
    localStorage.setItem("unlockedSpeed", 1);
    document.getElementById("drillSpeed").style.display = "block";
  }  
  document.getElementById("drillTracker").innerHTML = localStorage.drillCount;
}
/* Responsible for the space-time anomalies that dilate time around your drills. */
function buySpeed() {
}
