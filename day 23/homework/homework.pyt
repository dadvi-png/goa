# 1 ფუნქცია არის ბლოკი რომელშიც ინახება კოდები, მას ვიყენებთ რომ უფრო გავამარტივოთ მუშაობა და უფრო ნაკლები შეცდომა დავუშვათ.
#  2 ფუნქციის შესაქმბელად ჩვენ ვიყენებთ 
# def keywordს და მასთან ვწერთ რა უნდა დაერქვას ამ ფუნქციას. იკდევ უნდა მივაწეროთ არგუმენტი და ინდენტაცია უნდა დავიცვათ როცა რამე იმფორმაციას ვაძლევთ ფუნქციას.
# 3 არგუმენტი არის defის ()-ის შიგნით რომ იწერება რამე სიტყვა ან რიცხვი
# 4
num1 = int(input("enter your frist number"))
num2 = int(input("enter your second number"))

def multi(num1, num2):
    if num1 // num2 == 0:
        multiply=num1 * num2
        print(multiply)
    else:
        
        print(num1 + num2)
        
multi(num1, num2)

# 5

width = int(input("enter a width"))
height = int(input("enter a height"))
def bambera(width, height):
    
    
    if width == height:
        b = "კვადრატი " 
        print(b)
    else:
        b = "მართხკუთკედი"  
        print(b)
        
        
bambera(width, height)