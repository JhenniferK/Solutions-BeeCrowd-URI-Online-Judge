let salario = Number(lines.shift()), percentual, reajuste, novo;

if (salario <= 400) {
  percentual = "15 %";
  reajuste = salario*(0.15);
  novo = salario + reajuste;
} else if (salario <= 800) {
  percentual = "12 %";
  reajuste = salario*(0.12);
  novo = salario + reajuste;
} else if (salario <= 1200) {
  percentual = "10 %";
  reajuste = salario*(0.1);
  novo = salario + reajuste;
} else if (salario <= 2000) {
  percentual = "7 %";
  reajuste = salario*(0.07);
  novo = salario + reajuste;
} else if (salario > 2000) {
  percentual = "4 %";
  reajuste = salario*(0.04);
  novo = salario + reajuste;
}

console.log(`Novo salario: ${novo.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: ${percentual}`);
