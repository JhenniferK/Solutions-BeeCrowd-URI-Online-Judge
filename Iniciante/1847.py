a, b, c = map(int, input().split())

if (a > b and b <= c):
  humor = ':)'
elif (a < b and b >= c):
  humor = ':('
elif (a < b and b < c):
  if ((c-b) < (b-a)):
    humor = ':('
  elif ((c-b) == (b-a)):
    humor = ':)'
  else:
    humor = ':)'

elif (a > b and b > c):
  if ((b-c) < (a-b)):
    humor = ':)'
  elif ((b-c) == (a-b)):
    humor = ':('
  else:
    humor = ':('

elif (a == b):
  if (c > b):
    humor = ':)'
  else:
    humor = ':('

print(humor)
