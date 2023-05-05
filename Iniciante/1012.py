linha = input().split()

A = float(linha[0])
B = float(linha[1])
C = float(linha[2])
PI = 3.14159 

aRet = (A*C)/2
aCir = PI*(C**2)
aTra = ((A+B)*C)/2
aQua = B**2
aReta = A*B

print("TRIANGULO: {:.3f}".format(aRet))
print("CIRCULO: {:.3f}".format(aCir))
print("TRAPEZIO: {:.3f}".format(aTra))
print("QUADRADO: {:.3f}".format(aQua))
print("RETANGULO: {:.3f}".format(aReta))
