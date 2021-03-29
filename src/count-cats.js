const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let kstr=1, kstolb=0, k=0;
    // for (let i=0; i<matrix.length; i++)
    if (matrix[i]=='\n')
    kstr++;
    kstolb=matrix.length/kstr;
    for (let i=0; i<kstr; i++)
    for (let j=0; i<kstolb; j++)
    if(matrix[i][j]=="^^") k++;
    return k;
    
};
