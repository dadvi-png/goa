def convert(fraction):
    while True:
        try:
             x,y=fraction.split("/")
             x=int(x)
             y=int(y)
             if x<y and y>0:
                 return round((x/y)*100)
             else:
                 continue
        except (ValueError, ZeroDivisionError):
            continue
def gauge(precentage):
    if precentage<=1:
        return "E"
    elif precentage>=99:
        return "F"
    else:
        return f"{precentage}%"
def main():
    F=input("fraction:")
    fraction=convert(F)
    G=gauge(fraction)
    print(G)
if __name__=="__main__":
    main()