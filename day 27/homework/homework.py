# 3)
def lovefunc( flower1, flower2 ):
    if flower1 == flower2:
        return False
    elif flower1 % 2 == 0 and flower2 % 2 != 0:
        return True
    elif flower2 % 2 == 0 and flower1 % 2 != 0:
        return True
    elif flower1 % 2 == 0 and flower2 % 2 == 0:
        return False
    elif flower1 % 2 != 0 and flower2 % 2 != 0:
        return False
# 4)
def disemvowel(string_):
    string = string_.replace("a", "")
    string1 = string.replace("o", "")
    string2 = string1.replace("e", "")
    string3 = string2.replace("i", "")
    string4 = string3.replace("O", "")
    return string4
# 1)
def friend(x):
    for i in friend(4):
        return friend
# 2) 
def friend(x):
    realfriend = []
    for friend in x:
        if len(friend) == 4:
            realfriend.append(friend)
    return realfriend
# 0)
def filter_list(l):
    new_list = []
    
    for item in l:
        if type(item) != str:
            new_list.append(item)
            
    return new_list