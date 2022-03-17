function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value;
    if(filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito);
    }else {
        console.error('Endereco do filme inválido');
    }

    document.getElementById("filme").value = "";
}

function listarFilmesNaTela (filme) {
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elementoListafilmes = document.getElementById("listaFilmes");
    elementoListafilmes.innerHTML = elementoListafilmes.innerHTML + elementoFilmeFavorito;
}


