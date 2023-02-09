let varA = "A";
let varB = "B";
let varC = "C";

/*
let espera = varA

varA = varB
varB = varC
varC = espera
console.log(varA, varB, varC); */

[varA, varB, varC] = [ varB, varC, varA];

console.log(varA, varB, varC); 