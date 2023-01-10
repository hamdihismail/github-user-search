const errorMsg = document.querySelector('.error');


export function addError (){
    errorMsg.classList.remove('hide');
    errorMsg.classList.add('show');
}
export function removeError (){
    errorMsg.classList.remove('show');
    errorMsg.classList.add('hide');
}

