let [F, O, L] = lines.shift().split(' ').map(Number);

let maxF = Math.floor(F/2);
let maxO = Math.floor(O/3);
let maxL = Math.floor(L/5);

let maximo = Math.min(maxF, maxO, maxL);

console.log(maximo);
