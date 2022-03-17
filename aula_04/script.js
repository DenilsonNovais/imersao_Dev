var listaFilmes = ["imagens/Batman.jpg", "imagens/mente_brilhante.jpg", "imagens/senhor_dos_aneis.jpg", "imagens/O_auto_da_compadecida.jpg", "imagens/o_lobo_de_wall_street.jpg", "imagens/poderoso_chefao.jpg"];

var listaSeries = ["imagens/Game_of_Thrones_capa.jpg", "imagens/Vikings.jpg", "imagens/breakingBad.jpg", "imagens/prisonBreak.jpg", "imagens/theBoys.jpg", "imagens/thePunisher.jpg"];

var listaAnimes = ["imagens/Avatar.jpg", "imagens/dragon_ballZ.jpg", "imagens/invencivel.jpg", "imagens/liga_da_justica.jpg", "imagens/xMen.jpg", "imagens/super_shock.jpg"];

// Adiciona outro item a lista
listaFilmes.push();

document.write("<h2>Filmes</h2> <br>");

for (i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">"); 
}

document.write("<h2>Series</h2><br>");

for (i = 0; i < listaSeries.length; i++) {

    document.write("<img src=" + listaSeries[i] + ">");  
}

document.write("<h2>Animes</h2><br>");

for (i = 0; i < listaAnimes.length; i++) {

    document.write("<img src=" + listaAnimes[i] + ">");  
}

// https://youtu.be/8sB1HTghkg4