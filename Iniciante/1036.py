import math

linha = input().split()

A = float(linha[0])
B = float(linha[1])
C = float(linha[2])

delta = (B**2)-(4*A*C)

if delta<0 or A==0:
  print("Impossivel calcular")
else:
  R1 = (-B+(math.sqrt(delta)))/(2*A)
  R2 = (-B-(math.sqrt(delta)))/(2*A)
  print("R1 = {:.5f}".format(R1))
  print("R2 = {:.5f}".format(R2))
