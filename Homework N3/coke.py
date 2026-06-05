due=50
while due>0:
    print(f"Amount Due:{due}")
    coin=int(input(f"insert coin:"))
    if coin==25 or coin==5 or coin==10:
     due -= coin
    
print(f"change: {abs(due)}")