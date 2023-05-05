let nome = lines.shift();
let sf = Number(lines.shift());
let tv = Number(lines.shift());

let salario = sf + tv*(15/100);

console.log("TOTAL = R$ " + salario.toFixed(2));
