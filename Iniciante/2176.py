s = str(input())
cont1 = 0

for i in range(len(s)):
  if (s[i] == '1'):
    cont1 += 1

if (cont1%2 == 0):
  print('{}0'.format(s))
else:
  print('{}1'.format(s))
