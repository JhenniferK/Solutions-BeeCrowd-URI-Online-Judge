n = int(input())
resp = list(map(int, input().split()))
sat = 0
ins = 0

for i in range(n):
  if (resp[i] == 0):
    sat += 1
  else:
    ins += 1

if (sat > ins):
  print('Y')
else:
  print('N')
