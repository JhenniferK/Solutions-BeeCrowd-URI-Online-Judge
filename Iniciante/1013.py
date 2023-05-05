import math

line1 = input().split()

a = int(line1[0])
b = int(line1[1])
c = int(line1[2])

maior1 = (a+b+abs(a-b))//2
maior2 = (maior1+c+abs(maior1-c))//2

print("{} eh o maior".format(int(maior2)))
