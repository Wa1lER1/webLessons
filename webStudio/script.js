const button = document.querySelector('.hero-button')

const modal = document.querySelector('.modal-overlay')
button.addEventListener('click', onClick)
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