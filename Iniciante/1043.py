linha = input().split()

A = float(linha[0])
B = float(linha[1])
C = float(linha[2])

if A < (B + C) and B < (A + C) and C < (A + B):
  p = A+B+C
  print("Perimetro = {:.1f}".format(p))
else:
  area = ((A+B)*C)/2
  print("Area = {:.1f}".format(area))
