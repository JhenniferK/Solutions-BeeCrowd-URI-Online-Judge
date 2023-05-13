def ehPfto(n):
  soma = 0
  for i in range(1, n):
    if (n%i == 0):
      soma += i

  return soma == n

n = int(input())

for i in range(n):
  x = int(input())
  
  if (ehPfto(x)):
    print("{} eh perfeito".format(x))
  else:
    print("{} nao eh perfeito".format(x))
