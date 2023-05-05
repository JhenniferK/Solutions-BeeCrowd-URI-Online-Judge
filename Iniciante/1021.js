let valor = Number(lines.shift());

let n100 = Math.trunc(valor/100);
let n50 = Math.trunc(valor%100/50);
let n20 = Math.trunc(valor%100%50/20);
let n10 = Math.trunc(valor%100%50%20/10);
let n5 = Math.trunc(valor%100%50%20%10/5);
let n2 = Math.trunc(valor%100%50%20%10%5/2);
let m1 = Math.trunc(valor%100%50%20%10%5%2/1);
let m50 = Math.trunc(valor%100%50%20%10%5%2%1/0.5);
let m25 = Math.trunc(valor%100%50%20%10%5%2%1%0.5/0.25);
let m10 = Math.trunc(valor%100%50%20%10%5%2%1%0.5%0.25/0.10);
let m5 = Math.trunc(valor%100%50%20%10%5%2%1%0.5%0.25%0.1/0.05);
let m01 = Math.round(valor%100%50%20%10%5%2%1%0.5%0.25%0.1%0.05/0.01);

console.log(`NOTAS:\n${n100} nota(s) de R$ 100.00\n${n50} nota(s) de R$ 50.00\n${n20} nota(s) de R$ 20.00\n${n10} nota(s) de R$ 10.00\n${n5} nota(s) de R$ 5.00\n${n2} nota(s) de R$ 2.00\nMOEDAS:\n${m1} moeda(s) de R$ 1.00\n${m50} moeda(s) de R$ 0.50\n${m25} moeda(s) de R$ 0.25\n${m10} moeda(s) de R$ 0.10\n${m5} moeda(s) de R$ 0.05\n${m01} moeda(s) de R$ 0.01`);
