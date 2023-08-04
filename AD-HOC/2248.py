turma = 1;

while True:
    n = int(input());
    if n == 0:
        break;

    notas = [];
    while n:
        n -= 1;
        notas.append([int(x) for x in input().split()]);

    maior = max([x[1] for x in notas]);
    estagio = [str(x[0]) for x in notas if x[1] == maior];

    print('Turma {}'.format(turma));
    print(' '.join(estagio), '');
    print();
  
    turma += 1;
