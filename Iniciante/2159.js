let n = Number(lines.shift());

let P = n/(Math.log(n));
let M = 1.25506*(n/(Math.log(n)));

console.log(`${P.toFixed(1)} ${M.toFixed(1)}`);
