import math

entrada = list(map(int, input().split()))
L = entrada[0]
A = entrada[1]
P = entrada[2]
R = entrada[3]

if (R >= (math.sqrt(L**2 + A**2))/2 and R >= (math.sqrt(L**2 + P**2))/2):
  print("S")
else:
  print("N")
