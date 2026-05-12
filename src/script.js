window.addEventListener('scroll', ()=> {
    const nav = document.querySelector('nav')

    if(window.scrollY > 0){
        nav.classList.add('sc')
    }else{
        na.classList.remove('sc')
    }
})