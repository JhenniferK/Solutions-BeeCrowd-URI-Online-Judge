lim = int(input());

for i in range(lim):
  nome1, e1, nome2, e2 = input().split();
  n1, n2 = map(int, input().split());
  total = n1+n2;

  if (total%2 == 0):
    if (e1 == 'PAR'):
      print(nome1);
    else:
      print(nome2);

  else:
    if (e1 == 'IMPAR'):
      print(nome1);
    else:
      print(nome2);
