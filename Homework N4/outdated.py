Months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
while True:
    try:
     date=input("date:")
     x,y,z=date.split("/")
     x=int(x)
     y=int(y)
     z=int(z)
     if x>=1 and x<=12 and y>=1 and y<=31:
        print(f"{z}-0{x}-0{y}")
        break
    except ValueError:
            pass
    try:
        x,y,z=date.replace(",", "").split()
        if x in Months:
            x=Months.index(x) + 1
            y=int(y)
            z=int(z)
        if y>=1 and y<=31:
            print(f"{z}-0{x}-0{y}")
            break
    except ValueError:
        pass
