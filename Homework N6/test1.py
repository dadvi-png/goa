def convert(fraction):
    while True:
        try:
            x,y=fraction.split("/")
            x=int(x)
            y=int(y)
            if x<y and y>1:
                return round((x/y)*100)
            else:
                continue
        except (ValueError, ZeroDivisionError):
            print("incorrect")
            continue
def gauge(lol):
    if lol<=1:
        return "E"
    elif lol>=99:
        return "F"
    else:
        return f"{lol}%"
def main():
    while True:
     try:
        m=convert(input("level:"))
        p=gauge(m)
        print(p)
     except (ValueError, ZeroDivisionError):
        continue
if __name__=="__main__": 
  main()
        
        

                        