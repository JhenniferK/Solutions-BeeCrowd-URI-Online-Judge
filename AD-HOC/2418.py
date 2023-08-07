entrada = list(map(float, input().split()))
entrada = sorted(entrada)
remover = entrada[1:-1]

pontuacao = 0

for i in range(len(remover)):
  pontuacao += remover[i]

print("{:.1f}".format(pontuacao))
