maior = 0

for i in  range(4):
  linha = list(map(int, input().split()))
  somador = 0
  
  for j in range(len(linha)):
    somador += linha[j]

  if (somador > maior):
    maior = somador

binario = str(bin(maior))

print("{} = {}".format(maior, binario[2:]))
