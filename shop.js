const deleteBtn = document.querySelectorAll('.fa-times')
const hearts = document.querySelectorAll('.fa-heart')
const addbtn = document.querySelectorAll('.fa-plus-circle')
const lessbtn = document.querySelectorAll('.fa-minus-circle')
const total = document.querySelector('.total')


for(let i = 0; i < deleteBtn.length; i++){
    deleteBtn[i].addEventListener('click', function(){
        deleteBtn[i].parentElement.parentElement.remove()
    })
}

hearts.forEach(el => {
    el.addEventListener('click', function(){
        el.classList.toggle('red-heart')
    })
})

for(let i = 0; i < addbtn.length; i++){
    addbtn[i].addEventListener('click', function(){
        addbtn[i].nextElementSibling.innerHTML++
        let unitPrice = parseInt(addbtn[i].parentElement.nextElementSibling.children[0].innerHTML.replace('$', ''))
        let totalPrice = parseInt(total.innerHTML.replace('$', ""))
        total.innerHTML = (totalPrice + unitPrice) + '$ '
    })
}

for(let i = 0; i < lessbtn.length; i++){
    lessbtn[i].addEventListener('click', function(){
        if(lessbtn[i].previousElementSibling.innerHTML > 0){
            lessbtn[i].previousElementSibling.innerHTML--

            let unitPrice = parseInt(addbtn[i].parentElement.nextElementSibling.children[0].innerHTML.replace('$', ''))
        let totalPrice = parseInt(total.innerHTML.replace('$', ""))
        total.innerHTML = (totalPrice - unitPrice) + '$'
        }
    })
}

