# # Classwork

# 1) https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/python
def count_sheep(n):
    s = ""
    for i in range(1, n+1):
        s+=f"{i} sheep..."
    return s
# 2) https://www.codewars.com/kata/55cbd4ba903825f7970000f5
def get_grade(s1, s2, s3):
    score = (s1 + s2 + s3) / 3
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return 'F'
# 3) https://www.codewars.com/kata/57a0885cbb9944e24c00008e
def remove_exclamation_marks(s):
    res = ""
    for i in s:
        if i != "!":
            res+=i
            
    return res
# 4) https://www.codewars.com/kata/568d0dd208ee69389d000016/train/python
def rental_car_cost(d):
    cost = d*40
    if d >= 7:
        return cost-50
    elif d >= 3:
        return cost-20
    else:
        return cost