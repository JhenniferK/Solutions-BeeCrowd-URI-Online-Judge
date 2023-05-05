let line1 = lines.shift().split(' ');
let line2 = lines.shift().split(' ');

let cod1 = Number(line1.shift());
let np1 = Number(line1.shift());
let vu1 = Number(line1.shift());

let cod2 = Number(line2.shift());
let np2 = Number(line2.shift());
let vu2 = Number(line2.shift());

let valor = np1*vu1 + np2*vu2;

console.log("VALOR A PAGAR: R$ " + valor.toFixed(2));
