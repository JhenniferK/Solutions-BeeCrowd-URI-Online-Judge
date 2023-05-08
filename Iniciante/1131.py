grenais = 0
vI = 0
vG = 0
empates = 0

while True:
  i, g = map(int, input().split())

  if (i > g):
    vI += 1
  elif (g > i):
    vG += 1
  else:
    empates += 1
  

  grenais += 1

  print("Novo grenal (1-sim 2-nao)")
  resposta = int(input())

  if (resposta == 2):
    break

print("{} grenais".format(grenais))
print("Inter:{}".format(vI))
print("Gremio:{}".format(vG))
print("Empates:{}".format(empates))

if (vI > vG):
  print("Inter venceu mais")
elif (vG > vI):
  print("Gremio venceu mais")
else:
  print("Nao houve vencedor")
