const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
let k=0,speed;
k=Math.pow(2,disksNumber)-1;
speed=Math.floor(k*3600/turnsSpeed);
let object= new Object();
object["turns"]=k;
object["seconds"]=speed;
return object;
};
