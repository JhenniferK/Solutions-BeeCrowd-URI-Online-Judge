n = int(input())
x = list(map(int, input().split()))

print("Menor valor: {}".format(min(x)))
print("Posicao: {}".format(x.index(min(x))))
