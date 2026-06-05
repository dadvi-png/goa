# default value არის ის ვალიუ რომელსაც ვაძლევთ ფუნქციის შესაქმნელად, ის ცვლის ფუნქციას თუ არ მივცემთ რამეს print-ის დროს.

# def numbers(num1=5, num2=3):
#     return max(num1, num2)
# print(numbers())

list = []
def numbers(num1=5, num2=3):
    list.append(num1)
    list.append(num2)
    return max(list)
print(numbers())
    