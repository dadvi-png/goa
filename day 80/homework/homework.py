# 1
def first_non_repeating_letter(s):
    index = 0
    sl = s.lower()
    
    
    for i in sl:
        if sl.count(i) == 1:
            index = sl.index(i)
            return s[index]
        
    return ""
# 2
def likes(names):

    if len(names) == 0:
        return "no one likes this"
    elif len(names) == 1:
        return names[0]  + " "+ "likes this"
    elif len(names) == 2:
        return names[0] + " " + "and" + " " + names[1]  + " "+ "like this"
    elif len(names) == 3:
        return names[0]+","+" "+names[1]+" "+"and"+" "+names[2]+" "+"like this"
    elif len(names) >= 4:
        namesother = len(names)
        return names[0] + "," + " " + names[1] + " "+ "and"  + " "+ str(namesother-2) +" "+ "others like this"
# 3
def string_transformer(s):
    st = ""
    
    for i in s:
        if i.islower():
            st+=i.upper()
        else:
            st+=i.lower()
    list = st.split(" ")
    return " ".join(list[::-1])
# 4
def kebabize(st):
    listz = []
    uppers = ""
    str = ""
    list = []
    lists = []
    for i in st:
        
        if i.isupper():
            uppers+=i
    
    for i in st:
        if i.isupper():
            str+=f"-{i.lower()}"
        
            
        else:
            str+=i.lower()
    if str[0] == "-":
        for c in str:
            list.append(c)
        list[0] = ""
    for y in list:
        if y.isdigit() == False:
            listz.append(y)
    if str[0] != "-":
        for z in str:
            if z.isdigit() == False:
                lists.append(z)
    
    if str[0] != "-":
        for w in lists:
            if lists[0] == "-":
                lists[0] = ""
        return "".join(lists)
    else:
        return "".join(listz)