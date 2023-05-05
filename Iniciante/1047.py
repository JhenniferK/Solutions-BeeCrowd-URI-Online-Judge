linha = input().split()

h1 = int(linha[0])
m1 = int(linha[1])
h2 = int(linha[2])
m2 = int(linha[3])

h = h2-h1;
m = m2-m1;

if h < 0 or (h == 0 and m <= 0):
    h += 24

if m <= 0:
  m += 60
  h -= 1

if h1 == h2 and m1 == m2:
  print("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)")
else:
  print("O JOGO DUROU {} HORA(S) E {} MINUTO(S)".format(h, m))
