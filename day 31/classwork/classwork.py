# განსხვავება tupleსა და  listს შორის--->  ლისტის ყველა კომპომენტი შეგვილია შევცვალოთ მაგრამ თუპლის შეუძლებბელია.

# info = ("davit", "group 83", "GOA")

# print(type(info))


# list = ["apple", 9, 1, 6, 7]
# def manual_count(list, apple):
#     return list.count(apple)
# print(manual_count(list, "apple"))

# def manual_find(list, apple):
#     return list.index("apple")
# print(manual_find(list, "apple"))



group83 = ("ილია", "დავითი", "გიო", "ნიკა", "ბაჩო", "ვაჟა", "ტატო", "ალექსანდრე")
student1, student2, *others = group83

print(student1)
print(student2)
print(others)


