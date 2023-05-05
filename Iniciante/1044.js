let line1 = lines.shift().split(' ');

let A = Number(line1.shift());
let B = Number(line1.shift());

if (B%A==0 || A%B==0){
  console.log("Sao Multiplos");
} else {
  console.log("Nao sao Multiplos");
}
