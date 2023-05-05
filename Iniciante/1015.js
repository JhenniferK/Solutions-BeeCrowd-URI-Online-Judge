var line1 = lines.shift().split(' ');
var line2 = lines.shift().split(' ');

let x1 = Number(line1.shift());
let y1 = Number(line1.shift());
let x2 = Number(line2.shift());
let y2 = Number(line2.shift());

let distancia = Math.sqrt((x2-x1)**2+(y2-y1)**2);

console.log(distancia.toFixed(4));
