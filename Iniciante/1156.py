somador = 1
x = 2
p = 1

for i in range(3, 40, 2):
  somador += (i/(x**p))
  p += 1

print("{:.2f}".format(somador))
