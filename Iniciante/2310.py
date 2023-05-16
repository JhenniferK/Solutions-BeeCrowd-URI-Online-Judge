n = int(input())
tS = 0
tB = 0
tA = 0
S = 0
B = 0
A = 0

for i in range(n):
  nome = str(input())
  s, b, a = map(int, input().split())
  s1, b1, a1 = map(int, input().split())
  
  tS += s
  tB += b
  tA += a
  S += s1
  B += b1
  A += a1

pSaque = (100*S)/tS
pBloqueio = (100*B)/tB
pAtaque = (100*A)/tA

print("Pontos de Saque: {:.2f} %.".format(pSaque))
print("Pontos de Bloqueio: {:.2f} %.".format(pBloqueio))
print("Pontos de Ataque: {:.2f} %.".format(pAtaque))
