j = 60

for i in range(1, 61, 3):
    print("I={} J={}".format(i, j))
    if j == 0:
      break
    j -= 5
