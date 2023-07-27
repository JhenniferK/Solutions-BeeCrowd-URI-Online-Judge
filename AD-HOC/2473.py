sorteados = list(map(int, input().split()));
apostados = list(map(int, input().split()));
qtde = 0;

for i in range(len(sorteados)):
  for j in range(len(apostados)):
    if (apostados[j] == sorteados[i]):
      qtde += 1;

if (qtde == 3):
  print("terno");
elif (qtde == 4):
  print("quadra");
elif (qtde == 5):
  print("quina");
elif (qtde == 6):
  print("sena");
else:
  print("azar");
