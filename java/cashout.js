document.getElementById('btn-cash-out').addEventListener('click',function(event){

    event.preventDefault();

    const castout =  getInputFieldValueById('input-cash-out')
    const pinNumber = getInputFieldValueById('input-cash-out-pin-number')

    if(isNaN(castout)){
        alert('input pin not number')
        return;
    }

    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - castout

        if(castout > balance){
            alert('you do not have anough money to cashout')
            return;
        }

        document.getElementById('account-balance').innerText = newBalance

        const div = document.createElement('div')
        div.classList.add('bg-green-300')
        div.innerHTML = `
            <h4 class="text-2xl font-bold">cash out</h4>
            <p>${castout} withdraw. New Balance ${newBalance}</P>
        `
        document.getElementById('trangection-container').appendChild(div);
    }
    else{
        alert('invalid input')
    }
})