salario = float(input())

if salario <= 400:
  percentual = "15 %"
  reajuste = salario*(0.15)
  novo = salario + reajuste
elif salario <= 800:
  percentual = "12 %"
  reajuste = salario*(0.12)
  novo = salario + reajuste
elif salario <= 1200:
  percentual = "10 %"
  reajuste = salario*(0.1)
  novo = salario + reajuste
elif salario <= 2000:
  percentual = "7 %"
  reajuste = salario*(0.07)
  novo = salario + reajuste
elif salario > 2000:
  percentual = "4 %"
  reajuste = salario*(0.04)
  novo = salario + reajuste

print("Novo salario: {:.2f}\nReajuste ganho: {:.2f}\nEm percentual: {}".format(novo, reajuste, percentual))
