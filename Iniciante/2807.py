n = int(input());
iccanobif = [1, 1];
cont = 2;

if (n == 1):
  print(n);
else:
  while (cont < n):
    ultimo = iccanobif[0] + iccanobif[1];
    iccanobif.insert(0, ultimo);
    cont += 1;

  print(*iccanobif);
