document.getElementById('btn-add-money').addEventListener('click',function(event){

    event.preventDefault();

    const addNumberAmount = document.getElementById('add-money-amount').value
    const pinNumber = document.getElementById('pin-number').value

    if(pinNumber === '1234'){

        const balance = document.getElementById('currentBalance').innerText
        const balanceNumber = parseFloat(balance);
        const addNumber = parseFloat(addNumberAmount);
        const updateNumber = balanceNumber + addNumber;

        document.getElementById('currentBalance').innerText = updateNumber
    }
    else{
        alert('password invalid')
    }
});