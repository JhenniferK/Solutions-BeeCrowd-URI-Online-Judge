let valor, alcool = 0, gasolina = 0, diesel = 0;

for (let i = 0; i < lines.length; i++) {
  valor = Number(lines[i]);
  if (valor == 1) {
    alcool++;
  } else if (valor == 2) {
    gasolina++;
  } else if (valor == 3) {
    diesel++;
  } else if (valor == 4) {
    break;
  }
}

console.log(`MUITO OBRIGADO
Alcool: ${alcool}
Gasolina: ${gasolina}
Diesel: ${diesel}`);
