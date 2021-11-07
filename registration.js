const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const sendBtn = document.querySelector('.send');
const clearBtn = document.querySelector('.clear');
const closeBtn = document.querySelector('.close');
const popup = document.querySelector('.popup');

/* Walidacja formularza */

const showError = (input, msg) => {
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error1');

    errorMsg.textContent = msg;

}

const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error1');
}

const checkForm = input => {

    input.forEach(el => {
        if(el.value === '') {
            showError(el, el.placeholder);
        } else {
            clearError(el);
        }
    })
}
const checkPassword = (password, password2) => {
    if(password.value != password2.value && password2.value != '') {
        showError(pass, `Hasła muszą być takie same`);
    }
}

const checkMail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(email.value)) {
        clearError(email);
    }else {
        showError(email, 'E-mail jest niepoprawny');
    }
}

const checkLength = (input, min) => {
    const error = input.previousElementSibling.innerText.slice(0, -1);
    if(input.value.length < min && input.value != "") {
        showError(input, `${error} musi składać się z przynajmniej ${min} znaków`);
    }
}
//argument INPUT w funkcji checForm przechowuje tablice z naszymi inputami
//argument EL odnosi sie do kazdej zmiennej, którą umieścimy w tablicy

sendBtn.addEventListener('click', e => {
    e.preventDefault();

    checkForm([username, pass, pass2, email]);
    checkLength(pass, 8);
    checkLength(username, 3);
    checkPassword(pass, pass2);
    checkMail(email);
    checkErrors();
})



/* -------- Czyszczenie formularza ------------- */

clearBtn.addEventListener('click', e => {
    e.preventDefault();

    const formInput = [username, pass, pass2, email];

    formInput.forEach(el => {
        el.value = "";
        clearError(el);
    })
    
})

/* ------------- Wysyłanie formularza ----------------- */
// przeliczyc ile jest bledow w inputach (mozna sprawdzic po klasach error1)
const checkErrors = () => {
    const allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0;

    allInputs.forEach(el => {
        if(el.classList.contains('error1')) {
            errorCount++;
        }
    })
    if(errorCount === 0) {
       popup.classList.add('show-popup');
    }
}
