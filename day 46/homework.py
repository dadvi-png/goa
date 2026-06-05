# 1) დაწერე ფუნქცია, რომელიც იღებს სტრინგს და აბრუნებს ახალ სტრინგს, სადაც ყველა მეორე სიმბოლო დიდ ასოდ არის გადაყვანილი

# 2) შექმენი ფუნქცია, რომელიც იღებს რიცხვების სიას და აბრუნებს ახალ სიას, სადაც თითოეული ელემენტი გამრავლებულია თავის ინდექსზე

# 3) დაწერე ფუნქცია, რომელიც იღებს სიას და აბრუნებს მხოლოდ იმ ელემენტებს, რომლებიც მარცხენა და მარჯვენა მეზობელზე დიდია

# 4) შექმენი ფუნქცია, რომელიც იღებს სტრინგს და აბრუნებს dictionary-ს, სადაც გასაღები არის სიტყვა, ხოლო მნიშვნელობა — ამ სიტყვის სიგრძე

# 5) დაწერე ფუნქცია, რომელიც იღებს რიცხვს n და აბრუნებს სიას, სადაც არის ყველა რიცხვი 1-დან n-მდე, მაგრამ 3-ის ჯერადები ჩანაცვლებულია სიტყვით "Three"


# string = input("your name")
# length = int(len(string))
# count = 1
# real = list(string.lower())
# result = []
# def datvi(string):
    
#     while length == length:
#         count = 1
#         count*=2
        
#         length - 2
#         result.append(real)  
#         realresult = [x for x in real if int(len(x)) % 2 == 0]
#         return realresult
        
# print(datvi(string))



# def numbers(list1):
#     count = 0
#     while count == int(len(list1)):
#        xl = 0
#        count+=1
#        list2 = [x[xl]*x[1-count] for x in list1]
#        xl += 1
#        return list2
# print(numbers(list1=[1,2,4,5,6]))
        
def main(string):
    result = []
    if len(string) == 0 or 1:
        return "None"
    elif string.islower():
        return "None"
    elif len(string) >= 2 and string[2:2] == string.upper():
        list = list(string)
        list.append(string.upper())
        list1 = [x for x in list if int(len(list)) % 2 == 0]
    return list
print(main(string="daDVIISADAD"))
        
        



        
