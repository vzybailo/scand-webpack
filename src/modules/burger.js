// burger menu
function burgerMenu() {
    let btn = document.querySelector('#burger-container')
    let burgMenu = document.querySelector('.burger__menu')
    let doc = document.querySelector('html')

    btn.addEventListener('click', () => {
        btn.classList.toggle('open')
        burgMenu.classList.toggle('show')
        if(btn.classList.contains('open')) {
            doc.style.overflow = 'hidden'
        } else {
            doc.style.overflow = 'auto'
        }
    })
}

export default burgerMenu