# 0) შექმენით ცვლადი სახელად name, სადაც შეინახავთ თქვენს სახელს, შემდეგ for ციკლის გამოყენებით გამოიტანეთ თქვენი სახელის ყველა ასო
# 1) შექმენით ცვლადი სახელად age, სადაც შეინახავთ თქვენს ასაკს, შემდეგ for ციკლის გამოყენებით გამოიტანეთ თქვენი ასაკის ყველა ციფრი ცალ-ცალკე
name = "davit"
for i in name:
    print(i)
age = 11
for I in range(age):
    print(I)

# 2) შექმენით ცვლადი სახელად correct_password სადაც შეინახავთ რაიმე პაროლს, შემდეგ მომხამრებელს 
# შემოატანინეთ პაროლი, სანამ ეს პაროლი არ იქნება correct_passwordის ტოლი, თავიდან შემოიტანონ პაროლი
password = input("enter a password")
correct_pas = "ab"
while password != correct_pas:
    password = input("enter a password")