const newNote = document.querySelector('.new-note');
const delAll = document.querySelector('.del-note');
const addNote = document.querySelector('.add-note');
const cancel = document.querySelector('.cancel');
const wrapperNote = document.querySelector('.wrapper-note');
const notesBoard = document.querySelector('.notes-board');
const textarea = document.querySelector('#text');
const select = document.querySelector('#category');

const error = document.querySelector('.error_');
const removeNote = document.getElementsByClassName('.remove');

let cardID = 0;


const pushNote = () => {

    let task = document.createElement('div');
    changeColor(task);
    if(textarea.value != '' && select.value != '0') {
        task.className = 'task-field';
        task.setAttribute('id', cardID);
        task.innerHTML = `<a class="remove" onclick='deleteNote(${cardID})'><i class="far fa-trash-alt"></i></a>
        <h3>${select.value}</h3>
        <p>${textarea.value}</p>`;
        notesBoard.appendChild(task);
        cardID++;
        wrapperNote.style.display = 'none';
    } else {
        showError();
    }
}
const showModal = () => {
    textarea.value = '';
    select.selectedIndex = 0;
    wrapperNote.style.display = 'block'
    clearError();
};

const showError = () => {
    if(textarea.value == '' || select.value == "0") {
        error.style.visibility = 'visible';
    }
}
const clearError = () => {
    error.style.visibility = 'hidden';
}

const deleteAll = () => {
    const notes = document.querySelectorAll('.task-field');
    notes.forEach(el => {
        el.remove();
    })
}
const changeColor = task => {
    switch (select.value) {
        case 'Zakupy':
            task.style.background = '#ffb0b0';
            break;
        case 'Praca':
            task.style.background = '#fffab5';
            break;
        case 'Inne':
            task.style.background = '#c6ffc6';
            break;
    
        default:
            break;
    }
}
const deleteNote = id => {
    const noteToDelete = document.getElementById(id);
    notesBoard.removeChild(noteToDelete);
}

delAll.addEventListener('click', deleteAll);
newNote.addEventListener('click', showModal);
cancel.addEventListener('click', () => { wrapperNote.style.display = 'none' });

addNote.addEventListener('click', pushNote);

/* 
1. pobrac tekst z inputa
2. wybrac odpowiedni kolor dla danej kategorii
3. wrzucic do diva notes-board
*/