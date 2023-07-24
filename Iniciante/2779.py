espacos = int(input());
totalCompradas = int(input());
figurinhas = [];
contador = 0;

for i in range(totalCompradas):
    n = int(input());
    
    if (n not in figurinhas):
        figurinhas.append(n);
        contador += 1;

if (espacos >= contador):
    print(espacos-contador);
else:
    print(0);
