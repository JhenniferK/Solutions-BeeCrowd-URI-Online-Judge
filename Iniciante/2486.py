tabela = {"suco de laranja":120, "morango fresco":85, "mamao":85, "goiaba vermelha":70, "manga":56, "laranja":50,"brocolis":34}

t = int(input())

while t > 0:
    vitC = 0

    for _ in range(t):
        entrada = input().split(maxsplit=1)
        qtd = int(entrada[0])
        alim = entrada[1]
        vitC += qtd * tabela[alim]

    limMin = 110
    limMax = 130

    if limMin <= vitC <= limMax:
        print(f"{vitC} mg")
    elif vitC < limMin:
        print(f"Mais {limMin - vitC} mg")
    else:
        print(f"Menos {vitC - limMax} mg")

    t = int(input())
