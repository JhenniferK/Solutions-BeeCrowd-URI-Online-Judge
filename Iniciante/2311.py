n = int(input())

def remover(array):
  array.sort()
  array.pop(0)
  array.pop(-1)

for i in range(n):
    nome = str(input())
    nivel = float(input())
    notas = list(map(float, input().split()))
    
    remover(notas)
    soma = sum(notas)
    nfinal = soma*nivel
    
    print("{} {:.2f}".format(nome, nfinal))
