
document.getElementById('btn-add-money').addEventListener('click',function(event){

    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money')
    const pinNumber = getInputFieldValueById('input-pin-number')

    if(isNaN(addMoney)){
        alert('input not number')
        return;
    }
    
    if(pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance')
        const newBalance = balance + addMoney

        document.getElementById('account-balance').innerText = newBalance

        // trangtion-history-add
        const p = document.createElement('p')
        p.innerText = `Added: ${addMoney} Tk. New Balance: ${newBalance}`;
        console.log(p)

        // add-trangection-to-container
        document.getElementById('trangection-container').appendChild(p);
    }
    else{
        alert('invalid number')
    }

});