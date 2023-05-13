ntestes = int(input())
total = 0

for i in range(ntestes):
  c, q = map(int, input().split())

  if (c == 1001):
    total += q*1.5
  elif (c == 1002):
    total += q*2.5
  elif (c == 1003):
    total += q*3.5
  elif (c == 1004):
    total += q*4.5
  elif (c == 1005):
    total += q*5.5

print("{:.2f}".format(total))
