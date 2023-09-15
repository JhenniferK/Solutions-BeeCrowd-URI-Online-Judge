valor = int(input());
print(valor);

notas = [100, 50, 20, 10, 5, 2, 1];
quantidades = [0, 0, 0, 0, 0, 0, 0];

for i in range(len(notas)):
    quantidade = valor//notas[i];
    valor %= notas[i];
    quantidades[i] = quantidade;

for i in range(len(notas)):
  print("{} nota(s) de R$ {},00".format(quantidades[i], notas[i]));
