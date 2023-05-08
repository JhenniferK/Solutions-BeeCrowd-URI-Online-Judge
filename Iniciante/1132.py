limInf = int(input())
limSup = int(input())
soma = 0

if limInf > limSup:
  limInf, limSup = limSup, limInf

for i in range(limInf, limSup+1):
    if i%13 != 0:
        soma += i

print(soma)
