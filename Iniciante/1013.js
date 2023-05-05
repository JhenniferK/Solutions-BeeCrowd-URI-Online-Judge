let line1 = lines.shift().split(' ');

let a = Number(line1.shift());
let b = Number(line1.shift());
let c = Number(line1.shift());

let Maior1 = (a+b+Math.abs(a-b))/2;
let Maior2 = (Maior1+c+Math.abs(Maior1-c))/2;

console.log(Maior2 + " eh o maior");
