entrada = list(map(int, input().split()))

V = entrada[0]
T = entrada[1]

volumes = list(map(int, input().split()))

final = V

for i in range(T):
  final += volumes[i]

  if (final > 100):
    final = 100
  elif (final < 0):
    final = 0

print(final)
