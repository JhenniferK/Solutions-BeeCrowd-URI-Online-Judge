linha = input().split()

A = float(linha[0])
B = float(linha[1])
C = float(linha[2])

ordem = [A, B, C]
ordem.sort(reverse = True)
A, B, C = ordem

if A >= (B+C):
  print("NAO FORMA TRIANGULO")
else:
  if A**2 == (B**2 + C**2):
    print("TRIANGULO RETANGULO")
  if A**2 > (B**2 + C**2):
    print("TRIANGULO OBTUSANGULO")
  if A**2 < (B**2 + C**2):
    print("TRIANGULO ACUTANGULO")
  if A == B and A == C:
    print("TRIANGULO EQUILATERO")
  if A == B and A != C or B == C and B != A or A == C and A != B:
    print("TRIANGULO ISOSCELES")
