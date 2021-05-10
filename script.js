document.querySelector('.menu').addEventListener('click',() => {
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change')
    })
})


const icons = document.querySelectorAll('.section-1-icons i')
let count = 1;

setInterval(() =>{
    count++
    const icon = document.querySelector('.section-1-icons .change')
    icon.classList.remove('change')
    if(count > icons.length){
        icons[0].classList.add('change')
        count = 1
    }
    icon.nextElementSibling.classList.add('change')
},4000)