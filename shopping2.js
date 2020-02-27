//variables Globales 
const total = document.querySelector(".TotalQ") 
const btnPlus = Array.from( document.querySelectorAll(".plus") )// return nodeList or Html Collection object { 0 : el , 1:el    } must converted to Array 
const btnMinus = Array.from( document.querySelectorAll(".minus") )
const quantity = Array.from(document.querySelectorAll(".quantityy"))
const priceUnit = Array.from(document.querySelectorAll(".prix"))
const btnRemove = Array.from(document.querySelectorAll(".delete"))
const btnLike = Array.from(document.querySelectorAll(".like"))


/*
let tab = ["element" , "element" ,"karim" ]

for(let el of tab){
    console.log(el.toUpperCase())  ==> "ELEMENT" , "ELEMENT" ,"KARIM"
}
 


*/

//Btn Plus
for (let  btn of btnPlus){
    btn.addEventListener('click',function(event){
        btn.nextElementSibling.innerText = Number( btn.nextElementSibling.innerText )+1;
        updateTotal()
    })
}
//Btn Minus
for (let  btn of btnMinus){
    btn.addEventListener('click',function(event){
        btn.previousElementSibling.innerText = Number( btn.previousElementSibling.innerText )-1;
        updateTotal()
    })
}
//Btn Like
for (let i = 0; i < btnLike.length; i++) {
    btnLike[i].addEventListener("click", function() {
      btnLike[i].style.color !== "red"
        ? (btnLike[i].style.color = "red")
        : (btnLike[i].style.color = "black");
    });
  }
//   btn Remove
for (let i = 0; i < btnRemove.length; i++) {
     
    btnRemove[i].addEventListener('click', function() {
        
        btnRemove[i].parentElement.parentElement.remove()
    })}

    function updateTotal() {
        let sum = 0;
        for (let i = 0; i < quantity.length; i++) {
          sum += quantity[i].innerText * priceUnit[i].innerText;
        }
        total.innerText = sum;
        console.log(sum);
      }