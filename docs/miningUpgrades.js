var drillNumber = localStorage.getItem(drillNumber);
var drillSpeed = 1;
var drillRarity = 1; 
var drillDoubleDrops= 0;
var unlockedSpeed = 0;
var unlockedRarity = 0;
var unlockedDoubleDrops = 0;
var money = 100000000;
localStorage.setItem(dropsPerSecond, drillNumber*(drillSpeed+1));

function buyExtra() {
  if (money >= 1000*drillNumber) {
    ++ drillNumber;
    money = money-(1000*(drillNumber-1));
    localStorage.setItem(drillNumber, drillNumber);
  }
  if (drillNumber == 2) {
    unlockedSpeed = 1;
    localStorage.setItem(unlockedSpeed, unlockedSpeed);
    document.getElementById("drillSpeed").style.display = "block";
    }  
  document.getElementById("drillTracker").innerHTML = drillNumber;
  document.getElementById("moneyTracker").innerHTML = money;
}

function buySpeed() {
  
}
