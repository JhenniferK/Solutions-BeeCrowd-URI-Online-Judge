valor = int(input())

n100 = valor//100
n50 = (valor%100)//50
n20 = (valor%100%50)//20
n10 = (valor%100%50%20)//10
n5 = (valor%100%50%20%10)//5
n2 = (valor%100%50%20%10%5)//2
n1 = (valor%100%50%20%10%5%2)//1

print("{}\n{} nota(s) de R$ 100,00\n{} nota(s) de R$ 50,00\n{} nota(s) de R$ 20,00\n{} nota(s) de R$ 10,00\n{} nota(s) de R$ 5,00\n{} nota(s) de R$ 2,00\n{} nota(s) de R$ 1,00".format(valor, n100, n50, n20, n10, n5, n2, n1))
