line1 = input().split()

hi = int(line1[0])
hf = int(line1[1])

h = hf-hi

if h < 1:
  h += 24
  print("O JOGO DUROU {} HORA(S)".format(h))

if h == 0:
  print("O JOGO DUROU 24 HORA(S)")

if hf > hi:
  print("O JOGO DUROU {} HORA(S)".format(h))
