n = int(input())

for i in range(n):
    valores = list(map(float, input().split()))
    pesos = [2, 3, 5]
    soma = 0

    for j in range(len(valores)):
        soma += valores[j]*pesos[j]

    media = soma/10
    print("{:.1f}".format(media))
