let n = Number(lines.shift());

if (n>2000 && n<=3000){
  n = n-2000;
  n = n*0.08;
  console.log("R$ " + n.toFixed(2));
} else if (n>3000 && n<=4500){
  n = n-3000;
  n = n*0.18 + 1000*0.08;
  console.log("R$ " + n.toFixed(2));
} else if (n>4500){
  n = n-4500;
  n = n*0.28 + 1000*0.08 + 1500*0.18;
  console.log("R$ " + n.toFixed(2));
} else {
  console.log("Isento");
}
