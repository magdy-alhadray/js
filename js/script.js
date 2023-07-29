let btns = document.querySelectorAll('.btn')
let modalBody = document.querySelector('.modal-body')
let circle = document.querySelector('.circle')
let button = document.querySelector('.button')
let totalPriceShow = document.querySelector('.totalPrice')

var totalPrice = 0;

btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        modalBody.innerHTML +="<br>"+btn.parentElement.firstElementChild.textContent + `<br>` + " price : " +  +(btn.parentElement.children[1].lastElementChild.textContent)

        if(modalBody.innerHTML !== ""){
            circle.style.display="block"
            button.style.display="block"
        }
        button.addEventListener('click', ()=>{
            totalPrice += +(btn.parentElement.children[1].lastElementChild.textContent);
            totalPriceShow.innerHTML =totalPrice
        })
    })
})


console.log(modalBody);