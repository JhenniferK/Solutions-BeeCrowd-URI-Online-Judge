line1 = input().split()

c = int(line1[0]) 
q = int(line1[1])

if c >= 1 and c <= 5:
  if c == 1:
    v = q*4
    print("Total: R$ {:.2f}".format(v))
  elif c == 2: 
    v = q*4.50
    print("Total: R$ {:.2f}".format(v))
  elif c == 3:
    v = q*5
    print("Total: R$ {:.2f}".format(v))
  elif c == 4:
    v = q*2
    print("Total: R$ {:.2f}".format(v))
  elif c == 5:
    v = q*1.50
    print("Total: R$ {:.2f}".format(v))
