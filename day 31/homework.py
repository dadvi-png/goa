# 1 
# tuple არის რაღაცა სია რომელსაც ვერ შევცვლით და სულ ისე დარჩება როგორც არის.

# 2 
names = ("mari", "ioane", "sano", "saba", "Ilia", "giorgi", "gurami")
print(names[-2])
# 3
person = ("საბა", "ჭანტურიშვილი", "11")
სახელი, გვარი, ასაკი = person
print(სახელი + " " + გვარი + " " +"გამარჯობა" + "შენი ხარ" + " " + ასაკი + " " + "წლის")
# 4
tuple = ("GOA", "group 83", "ვაჟა", "ნიკოლიზი", "გიო", "დავით", "ბაჩო", "ვაჟა", "ტატო", "ალექსანდრე", "ნერსე", "ილია")
academy, group, *names1= tuple

print(academy)
print(group)
print(names1)
# 5
list = [9, 1, 6, 7, 1002, 1+1, 300+231, 100*67, 6690, 1+1-100+10000/1,5-67*67+6700-696-1111-10000, 123814, 214823471, -1231]
def manual_minandmax(list):
    return min(list)
    
print(manual_minandmax(list))

