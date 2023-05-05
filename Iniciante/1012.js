let line1 = lines.shift().split(' ');

const pi = 3.14159;

let A = Number(line1.shift());
let B = Number(line1.shift());
let C = Number(line1.shift());

let tri = (A*C)/2;
let cir = pi*(C**2);
let trap = ((A+B)*C)/2;
let qua = B**2;
let ret = A*B;

console.log("TRIANGULO: " + tri.toFixed(3));
console.log("CIRCULO: " + cir.toFixed(3));
console.log("TRAPEZIO: " + trap.toFixed(3));
console.log("QUADRADO: " + qua.toFixed(3));
console.log("RETANGULO: " + ret.toFixed(3));
