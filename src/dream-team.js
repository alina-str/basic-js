const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if(!Array.isArray(members)) return false;
 let str="";
 let mass=[];
 let n=0;
 for (let i=0; i<members.length; i++)
 {
   if(typeof members[i] == "string") {
     for(let j=0; j<members[i].length; j++) {
       if (members[i][j]!=' ')  {mass[n]=members[i][j].toUpperCase(); n++; break;
     }
    }
  }
}
 mass.sort();
 for (let i=0; i<mass.length;i++)
 {str=str+mass[i];}
 str=str.toUpperCase();
 return str;
}
