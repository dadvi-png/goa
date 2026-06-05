# remove popiა მაგრამ ელემენნტის სახელს ვეუბნებით.
# .index გადმოგვცემს რომელ ინდექსზე მდებარეობს ელემენტი.
#  .reverse aბრუნებს ლისტს.
# .sort ალაგებს ლისტს.
# .insert სვავს ახალ ელემენტს და უნდა მივუწეროთ რომელ ინდექსზე იქნება ის.
# .clear ყველაფერს შლის

numbers=[6, 5, 4, 3, 2,]
numbers.append(6)
numbers.remove(6)
print(numbers)

numbers=[6, 5, 4, 3, 2,]
numbers.append(6)
numbers.pop(0)
numbers.clear()
numbers.append(100)
numbers.append(200)
numbers.insert(1, 150)
print(numbers)

numbers=[1, 7, 2, 4, 9, 10, 11, 12,]
numbers.pop(7)
if (int(len(numbers)))==10:
    numbers.insert(5, 10)
print(numbers)

numbers=[1, 7, 2, 4, 9, 10, 11, 12,]
numbers.clear()
numbers.insert(5, 10)
numbers.append("?")
numbers.remove("?")
(len(numbers))
numbers.sort()
numbers.reverse
print(numbers.index(10))
numbers.pop(10)
print(numbers)