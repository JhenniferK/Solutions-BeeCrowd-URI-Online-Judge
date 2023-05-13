def ehPrimo(x):
  for i in range(2, x):
    if (x%i == 0):
      return False

  return True

n = int(input())

for i in range(n):
  x = int(input())
  
  if (ehPrimo(x)):
    print("{} eh primo".format(x))
  else:
    print("{} nao eh primo".format(x))
