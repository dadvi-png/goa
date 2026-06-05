# 1) შექმენი სია რიცხვებით და გამოიყენე map, რომ ყველა რიცხვი გააორმაგო.

# 2) შექმენი სია და გამოიყენე map, რომ ყველა სიტყვა გადაიყვანო დიდი ასოებით.

# 3) შექმენი რიცხვების სია და გამოიყენე filter, რომ სიიდან აირჩიო მხოლოდ ლუწი რიცხვები.

# 4) შექმენი ფუნქცია, რომელიც იღებს ნებისმიერ რაოდენობის რიცხვს *args-ით და აბრუნებს მათ ჯამს.

# 5) შექმენი ფუნქცია, რომელიც იღებს **kwargs-ს და ბეჭდავს ყველა key-ს და value-ს.

numbers = [1, 57, 76, 89]
x2 =list(map(lambda x: x*2, numbers))
print(x2)
str = ["mariami", "Antarctica", "america", "mtredi", ""]
x2 =list(map(lambda x: x.capitalize(), str))
print(x2)


x2 =list(filter(lambda x: x % 2 == 0, numbers))
print(x2)


def sum(*nums):
    return sum(nums)
sum([1,2,3])
