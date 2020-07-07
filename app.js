const form = document.getElementById("film-form");
const nameElement = document.querySelector("#name");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardbody = document.querySelector(".card-body");
const clear = document.getElementById("clear-films");


eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = Storagwe.getFilmToStorage();
        films.forEach(function(film){
            UI.addFilmToUI(film);
        })
    });
    cardbody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    
    const name = nameElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if ( name === "" || director === "" || url === ""){
        UI.displayMessage("Tüm alanları doldurunuz","danger");
    }
    else{

        const newFilm = new Film(name,director,url);

        UI.addFilmToUI(newFilm);
        Storagwe.addFilmToStorage(newFilm)
        UI.displayMessage("Film başarıyla eklendi","success");
  
    }
    UI.clearElemenT(nameElement,directorElement,urlElement);
    e.preventDefault();
}

function deleteFilm(e){
    if(e.target.id === "delete-film"){
        
        UI.deleteFromUI(e.target);
        console.log((e.target.parentElement.previousElementSibling.previousElementSibling.textContent));
        Storagwe.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessage("Film silindi","success");
    }
}

function clearAllFilms(){

    if(confirm("Emin misiniz ?")){
        UI.clearAllFilmsFromUI();
        Storagwe.clearAllFilmsFromStorage();
    }
}