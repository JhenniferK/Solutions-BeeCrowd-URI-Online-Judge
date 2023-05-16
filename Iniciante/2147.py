testes = int(input())
tempo = 0

for i in range(testes):
  palavra = str(input())

  tempo = len(palavra)/100
  print("{:.2f}".format(tempo))
