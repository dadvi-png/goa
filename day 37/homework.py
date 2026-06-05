def smash(words):
    a = "a"
    word1 = str(words)[0]
    word2 = word1.replace("[", "")
    word3  = ",".join(words)
    word4 = word3.replace(",", " ")
    return word4

def dont_give_me_five(start,end):
    n = 0
    for i in range(start,end+1):
      if '5' not in str(i):
            n+=1
    return n



