def DNA_strand(dna):
    res = ""
    for i in dna:
        if i == "A":
            res+="T"
        elif i == "T":
            res+="A"
        elif i == "C":
            res+="G"
        elif i == "G":
            res+="C"
    return res
# 1 Dna
def solution(s):
    
    str = ""
    for i in s:
        if i.isupper():
            str+=" "
        str+=i
    return str
# 2 B R eak camel case
def find_it(seq):
    for i in seq:
        if seq.count(i) % 2 == 1:
            return i
# 3 find odd int
def high_and_low(numbers):
    numbers1 = numbers.split(" ") 
    numbers2 = []
    for i in numbers1:
        numbers2.append(int(i))
    return f"{max(numbers2)} {min(numbers2)}"
# 4 highest and lowest
def solution(text, ending):
    return text.endswith(ending)
# 5 what does string end with?