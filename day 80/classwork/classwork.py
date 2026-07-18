# 1
def to_camel_case(text):
    text = text.replace("-", " ")
    text = text.replace("_", ' ')
    text = text.split(" ")
    str = ""
    for i in text:
        if i == text[0]:
            str+=i
        else:
            str+=i.capitalize()
    return str
# 2
def thanos_sort(arr):
    if arr == sorted(arr):
        return len(arr)
    middile = len(arr) // 2
    if len(arr) % 2 != 0:
        middile += 1
    left = arr[:middile]
    right = arr[middile:]
    return max(thanos_sort(left), thanos_sort(right))
# 3
def move_zeros(lst):
    list = []
    count = 0
    for i in lst:
        if i != 0:
            list.append(i)
        elif i == 0:
            count+=1
    for x in range(0,count):
        list.append(0)
    return list
# 4
def open_or_senior(data):
    list = []
     
    for i in data:
        age = i[0]
        handicap = i[1]
        if age >= 55 and handicap > 7:
            list.append("Senior")
        else:
            list.append("Open")
    return list
# 5
def printer_error(s):
    ms = "nopqrstuvwxyz"
    error = 0
    for i in s:
        if i in ms:
            error +=1
    return f"{error}/{len(s)}"
# 6
def longest(a1, a2):
    both = a1+a2
    list = sorted(both)
    setz = "".join(set(both))
    setzsort = sorted(setz)
    setzzstr = "".join(setzsort)
    return setzzstr