const submitBtn = document.querySelector('.form-submit');
const form = document.querySelector('.backdrop');
const form1 = document.querySelector('form');
const formButton = form1.querySelector('button');



const formCall = () =>{
    form.classList.add('visible')
}

const formCancel = () =>{
    form.classList.remove('visible')

}
submitBtn.addEventListener('click',() =>{
formCall();
})
formButton.addEventListener('click', (e) =>{
    e.preventDefault();
    // console.log('yes please')
    formCancel();
})