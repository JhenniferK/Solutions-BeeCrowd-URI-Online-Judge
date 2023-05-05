let line1 = lines.shift().split(' ');

let A = Number(line1.shift());
let B = Number(line1.shift());
let C = Number(line1.shift());
let D = Number(line1.shift());

if ((B>C && D>A) && ((C+D)>(A+B)) && (C>0 && D>0) && (A%2==0)){
  console.log("Valores aceitos");
} else {
  console.log("Valores nao aceitos");
}
