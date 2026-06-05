while True:
    try:
        F=input("Fraction:")
        x, y=F.split("/")
        x=int(x)
        y=int(y)
        if y==0:
            continue
        if x>y:
            continue
        percent=round((x/y)*100)

        if percent<=1:
            print("E")
        if percent>=99:
            print("F")
        else:
            print(f"{percent}%")
            break
    except (ValueError, ZeroDivisionError):
        print("Again")