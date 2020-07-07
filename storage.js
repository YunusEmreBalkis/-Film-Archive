class Storagwe {
    static addFilmToStorage(newFilm){

        let films = this.getFilmToStorage(newFilm);
        films.push(newFilm);

        localStorage.setItem("films",JSON.stringify(films));

    }

    static getFilmToStorage(){
        let films;

        if(localStorage.getItem("films") === null ){
            films = [];
        }
        else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }


    static deleteFilmFromStorage(filmName){
        let films = this.getFilmToStorage();

        films.forEach(function(film,index){
            if(film.name === filmName){
                films.splice(index,1);
            }
        })

        localStorage.setItem("films",JSON.stringify(films));
    }

    static clearAllFilmsFromStorage(){

        localStorage.removeItem("films");
    }
}