const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
if (typeof sampleActivity != "string") return false;
if (Number(sampleActivity) > 15 || Number(sampleActivity) <= 0) return false;
if (isNaN(sampleActivity)) {
return false;
}
let k = Math.ceil((Number(HALF_LIFE_PERIOD) * Math.log(MODERN_ACTIVITY / (Number(sampleActivity)))) / 0.693);
return k;
};
 
module.exports = class DepthCalculator {
calculateDepth(arr) {
let result = 1;
arr = arr.filter(element => Array.isArray(element));
if (arr.length > 0) 
{
arr = arr.flat();
result += this.calculateDepth(arr);
}
return result;
}
};
