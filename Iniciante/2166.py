def raiz2(n):
  if n == 0:
      return 2
    
  x = 2+1/raiz2(n-1)
  return x

n = int(input())
x = raiz2(n)-1

print("{:.10f}".format(x))
