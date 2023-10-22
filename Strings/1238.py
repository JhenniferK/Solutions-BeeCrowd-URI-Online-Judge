n = int(input())

for _ in range(n):
    entrada = input()
    p1, p2 = entrada.split()
    palavra = ""
    tamanho = min(len(p1), len(p2))

    for i in range(tamanho):
        palavra += ''.join(p1[i] + p2[i])

    if tamanho < len(p1):
        palavra += p1[tamanho:]
    else:
        palavra += p2[tamanho:]

    print(palavra)
