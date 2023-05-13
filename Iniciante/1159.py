cont = 1
soma = 0
armx = 0

while True:
  x = int(input())
  armx = x

  if (x == 0):
    break

  if (x%2 == 0):
    soma += x
  else:
    armx = x+1
    soma += armx

  while (cont < 5):
    armx += 2
    soma += armx
    cont += 1

  print(soma)
  soma = 0
  cont = 1
