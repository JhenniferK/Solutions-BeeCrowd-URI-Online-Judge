sqc = ""
primeiroLoop = True

while (True):
  x = int(input())

  if (x == 0):
    break

  if not primeiroLoop:
    sqc += "\n"

  for i in range(1, x+1):
    sqc += str(i)

    if (i < x):
      sqc += " "

  primeiroLoop = False

print(sqc)
