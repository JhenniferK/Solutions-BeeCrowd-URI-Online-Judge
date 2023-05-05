let line1 = lines.shift().split(' ');

let x = Number(line1.shift());
let y = Number(line1.shift());

if (x>0 && y>0){
  console.log("Q1");
} else if (x<0 && y>0){
  console.log("Q2");
} else if (x<0 && y<0){
  console.log("Q3");
} else if (x>0 && y<0){
  console.log("Q4");
} else if (x==0 && y>0 || y<0){
  console.log("Eixo Y");
} else if (y==0 && x>0 || x<0){
  console.log("Eixo X");
} else if (x==0 && y==0){
  console.log("Origem");
}
