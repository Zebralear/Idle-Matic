var drillNumber = 1;
var drillSpeed = 1;
var drillRarity = 1; 
var drillDoubleDrops= 0;
var unlockedSpeed = 0;
var unlockedRarity = 0;
var unlockedDoubleDrops = 0;
var dropsPerSecond = 1;
var money = 100000000;
local

function buyExtra() {
  if (money >= 1000*drillNumber) {
    drillNumber = drillNumber + 1;
    money = money-(1000*(drillNumber-1));
    dropsPerSecond = drillNumber*(drillSpeed+1);
  }
  if (drillNumber == 2) {
    unlockedSpeed = 1;
    document.getElementById("drillSpeedUpgrades").style.display = "block";
    }
  
}

function buySpeed() {
  
}
