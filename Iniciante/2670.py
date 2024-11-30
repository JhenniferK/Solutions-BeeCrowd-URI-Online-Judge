def tempoMin(A1, A2, A3):
    andar1 = 0 + (2*A2) + (4*A3)
    andar2 = (2*A1) + 0 + (2*A3)
    andar3 = (4*A1) + (2*A2) + 0

    return min(andar1, andar2, andar3)

A1 = int(input())
A2 = int(input())
A3 = int(input())

resultado = tempoMin(A1, A2, A3)
print(resultado)
