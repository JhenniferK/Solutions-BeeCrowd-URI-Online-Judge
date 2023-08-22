import math

n = int(input())
valores = []

for i in range(n):
  entrada = list(map(float, input().split()))
  preco = entrada[0]
  gramas = entrada[1]
  total = (preco/gramas)*1000
  valores.append(total)

print("{:.2f}".format(min(valores)))
