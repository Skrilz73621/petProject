// Modal
// removeEventListner
// scroll
const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseBtn = document.querySelector('.modal_close')
const gmailInput = document.querySelector('#gmail')
const phoneInput = document.querySelector('#phone')
const checkButton = document.querySelector('.modal-btn')
const regGmail = /^[\w\W]{10,30}@(mail|gmail).(com|ru)$/
const regPhone = /^\+996-[2576]\d{2}-\d{2}-\d{2}-\d{2}/

checkButton.onclick = () =>{
    console.log('click')
    if(regPhone.test(phoneInput.value)){
        phoneInput.style.filter = 'drop-shadow(0 0 20px lightgreen)'
    }else{
        phoneInput.style.filter = 'drop-shadow(0 0 20px red)'
    }
    if(regGmail.test(gmailInput.value)){
        gmailInput.style.filter = 'drop-shadow(0 0 20px lightgreen)'
    }else{
        gmailInput.style.filter = 'drop-shadow(0 0 20px red)'
    }
}


modal.onclick = (event) =>{
    if(event.target === modal){
        closeModal()
    }


}
const openModel = () =>{
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () =>{
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = ()=>{
    openModel()
}

modalCloseBtn.onclick = ()=>{
    closeModal()
}

let modalStopper = true

function popUp(){
    window.addEventListener('scroll',()=>{
        let documentHeight = document.documentElement.scrollHeight;
        let windowHeight = window.innerHeight;
        let scrollTop = window.scrollY;
        
        if(scrollTop + windowHeight >= documentHeight && modalStopper === true){
            openModel()
        }
    })

    modalCloseBtn.addEventListener('click', ()=>{
        modalStopper = false
    })

    modal.addEventListener('click', ()=>{
        modalStopper = false
    })
}




console.log(popUp())