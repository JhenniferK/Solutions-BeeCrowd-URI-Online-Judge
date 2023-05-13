correto = int(input())
respostas = list(map(int, input().split()))
corretas = 0

for i in range(len(respostas)):
  if (correto == respostas[i]):
    corretas += 1

print(corretas)
