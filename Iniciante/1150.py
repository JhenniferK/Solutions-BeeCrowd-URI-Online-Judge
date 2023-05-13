x = int(input())
z = int(input())

while (z <= x):
  z = int(input())

soma = x
cont = 1

while (soma < z):
  x += 1
  soma += x
  cont += 1

print(cont)
