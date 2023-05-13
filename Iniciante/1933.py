lines1 = list(map(int, input().split()))

c1 = lines1[0]
c2 = lines1[1]

if (c1 == c2):
  c3 = c1
elif (c1 > c2):
  c3 = c1
else:
  c3 = c2

print(c3)
