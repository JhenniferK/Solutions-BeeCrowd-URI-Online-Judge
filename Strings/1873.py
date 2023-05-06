n = int(input())

for i in range(n):
    linha = input().split()
    r = str(linha[0])
    s = str(linha[1])

    if r == s:
        print('empate')
    elif (r == 'tesoura' and s == 'papel') or (r == 'tesoura' and s == 'lagarto'):
        print('rajesh')
    elif (r == 'papel' and s == 'pedra') or (r == 'papel' and s == 'spock'):
        print('rajesh')
    elif (r == 'pedra' and s == 'lagarto') or (r == 'pedra' and s == 'tesoura'):
        print('rajesh')
    elif (r == 'spock' and s == 'tesoura') or (r == 'spock' and s == 'pedra'):
        print('rajesh')
    elif (r == 'lagarto' and s == 'spock') or (r == 'lagarto' and s == 'papel'):
        print('rajesh')
    else:
        print('sheldon')
