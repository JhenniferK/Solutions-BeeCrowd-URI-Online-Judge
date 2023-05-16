qtde = int(input())
numeros = list(map(int, input().split()))
n2 = 0
n3 = 0
n4 = 0
n5 = 0

for i in range(qtde):
  if (numeros[i]%2 == 0):
    n2 += 1

  if (numeros[i]%3 == 0):
    n3 += 1

  if (numeros[i]%4 == 0):
    n4 += 1

  if (numeros[i]%5 == 0):
    n5 += 1

print("{} Multiplo(s) de 2".format(n2))
print("{} Multiplo(s) de 3".format(n3))
print("{} Multiplo(s) de 4".format(n4))
print("{} Multiplo(s) de 5".format(n5))
