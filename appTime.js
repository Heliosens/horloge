let target = document.querySelector('#target');

let clock = new Clock();
clock.createNeedle("target", "3px", "10","vh", "blue", "sec", "");
clock.createNeedle("target", "6px", "7", "vh","black", "min", "");
clock.createNeedle("target", "9px", "5", "vh", "red", "hour", "");

let clock2 = new Clock();
clock2.createNeedle("clockPlace","2px", "15", "vh", "black", "sec", "");
clock2.createNeedle("clockPlace","3px", "10", "vh", "black", "min", "");
clock2.createNeedle("clockPlace","4px", "5", "vh", "black", "hour", "");

