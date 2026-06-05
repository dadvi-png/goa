#1) isupper - ამოწმებს თუ არის უპერ კაისად არის სიტყვა.
# islower- ამოწმებს თუ არის პატარა ასოებად არის სიტყვა.
#2)
# for loopში შეგვილია მხოლოდ სამი რიცხვი ჩარიცხვს. თუ ერთ რიცხვს ჩავწერთ მაშინ მაქამდე მოხდება ლუპი. 
# თუ ორ რიხცვს ჩავწერთ ამიდან იმამდე იქნება. თუ სამს სტეპინგისავით გადასბიჯებს რამდენსაც მივუთითებთ.
#3)
#  for loopით შეგვილი გადსვუსროთ სტრინგსა და ლისტს. ლისტიდან ყველა ელემენტს გამოიტანს.
#4)
foods=["food", "steak", "ake" "ankesi"] 
foods1 = []
for i in foods:
    foods1.append(foods[-1])
   
print(foods1)
#5)
name = input("enter your name")
for i in range(1):
 name1  = name.lower()
if name1 == name:
    print(name1.swapcase())