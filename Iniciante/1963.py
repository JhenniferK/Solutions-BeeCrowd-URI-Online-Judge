valores = input().split();
valorAntigo = float(valores[0]);
valorNovo = float(valores[1]);

percentual = ((valorNovo-valorAntigo)/valorAntigo)*100;
print("{:.2f}%".format(percentual));
