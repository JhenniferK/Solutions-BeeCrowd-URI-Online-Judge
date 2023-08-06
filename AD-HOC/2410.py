n = int(input())
array = []

while n:
    n -= 1
    array.append(int(input()))

array = set(array)
print(len(array))
