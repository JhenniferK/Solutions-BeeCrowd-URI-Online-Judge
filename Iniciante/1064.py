contPos = 0
soma = 0

for i in range(6):
    valor = float(input())
    if valor > 0:
        contPos += 1
        soma += valor
        
media = soma/contPos

print("{} valores positivos".format(contPos))
print("{:.1f}".format(media))
