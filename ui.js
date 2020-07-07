class UI{


    static addFilmToUI(newFilm){

        const filmList = document.querySelector("#films")

        filmList.innerHTML += `
        <tr>
        <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
        <td>${newFilm.name}</td>
        <td>${newFilm.director}</td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
      </tr>

        `
    }
    static clearElemenT(element1,element2,element3){
        element1.value = "";
        element2.value = "";
        element3.value = "";
    
    }

    static displayMessage(message,type){
        
        const formbody = document.querySelector(".form-row");

        const div = document.createElement("div");

        div.className = `alert alert-${type}`;
        div.textContent = message;
        formbody.appendChild(div);

        setTimeout(function(){
            div.remove();
        },2000)
        
    }

    static deleteFromUI(element){
        element.parentElement.parentElement.remove();
    }

    static clearAllFilmsFromUI(){
        
        const filmlist = document.getElementById("films");
        while(filmlist.firstElementChild !== null){
            filmlist.firstElementChild.remove();
        }
    }
    
}

