bola = int(input())
dim = list(map(int, input().split()))

A = dim[0]
L = dim[1]
P = dim[2]

if (A >= bola and L >= bola and P >= bola):
  print("S");
else:
  print("N");
