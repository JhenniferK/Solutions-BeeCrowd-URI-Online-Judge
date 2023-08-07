import math

entrada = list(map(int, input().split()))
F = entrada[0]
O = entrada[1]
L = entrada[2]

maxF = math.floor(F/2)
maxO = math.floor(O/3)
maxL = math.floor(L/5)

maximo = min(maxF, maxO, maxL)

print(maximo)
