# 1) შექმენით ერთი ლისთი, და გაფილტრეთ ამ ლისთიდან ლუწი რიცხვები list comprehension გამოყენებით



# 2) შექმენით ლისთი, თქვენი დავალებაა რომ ყოველ იტერაციაზე თითოეულ ელემენტის პირველი ასო გაადიდოთ და შეინახო ახალ ლისთში list comprehension გამოყენებით



# 3) შექმენით ერთი ლისთი, სადაც გექნებათ შეტანილი სხვადახვა მონაცემთა ტიპის ელემენტები: 
# სტრინგები, ინტეჯერები, ბულიანი და ფლოათები, თქვენი დავალებაა, 
# რომ ლისთში დატოვოთ მხოლოდ ინტეჯერები, სხვა ყველაფერი კი გაფილტრეთ

# luwiandkenti = [1, 1231, 324,3,45,6,45,645,654,654,6,456,546,45,654,654,654,6,546,546]
# nonluwi = [x for x in luwiandkenti if x % 2 != 0]
# print(nonluwi)

# nongadidebuli = ["abra", "cake", "hars321%", "iamsocoOl"]
# gadidebuli = [x.capitalize() for x in nongadidebuli]
# print(gadidebuli)

database = [False, True, 0.600070, 2,1, 5, "mtredi", "is so cool"]
str = [x for x in database if type(x) == str]
print(str)