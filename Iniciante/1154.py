somador = 0
cont = 0

while True:
  x = int(input())
  if (x >= 0):
    somador += x
    cont += 1
  else:
    break

print("{:.2f}".format(somador/cont))
