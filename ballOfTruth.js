/* 

1. Pobrać inputa, IMG, answer, error
2. Funkcje: {
    1. walidacja czy jest zadane pytanie i czy konczy sie znakiem "?" na click
    2. Dodanie animacji na click
}

*/

const ball = document.querySelector('img');
const question = document.querySelector('input')
const answerSlot = document.querySelector('.answer');
const errorSlot = document.querySelector('.error');

ball.addEventListener('click', () => {
    ballAnimation();
    setTimeout(checkError, 1000) ;
})

const ballAnimation = () => {
    ball.classList.remove('shake-animation'); // reset animation
    void ball.offsetWidth; // trigger reflow
    ball.classList.add('shake-animation'); // start animation
}

const checkError = () => {
    if(question.value == "") {
        answerSlot.textContent = "";
        errorSlot.textContent = "Musisz zadać pytanie!";
    }else if(question.value.slice(-1) != "?") {
        answerSlot.textContent = "";
        errorSlot.textContent = "Pytanie musi kończyć się znakiem '?'";
    }
    else {
        errorSlot.textContent = "";
        showAnswer();
    }
}

const showAnswer = () => {
    //Przykładowe odpowiedzi
    const answer = ["Tak", "Nie", "Nikt tego nie wie", "Nie chcesz znać odpowiedzi...", "Znasz odpowiedź na to pytanie!", "Dokładnie tak!", "Być może...", "Zdecydowanie nie!", "Oczywiście, że tak!"];
    const random = answer[Math.floor(Math.random()*answer.length)];
    answerSlot.innerHTML = `<span>Odpowiedź:</span> ${random}`;

}