entrada = list(map(int, input().split()))
X = entrada[0]
Y = entrada[1]

if (X >= 0 and X <= 432 and Y >= 0 and Y <= 468):
  print('dentro');
else:
  print('fora');
