
const logo = document.getElementById('logo')

logo.addEventListener('click', hdlClick)

function hdlClick(e){
    e.target.classList.add('animated', 'bounce')
    e.target.addEventListener('animationend', hdlAnimationEnd)

    function hdlAnimationEnd(e){
        e.target.classList.remove('animated', 'bounce')
        e.target.removeEventListener('animationend', hdlAnimationEnd)
    }
}