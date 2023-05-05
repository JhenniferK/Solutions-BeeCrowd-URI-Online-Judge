line1 = input().split()
line2 = input().split()

c1 = int(line1[0])
n1 = int(line1[1])
v1 = float(line1[2])

c2 = int(line2[0])
n2 = int(line2[1])
v2 = float(line2[2])

calculo = n1*v1+n2*v2

print("VALOR A PAGAR: R$ {:.2f}".format(calculo))
