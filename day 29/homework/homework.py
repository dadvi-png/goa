# 4)
def get_count(sentence):
    sentence2 = sentence.count("a") + sentence.count("e") + sentence.count("i") + sentence.count("o") + sentence.count("u")
    return sentence2

# 2)
def is_sorted_and_how(array):
    array1 = sorted(array)

    
    
    if array == array1:
        return "yes, ascending"
    elif min(array) == array[-1]:
        return 'yes, descending'
    else:
        return "no"
# 3)
def duplicate_encode(word):
    str = type("hey")
    for duplicate_encode in word:
        if duplicate_encode.count(" ") != 2:
            return duplicate_encode.replace(" ", ")" )


# 1)