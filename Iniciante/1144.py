l1 = int(input())

for i in range(1, l1+1):
  n1 = i
  n2 = i*i
  n3 = i*i*i

  print("{} {} {}".format(n1, n2, n3))
  print("{} {} {}".format(n1, n2+1, n3+1))
