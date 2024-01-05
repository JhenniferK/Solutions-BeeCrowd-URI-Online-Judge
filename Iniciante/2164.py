import math

n = int(input())

fib = (((1+math.sqrt(5))/2)**n - ((1-math.sqrt(5))/2)**n)/math.sqrt(5)

print("{:.1f}".format(fib))
