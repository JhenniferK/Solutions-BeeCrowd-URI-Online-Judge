lines = list(map(int, input().split()))

a = lines.pop(0)
n = lines.pop(0)

while n <= 0:
    n = lines.pop(0)

soma = a

for i in range(1, n):
    soma += (a + i)

print(soma)
