def disemvowel(string_):
    res = ""
    vowels = "AEIOUaeiou"
    for i in string_:
        if i not in vowels:
            res+=i
    return res

def odd_ball(array):
    oddind = int(array.index("odd"))
    if array.count(oddind) >= 1:
        return True
    else:
        return False
    
def dont_give_me_five(start,end):
    count = 0
    for i in range(start, end+1):
        if str(5) not in str(i):
            count+=1
            
    return count

def solution(text, ending):
    return text.endswith(ending)

def xo(s):
    s1 = s.lower()
    if s1.count("o") == s1.count("x"):
        return True
    else:
        return False