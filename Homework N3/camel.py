camelcase=input("name:")
for x in camelcase:
      if x.isupper():
            print("_" + x.lower(), end="")
      else: 
            print(x, end="")