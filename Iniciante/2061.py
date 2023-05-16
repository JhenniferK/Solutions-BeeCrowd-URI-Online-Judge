lines1 = list(map(int, input().split()))

abas = lines1[0]
vezes = lines1[1]

for i in range(vezes):
  acao = str(input())

  if (acao == 'fechou'):
    abas -= 1
    abas += 2
  else:
    abas -= 1

print(abas)
