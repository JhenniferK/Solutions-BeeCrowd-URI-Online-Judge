import math

n = int(input());

for i in range(n):
  x, y = list(map(int, input().split()));
  r = (3*x)**2+y**2; 
  b = 2*(x**2)+(5*y)**2;
  c = (-100*x)+(y**3); 

  if (max(r, b, c) == r): 
    print("Rafael ganhou");
  elif (max(r, b, c) == b): 
    print("Beto ganhou");
  elif (max(r, b, c) == c): 
    print("Carlos ganhou");
