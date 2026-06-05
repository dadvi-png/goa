import random
def gen_level():
    while True:
        try:
            level=int(input("level:"))
            stage=[1, 2, 3]
            if level in stage:
                return level
        except ValueError:
            continue
def generate_intenger(level):
    if level==1:
        return random.randint(1, 10)
    elif level==2:
        return random.randint(1, 100)
    elif level==3:
        return random.randint(1, 1000)
def main():
    level=gen_level()
    points=0
    for z in range(10):
        x=generate_intenger(level)
        y=generate_intenger(level)
        correct_answer=x+y
        attempts=0
        while attempts<3:
            try:
                 answer=int(input(f"{x}+{y}="))
                 if answer==correct_answer:
                  points +=1
                  break
                 else:
                     print("EEE")
                     attempts +=1
                     continue
            except ValueError:
                print("EEE")
                attempts +=1
                continue
        if attempts==3:
            print(f"{x}+{y}={correct_answer}")
    print(f"points:{points}")
main()

    
