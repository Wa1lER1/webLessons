const button = document.querySelector('.hero-button')
const closeBtn = document.querySelector('.close-block')
const modal = document.querySelector('.modal-overlay')

closeBtn.addEventListener('click',onClickBtn)
button.addEventListener('click', onClick)

function onClickBtn(e) {
    modal.classList.toggle('hide-modal')
}


function onClick(e) {
    console.log('click');
    modal.classList.toggle('hide-modal')
}

modal.addEventListener('click', (e)=>{
    console.log(e.target.nodeName);
    if(e.target.classList.contains('modal-overlay')){
        modal.classList.toggle('hide-modal')
    }
   
})