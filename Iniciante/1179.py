pares = []
impares = []

for i in range(15):
  valor = int(input())
  
  if (valor % 2 == 0):
    pares.append(valor)
  else:
    impares.append(valor)

  if (len(pares) == 5):
    for j in range(len(pares)):
      print("par[{}] = {}".format(j, pares[j]))

    pares = []
  elif (len(impares) == 5):
    for k in range(len(impares)):
      print("impar[{}] = {}".format(k, impares[k]))

    impares = []

for i in range(len(impares)):
  print("impar[{}] = {}".format(i, impares[i]))

for i in range(len(pares)):
  print("par[{}] = {}".format(i, pares[i]))
