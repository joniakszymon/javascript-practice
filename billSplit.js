const priceBill = document.querySelector('#price');
const numberPerson = document.querySelector('#people');
const tip = document.querySelector('#tip');
const btn = document.querySelector('.count');
const error = document.querySelector('.error');
const cost_info = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');

const validation = () => {

        if (priceBill.value === '' || priceBill.value == '0'){
            error.textContent = 'Uzupełnij kwotę rachunku!';
            cost_info.style.display = 'none';
        }
        else if(numberPerson.value === '' || numberPerson.value == '0') {
            error.textContent = 'Uzupełnij ilość osób!';
            cost_info.style.display = 'none';
        }
        else if(tip.value == 0) {
            error.textContent = 'Dodaj napiwek!';
            cost_info.style.display = 'none';
        }
        else {
            oblicz();
        }
}

const oblicz = () => {
    const x = parseFloat(priceBill.value);
    const y = parseInt(numberPerson.value);
    const z = parseFloat(tip.value);
    
    error.textContent = '';
    cost_info.style.display = 'block';
    const wynik = (x + (x * z)) / y;

    cost.textContent = Math.round(parseFloat(wynik) * 100) / 100 + ' PLN ';
}

btn.addEventListener('click', validation);