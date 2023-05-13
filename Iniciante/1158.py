t = int(input())

for i in range(t):
  x, y = map(int, input().split())
  soma = 0
  cont = 0

  while (cont < y):
    if (x%2 != 0):
      soma += x
      cont += 1
    x += 1
    
  print(soma)
