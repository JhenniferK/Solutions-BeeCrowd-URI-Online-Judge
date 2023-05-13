def fatorial(x):
  if (x == 0):
    return 1
  else:
    return x * fatorial(x - 1)
    
n = int(input())

print(fatorial(n))
