n = int(input())
quebrados = 0

for i in range(n):
  entrada = list(map(int, input().split()))
  L = entrada[0]
  C = entrada[1]

  if (L > C):
    quebrados += C

print(quebrados)
