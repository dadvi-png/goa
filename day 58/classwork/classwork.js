for(let i = 0; i < 21; i+=2){
    console.log(i)
}
array = ["mango", "apple", "pine+apple"]
for(let i = 0; i < array.length; i++){
    if(array[i].length === 5){
        console.log(array[i])
    }
    else{
        console.log("there is not 5 length character")
    }
}