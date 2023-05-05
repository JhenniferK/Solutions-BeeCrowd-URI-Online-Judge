n = float(input())

if n > 2000 and n <= 3000:
  n = n-2000
  n = n*0.08
  print("R$ {:.2f}".format(n))
elif n > 3000 and n <= 4500:
  n = n-3000
  n = n*0.18 + 1000*0.08
  print("R$ {:.2f}".format(n))
elif n > 4500:
  n = n-4500
  n = n*0.28 + 1000*0.08 + 1500*0.18
  print("R$ {:.2f}".format(n))
else:
  print("Isento")
