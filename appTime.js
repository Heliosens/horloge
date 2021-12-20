let target = document.querySelector('#target');

// let clock = new Clock();
// clock.createNeedle("target", "3px", "10","vh", "blue", "sec", "");
// clock.createNeedle("target", "6px", "7", "vh","black", "min", "");
// clock.createNeedle("target", "4px", "5", "vh", "red", "hour", "");

let deco = document.createElement('div');
deco.style.width = "4px";
deco.style.height = "2rem";
deco.style.backgroundColor = "red";
deco.style.borderRadius = "50%";
deco.style.marginTop = "4rem";


let clock2 = new Clock();
clock2.createNeedle("clockPlace",".5rem", "15", "vh", "#d3d3d3", "sec", deco);
clock2.createNeedle("clockPlace","2px", "10", "vh", "black", "min", "");
clock2.createNeedle("clockPlace","2px", "5", "vh", "black", "hour", "");

