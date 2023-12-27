def fib(valor):
  if valor <= 1:
      return valor

  a, b = 0, 1
  for _ in range(valor - 1):
      a, b = b, a + b

  return b

for _ in range(int(input())):
  valor = int(input())
  print("Fib({}) = {}".format(valor, fib(valor)))
