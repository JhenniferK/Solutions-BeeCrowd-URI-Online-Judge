while True:
  x, m = map(int, input().split())
  
  if (x == 0 and m == 0):
    break
  else:
    newXP = x*m
    print(newXP)
