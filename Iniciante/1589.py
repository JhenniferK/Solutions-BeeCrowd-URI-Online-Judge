ntestes = int(input())
raio = 0

for i in range(ntestes):
  r1, r2 = map(int, input().split())

  raio = r1+r2
  print(raio)
