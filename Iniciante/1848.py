soma = 0;
cont = 0;

while (cont < 3):
  entrada = input();
  if (entrada == 'caw caw'):
    print(soma);
    cont += 1;
    soma = 0;
  else:
    olhos = list(entrada);
    for i in range(len(olhos)):
      if (olhos[i] == '*'):
        soma += 1*2**(2-i);
