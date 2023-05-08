lim = int(input())
n1 = 1
n2 = 1
n3 = 1

for i in range(lim):
  print("{} {} {}".format(n1, n2, n3))
  n1 += 1
  n2 = n1**2
  n3 = n1*n2
