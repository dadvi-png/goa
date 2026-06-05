Grocery={}
while True:
    try:
        x=input("fruit:")
        if x=="":
            continue
        if x in Grocery:
          Grocery[x] += 1
        else:
          Grocery[x] = 1
    except EOFError:
       break
for x in sorted(Grocery):
   print(f"{Grocery[x]} {x.upper()}")