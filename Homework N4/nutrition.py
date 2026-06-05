Nutrition={"Apple":"130",
           "Avocado":"50",
           "Cherries":"100",
           "Tomato":"",
             }
Fruit=input("fruit:").capitalize()
for x in Nutrition:
   if Fruit==x:
      print(f"Calories:{Nutrition[x]}")
    