car1 = list(map(int, input().split()))
car2 = list(map(int, input().split()))

if (car1[1]/car1[2] < car2[1]/car2[2]):
  print(car1[0])
else:
  print(car2[0])
