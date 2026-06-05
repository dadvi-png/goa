# mapი ლისტზე ვაკეთებთ გარკვეულ მოქმედებას და იგივე სიგრძე გვრცძჩება
# filterი გვიფილტრავს სიას და იღებს სიიდან ისეთ ელემენტებს რასაც კოდში ვეუბნებით. სიგრძე შეიძლება შემცირდეს

# 5) შექმენით ფუნქცია food_ranking რომელსაც გადაეცემა ერთი default არგუმენტი
#  (category) და არგსები (საჭმელები), ასევე ჰქონდეს counter და გამოიტანოს შედეგი ასეთი ფორმატით
# (default): (counter) (args)
# მაგალითად -- food: 1 khinkali .... 

strings = ["mariami", "giorgi", "ana", "apple", "banani", "wapli", "true", "1"]
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
კენტი =list(filter(lambda x: x % 2 != 0, numbers))
print(კენტი)


კვადრატი =list(map(lambda x: x**2, numbers))
print(კვადრატი)

strings = ["mariami", "giorgi", "ana", "apple", "banani", "wapli", "true", "1"]
withafirst = list(filter(lambda x: x[0]=="a", strings))
print(withafirst)

def food_ranking(category,*food):
    for food in food:
        print( f"food: {category} {food[0]}")
        category+=1
        print( f"food: {category} {food[1]}")
        category+=1
        print( f"food: {category} {food[2]}")
        category+=1
        print( f"food: {category} {food[3]}")
        category+=1
        print( f"food: {category} {food[2]}")
        category+=1
food_ranking(1, ["apple", "golden turkey", "golden shawarma", "shawarma","sea"])


# def car_builder(**details):
#     for key in details:
#         return key
# car_builder(brand = "BMW", prince = "10k$", color = "green", isfast = True)
