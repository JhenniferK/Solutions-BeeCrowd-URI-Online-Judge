entrada = list(map(int, input().split()))
a = entrada[0]
b = entrada[1]
c = entrada[2]
d = entrada[3]

denom = b*d
num = (denom/b)*a + (denom/d)*c

for i in range(100, 1, -1):
  if (num%i == 0 and denom%i == 0):
    num = num/i
    denom = denom/i

print(int(num), int(denom))
