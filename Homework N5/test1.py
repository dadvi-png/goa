import random
while True:
    try:
        n=int(input("number:"))
        if n<1:
            continue
        else:
            break
    except ValueError:
        continue
generate=random.randint(1, n)
def main():
    while True:
        try:
            Guess=int(input("guess:"))
            if Guess>generate:
                print("hot")
                continue
            elif Guess<generate:
                print("cold")
                continue
            else:
                print("just right")
                break
        except ValueError:
            continue
main()