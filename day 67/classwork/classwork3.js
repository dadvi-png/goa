let minus = document.getElementById("min")
let plus = document.getElementById("plus")
let p = document.querySelector("p")
let count = 0;

function dec(){
   if(count > 0){
     count--
    p.innerHTML = count
   }

   
}
function inc(){
   count++
    p.innerHTML = count

   
}
minus.onclick = dec
plus.onclick = inc



