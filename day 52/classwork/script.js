/*
#Classwork

1) კომენტარებით ახსენით თითოეული სტრინგის მეთოდი და მოიყვანეთ თითოზე ორ-ორი მაგალითი
.length
.charAt(index)
.at()
.slice(startIndex,endIndex)
.toUpperCase()
.toLowerCase()
.trim()
.trimStart()
.trimEnd()
.repeat()
.replace()
.replaceAll()
.split()
 
2) კომენტარებით ახსენით რა განსხვავებაა .charAt() და .at()-ს შორის
*/


// .length - სიგრძეს გამოგვიტანს დატა ტიპის console.log("dadvi".lenght) - 5
// .charAt(index) - გამოგვიტანს ()-ში მითითებულ ინდექსის სიმბოლოს 
// .at() - იგივე, რაც charAt მაგრამ მინუსური ინდექსის მითითება შეგვიძლია
// .slice(startIndex,endIndex) - სტრინგს ყოფს ამ ინდექსიდან ანუ startIndex-დან endindex ამდე
// .toUpperCase() - ყველა ასოს დიდად აკეტებს console.log("davit".toUpperCase()) output DAVIT
// .toLowerCase() - ყველა ასოს პატარად აკეტებს
// .trim() - გამოტოვებულ სპეისს შლის
// .trimStart() - დასაწყის გამოტოვებულ სპეისს შლის
// .trimEnd() - ბოლო გამოტოვებულ სპეისს შლის
// .repeat() - იმეორებს სიმბოლოს ერთ ხაზში
// .replace() - ანაცვლებს მითითებულ პირველ ასოს მითითებულ მეორე ასოდ
// .replaceAll() - იგივე, როგორ .replace() მაგრამ ყველა ასოს სიტყვაში ანაცვლებს პირველ მოყოპში მეორე ასოდ
// .split() - ყოფს სტრინგებს ორ ნაწილად

// .charAt() ის და  .at()-ის განსხვავებაა ის რომ .charAt()-თ შეუძლებელია ნეგატიური ინდექსის გამოტანა სტრინგიდან at-ის 
// გამოყენებით კი შესაძლოა.