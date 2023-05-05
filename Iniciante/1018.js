let valor = Number(lines.shift());

let n100 = parseInt(valor/100);
let n50 = parseInt(valor%100/50);
let n20 = parseInt(valor%100%50/20);
let n10 = parseInt(valor%100%50%20/10);
let n5 = parseInt(valor%100%50%20%10/5);
let n2 = parseInt(valor%100%50%20%10%5/2);
let n1 = parseInt(valor%100%50%20%10%5%2/1);

console.log(`${valor}
${n100} nota(s) de R$ 100,00
${n50} nota(s) de R$ 50,00
${n20} nota(s) de R$ 20,00
${n10} nota(s) de R$ 10,00
${n5} nota(s) de R$ 5,00
${n2} nota(s) de R$ 2,00
${n1} nota(s) de R$ 1,00`);
