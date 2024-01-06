def calculoTempo(popA, popB, crescA, crescB):
  anos = 0

  while popA <= popB:
    popA = int(popA*(1+crescA/100))
    popB = int(popB*(1+crescB/100))
    anos += 1

    if anos > 100:
      return "Mais de 1 seculo."

  return "{} anos.".format(anos)

testes = int(input())

for _ in range(testes):
  pA, pB, cA, cB = map(float, input().split())
  print(calculoTempo(pA, pB, cA, cB))
