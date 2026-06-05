# 0) დაწერეთ, რა შემთხვევაში შეგვიძლია მნიშვნელობის გადაქცევა ინტეჯერად და ფლოათათ
# 1) მომხმარებელს შემოატანინეთ 2 რიცხვი inputით(აუცილებლად გადააქციეთ ინტეჯერად), 
# შემდეგ პრინტის მეშვეობით ამ ორ რიცხვზე გამოიყენეთ ყველა მათემატიკური ოპერაცია

# მონაცემთა ტიპის ფლოათად და ინტეჯერად გადაქცევა მხოლოდ იმდროს შეიძლება როცა მხოლოდ რიცხვია სხვა მონაცემთა ტიპად
num = int(input("enter a number"))
num1 = int(input("enter a number"))
print(num1 + num)
print(num1 * num)
print(num1 / num)
print(num1 % num)
print(num1 - num)
print(num1 ** num)
print(num1 // num)
# 2) მომხმარებელს შემოატანინეთ 2 რიცხვი და გამოიყენეთ ამ რიცხვებზე შედარების ოპერაციები
# 3) შედარების ოპერაციებით, გამოიტანეთ 5 True და 5 False
num2 = int(input("enter a number"))
num3 = int(input("enter a number"))
print(num2<num3)

num4 = 1
num5 = 2
print(num4<num5)
print(True or True)
print(not False)
print(True and True)
print(True and not False)
print(num4>num5)
print(False or False)
print(not True)
print(False and False)
print(False and not True)



