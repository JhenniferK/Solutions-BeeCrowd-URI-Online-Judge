contPos = 0

for i in range(6):
    valor = float(input())
    if valor > 0:
        contPos += 1

print("{} valores positivos".format(contPos))
