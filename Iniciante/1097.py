ls = 7
li = 5

for i in range(1, 10, 2):
  for j in range(ls, li-1, -1):
    print("I= {} J= {}".format(i, j))
  ls += 2
  li += 2
