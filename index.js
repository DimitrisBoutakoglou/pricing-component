
let checkbox = document.querySelector("input[name=checkbox]");
let basicPrice = document.querySelector(".basic-price");
let professionalPrice = document.querySelector(".professional-price")
let masterPrice = document.querySelector(".master-price")

checkbox.addEventListener("change", function(){
    if(this.checked){
        basicPrice.innerHTML="<span class='dollar'>&#36;</span>19.99";
        professionalPrice.innerHTML="<span class='dollar'>&#36;</span>24.99";
        masterPrice.innerHTML="<span class='dollar'>&#36;</span>39.99";
    }else{
        basicPrice.innerHTML="<span class='dollar'>&#36;</span>199.99";
        professionalPrice.innerHTML="<span class='dollar'>&#36;</span>249.99";
        masterPrice.innerHTML="<span class='dollar'>&#36;</span>399.99";
    }
});

