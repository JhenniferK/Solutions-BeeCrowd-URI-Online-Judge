li = int(input())
ls = int(input())
soma = 0

if ls > li:
  for i in range(li+1, ls):
    if i%2 != 0:
      soma += i

if li > ls:
  for i in range(ls+1, li):
    if i%2 != 0:
      soma += i

print(soma)
