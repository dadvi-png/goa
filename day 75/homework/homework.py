# 8 kyu
# 1 
def multiply(a, b):
    a * b
# 2
def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return 'Odd'
# 3
def make_negative( number ):
    if number > 0:
        return number - number * 2
    else:
        return number
# 4
def solution(string):
     return string[::-1]
# 5
def bool_to_word(boolean):
    if boolean == False:
        booleanz = "No"
        
    elif boolean == True:
        booleanz = 'Yes'
    return booleanz

# 6
def boolean_to_string(b):
    if b == True:
        return "True"
    else:
        return "False"
# 7
def sum_mix(arr):
    list = []
    for i in arr:
        list.append(int(i))
        
    return sum(list)
# 8
def positive_sum(arr):
    return sum(arr) if arr[0:1] == "-"+type(6) else sum(arr)
# 9
def remove_char(s):
    return s[1:-1]
# 10
def find_average(numbers):
    if sum(numbers) <= 0:
        return 0
    else:
        return sum(numbers) / len(numbers)
# 11
def find_needle(haystack):
    index = -1
    for i in haystack:
        index+=1
        if i == "needle":
            return f"found the needle at position {index}"
# 12
def find_needle(haystack):
    index = -1
    for i in haystack:
        index+=1
        if i == "needle":
            return f"found the needle at position {index}"
# 13
def hero(bullets, dragons):
    if bullets / 2 >= dragons:
        return True
    else:
        return False
# 14
def bmi(weight, height):
    bmi = weight / height ** 2
    if bmi <= 18.5:
        return "Underweight"
    elif bmi <= 25.0:
        return "Normal"
    elif bmi <= 30.0:
        return "Overweight"
    elif bmi > 30:
        return "Obese"
# 15
def switch_it_up(number):
    if number == 1:
        return "One"
    elif number == 0:
        return "Zero"
    elif number == 2:
        return "Two"
    elif number == 3:
        return "Three"
    elif number == 4:
        return "Four"
    elif number == 5:
        return "Five"
    elif number == 6:
        return "Six"
    elif number == 7:
        return "Seven"
    elif number == 8:
        return "Eight"
    else:
        return "Nine"
# 16
def lowercase_count(strng):
    count = 0
    for i in strng:
        if i.islower():
            count+=1
    return count
# 17
def whatday(num):
    if num == 1:
        return "Sunday"
    elif num == 2:
        return "Monday"
    elif num == 3:
        return "Tuesday"
    elif num == 4:
        return "Wednesday"
    elif num == 5:
        return "Thursday"
    elif num == 6:
        return "Friday"
    elif num == 7:
        return "Saturday"
    else:
        return "Wrong, please enter a number between 1 and 7"
# 18
def invert(lst):
    result = []
    for i in lst:
        result.append(i*-1)
    return result
# 19
def cookie(x):
    if type(x) == str:
        return 'Who ate the last cookie? It was Zach!'
    elif type(x) == float or type(x) == int:
        return 'Who ate the last cookie? It was Monica!'
    else:
        return 'Who ate the last cookie? It was the dog!'
# 20
def bonus_time(salary, bonus):
    if bonus == True:
        return f"${salary * 10}"
    else:
        return f"${salary}"
# 21
def summation(num):
    return num*(num + 1) / 2
# 7 kyus

# 1
def row_sum_odd_numbers(n):
    return n**3
# 2
def reverse_words(text):
    text2 = text.split(" ")
    res = []
    for i in text2:
        res.append(i[::-1])
    return " ".join(res)
# 3 
def odd_or_even(arr):
    if sum(arr) % 2 == 0:
        return "even"
    else:
        return "odd"
# 4
def hydrate(drink_string): 
    res = 0
    for i in drink_string:
        if i.isdigit():
            res+=int(i)
    if res == 1:
        return f"{res} glass of water"
    else:
        return f"{res} glasses of water"
#5
def solution(text, ending):
    return text.endswith(ending)
# 6
def filter_list(l):
    new_list = []
    
    for item in l:
        if type(item) != str:
            new_list.append(item)
            
    return new_list
# 7
def is_sorted_and_how(array):
    array1 = sorted(array)

    
    
    if array == array1:
        return "yes, ascending"
    elif min(array) == array[-1]:
        return 'yes, descending'
    else:
        return "no"
# 8
def square_digits(num):
    result = ""
    for i in str(num):
        result += str(int(i)**2)
    return int(result)
# 9
def get_count(sentence):
    sentence2 = sentence.count("a") + sentence.count("e") + sentence.count("i") + sentence.count("o") + sentence.count("u")
    return sentence2
# 10
def dont_give_me_five(start,end):
    count = 0
    for i in range(start, end+1):
        if str(5) not in str(i):
            count+=1
            
    return count
# 11
def max_diff(lst):
    
    if len(lst) == 0 or len(lst) == 1:
        return 0
    else:
        return max(lst) - min(lst)