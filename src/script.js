window.addEventListener('scroll', ()=> {
    const nav = document.querySelector('nav')

    if(window.scrollY > 0){
        nav.classList.add('sc')
    }else{
        nav.classList.remove('sc')
    }
})

function navTo(id){
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}