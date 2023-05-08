lim = int(input())

for i in range(lim):
  x, y = map(int, input().split())

  if y != 0:
      print("{:.1f}".format(x/y))
  else:
    print("divisao impossivel")
