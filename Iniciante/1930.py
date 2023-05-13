line1 = input().split()

def calcularNumeroMax(t1, t2, t3, t4):
  numeroMax = t1 + t2 + t3 + t4 - 3
  return numeroMax

t1 = int(line1[0])
t2 = int(line1[1])
t3 = int(line1[2])
t4 = int(line1[3])

resultado = calcularNumeroMax(t1, t2, t3, t4)

print(resultado)
