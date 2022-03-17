
var input = document.querySelector("input");


input.focus();

function Chutar() {
    
    var chute = parseInt(document.getElementById("valor").value);
    var campoResultado = document.getElementById("resultado");
    var numeroSecreto = parseInt(Math.random() * 11);
    

    if (chute === numeroSecreto) {
        campoResultado.innerHTML = "Você Acertou!"; 
        input.value = "";
    }else if (chute > 10 || chute < 0) {
        campoResultado.innerHTML = 'Escolha um número entre 0 e 10';
        input.value = "";
    }else {
        campoResultado.innerHTML = `Você errou! numero sorteado era ${numeroSecreto}`; 
        input.value = "";  
    }
    
   
    input.focus();
  

}


