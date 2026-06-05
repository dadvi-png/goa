import random
while True:
    try:
        R=int(input("Level:"))
        if R<1:
            continue
        else:
            break
    except ValueError:
        continue
Generate=random.randint(1, R)
def main():
    while True:
        try:
            Guess=int(input("Guess:"))
            if Guess>Generate:
                print("Too large!")
                continue
            elif Guess<Generate and Guess>0:
                print("Too small!")
                continue
            elif Guess<0:
                continue
            else:
                print("Just right!")
                break
        except ValueError:
            continue
main()
