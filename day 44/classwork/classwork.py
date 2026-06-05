# 1) შემქენით პროგრამა რომელიც მომხმარებელს შემოატანინებს ორ რიცხვს და ყოფს ერთამენთზე. გამოიყენეთ try / except რომ პროგრამა არ გაჩერდეს თუ მომხმარებელმა შემოიტანა 0

# 2) შექმენით პროგრამა რომელიც მომხმარებელს სთხოვს რიცხვის შეყვანას. თუ მომხმარებელმა რიცხვის ნაცვლად ტექსტს შეიყვანს გამოიტანეთ შესაბამისი მესიჯი.

# 3) შექმენით სია და მომხმარებელს შემოატანინეთ ინდექსი. გამოიყენეთ try და except, რათა პროგრამამ error არ გამოიტანოს თუ ინდექსი სიაში არ არსებობს

# 4) შექმენით პროგრამა რომელიც მომხმარებელს სთხოვს რიცხვს და შემდეგ გამოაქვს მისი კვადრატი. გამოიყენეთ try და except, რათა თავიდან აიცილოთ არასწორი მონაცემის შეყვანა 

# 1
try:
    print(int(input("enter a number:")) / int(input("enter a number:")))
except ZeroDivisionError:
    print("ERROR")

# 2
try:
    print(int(input("enter a number:")))
except ValueError:
    print("invalid type")

# 3
try:
  
    abcs = ["a", "b", "c", "d"]
    print(abcs[6])
except IndexError:
    print("wrong index ERROR")
# 4
try:
    print(int(input("enter a number:")) ** 2)
except ValueError:
    print("wrong value ERROR!!!")