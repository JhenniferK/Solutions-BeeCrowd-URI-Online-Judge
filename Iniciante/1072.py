lim = int(input())
contIn = 0 
contOut = 0

for i in range(lim):
  valor = int(input())
  if valor >= 10 and valor <= 20:
    contIn += 1
  else:
    contOut += 1

print("{} in\n{} out".format(contIn, contOut))
