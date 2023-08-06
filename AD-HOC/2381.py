entrada = list(map(int, input().split()))
n = entrada[0]
k = entrada[1]
alunos = []

for i in range(n):
  alunos.append(str(input()))

ordenado = sorted(alunos)

print(ordenado[k-1])
