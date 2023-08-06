entrada = list(map(int, input().split()))
leituras = entrada[0]
capacidade = entrada[1]
total = 0
encontrou = False

for i in range(leituras):
  entradas = list(map(int, input().split()))
  S = entradas[0]
  E = entradas[1]

  total -= S
  total += E

  if (total > capacidade):
    encontrou = True
    print("S")
    break

if (encontrou == False):
  print("N")
