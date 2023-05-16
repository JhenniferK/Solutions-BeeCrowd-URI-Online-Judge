musicas = ['PROXYCITY', 'P.Y.N.G.', 'DNSUEY!', 'SERVERS', 'HOST!', 'CRIPTONIZE', 'OFFLINE DAY', 'SALT', 'ANSWER!', 'RAR?', 'WIFI ANTENNAS']

C = int(input())

for i in range(C):
  X, Y = map(int, input().split())

  soma = X+Y
  print(musicas[soma])
