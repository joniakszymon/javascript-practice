

const searchBar = document.querySelector(".search");
const listItems = document.querySelectorAll("li");


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


searchBar.addEventListener('keyup', searchEngine);

