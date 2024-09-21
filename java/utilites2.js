
function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value
    const inputNamber = parseFloat(inputValue);
    return inputNamber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText
    const textNumber = parseFloat(textValue)
    return textNumber
}

function showSectionById(id){
    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-from').classList.add('hidden')
    document.getElementById('trengection-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}