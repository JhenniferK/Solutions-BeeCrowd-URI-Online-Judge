linha = input().split()

N1 = float(linha[0])
N2 = float(linha[1])
N3 = float(linha[2])
N4 = float(linha[3])

media = ((N1*2) + (N2*3) + (N3*4) + (N4*1))/10

if media >= 7:
    print("Media: {:.1f}".format(media))
    print("Aluno aprovado.")
elif media < 5:
    print("Media: {:.1f}".format(media))
    print("Aluno reprovado.")
else:
    print("Media: {:.1f}".format(media))
    print("Aluno em exame.")
    N5 = float(input())
    print("Nota do exame: {:.1f}".format(N5))
    
    mediaFinal = (N5 + media)/2
    
    if mediaFinal >= 5:
        print("Aluno aprovado.")
        print("Media final: {:.1f}".format(mediaFinal))
    else:
        print("Aluno reprovado.")
