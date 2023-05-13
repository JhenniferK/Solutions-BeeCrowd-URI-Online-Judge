n = int(input())

arr = [0, 1]

for i in range(2, n):
    arr.append(arr[i-1] + arr[i-2])

for i in range(n):
    if i == (n - 1):
        print(arr[i])
    else:
        print(arr[i], end=" ")
