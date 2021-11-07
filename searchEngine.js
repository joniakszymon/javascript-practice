// Deklarujemy sobie dwie zmienne (Nasz INPUT, w którym bedziemy wpisywali i naszą liste drinków)

const searchBar = document.querySelector(".search");
const listItems = document.querySelectorAll("li");

//Funkcja strzałkowa z jednym argumentem, którym jest e

const searchEngine = e => {
    const text = e.target.value.toLowerCase();

    listItems.forEach(el => {
        if (el.textContent.toLowerCase().indexOf(text) !== -1) {

            el.style.display = 'block'
            
        } else {

            el.style.display = 'none'
            
        }
    })
}


//Event keyup - służy do nasłuchiwania kiedy coś wpiszemy na klawiaturze
//Działa to tak, że jeżeli wprowadzimy coś w inpucie (każda zmiana) to wywoła się funkcja searchEngine
// Czyli nie wywołujemy sami : searchEngine(); , tylko chcemy wywołać podczas eventu

searchBar.addEventListener('keyup', searchEngine);



                                /*-------------------------------------------------
                                                    Program 2
                                -------------------------------------------------*/



/* function validation() {
    const priceBill = document.querySelector('#price');
    const numberPerson = document.querySelector('#people');
    const tip = document.querySelector('#tip');
    const btn = document.querySelector('.count');
    const error = document.querySelector('.error');
    const cost_info = document.querySelector('.cost-info');
    const cost = document.querySelector('.cost');

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
            const x = parseInt(priceBill.value);
            const y = parseFloat(tip.value);
            const z = parseInt(numberPerson.value);
            
            error.textContent = '';
            cost_info.style.display = 'block';
            const wynik = (x + (x * y)) / z;

            cost.textContent = Math.round(parseFloat(wynik) * 100) / 100 + ' PLN ';
        }
        btn.addEventListener('onclick', validation);
}
 */