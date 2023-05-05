import math

linha1 = input().split()
linha2 = input().split()

x1 = float(linha1[0])
y1 = float(linha1[1])
x2 = float(linha2[0])
y2 = float(linha2[1])

distancia = math.sqrt((x2-x1)**2 + (y2-y1)**2)

print("{:.4f}".format(distancia))
