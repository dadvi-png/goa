# ```
# 0) ჩამოწერეთ ყველა ნასწავლი string ფუნქციები
# 1) მომხმარებელს შემოატანინეთ თავისი სახელი, შესაძლოა რომ მომხმარებელმა თავისი სახელი დაწერა არასწორად(თავისი სახელი არ იწყება დიდი ასოთი 
# და როგორც ვიცით ყველა სახელი დიდი ასოთი იწყება), ამიტომაც შეუსწორეთ და ისე დააბრუნეთ
# ```

# upper, lower, find, count,  replace, swapcase, capitilize, title.
# name=input("your name")
# print(name.title())


# 2) ჩამოწერეთ დღეს ნასწავლი list ფუნქციები
# 3) მომხმარებელს შემოატანინეთ თავისი სახელი, მეგობარი1ის სახელი და მეგობარი2ის სახელი,
# შემდეგ ეს სახელები შეასწორეთ(ისე როგორც წინა საკლასოში), შემდეგ ეს გასწორებული სახელები ჩაამატეთ სიაში, საბოლოოდ კი შექმენით 
# ახალი დასორტირებული სია და დაპრინტეთ

# copy, sum, min, max, sorted.
megobari1=input("your enter name")
megobari2=input("your enter name")
megobari12 = megobari1.capitalize()
megobari11 = megobari2.capitalize()
list=[]
list.append(megobari11)
list.append(megobari12)
list1 = sorted(list)
print(list1)