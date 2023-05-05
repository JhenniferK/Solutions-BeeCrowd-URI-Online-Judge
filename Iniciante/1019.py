n = int(input())

if n >= 3600:
  s = n%60
  m = (int(n/60))%60
  h = int(int(n/60)/60)
  print("{}:{}:{}".format(h, m, s))
else:
  s = n%60
  m = int(n/60)
  h = 0
  print("{}:{}:{}".format(h, m, s))
