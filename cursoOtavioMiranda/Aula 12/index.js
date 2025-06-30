let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

let guardaVarA = varA;

varA = varB;
varB = varC;
varC = guardaVarA;

console.log(varA, varB, varC);